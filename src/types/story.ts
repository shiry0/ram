export type StorySceneId =
  | "heart-of-kathmandu"
  | "college-champion"
  | "national-spark"
  | "missed-deadlines"
  | "access-gap"
  | "poor-ram";

export type StoryFragment = {
  text: string;
  revealAt: number;
  emphasis?: "quiet" | "impact";
};

export type StoryAsset = {
  path: string;
  role: string;
  kind: "image" | "video" | "audio";
};

export type StoryScene = {
  id: StorySceneId;
  number: number;
  title: string;
  timecode: `${number}:${string}-${number}:${string}`;
  heightVh: number;
  fragments: readonly StoryFragment[];
  assets: readonly StoryAsset[];
  visualDescription: string;
};

export type NarrationScrollAnchor = {
  timeSeconds: number;
  sceneId: StorySceneId;
  progress: number;
};

export type NarrationTrack = {
  src: string;
  durationSeconds: number;
  anchors: readonly NarrationScrollAnchor[];
};
