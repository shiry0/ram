# Ram and the Missed Opportunities — Story and Build Plan

## Project purpose

Create a cinematic, scroll-based React/TypeScript story about Ram, a capable and competitive Kathmandu college student whose ambition extends beyond campus but whose access to opportunities arrives too late.

The experience uses an extracted 44.47-second voice-over. Its visuals must make the cause-and-effect sequence unmistakable: Ram succeeds inside college, sees a friend compete nationally, searches for similar events, repeatedly encounters expired registration deadlines, and is left without timely access despite having talent, confidence, and interest.

Every component, transition, and visual element must correspond to a specific narrated action or emotional beat. Do not invent a solution or continue the story beyond its supplied ending.

## Reference-file instruction

Use `ThreeJourney(1).tsx` only as a reference for engineering structure and coding discipline. Do not reproduce its destinations, travel content, colors, models, composition, or visual identity.

Relevant structural conventions to carry forward:

- strongly typed component props and configuration;
- small reusable helper functions;
- separation of story content from animation logic;
- `useRef` for mutable animation values that should not trigger rerenders;
- `useEffect` setup with complete cleanup;
- explicit reduced-motion handling;
- quality and performance fallbacks where useful;
- responsive resize handling;
- graceful fallback when advanced visuals are unavailable;
- a clear top-level component orchestrating scene and global progress.

---

# Complete narration script

**Word count:** 88 words  
**Recorded duration:** 44.47 seconds, including deliberate pauses.

> In the heart of Kathmandu lived Ram.
>
> Ram was highly competitive and often won events organised inside his college, whether it was a hackathon, debate competition, or another student challenge.
>
> One day, he saw his friend participate in a national hackathon and decided that he, too, wanted to compete beyond the college level.
>
> However, whenever Ram searched for competitions, he found them only after the registration deadline had already passed.
>
> Ram did not lack talent, confidence, or interest. He lacked timely access to the right opportunities.
>
> Poor Ram.

---

# Narrative and visual direction

## Overall visual language

- Contemporary editorial illustration grounded in modern Kathmandu student life.
- Layered valley contours, dense rooftops, utility lines, campus spaces, screens, event signals, calendars, clocks, and paths.
- Charcoal and warm cream as the base palette, supported by brick red, restrained gold, opportunity blue, and deadline red.
- A recurring contrast between Ram’s active capability and opportunities that become unreachable before he discovers them.
- Respectful, recognizable human forms with consistent proportions and clothing across scenes.
- Large negative space, clear silhouettes, and slow purposeful transitions rather than decorative motion.
- Avoid tourism-poster stereotypes, generic corporate imagery, feature cards, dashboards, and visual effects unrelated to the narration.

## Page-level experience

- A fixed or sticky visual stage may sit behind scene-specific layers.
- Narration should appear in short readable fragments rather than one large article.
- Each major scene should provide time for arrival, primary action, and a visual hold.
- Implemented combined scene height: 906vh.
- Include a subtle progress indicator without adding conventional navigation or unrelated page sections.
- The final state must end with “Poor Ram.” and remain quiet. Do not append a moral, product reveal, institutional statement, or resolution.

## Recurring visual motifs

- **Ram:** the same recognizable student figure across the entire story.
- **Boundaries:** campus walls, expanding frames, deadline lines, and gaps that show where access stops.
- **Signals:** event notices, screens, paths, and distant stages that represent discoverable opportunities.
- **Time:** calendar arcs, clock hands, registration windows, and moving cutoff lines.
- **Opportunity blue:** indicates an active event before its registration deadline.
- **Deadline red:** indicates that registration has already closed; meaning must also be communicated by shape, motion, or text rather than color alone.

---

# Scene-by-scene breakdown

## Scene 1 — In the Heart of Kathmandu

**Suggested component:** `KathmanduIntroductionScene`

**Narration text:**

> In the heart of Kathmandu lived Ram.

**Recorded narration time:** 0:00–0:05  
**Implemented scroll allocation:** 136vh

**Visual concept:**

- Begin with layered Kathmandu valley contours and a dense contemporary city silhouette.
- Urban paths, rooftops, and lights subtly converge toward Ram.
- Introduce Ram as a clear student figure rather than an anonymous dot or abstract symbol.
- Keep the city active but restrained so the narration remains dominant.

**Scroll behavior:**

