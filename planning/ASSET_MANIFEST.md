# Asset Manifest

## General rule

The first implementation must remain complete and understandable without production media. Use purposeful CSS, inline SVG, gradients, silhouettes, and designed local fallbacks. Keep final asset paths stable so artwork can be replaced later without restructuring scene components.

Do not load random remote images at runtime. Missing assets must never produce broken-image icons or expose technical file paths to visitors.

## Image and video assets

| Path | Scene | Purpose | Recommended format and dimensions |
|---|---|---|---|
| `public/assets/scene-01-kathmandu-dawn.webp` | 1 | Layered Kathmandu valley and urban rooftops surrounding Ram | WebP, 2400×1350 |
| `public/assets/scene-02-college-victories.webp` | 2 | Ram moving through hackathon, debate, and student challenge successes | WebP, 2000×1125 |
| `public/assets/scene-03-national-hackathon.webp` | 3 | Ram seeing his friend participate beyond the college level | WebP, 2000×1125 |
| `public/assets/scene-04-deadline-search.webm` | 4 | Loopable search and missed-deadline composition | WebM, 8–12 sec, 1920×1080, muted |
| `public/assets/scene-05-opportunity-gap.webp` | 5 | Ram’s strengths separated from timely opportunities | WebP, 2000×1125 |
| `public/assets/scene-06-poor-ram.webp` | 6 | Quiet final portrait or silhouette of Ram | WebP, 2000×1125 |

Search controls, calendars, deadline lines, event signals, and progress paths should preferably remain code-native so their timing and responsive layout can be adjusted without replacing artwork.

## Audio assets

| Path | Use | Requirement |
|---|---|---|
| `public/assets/audio/ram-narration.m4a` | Extracted 44.47-second narration | Never autoplay; begin only after explicit user action; Follow may drive the scroll position |
| `public/assets/audio/kathmandu-ambience.mp3` | Optional subtle city ambience | Loopable, low in the mix, and independently mutable |
| `public/assets/audio/deadline-chime.mp3` | Optional restrained deadline cue | Do not make meaning depend on sound alone |

## Placeholder treatment

- Fallback artwork must communicate the same action as the future production asset.
- Development asset labels must not be visible in the production experience.
- Use `picture` and responsive image sources when production artwork is available.
- Lazy-load later-scene artwork.
- Videos must be muted, inline, paused while off screen, and paired with a static fallback.
- Essential scene meaning must remain available when every optional asset is absent.

## Art consistency notes

All production artwork should share:

- one recognizable depiction of Ram across all six scenes;
- consistent Kathmandu geography and campus architecture;
- a contemporary student-life setting rather than a tourism-poster treatment;
- a restrained palette of charcoal, brick red, warm cream, opportunity blue, and deadline red;
- the same editorial grain, line weight, lighting, and silhouette style;
- respectful human proportions and natural actions;
- recurring paths, boundaries, clocks, and signals as visual motifs;
- sufficient negative space for narration at desktop, tablet, and mobile sizes.
