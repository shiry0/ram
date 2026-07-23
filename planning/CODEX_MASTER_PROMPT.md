# Codex Master Prompt — Build Ram’s Kathmandu Scroll Story

Work inside the existing React/TypeScript project. Do not create a second app or replace the project’s established tooling without a genuine technical need.

Your task is to implement a polished, responsive, scroll-based editorial story about Ram, a competitive Kathmandu college student who repeatedly discovers opportunities after their registration deadlines.

## Files to read before implementation

1. `planning/STORY_AND_BUILD_PROMPT.md`
2. `planning/VOICEOVER_AND_SCROLL_TIMING.md`
3. `planning/ASSET_MANIFEST.md`
4. `planning/QA_ACCEPTANCE_CHECKLIST.md`
5. `ThreeJourney(1).tsx`

## Critical interpretation of the TSX reference

`ThreeJourney(1).tsx` is an engineering and architecture reference only. Study its typed props, configuration, helper functions, effect/ref patterns, responsive rendering, reduced-motion support, performance fallbacks, explicit animation states, and cleanup discipline.

Do not copy its travel narrative, destinations, 3D models, layout, colors, scene composition, or visual identity. Ram’s story requires an original Kathmandu student-life direction.

## Primary objective

Build a cinematic vertical scroll experience supporting the exact approved 88-word narration and the measured 44.47-second voice-over. Divide the experience into the six planned scenes. Every major scene must have a separate React/TSX component, and every visual action must correspond directly to its narration.

## Required implementation behavior

- Inspect the project structure, routing, styling, dependencies, scripts, and existing components before editing.
- Preserve the current Vite, React, TypeScript, styling, and package-manager conventions where practical.
- Implement the six named scene components from the planning document.
- Centralize narration, timing, scene IDs, asset paths, accessibility descriptions, and scene metadata in typed configuration.
- Use sticky sections, normalized progress, restrained text reveals, depth movement, opacity, transforms, and purposeful scene transitions.
- Match relative scroll allocation to the measured 44.47-second timing map.
- Add a subtle overall progress indicator.
- Use local, replaceable placeholders for unavailable artwork, video, ambience, and narration.
- Make the CSS/SVG fallback experience visually complete without optional assets.
- Do not autoplay audio.
- Ensure desktop, tablet, and mobile tell the same story.
- Respect `prefers-reduced-motion` and provide stable final compositions.
- Avoid unnecessary dependencies; prefer native React, CSS, IntersectionObserver, and requestAnimationFrame where appropriate.
- Clean up observers, listeners, animation frames, media handlers, and any rendering resources.
- Do not add navigation, pricing, testimonials, generic cards, statistics, dashboards, product marketing, or a solution that is absent from the narration.

## Visual direction

- Contemporary editorial illustration rooted in Kathmandu student life.
- Layered valley contours, dense rooftops, campus spaces, search paths, event signals, clocks, and registration boundaries.
- Charcoal and warm cream with brick red, restrained gold, opportunity blue, and deadline red.
- Recurring visual tension between Ram’s capability and information that reaches him too late.
- Progressive spatial journey: city introduction → college success → larger ambition → repeated missed deadlines → access gap → quiet ending.
- Avoid stereotypical tourist imagery, decorative effects without narrative meaning, and corporate dashboard styling.

## Text behavior

- Use the narration exactly as supplied in `STORY_AND_BUILD_PROMPT.md`.
- Preserve all 88 words and their exact order.
- Break each paragraph into readable fragments only when needed for pacing; do not rewrite it.
- Do not display the complete narration at once.
- Keep line length comfortable and contrast strong.
- Maintain correct DOM order for screen readers.
- End only with “Poor Ram.” Do not append a product pitch, institutional bridge, moral, or invented resolution.

## Suggested project organization

Adapt paths to the existing project while preserving the separation of concerns:

- `src/data/story.ts`
- `src/components/shared/SceneFrame.tsx`
- `src/components/shared/SceneText.tsx`
- `src/components/shared/StoryProgress.tsx`
- `src/components/shared/AudioPlaceholder.tsx` — optional
- `src/components/visuals/RamCharacter.tsx`
- `src/components/visuals/KathmanduWorld.tsx`
- `src/hooks/useSceneProgress.ts`
- `src/hooks/useGlobalScrollProgress.ts`
- `src/hooks/useReducedMotion.ts`
- `src/hooks/useQualityMode.ts` — if justified
- `src/components/scenes/KathmanduIntroductionScene.tsx`
- `src/components/scenes/CollegeChampionScene.tsx`
- `src/components/scenes/BeyondCollegeScene.tsx`
- `src/components/scenes/MissedDeadlinesScene.tsx`
- `src/components/scenes/AccessGapScene.tsx`
- `src/components/scenes/PoorRamFinale.tsx`

A shared fixed visual stage is permitted, but each scene must remain a separate component and own the behavior needed for its narration.

## Quality bar

The result should feel like a cohesive editorial interactive story, not a collection of animation demonstrations. Ram must remain visually recognizable, cause and effect must be immediately understandable, and the missed-deadline sequence must clearly show that the opportunity is found after registration closes.

## Verification before completion

1. Run the project locally.
2. Run the repository’s lint, type-check, and build scripts and fix every introduced error.
3. Test around 1440×900, 1024×768, 768×1024, and 390×844.
4. Test keyboard scrolling and focus visibility.
5. Test with reduced motion enabled.
6. Confirm the entire 88-word narration is present once and ordered correctly.
7. Confirm all six major scenes are separate components.
8. Confirm no unrelated copy or filler section was added.
9. Confirm there is no horizontal overflow.
10. Review each animation against its narration moment.
11. Check that optional media can be absent without weakening comprehension.

## Final response expected from Codex

When implementation is complete, report:

- files created or changed;
- major architectural and visual decisions;
- how scroll progress and scene activation work;
- how reduced motion and fallbacks work;
- where future assets should be placed;
- lint, type-check, build, and responsive QA results;
- any remaining limitations.

Do not stop after an outline. Implement and verify the complete experience in the existing project.
