import { getScene } from "../../data/story";
import { AssetPlaceholder } from "../shared/AssetPlaceholder";
import { SceneFrame } from "../shared/SceneFrame";
import { KathmanduBackdrop } from "../visuals/KathmanduBackdrop";
import { RamFigure } from "../visuals/RamFigure";

export function PoorRamFinale({ reducedMotion }: { reducedMotion: boolean }) {
  const scene = getScene("poor-ram");

  return (
    <SceneFrame
      scene={scene}
      reducedMotion={reducedMotion}
      textAlign="center"
      visual={
        <AssetPlaceholder path={scene.assets[0].path} role={scene.visualDescription} className="poor-ram-finale">
          <KathmanduBackdrop variant="night" />
          <div className="expired-stream">
            <i><span>CLOSED</span></i><i><span>CLOSED</span></i><i><span>CLOSED</span></i>
          </div>
          <div className="late-opportunity"><i /></div>
          <div className="final-deadline-line" />
          <div className="quiet-halo" />
          <div className="final-bench" />
          <RamFigure className="final-ram" pose="seated" />
        </AssetPlaceholder>
      }
    />
  );
}
