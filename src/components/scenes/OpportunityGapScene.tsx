import { getScene } from "../../data/story";
import { AssetPlaceholder } from "../shared/AssetPlaceholder";
import { SceneFrame } from "../shared/SceneFrame";
import { RamFigure } from "../visuals/RamFigure";

export function OpportunityGapScene({ reducedMotion }: { reducedMotion: boolean }) {
  const scene = getScene("access-gap");

  return (
    <SceneFrame
      scene={scene}
      reducedMotion={reducedMotion}
      visual={
        <AssetPlaceholder path={scene.assets[0].path} role={scene.visualDescription} className="opportunity-gap">
          <div className="capability-cluster">
            <svg className="quality-network" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path pathLength="1" d="M88 74 C75 49 67 28 60 15" />
              <path pathLength="1" d="M88 74 C64 63 39 53 17 48" />
              <path pathLength="1" d="M88 74 C69 77 52 84 40 88" />
            </svg>
            <div className="quality-node quality-node--talent"><i /><span>TALENT</span></div>
            <div className="quality-node quality-node--confidence"><i /><span>CONFIDENCE</span></div>
            <div className="quality-node quality-node--interest"><i /><span>INTEREST</span></div>
            <RamFigure className="access-ram" />
          </div>
          <div className="access-route access-route--before" />
          <div className="timing-gap"><i /><i /><span>DEADLINE</span></div>
          <div className="access-gate"><i /><span>REGISTRATION CLOSED</span></div>
          <div className="access-route access-route--after" />
          <div className="opportunity-node"><i /><span>RIGHT OPPORTUNITIES</span></div>
          <div className="late-pulse" />
        </AssetPlaceholder>
      }
    />
  );
}
