# Ram — A Kathmandu Scroll Story

A responsive React/TypeScript scroll story about Ram, a talented student in Kathmandu who keeps finding competitions after their registration deadlines have passed. The illustrations are built in CSS, and the supplied 44.47-second narration now drives an optional automatic follow mode.

## Run locally

```bash
npm install
npm run dev
```

Verification commands:

```bash
npm run lint
npm run typecheck
npm run build
```

## Structure

- `src/data/story.ts` — the exact narration, six scene timings, scroll heights, descriptions, and replacement asset paths.
- `src/components/scenes/` — one component for every major story moment.
- `src/components/shared/` — the sticky scene frame, narration reveal, progress, and accessible narration player.
- `src/components/visuals/RamFigure.tsx` — the reusable code-native Ram illustration.
- `src/hooks/` — reduced-motion detection and requestAnimationFrame-throttled scene progress.
- `src/styles.css` — the Kathmandu visual system, responsive layouts, transitions, and reduced-motion presentation.

There is intentionally no router or unrelated site chrome: this is one continuous semantic story page. Styling uses plain CSS and the only runtime dependencies are React and React DOM.

## Replace placeholder assets

The CSS illustrations do not request missing files, so development has no broken image requests. Every scene exposes a stable `data-asset-path`, an accessible description, and a small development label. See `public/assets/README.md` for the full replacement list.

## Voice-over and automatic follow

The extracted audio-only recording is stored at `public/assets/audio/ram-narration.m4a`. Playback begins only after the user presses Play and never autoplays with sound. While Follow is active, real transcript timestamps are interpolated into scene scroll positions. Wheel, touch, keyboard, scrollbar, and scene-marker navigation immediately return control to the reader.

Audio anchors and manual scene pacing live in `src/data/story.ts`. Adjust an anchor's `timeSeconds` when a spoken cue changes, its `progress` when the corresponding visual should arrive earlier or later, and `heightVh` only when manual scrolling also needs more or less room.

## GitHub Pages

This project is configured to deploy to GitHub Pages for the repository `shiry0/ram`.

- Push the code to the `main` branch.
- In GitHub, open `Settings > Pages`.
- Set `Source` to `GitHub Actions`.
- The included workflow will build and publish the site automatically.
