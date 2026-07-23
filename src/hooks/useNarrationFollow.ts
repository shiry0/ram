import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import type { NarrationTrack } from "../types/story";
import {
  interpolateTimeline,
  resolveNarrationTimeline,
  timeAtScrollPosition,
  type ResolvedNarrationAnchor,
} from "../utils/audioScrollTimeline";

type NarrationFollowOptions = {
  audioRef: RefObject<HTMLAudioElement | null>;
  reducedMotion: boolean;
  track: NarrationTrack;
};

type CatchUpState = {
  startedAt: number;
  startY: number;
};

const SCROLL_KEYS = new Set([
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "End",
  "Home",
  "PageDown",
  "PageUp",
  " ",
]);

const smoothstep = (value: number) => value * value * (3 - 2 * value);

export function useNarrationFollow({ audioRef, reducedMotion, track }: NarrationFollowOptions) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(track.durationSeconds);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFollowing, setIsFollowing] = useState(!reducedMotion);
  const [status, setStatus] = useState(
    reducedMotion ? "Automatic follow is off because reduced motion is enabled." : "Ready to play and follow Ram.",
  );
  const [error, setError] = useState("");

  const followRef = useRef(!reducedMotion);
  const frameRef = useRef(0);
  const timelineRef = useRef<ResolvedNarrationAnchor[]>([]);
  const lastUiUpdateRef = useRef(-1);
  const catchUpRef = useRef<CatchUpState | null>(null);

  const refreshTimeline = useCallback(() => {
    timelineRef.current = resolveNarrationTimeline(track.anchors);
    return timelineRef.current;
  }, [track.anchors]);

  const setFollow = useCallback((following: boolean) => {
    followRef.current = following;
    setIsFollowing(following);
    if (!following) catchUpRef.current = null;
    if (!following) document.documentElement.classList.remove("audio-following");
  }, []);

  const scrollToTime = useCallback((timeSeconds: number) => {
    if (reducedMotion || !followRef.current) return;
    const timeline = timelineRef.current.length ? timelineRef.current : refreshTimeline();
    window.scrollTo({ top: interpolateTimeline(timeline, timeSeconds), behavior: "auto" });
  }, [reducedMotion, refreshTimeline]);

  const pauseAutomaticFollow = useCallback((message: string) => {
    if (!followRef.current || reducedMotion) return;
    setFollow(false);
    setStatus(message);
  }, [reducedMotion, setFollow]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    refreshTimeline();
    const story = document.querySelector<HTMLElement>(".story");
    const resizeObserver = story ? new ResizeObserver(refreshTimeline) : null;
    if (story) resizeObserver?.observe(story);

    const stopFrame = () => {
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    };

    const tick = (now: number) => {
      if (audio.paused || audio.ended) {
        stopFrame();
        return;
      }

      const time = audio.currentTime;
      if (lastUiUpdateRef.current < 0 || Math.abs(time - lastUiUpdateRef.current) >= 0.1) {
        lastUiUpdateRef.current = time;
        setCurrentTime(time);
      }

      if (followRef.current && !reducedMotion) {
        const timeline = timelineRef.current.length ? timelineRef.current : refreshTimeline();
        const liveTarget = interpolateTimeline(timeline, time);
        const catchUp = catchUpRef.current;

        if (catchUp) {
          const progress = Math.min(1, (now - catchUp.startedAt) / 620);
          const eased = smoothstep(progress);
          window.scrollTo({ top: catchUp.startY + (liveTarget - catchUp.startY) * eased, behavior: "auto" });
          if (progress >= 1) catchUpRef.current = null;
        } else {
          window.scrollTo({ top: liveTarget, behavior: "auto" });
        }
      }

      frameRef.current = window.requestAnimationFrame(tick);
    };

    const startFrame = () => {
      stopFrame();
      frameRef.current = window.requestAnimationFrame(tick);
    };

    const updateDuration = () => {
      if (Number.isFinite(audio.duration) && audio.duration > 0) setDuration(audio.duration);
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setError("");
      if (catchUpRef.current) catchUpRef.current.startedAt = performance.now();
      setStatus(followRef.current && !reducedMotion ? "Playing. The story is following the narration." : "Playing. Scroll manually or resume follow.");
      document.documentElement.classList.toggle("audio-following", followRef.current && !reducedMotion);
      startFrame();
    };

    const handlePause = () => {
      setIsPlaying(false);
      setCurrentTime(audio.currentTime);
      stopFrame();
      document.documentElement.classList.remove("audio-following");
      if (!audio.ended) setStatus("Narration paused.");
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(audio.duration || track.durationSeconds);
      stopFrame();
      if (followRef.current && !reducedMotion) scrollToTime(track.durationSeconds);
      document.documentElement.classList.remove("audio-following");
      setStatus("Story complete.");
    };

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleSeeked = () => scrollToTime(audio.currentTime);
    const handleError = () => {
      setError("The narration could not be loaded.");
      setStatus("Audio unavailable. Manual scrolling still works.");
    };

    const handleWheel = (event: WheelEvent) => {
      if (!(event.target as Element | null)?.closest(".narration-player")) {
        pauseAutomaticFollow("Automatic follow paused after manual scrolling.");
      }
    };

    const handleTouch = (event: TouchEvent) => {
      if (!(event.target as Element | null)?.closest(".narration-player")) {
        pauseAutomaticFollow("Automatic follow paused after touch scrolling.");
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || !SCROLL_KEYS.has(event.key)) return;
      const target = event.target as Element | null;
      if (target?.closest(".narration-player, input, button, select, textarea")) return;
      pauseAutomaticFollow("Automatic follow paused after keyboard scrolling.");
    };

    const handlePointer = (event: PointerEvent) => {
      const target = event.target as Element | null;
      if (target?.closest(".narration-player")) return;
      if (event.clientX >= document.documentElement.clientWidth - 24) {
        pauseAutomaticFollow("Automatic follow paused while using the scrollbar.");
      }
    };

    const handleClick = (event: MouseEvent) => {
      if ((event.target as Element | null)?.closest(".story-progress__marker")) {
        pauseAutomaticFollow("Automatic follow paused after choosing a scene.");
      }
    };

    const handleVisibility = () => {
      if (document.hidden && !audio.paused) {
        audio.pause();
        setStatus("Narration paused while this tab is hidden.");
      }
    };

    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("seeked", handleSeeked);
    audio.addEventListener("error", handleError);
    window.addEventListener("resize", refreshTimeline, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("keydown", handleKey);
    window.addEventListener("pointerdown", handlePointer, { passive: true });
    document.addEventListener("click", handleClick);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stopFrame();
      resizeObserver?.disconnect();
      document.documentElement.classList.remove("audio-following");
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("seeked", handleSeeked);
      audio.removeEventListener("error", handleError);
      window.removeEventListener("resize", refreshTimeline);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [audioRef, pauseAutomaticFollow, reducedMotion, refreshTimeline, scrollToTime, track.durationSeconds]);

  const togglePlayback = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    if (audio.ended || audio.currentTime >= duration - 0.08) {
      audio.currentTime = 0;
      setCurrentTime(0);
      if (!reducedMotion) setFollow(true);
      refreshTimeline();
      if (!reducedMotion) window.scrollTo({ top: interpolateTimeline(timelineRef.current, 0), behavior: "auto" });
    }

    try {
      await audio.play();
    } catch {
      setError("Playback was blocked. Press Play again.");
      setStatus("Playback did not start.");
    }
  }, [audioRef, duration, reducedMotion, refreshTimeline, setFollow]);

  const toggleFollow = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || reducedMotion) {
      setStatus("Automatic follow is unavailable while reduced motion is enabled.");
      return;
    }

    if (followRef.current) {
      setFollow(false);
      setStatus("Automatic follow paused. The narration can continue while you scroll.");
      return;
    }

    const timeline = refreshTimeline();
    const liveTarget = interpolateTimeline(timeline, audio.currentTime);
    if (window.scrollY > liveTarget + 12) {
      const forwardTime = timeAtScrollPosition(timeline, window.scrollY);
      audio.currentTime = Math.max(audio.currentTime, forwardTime);
      setCurrentTime(audio.currentTime);
    } else if (window.scrollY < liveTarget - 12) {
      if (audio.paused) {
        window.scrollTo({ top: liveTarget, behavior: "smooth" });
      } else {
        catchUpRef.current = { startedAt: performance.now(), startY: window.scrollY };
      }
    }

    setFollow(true);
    setStatus("Automatic follow resumed.");
    if (!audio.paused) document.documentElement.classList.add("audio-following");
  }, [audioRef, reducedMotion, refreshTimeline, setFollow]);

  const seek = useCallback((timeSeconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const nextTime = Math.min(duration, Math.max(0, timeSeconds));
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
    scrollToTime(nextTime);
  }, [audioRef, duration, scrollToTime]);

  return {
    currentTime,
    duration,
    error,
    isFollowing: isFollowing && !reducedMotion,
    isPlaying,
    seek,
    status: reducedMotion ? "Automatic follow is off because reduced motion is enabled." : status,
    toggleFollow,
    togglePlayback,
  };
}
