import { getScene } from "../../data/story";
import { AssetPlaceholder } from "../shared/AssetPlaceholder";
import { SceneFrame } from "../shared/SceneFrame";
import { KathmanduBackdrop } from "../visuals/KathmanduBackdrop";
import { RamFigure } from "../visuals/RamFigure";

export function KathmanduIntroductionScene({ reducedMotion }: { reducedMotion: boolean }) {
  const scene = getScene("heart-of-kathmandu");

  return (
    <SceneFrame
      scene={scene}
      reducedMotion={reducedMotion}
      textAlign="right"
      afterText={<div className="scroll-invitation" aria-hidden="true"><span>Scroll to follow Ram</span><i /></div>}
      visual={
        <AssetPlaceholder path={scene.assets[0].path} role={scene.visualDescription} className="kathmandu-intro">
          <div className="intro-haze"><i /><i /><i /></div>
          <div className="valley-sun" />
          <KathmanduBackdrop />
          <div className="home-focus"><i /><i /></div>
          <div className="street-route"><i /><i /></div>
          <RamFigure className="intro-ram" />
        </AssetPlaceholder>
      }
    />
  );
}