- Fade the city in by depth layer.
- Use a restrained camera push toward Ram.
- Hold once he becomes the unmistakable subject.
- In reduced motion, display the complete city-and-Ram composition without the camera push.

---

## Scene 2 — College Champion

**Suggested component:** `CollegeChampionScene`

**Narration text:**

> Ram was highly competitive and often won events organised inside his college, whether it was a hackathon, debate competition, or another student challenge.

**Recorded narration time:** 0:05–0:15  
**Implemented scroll allocation:** 170vh

**Visual concept:**

- Transform one continuous campus space through three direct actions.
- First, show Ram working at a coding desk in a hackathon setting.
- Then, transition to Ram speaking between debate microphones or lecterns.
- Finally, show him crossing or completing another student challenge.
- Understated win markers may accumulate, but Ram’s action should communicate success more strongly than trophies or badges.

**Scroll behavior:**

- Use three paced phases rather than showing all events simultaneously.
- Keep Ram spatially consistent while the activity around him changes.
- Let each success register before transitioning to the next.
- On mobile, show one activity at a time in the upper visual region.

---

## Scene 3 — Beyond the College Level

**Suggested component:** `BeyondCollegeScene`

**Narration text:**

> One day, he saw his friend participate in a national hackathon and decided that he, too, wanted to compete beyond the college level.

**Recorded narration time:** 0:15–0:25  
**Implemented scroll allocation:** 170vh

**Visual concept:**

- Establish Ram inside the familiar campus boundary.
- Reveal his friend participating within a larger national hackathon environment beyond that boundary.
- Ram notices the event and turns toward it.
- Expand the visual field from a contained campus to a wider network or stage, making the change in scale immediately clear.
- Show Ram’s decision through posture and direction rather than adding invented dialogue.

**Scroll behavior:**

- Begin with the campus frame still visible.
- Reveal the friend and larger event as the view widens.
- Move Ram’s attention and body orientation toward the national event.
- End with the wider field open but not yet accessible.

---

## Scene 4 — Always After the Deadline

**Suggested component:** `MissedDeadlinesScene`

**Narration text:**

> However, whenever Ram searched for competitions, he found them only after the registration deadline had already passed.

**Recorded narration time:** 0:25–0:34  
**Implemented scroll allocation:** 160vh

**Visual concept:**

- Show Ram actively searching rather than waiting passively.
- Opportunity results travel toward him along visible paths.
- A registration boundary, closing window, calendar cutoff, or clock hand passes each result before Ram reaches it.
- Results change from open to closed before discovery.
- Repeat the pattern enough to communicate “whenever” without making the scene frantic or visually repetitive.

**Scroll behavior:**

- Stage two or three clear search-and-miss cycles.
- Let the first result establish the mechanism, the second confirm the pattern, and the last create the emotional hold.
- Use readable status changes such as “Registration closed” only where directly implied by the narration.
- Reduced motion should show a simple ordered sequence of search, deadline crossing, and closed result without rapid calendar movement.

---

## Scene 5 — The Access Gap

**Suggested component:** `AccessGapScene`

**Narration text:**

> Ram did not lack talent, confidence, or interest. He lacked timely access to the right opportunities.

**Recorded narration time:** 0:34–0:43  
**Implemented scroll allocation:** 148vh

**Visual concept:**

- Keep Ram active and upright rather than portraying him as incapable.
- Represent talent, confidence, and interest through three illuminated actions or qualities already established in the college scene.
- Place relevant opportunities across a time-shaped gap or broken connection.
- Make the missing link unmistakably about information and timing.
- Avoid implying that Ram needs more motivation, training, or talent.

**Scroll behavior:**

- Reveal the three existing strengths in sequence during the first sentence.
- Keep those strengths visible as attention shifts to the inaccessible opportunities.
- Show the connecting path arriving after the opportunity has closed or stopping at the time boundary.
- Hold on the separation before the final scene.

---

## Scene 6 — Poor Ram

**Suggested component:** `PoorRamFinale`

**Narration text:**

> Poor Ram.

**Recorded narration time:** 0:43–0:44.47  
**Implemented scroll allocation:** 122vh

**Visual concept:**

- Reduce movement, interface layers, and environmental noise.
- Hold on Ram as the same capable student seen throughout the story.
- Let expired opportunities or closed paths remain distant and subdued behind him.
- Present “Poor Ram.” alone with enough space for the ending to land.
- Do not imply a later success, introduce a platform, or resolve the access problem.

**Scroll behavior:**

