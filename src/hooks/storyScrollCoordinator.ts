type StoryScrollSnapshot = {
  progress: number;
  scrollable: number;
  scrollY: number;
  viewportHeight: number;
};

type StoryScrollSubscriber = (snapshot: StoryScrollSnapshot) => void;

type SceneRegistration = {
  element: HTMLElement;
  lastEased: string;
  lastProgress: string;
  visible: boolean;
};

const scenes = new Map<HTMLElement, SceneRegistration>();
const subscribers = new Set<StoryScrollSubscriber>();
let frame = 0;
let listening = false;
let observer: IntersectionObserver | null = null;

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const smoothstep = (value: number) => value * value * (3 - 2 * value);

function flush() {
  frame = 0;
  const viewportHeight = window.innerHeight;
  const measurements = Array.from(scenes.values())
    .filter((scene) => scene.visible)
    .map((scene) => {
      const bounds = scene.element.getBoundingClientRect();
      const stickyHeight = scene.element.querySelector<HTMLElement>(".scene-sticky")?.clientHeight ?? viewportHeight;
      const travel = Math.max(1, bounds.height - stickyHeight);
      const progress = clamp(-bounds.top / travel);
      return { scene, progress, eased: smoothstep(progress) };
    });

  measurements.forEach(({ scene, progress, eased }) => {
    const serializedProgress = progress.toFixed(5);
    const serializedEased = eased.toFixed(5);
    if (serializedProgress !== scene.lastProgress) {
      scene.element.style.setProperty("--scene-progress", serializedProgress);
      scene.lastProgress = serializedProgress;
    }
    if (serializedEased !== scene.lastEased) {
      scene.element.style.setProperty("--scene-eased", serializedEased);
      scene.lastEased = serializedEased;
    }
  });

  const scrollable = Math.max(1, document.documentElement.scrollHeight - viewportHeight);
  const scrollY = window.scrollY;
  const snapshot = { progress: clamp(scrollY / scrollable), scrollable, scrollY, viewportHeight };
  subscribers.forEach((subscriber) => subscriber(snapshot));
}

function schedule() {
  if (!frame) frame = window.requestAnimationFrame(flush);
}

function ensureInfrastructure() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const registration = scenes.get(entry.target as HTMLElement);
          if (!registration) return;
          registration.visible = entry.isIntersecting;
          registration.element.toggleAttribute("data-visible", entry.isIntersecting);
        });
        schedule();
      },
      { rootMargin: "75% 0px" },
    );
  }

  if (listening) return;
  listening = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
  window.visualViewport?.addEventListener("resize", schedule, { passive: true });
  document.addEventListener("visibilitychange", schedule);
}

function cleanupInfrastructure() {
  if (scenes.size || subscribers.size || !listening) return;
  listening = false;
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
  window.visualViewport?.removeEventListener("resize", schedule);
  document.removeEventListener("visibilitychange", schedule);
  observer?.disconnect();
  observer = null;
  if (frame) window.cancelAnimationFrame(frame);
  frame = 0;
}

export function registerStoryScene(element: HTMLElement) {
  ensureInfrastructure();
  const registration: SceneRegistration = { element, lastEased: "", lastProgress: "", visible: true };
  scenes.set(element, registration);
  observer?.observe(element);
  schedule();

  return () => {
    observer?.unobserve(element);
    scenes.delete(element);
    cleanupInfrastructure();
  };
}

export function subscribeToStoryScroll(subscriber: StoryScrollSubscriber) {
  ensureInfrastructure();
  subscribers.add(subscriber);
  schedule();

  return () => {
    subscribers.delete(subscriber);
    cleanupInfrastructure();
  };
}
