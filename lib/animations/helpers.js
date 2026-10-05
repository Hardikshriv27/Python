import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const EASE = {
  premium: "cubic-bezier(.16,1,.3,1)",
  soft: "power2.out",
  snap: "power3.inOut",
};

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function fadeReveal(targets, opts = {}) {
  const { y = 24, duration = 0.9, stagger = 0.08, delay = 0, ease = EASE.soft, scrollTrigger } = opts;
  return gsap.fromTo(
    targets,
    { opacity: 0, y },
    { opacity: 1, y: 0, duration, stagger, delay, ease, scrollTrigger }
  );
}

export function scaleReveal(targets, opts = {}) {
  const { scale = 0.94, duration = 1, delay = 0, ease = EASE.soft } = opts;
  return gsap.fromTo(
    targets,
    { opacity: 0, scale },
    { opacity: 1, scale: 1, duration, delay, ease }
  );
}

export function clipReveal(target, opts = {}) {
  const { duration = 1.1, delay = 0, ease = EASE.soft, from = "inset(0 0 100% 0)" } = opts;
  return gsap.fromTo(
    target,
    { clipPath: from, opacity: 0 },
    { clipPath: "inset(0 0 0% 0)", opacity: 1, duration, delay, ease }
  );
}

export function textReveal(target, opts = {}) {
  const { duration = 1, delay = 0, ease = EASE.premium } = opts;
  return gsap.fromTo(
    target,
    { opacity: 0, y: "0.4em" },
    { opacity: 1, y: "0em", duration, delay, ease }
  );
}

export function parallax(target, opts = {}) {
  const { yPercent = -15, trigger = target, scrub = true } = opts;
  return gsap.to(target, {
    yPercent,
    ease: "none",
    scrollTrigger: {
      trigger,
      start: "top bottom",
      end: "bottom top",
      scrub,
    },
  });
}

/**
 * The standard "content fades up the first time it scrolls into view"
 * pattern used by every content section (ProductIntro, CompanyStory,
 * Capabilities, Metrics, FinalCta, FeatureStory). Scopes a gsap.context to
 * `scopeEl` and runs fadeReveal on `selector` gated by a ScrollTrigger, with
 * reduced-motion and cleanup handled once here instead of being
 * re-implemented in every section.
 */
export function scrollFadeReveal(scopeEl, selector, opts = {}) {
  if (!scopeEl || prefersReducedMotion()) return () => {};
  const { y = 26, duration = 0.9, stagger = 0.1, start = "top 75%", ease = EASE.premium } = opts;

  const ctx = gsap.context(() => {
    fadeReveal(selector, {
      y,
      duration,
      stagger,
      ease,
      scrollTrigger: { trigger: scopeEl, start },
    });
  }, scopeEl);

  return () => ctx.revert();
}
