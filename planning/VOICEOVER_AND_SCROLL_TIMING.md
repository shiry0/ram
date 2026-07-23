# Voice-over and Scroll Timing Map

## Narration baseline

- Total words: 88
- Extracted recording duration: 44.47 seconds
- Effective pace including pauses: approximately 119 words per minute
- Suggested recording style: clear, contemporary, and empathetic without exaggerating the final line
- Important pauses: after introducing Kathmandu and Ram, after the college-success sequence, before “However,” between the two sentences about Ram’s strengths and access, and before “Poor Ram.”

The visual experience should work through manual scrolling before final audio exists. Use proportional scene regions and stable visual holds rather than assuming a fixed device scroll speed.

| Scene | Time | Duration | Words | Recommended height | Key visual cue |
|---|---:|---:|---:|---:|---|
| 1. In the Heart of Kathmandu | 0:00–0:05 | 5 sec | 7 | 136vh | City layers converge on Ram |
| 2. College Champion | 0:05–0:15 | 10 sec | 23 | 170vh | Ram succeeds in hackathon, debate, and another student challenge |
| 3. Beyond the College Level | 0:15–0:25 | 10 sec | 23 | 170vh | Friend appears at a national event; Ram turns toward a larger field |
| 4. Always After the Deadline | 0:25–0:34 | 9 sec | 17 | 160vh | Search results are found only after registration closes |
| 5. The Access Gap | 0:34–0:43 | 9 sec | 16 | 148vh | Ram’s strengths remain present; timely access is missing |
| 6. Poor Ram | 0:43–0:44.47 | 1.47 sec | 2 | 122vh | Motion settles on Ram and the final line |

**Measured narration duration:** 44.47 seconds  
**Total implemented scene height:** 906vh

## Scene-progress cue map

### Scene 1 — 0:00–0:05

- 0–25%: Kathmandu valley and city layers arrive.
- 25–60%: visual paths lead inward toward Ram.
- 60–100%: Ram becomes the clear subject and the composition holds.

### Scene 2 — 0:05–0:15

- 0–30%: hackathon action and first success.
- 30–60%: transition to debate action and success.
- 60–82%: another student challenge completes.
- 82–100%: hold on Ram’s established college-level confidence.

### Scene 3 — 0:15–0:25

- 0–25%: familiar campus boundary remains visible.
- 25–55%: Ram sees his friend within the national hackathon.
- 55–80%: the visual field expands beyond the college level.
- 80–100%: Ram turns toward the larger opportunity and holds.

### Scene 4 — 0:25–0:34

- 0–25%: Ram begins a search and an open opportunity appears.
- 25–48%: its registration deadline passes before discovery.
- 48–72%: a second search confirms the same pattern.
- 72–100%: closed opportunities accumulate and remain readable.

### Scene 5 — 0:34–0:43

- 0–45%: talent, confidence, and interest remain visibly active around Ram.
- 45–72%: relevant opportunities appear across a time-shaped gap.
- 72–100%: the connection arrives late or stops at the boundary; hold on lack of access.

### Scene 6 — 0:43–0:44.47

- 0–35%: prior interface and motion recede.
- 35–60%: the frame settles on Ram.
- 60–100%: “Poor Ram.” appears alone and remains visible.

## Scene hold guidance

- Do not keep every layer in constant motion.
- Give each scene an arrival, one primary action, and a readable hold.
- Ram’s three college activities should be sequential rather than simultaneous.
- The first missed deadline must stay visible long enough for viewers to understand that registration closed before discovery.
- The access-gap tableau should hold through the entire final clause of Scene 5.
- The final line needs silence and negative space; do not rush into a footer or additional message.

## Optional voice-over synchronization

When final narration is available:

1. Store it at `public/assets/audio/ram-narration.m4a`.
2. Measure the actual duration and each paragraph’s start time rather than assuming a round duration.
3. Update typed scene timestamps while preserving the six-scene order.
4. Begin playback only after an explicit Play action.
5. Keep manual scrolling available before, during, and after playback.
6. Play starts with Follow enabled; map audio time to scene progress with smooth interpolation rather than a constant page-wide speed.
7. Pause assisted movement immediately when the user wheels, touches, drags, presses a scroll key, pauses audio, or changes browser visibility.
8. Never fight the user’s current position or snap backward.
9. Disable assisted follow mode when `prefers-reduced-motion` is active.
10. Keep narration controls keyboard accessible and expose elapsed and total time.

## Adjusting duration after final recording

Scene height controls manual pacing; timestamps control audio-follow pacing. If a recorded paragraph is longer or shorter than planned, update that scene’s start and end timestamps first. Increase or decrease its `heightVh` only when manual scrolling also feels too fast or too slow. Do not change narration text merely to fit the provisional timing.
