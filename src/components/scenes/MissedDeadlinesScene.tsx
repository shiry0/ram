import { getScene } from "../../data/story";
import { AssetPlaceholder } from "../shared/AssetPlaceholder";
import { SceneFrame } from "../shared/SceneFrame";
import { RamFigure } from "../visuals/RamFigure";

const results = ["HACKATHON", "DEBATE", "STUDENT CHALLENGE"] as const;

export function MissedDeadlinesScene({ reducedMotion }: { reducedMotion: boolean }) {
  const scene = getScene("missed-deadlines");

  return (
    <SceneFrame
      scene={scene}
      reducedMotion={reducedMotion}
      textAlign="right"
      visual={
        <AssetPlaceholder path={scene.assets[0].path} role={scene.visualDescription} className="deadline-search">
          <div className="search-browser-plane" />
          <div className="search-field"><i /><span>competitions</span><b /></div>
          <div className="search-results">
            {results.map((label, index) => (
              <div className="opportunity-result" style={{ "--result": index } as React.CSSProperties} key={label}>
                <span>{label}</span>
                <i /><i /><i />
                <strong>REGISTRATION CLOSED</strong>
              </div>
            ))}
          </div>
          <div className="deadline-calendar"><span>REGISTRATION</span><i /><i /><i /><i /><i /><i /><b /></div>
          <div className="deadline-clock"><i /><i /><span /></div>
          <div className="deadline-sweep"><i /></div>
          <div className="cursor-lag"><i /><i /><i /></div>
          <div className="search-cursor" />
          <div className="search-desk"><i /><span /></div>
          <RamFigure className="searching-ram" pose="searching" />
        </AssetPlaceholder>
      }
    />
  );
}