- Settle from the prior scene into a quiet composition.
- Use a restrained fade or focus change rather than a dramatic collapse.
- Keep the final state visible at the bottom of the page instead of snapping to a conventional footer.

---

# Suggested component architecture

## Orchestration

- `App` — page composition.
- `StoryExperience` — owns global progress, active scene, quality mode, and reduced-motion state.
- `StoryStage` — optional shared fixed visual area.
- `StoryProgress` — subtle accessible progress indicator.
- `AudioPlaceholder` — optional non-autoplay control for the future narration.

## Shared scene structure

- `SceneFrame` — reusable sticky section wrapper.
- `SceneText` — fragment reveal while preserving accessible DOM order.
- `AssetPlaceholder` — designed local fallback for absent media.
- `VisualFallback` — static composition for unsupported rendering.
- `RamCharacter` — consistent typed character primitive.
- `KathmanduWorld` — reusable city, valley, and campus environment primitives.

## Scene components

1. `KathmanduIntroductionScene`
2. `CollegeChampionScene`
3. `BeyondCollegeScene`
4. `MissedDeadlinesScene`
5. `AccessGapScene`
6. `PoorRamFinale`

## Hooks and utilities

- `useGlobalScrollProgress`
- `useSceneProgress`
- `useActiveScene`
- `useReducedMotion`
- `useQualityMode` — only if needed
- `clamp`, `smoothStep`, and normalized progress mapping helpers

## Story data

Keep narration, timestamps, relative duration, scene IDs, labels, asset references, and accessibility descriptions in one typed story configuration. Do not scatter approved copy through animation components.

---

# Accessibility requirements

- Respect `prefers-reduced-motion` with a meaningful static or crossfade experience.
- Disable any optional assisted follow scrolling for reduced-motion users.
- Keep the complete story text in logical screen-reader order.
- Hide decorative city, signal, clock, and interface layers from assistive technology.
- Provide accurate alternatives for essential illustrations.
- Do not use color alone to distinguish an open opportunity from a closed one.
- Maintain strong text contrast over every progress state.
- Do not require precise pointer interaction.
- Keep keyboard scrolling and focus indicators intact.
- Never autoplay narration or ambience.
- If audio controls are included, provide play, pause, restart, duration, and progress accessibly.

---

# Responsive behavior

## Desktop

- Use a cinematic fixed stage with narration occupying no more than approximately 35–42% of the viewport width.
- Keep essential character and deadline action away from the narration area.
- Use wider environmental depth and transitions between campus and national scale.

## Mobile

- Prioritize a clear vertical composition.
- Reserve the upper 40–45% for the primary action and place narration below.
- Show one competition activity or search result at a time.
- Reduce simultaneous city and interface layers.
- Avoid hover-only interactions and GPU-heavy effects.
- Use safe viewport units and prevent horizontal overflow.

---

# Performance direction

- Prefer CSS transforms and opacity for motion.
- Use requestAnimationFrame only where continuous updates are necessary.
- Use IntersectionObserver or normalized progress instead of expensive raw scroll work.
- Lazy-load non-critical media.
- Pause off-screen video or canvas work.
- Provide high and simplified quality paths if advanced rendering is introduced.
- Clean up all observers, frames, listeners, and media handlers.
- Keep the first meaningful Kathmandu visual lightweight.

---

# Assets needed later

- `public/assets/scene-01-kathmandu-dawn.webp`
- `public/assets/scene-02-college-victories.webp`
- `public/assets/scene-03-national-hackathon.webp`
- `public/assets/scene-04-deadline-search.webm`
- `public/assets/scene-05-opportunity-gap.webp`
- `public/assets/scene-06-poor-ram.webp`
- `public/assets/audio/ram-narration.m4a`
- `public/assets/audio/kathmandu-ambience.mp3` — optional
- `public/assets/audio/deadline-chime.mp3` — optional

The story must work without these files through code-native fallback artwork. Do not fetch remote imagery at runtime.

---

# Content rules

- Preserve the narration exactly unless the user explicitly requests a revision.
- Do not add dialogue, explanation, statistics, calls to action, marketing copy, or an invented solution.
- Interface labels may appear only when directly implied, such as “Hackathon,” “Debate,” or “Registration closed.”
- Do not turn the main story into a product demonstration.
- Every animation must support a narrated action, emotional shift, or timing relationship.
- End with “Poor Ram.” and nothing after it.
