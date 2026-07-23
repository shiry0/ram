# QA and Acceptance Checklist

## Story integrity

- [ ] The narration contains exactly the approved 88-word story and remains in the supplied order.
- [ ] The story is divided into six major scene components.
- [ ] Every visual action corresponds to a narrated moment.
- [ ] Ram remains recognizable across every scene in which he appears.
- [ ] The missed-deadline scene clearly shows that Ram discovers opportunities only after registration has closed.
- [ ] The access-gap scene distinguishes lack of timely access from lack of talent, confidence, or interest.
- [ ] The experience ends with exactly “Poor Ram.”
- [ ] No invented resolution, product pitch, institutional bridge, generic marketing section, feature grid, statistic, testimonial, or filler copy was added.
- [ ] No visual, copy, asset path, component, or motif from the previous story remains.

## Scroll experience

- [ ] Scene pacing follows the measured 44.47-second narration.
- [ ] Each scene has an arrival, a primary visual action, and a readable hold.
- [ ] Sticky behavior never traps the user.
- [ ] Scroll direction remains intuitive.
- [ ] The experience works with mouse wheel, touchpad, touchscreen, Page Down, Space, and keyboard scrolling.
- [ ] Media loading causes no layout jumps.
- [ ] There is no horizontal overflow.
- [ ] Manual scrolling always takes priority over any optional voice-over follow mode.

## Components and architecture

- [ ] `KathmanduIntroductionScene` is a separate TSX component.
- [ ] `CollegeChampionScene` is a separate TSX component.
- [ ] `BeyondCollegeScene` is a separate TSX component.
- [ ] `MissedDeadlinesScene` is a separate TSX component.
- [ ] `AccessGapScene` is a separate TSX component.
- [ ] `PoorRamFinale` is a separate TSX component.
- [ ] Shared scene layout, narration reveal, Ram artwork, and Kathmandu environment use reusable components where practical.
- [ ] Story metadata, exact copy, timing, and asset paths are typed and centralized.
- [ ] High-frequency animation state does not cause unnecessary React rerenders.
- [ ] Effects clean up observers, listeners, animation frames, media listeners, and rendering resources.
- [ ] The reference TSX influences engineering conventions only, not visual identity.

## Scene-specific visual checks

- [ ] Scene 1 establishes both Kathmandu and Ram without relying on extra narration.
- [ ] Scene 2 differentiates hackathon, debate, and another student challenge through direct visual action rather than generic badges alone.
- [ ] Scene 3 clearly shows Ram seeing his friend at a national hackathon and deciding to move beyond college-level competition.
- [ ] Scene 4 depicts search results arriving after a visible registration boundary or deadline.
- [ ] Scene 5 keeps Ram’s strengths visibly present while making timely access the missing connection.
- [ ] Scene 6 becomes quiet and visually resolves on Ram without implying an outcome not present in the script.

## Responsive behavior

- [ ] Tested around 1440×900 desktop.
- [ ] Tested around 1024×768 tablet landscape.
- [ ] Tested around 768×1024 tablet portrait.
- [ ] Tested around 390×844 mobile.
- [ ] Text remains readable and does not obscure the essential action.
- [ ] On mobile, the main visual action occupies the upper region and narration remains comfortably readable below it.
- [ ] Search results and competition actions simplify to one primary item at a time on narrow screens.
- [ ] Mobile uses safe viewport units and handles browser chrome.
- [ ] Complex environmental layers reduce on smaller or lower-power devices.

## Accessibility

- [ ] `prefers-reduced-motion` produces a meaningful, stable version of all six scenes.
- [ ] Reduced motion removes parallax, rapid calendar movement, looping pulses, and forced follow scrolling.
- [ ] Complete narration is available in correct screen-reader order.
- [ ] Decorative graphics are hidden from assistive technology.
- [ ] Essential illustrations have accurate alternatives or equivalent accessible text.
- [ ] Meaning never depends on color alone.
- [ ] Text contrast remains strong in every progress state.
- [ ] Focus indicators are visible.
- [ ] Audio does not autoplay.
- [ ] Audio controls, if present, are keyboard accessible and labelled.

## Performance

- [ ] The initial Kathmandu scene loads without waiting for later assets.
- [ ] Later images and video are lazy-loaded.
- [ ] Off-screen animation and video pause where practical.
- [ ] Most animation uses transforms and opacity.
- [ ] Raw scroll handlers perform no expensive synchronous work.
- [ ] A simplified path exists if advanced graphics are introduced.
- [ ] No persistent console errors or warnings remain.

## Build verification

- [ ] Dependency installation completes using the repository’s package manager.
- [ ] The development command runs the project.
- [ ] The lint command passes.
- [ ] The type-check command passes.
- [ ] The production build completes without TypeScript or bundler errors.
- [ ] Production preview renders all six scenes.
- [ ] Asset fallbacks work when optional production files are absent.
- [ ] Project documentation explains how to run, build, replace assets, and add the final narration.
