import { useEffect, type RefObject } from "react";
import { registerStoryScene } from "./storyScrollCoordinator";

export function useSceneProgress(
  sceneRef: RefObject<HTMLElement | null>,
  reducedMotion: boolean,
): void {
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (reducedMotion) {
      scene.style.setProperty("--scene-progress", "1");
      scene.style.setProperty("--scene-eased", "1");
      scene.setAttribute("data-visible", "");
      return;
    }

    return registerStoryScene(scene);
  }, [reducedMotion, sceneRef]);
}
