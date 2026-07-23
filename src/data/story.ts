import type { NarrationTrack, StoryAsset, StoryScene, StorySceneId } from "../types/story";

export const STORY_TITLE = "Ram";
export const STORY_DURATION_SECONDS = 44.437;
const ASSET_BASE_URL = import.meta.env.BASE_URL;

function withBase(path: string) {
  return `${ASSET_BASE_URL}${path.replace(/^\/+/, "")}`;
}

export const STORY_SCENES = [
  {
    id: "heart-of-kathmandu",
    number: 1,
    title: "Heart of Kathmandu",
    timecode: "0:00-0:05",
    heightVh: 136,
    fragments: [
      { text: "In the heart of Kathmandu lived Ram.", revealAt: 0.12 },
    ],
    assets: [
      { path: withBase("assets/scene-01-kathmandu-dawn.webp"), role: "contemporary Kathmandu valley at dawn", kind: "image" },
    ],
    visualDescription: "Layered Kathmandu rooftops, valley hills, and warm windows converge on Ram in the center of the city.",
  },
  {
    id: "college-champion",
    number: 2,
    title: "Inside the College",
    timecode: "0:05-0:15",
    heightVh: 170,
    fragments: [
      { text: "Ram was highly competitive and often won events organised inside his college,", revealAt: 0.08 },
      { text: "whether it was a hackathon,", revealAt: 0.28 },
      { text: "debate competition,", revealAt: 0.48 },
      { text: "or another student challenge.", revealAt: 0.68 },
    ],
    assets: [
      { path: withBase("assets/scene-02-college-victories.webp"), role: "Ram succeeding across several college competitions", kind: "image" },
    ],
    visualDescription: "A college courtyard transforms through a hackathon desk, debate microphones, and a student challenge finish line as Ram wins each event.",
  },
  {
    id: "national-spark",
    number: 3,
    title: "A Wider Arena",
    timecode: "0:15-0:25",
    heightVh: 170,
    fragments: [
      { text: "One day, he saw his friend participate in a national hackathon", revealAt: 0.12 },
      { text: "and decided that he, too, wanted to compete beyond the college level.", revealAt: 0.52 },
    ],
    assets: [
      { path: withBase("assets/scene-03-national-hackathon.webp"), role: "a national hackathon stage beyond the college boundary", kind: "image" },
    ],
    visualDescription: "Ram watches his friend on a larger national hackathon stage while a new route opens beyond the college boundary.",
  },
  {
    id: "missed-deadlines",
    number: 4,
    title: "Always Too Late",
    timecode: "0:25-0:34",
    heightVh: 160,
    fragments: [
      { text: "However, whenever Ram searched for competitions,", revealAt: 0.1 },
      { text: "he found them only after the registration deadline had already passed.", revealAt: 0.46 },
    ],
    assets: [
      { path: withBase("assets/scene-04-deadline-search.webm"), role: "competition searches repeatedly overtaken by registration deadlines", kind: "video" },
    ],
    visualDescription: "Competition results move toward Ram, but red registration-closed shutters reach every result before his cursor does.",
  },
  {
    id: "access-gap",
    number: 5,
    title: "What Was Missing",
    timecode: "0:34-0:43",
    heightVh: 148,
    fragments: [
      { text: "Ram did not lack talent, confidence, or interest.", revealAt: 0.08 },
      { text: "He lacked timely access to the right opportunities.", revealAt: 0.52, emphasis: "quiet" },
    ],
    assets: [
      { path: withBase("assets/scene-05-opportunity-gap.webp"), role: "Ram separated from the right opportunities by a timing gap", kind: "image" },
    ],
    visualDescription: "Talent, confidence, and interest connect to Ram, while the right opportunity remains across a clock-shaped break in the path.",
  },
  {
    id: "poor-ram",
    number: 6,
    title: "Poor Ram",
    timecode: "0:43-0:44",
    heightVh: 122,
    fragments: [
      { text: "Poor Ram.", revealAt: 0.2, emphasis: "impact" },
    ],
    assets: [
      { path: withBase("assets/scene-06-poor-ram.webp"), role: "Ram alone as expired opportunities pass through Kathmandu at night", kind: "image" },
    ],
    visualDescription: "Kathmandu keeps moving at night while Ram sits still beneath opportunities that arrived too late.",
  },
] as const satisfies readonly StoryScene[];

export const AUDIO_ASSETS: readonly StoryAsset[] = [
  { path: withBase("assets/audio/ram-narration.m4a"), role: "44-second narration extracted from the supplied recording", kind: "audio" },
  { path: withBase("assets/audio/kathmandu-ambience.mp3"), role: "optional Kathmandu ambience", kind: "audio" },
  { path: withBase("assets/audio/deadline-chime.mp3"), role: "optional deadline notification", kind: "audio" },
];

export const NARRATION_TRACK = {
  src: AUDIO_ASSETS[0].path,
  durationSeconds: STORY_DURATION_SECONDS,
  anchors: [
    { timeSeconds: 0, sceneId: "heart-of-kathmandu", progress: 0 },
    { timeSeconds: 0.98, sceneId: "heart-of-kathmandu", progress: 0.12 },
    { timeSeconds: 3.46, sceneId: "heart-of-kathmandu", progress: 0.86 },
    { timeSeconds: 4.38, sceneId: "college-champion", progress: 0.08 },
    { timeSeconds: 10.63, sceneId: "college-champion", progress: 0.28 },
    { timeSeconds: 11.47, sceneId: "college-champion", progress: 0.48 },
    { timeSeconds: 13.35, sceneId: "college-champion", progress: 0.68 },
    { timeSeconds: 14.5, sceneId: "college-champion", progress: 0.9 },
    { timeSeconds: 15, sceneId: "national-spark", progress: 0.12 },
    { timeSeconds: 19.39, sceneId: "national-spark", progress: 0.52 },
    { timeSeconds: 23.61, sceneId: "national-spark", progress: 0.88 },
    { timeSeconds: 24, sceneId: "missed-deadlines", progress: 0.1 },
    { timeSeconds: 28.32, sceneId: "missed-deadlines", progress: 0.46 },
    { timeSeconds: 32.62, sceneId: "missed-deadlines", progress: 0.88 },
    { timeSeconds: 33, sceneId: "access-gap", progress: 0.08 },
    { timeSeconds: 38.18, sceneId: "access-gap", progress: 0.52 },
    { timeSeconds: 41.96, sceneId: "access-gap", progress: 0.9 },
    { timeSeconds: 42.92, sceneId: "poor-ram", progress: 0.2 },
    { timeSeconds: 43.98, sceneId: "poor-ram", progress: 0.78 },
    { timeSeconds: STORY_DURATION_SECONDS, sceneId: "poor-ram", progress: 0.94 },
  ],
} as const satisfies NarrationTrack;

export function getScene(id: StorySceneId): StoryScene {
  const scene = STORY_SCENES.find((candidate) => candidate.id === id);
  if (!scene) throw new Error(`Unknown story scene: ${id}`);
  return scene;
}
