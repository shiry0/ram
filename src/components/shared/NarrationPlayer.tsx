import { useRef } from "react";
import { NARRATION_TRACK } from "../../data/story";
import { useNarrationFollow } from "../../hooks/useNarrationFollow";

function formatTime(timeSeconds: number) {
  const safeTime = Number.isFinite(timeSeconds) ? Math.max(0, timeSeconds) : 0;
  const minutes = Math.floor(safeTime / 60);
  const seconds = Math.floor(safeTime % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function NarrationPlayer({ reducedMotion }: { reducedMotion: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const {
    currentTime,
    duration,
    error,
    isFollowing,
    isPlaying,
    seek,
    status,
    toggleFollow,
    togglePlayback,
  } = useNarrationFollow({ audioRef, reducedMotion, track: NARRATION_TRACK });

  return (
    <aside className="narration-player" aria-label="Voice-over and automatic story scroll">
      <audio ref={audioRef} src={NARRATION_TRACK.src} preload="metadata" />
      <button
        className="narration-player__play"
        type="button"
        onClick={() => { void togglePlayback(); }}
        aria-label={isPlaying ? "Pause story narration" : "Play story narration"}
      >
        <span className="narration-player__play-icon" data-playing={isPlaying ? "" : undefined} aria-hidden="true" />
        <span className="narration-player__button-label">{isPlaying ? "Pause" : "Play story"}</span>
      </button>

      <div className="narration-player__timeline">
        <input
          type="range"
          min="0"
          max={duration || NARRATION_TRACK.durationSeconds}
          step="0.01"
          value={Math.min(currentTime, duration || NARRATION_TRACK.durationSeconds)}
          onInput={(event) => seek(Number(event.currentTarget.value))}
          aria-label="Seek voice-over"
        />
        <output aria-label={`${formatTime(currentTime)} elapsed of ${formatTime(duration)}`}>
          {formatTime(currentTime)} <span>/</span> {formatTime(duration)}
        </output>
      </div>

      <button
        className="narration-player__follow"
        type="button"
        onClick={toggleFollow}
        aria-pressed={isFollowing}
        disabled={reducedMotion}
        aria-label={isFollowing ? "Pause automatic story follow" : "Resume automatic story follow"}
      >
        <i aria-hidden="true" />
        <span>{isFollowing ? "Following" : "Follow"}</span>
      </button>

      <span className="sr-only" role="status" aria-live="polite">{error || status}</span>
    </aside>
  );
}
