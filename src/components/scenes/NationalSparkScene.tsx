import { getScene } from "../../data/story";
import { AssetPlaceholder } from "../shared/AssetPlaceholder";
import { SceneFrame } from "../shared/SceneFrame";
import { RamFigure } from "../visuals/RamFigure";

export function NationalSparkScene({ reducedMotion }: { reducedMotion: boolean }) {
  const scene = getScene("national-spark");

  return (
    <SceneFrame
      scene={scene}
      reducedMotion={reducedMotion}
      visual={
        <AssetPlaceholder path={scene.assets[0].path} role={scene.visualDescription} className="national-spark">
          <div className="college-boundary"><span>COLLEGE</span><i /></div>
          <div className="national-network">
            {Array.from({ length: 12 }, (_, index) => (
              <i style={{ "--participant": index } as React.CSSProperties} key={index} />
            ))}
          </div>
          <div className="national-stage">
            <span>NATIONAL HACKATHON</span>
            <i className="stage-screen" />
            <i className="stage-light stage-light--one" />
            <i className="stage-light stage-light--two" />
            <div className="stage-audience">{Array.from({ length: 7 }, (_, index) => <i key={index} />)}</div>
          </div>
          <div className="friend-signal"><i /><i /></div>
          <RamFigure className="friend-at-stage" pose="victory" />
          <div className="ambition-route"><i /></div>
          <div className="decision-flare"><i /></div>
          <RamFigure className="national-ram" pose="watching" />
        </AssetPlaceholder>
      }
    />
  );
}
