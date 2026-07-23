import { useEffect, useRef } from "react";
import { STORY_SCENES } from "../../data/story";
import { subscribeToStoryScroll } from "../../hooks/storyScrollCoordinator";

export function StoryProgress() {
  const rootRef = useRef<HTMLElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLOutputElement>(null);
  const currentRef = useRef<HTMLSpanElement>(null);
  const markerRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    const update = ({ progress, scrollable, viewportHeight }: { progress: number; scrollable: number; viewportHeight: number }) => {
      const percent = Math.round(progress * 100);
      fillRef.current?.style.setProperty("transform", `translateX(-50%) scaleY(${progress.toFixed(4)})`);
      rootRef.current?.style.setProperty("--story-progress", progress.toFixed(4));
      if (outputRef.current) outputRef.current.value = `${percent}%`;

      const viewportCenter = viewportHeight * 0.5;
      let activeIndex = 0;
      STORY_SCENES.forEach((scene, index) => {
        const bounds = document.getElementById(scene.id)?.getBoundingClientRect();
        if (bounds && bounds.top <= viewportCenter) activeIndex = index;
      });

      markerRefs.current.forEach((marker, index) => {
        if (!marker) return;
        const sceneElement = document.getElementById(STORY_SCENES[index].id);
        if (sceneElement) {
          marker.style.setProperty("--marker", Math.min(1, sceneElement.offsetTop / scrollable).toFixed(4));
        }
        const active = index === activeIndex;
        marker.toggleAttribute("data-active", active);
        if (active) marker.setAttribute("aria-current", "step");
        else marker.removeAttribute("aria-current");
      });

      const activeScene = STORY_SCENES[activeIndex];
      if (currentRef.current) {
        currentRef.current.textContent = `${String(activeScene.number).padStart(2, "0")} · ${activeScene.title}`;
      }
    };
    return subscribeToStoryScroll(update);
  }, []);

  return (
    <>
      <a className="skip-link" href={`#${STORY_SCENES[0].id}`}>Skip to story</a>
      <nav className="story-progress" ref={rootRef} aria-label="Story progress">
        <span className="story-progress__current" ref={currentRef} aria-hidden="true">
          01 · {STORY_SCENES[0].title}
        </span>
        <div className="story-progress__track">
          <div className="story-progress__fill" ref={fillRef} aria-hidden="true" />
          {STORY_SCENES.map((scene) => (
            <a
              href={`#${scene.id}`}
              className="story-progress__marker"
              style={{ "--marker": (scene.number - 1) / Math.max(1, STORY_SCENES.length - 1) } as React.CSSProperties}
              key={scene.id}
              aria-label={`Scene ${scene.number}: ${scene.title}`}
              ref={(marker) => { markerRefs.current[scene.number - 1] = marker; }}
            >
              <span aria-hidden="true">{scene.title}</span>
            </a>
          ))}
        </div>
        <output ref={outputRef} aria-live="off">0%</output>
      </nav>
    </>
  );
}
