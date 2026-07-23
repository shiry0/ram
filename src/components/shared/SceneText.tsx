import type { StoryFragment } from "../../types/story";

type SceneTextProps = {
  fragments: readonly StoryFragment[];
  align?: "left" | "right" | "center";
};

export function SceneText({ fragments, align = "left" }: SceneTextProps) {
  return (
    <div className={`scene-text scene-text--${align}`}>
      {fragments.map((fragment, index) => {
        const nextFragment = fragments[index + 1];
        const dimAt = nextFragment ? Math.min(1.08, nextFragment.revealAt + 0.1) : 1.2;
        return (
          <p
            className={fragment.emphasis ? `scene-copy scene-copy--${fragment.emphasis}` : "scene-copy"}
            style={{ "--reveal-at": fragment.revealAt, "--dim-at": dimAt } as React.CSSProperties}
            key={fragment.text}
          >
            {fragment.text}
          </p>
        );
      })}
    </div>
  );
}
