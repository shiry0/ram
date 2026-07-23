import { useRef, type ReactNode } from "react";
import { useSceneProgress } from "../../hooks/useSceneProgress";
import type { StoryScene } from "../../types/story";
import { SceneText } from "./SceneText";

type SceneFrameProps = {
  scene: StoryScene;
  reducedMotion: boolean;
  visual: ReactNode;
  textAlign?: "left" | "right" | "center";
  className?: string;
  afterText?: ReactNode;
};

export function SceneFrame({
  scene,
  reducedMotion,
  visual,
  textAlign = "left",
  className = "",
  afterText,
}: SceneFrameProps) {
  const sectionRef = useRef<HTMLElement>(null);
  useSceneProgress(sectionRef, reducedMotion);

  return (
    <section
      ref={sectionRef}
      id={scene.id}
      className={`story-scene story-scene--${scene.id} ${className}`}
      style={{ "--scene-vh": scene.heightVh, "--scene-index": scene.number } as React.CSSProperties}
      aria-labelledby={`${scene.id}-title`}
      tabIndex={-1}
    >
      <div className="scene-sticky">
        <div className="scene-atmosphere" aria-hidden="true"><i /><i /><i /></div>
        <header className="scene-heading">
          <span aria-hidden="true">{String(scene.number).padStart(2, "0")}</span>
          <h2 id={`${scene.id}-title`}>{scene.title}</h2>
          <time aria-label={`Narration timing ${scene.timecode}`}>{scene.timecode}</time>
        </header>
        <SceneText fragments={scene.fragments} align={textAlign} />
        <div className="scene-visual">{visual}</div>
        {afterText}
        <div className="scene-transition" aria-hidden="true"><i /><span /></div>
      </div>
    </section>
  );
}
