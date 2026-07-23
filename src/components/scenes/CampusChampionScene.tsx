import { getScene } from "../../data/story";
import { AssetPlaceholder } from "../shared/AssetPlaceholder";
import { SceneFrame } from "../shared/SceneFrame";
import { RamFigure } from "../visuals/RamFigure";

export function CampusChampionScene({ reducedMotion }: { reducedMotion: boolean }) {
  const scene = getScene("college-champion");

  return (
    <SceneFrame
      scene={scene}
      reducedMotion={reducedMotion}
      visual={
        <AssetPlaceholder path={scene.assets[0].path} role={scene.visualDescription} className="campus-champion">
          <div className="courtyard-depth"><i /><i /><i /></div>
          <div className="campus-building"><i /><i /><i /><span>COLLEGE</span></div>
          <div className="competition-line" />
          <div className="event-spotlight"><i /><i /><i /></div>
          <div className="competition competition--hackathon">
            <span>HACKATHON</span><i className="code-screen" /><i className="code-keyboard" />
          </div>
          <div className="competition competition--debate">
            <span>DEBATE</span><i /><i />
          </div>
          <div className="competition competition--challenge">
            <span>STUDENT CHALLENGE</span><i /><i />
          </div>
          <div className="win-markers"><i /><i /><i /></div>
          <div className="campus-crowd">{Array.from({ length: 8 }, (_, index) => <i key={index} />)}</div>
          <RamFigure className="champion-ram" pose="victory" />
        </AssetPlaceholder>
      }
    />
  );
}
