import { CampusChampionScene } from "./components/scenes/CampusChampionScene";
import { KathmanduIntroductionScene } from "./components/scenes/KathmanduIntroductionScene";
import { MissedDeadlinesScene } from "./components/scenes/MissedDeadlinesScene";
import { NationalSparkScene } from "./components/scenes/NationalSparkScene";
import { OpportunityGapScene } from "./components/scenes/OpportunityGapScene";
import { PoorRamFinale } from "./components/scenes/PoorRamFinale";
import { NarrationPlayer } from "./components/shared/NarrationPlayer";
import { StoryProgress } from "./components/shared/StoryProgress";
import { STORY_TITLE } from "./data/story";
import { useReducedMotion } from "./hooks/useReducedMotion";

export function RamStoryPage() {
  const reducedMotion = useReducedMotion();

  return (
    <main id="story-start" className={reducedMotion ? "story story--with-audio story--reduced" : "story story--with-audio"}>
      <h1 className="story-title">
        <span>Kathmandu</span>
        Ram
        <small>A scroll story</small>
      </h1>
      <StoryProgress />
      <NarrationPlayer reducedMotion={reducedMotion} />
      <KathmanduIntroductionScene reducedMotion={reducedMotion} />
      <CampusChampionScene reducedMotion={reducedMotion} />
      <NationalSparkScene reducedMotion={reducedMotion} />
      <MissedDeadlinesScene reducedMotion={reducedMotion} />
      <OpportunityGapScene reducedMotion={reducedMotion} />
      <PoorRamFinale reducedMotion={reducedMotion} />
      <span className="sr-only">End of {STORY_TITLE}.</span>
    </main>
  );
}

export default function App() {
  return <RamStoryPage />;
}
