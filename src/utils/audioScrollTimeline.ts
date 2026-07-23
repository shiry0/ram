import type { NarrationScrollAnchor } from "../types/story";

export type ResolvedNarrationAnchor = {
  timeSeconds: number;
  scrollY: number;
};

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(maximum, Math.max(minimum, value));

export function resolveNarrationTimeline(
  anchors: readonly NarrationScrollAnchor[],
): ResolvedNarrationAnchor[] {
  const maximumScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

  return anchors.flatMap((anchor) => {
    const section = document.getElementById(anchor.sceneId);
    if (!section) return [];

    const sticky = section.querySelector<HTMLElement>(".scene-sticky");
    const stickyHeight = sticky?.clientHeight ?? window.innerHeight;
    const travel = Math.max(1, section.offsetHeight - stickyHeight);

    return [{
      timeSeconds: anchor.timeSeconds,
      scrollY: clamp(section.offsetTop + clamp(anchor.progress, 0, 1) * travel, 0, maximumScroll),
    }];
  });
}

export function interpolateTimeline(
  timeline: readonly ResolvedNarrationAnchor[],
  timeSeconds: number,
): number {
  if (!timeline.length) return window.scrollY;
  if (timeSeconds <= timeline[0].timeSeconds) return timeline[0].scrollY;

  const finalAnchor = timeline[timeline.length - 1];
  if (timeSeconds >= finalAnchor.timeSeconds) return finalAnchor.scrollY;

  const nextIndex = timeline.findIndex((anchor) => anchor.timeSeconds >= timeSeconds);
  const next = timeline[Math.max(1, nextIndex)];
  const previous = timeline[Math.max(0, nextIndex - 1)];
  const span = Math.max(0.001, next.timeSeconds - previous.timeSeconds);
  const progress = clamp((timeSeconds - previous.timeSeconds) / span, 0, 1);

  return previous.scrollY + (next.scrollY - previous.scrollY) * progress;
}

export function timeAtScrollPosition(
  timeline: readonly ResolvedNarrationAnchor[],
  scrollY: number,
): number {
  if (!timeline.length) return 0;
  if (scrollY <= timeline[0].scrollY) return timeline[0].timeSeconds;

  const finalAnchor = timeline[timeline.length - 1];
  if (scrollY >= finalAnchor.scrollY) return finalAnchor.timeSeconds;

  const nextIndex = timeline.findIndex((anchor) => anchor.scrollY >= scrollY);
  const next = timeline[Math.max(1, nextIndex)];
  const previous = timeline[Math.max(0, nextIndex - 1)];
  const span = Math.max(1, next.scrollY - previous.scrollY);
  const progress = clamp((scrollY - previous.scrollY) / span, 0, 1);

  return previous.timeSeconds + (next.timeSeconds - previous.timeSeconds) * progress;
}
