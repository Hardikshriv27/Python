"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { prefersReducedMotion } from "@/lib/animations/helpers";

const SKIP_KEY = "triune_intro_seen";

export default function BrandIntro({ onComplete }) {
  const rootRef = useRef(null);
  const pulseRef = useRef(null);
  const markWrapRef = useRef(null);
  const nameRef = useRef(null);
  const subRef = useRef(null);
  const dividerRef = useRef(null);
  const sloganRef = useRef(null);

  const completedRef = useRef(false);
  const timelineRef = useRef(null);
  const onCompleteRef = useRef(onComplete);

  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [skippable, setSkippable] = useState(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  /*
   * IMPORTANT:
   * sessionStorage can only be checked on the client.
   * Do NOT check it inside the useState initializer because
   * Next.js renders this component on the server first.
   */
  useEffect(() => {
    let alreadySeen = false;

    try {
      alreadySeen = sessionStorage.getItem(SKIP_KEY) === "1";
    } catch {
      // If storage is unavailable, treat it as first visit.
    }

    if (alreadySeen || prefersReducedMotion()) {
      setVisible(false);
      setChecked(true);

      if (!completedRef.current) {
        completedRef.current = true;
        onCompleteRef.current?.();
      }

      return;
    }

    setVisible(true);
    setChecked(true);
  }, []);

  useEffect(() => {
    if (!checked || !visible) return;

    const root = rootRef.current;

    if (!root) return;

    let cancelled = false;

    const finish = () => {
      if (cancelled || completedRef.current) return;

      completedRef.current = true;

      try {
        sessionStorage.setItem(SKIP_KEY, "1");
      } catch {
        // Ignore storage errors.
      }

      gsap.to(root, {
        opacity: 0,
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => {
          if (cancelled) return;

          setVisible(false);
          onCompleteRef.current?.();
        },
      });
    };

    const skipTimer = window.setTimeout(() => {
      if (!cancelled) {
        setSkippable(true);
      }
    }, 900);

    gsap.set(root, {
      opacity: 1,
    });

    gsap.set(pulseRef.current, {
      opacity: 0,
      scale: 1,
    });

    gsap.set(markWrapRef.current, {
      opacity: 0,
      clipPath: "circle(0% at 50% 50%)",
    });

    gsap.set(nameRef.current, {
      opacity: 0,
      letterSpacing: "0.4em",
    });

    gsap.set(subRef.current, {
      opacity: 0,
      y: 10,
    });

    gsap.set(dividerRef.current, {
      opacity: 1,
      scaleX: 0,
    });

    gsap.set(sloganRef.current, {
      opacity: 0,
      y: 8,
    });

    const tl = gsap.timeline({
      defaults: {
        ease: "cubic-bezier(.16,1,.3,1)",
      },
      onComplete: finish,
    });

    timelineRef.current = tl;

    tl.to(
      pulseRef.current,
      {
        opacity: 1,
        scale: 10,
        duration: 1,
        ease: "power2.out",
      },
      0.05
    )
      .to(
        pulseRef.current,
        {
          opacity: 0,
          duration: 0.3,
        },
        0.75
      )
      .fromTo(
        markWrapRef.current,
        {
          clipPath: "circle(0% at 50% 50%)",
          opacity: 0,
        },
        {
          clipPath: "circle(75% at 50% 50%)",
          opacity: 1,
          duration: 1.1,
        },
        1.0
      )
      .fromTo(
        nameRef.current,
        {
          opacity: 0,
          letterSpacing: "0.4em",
        },
        {
          opacity: 1,
          letterSpacing: "0.06em",
          duration: 0.9,
        },
        1.9
      )
      .fromTo(
        subRef.current,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        2.5
      )
      .fromTo(
        dividerRef.current,
        {
          scaleX: 0,
          opacity: 1,
        },
        {
          scaleX: 1,
          duration: 0.6,
        },
        2.9
      )
      .fromTo(
        sloganRef.current,
        {
          opacity: 0,
          y: 8,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        3.15
      )
      .to({}, { duration: 0.9 });

    return () => {
      cancelled = true;

      window.clearTimeout(skipTimer);

      tl.kill();

      if (timelineRef.current === tl) {
        timelineRef.current = null;
      }
    };
  }, [checked, visible]);

  function handleSkip() {
    if (completedRef.current) return;

    completedRef.current = true;

    try {
      sessionStorage.setItem(SKIP_KEY, "1");
    } catch {
      // Ignore storage errors.
    }

    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }

    gsap.killTweensOf(rootRef.current);

    gsap.to(rootRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        setVisible(false);
        onCompleteRef.current?.();
      },
    });
  }

  /*
   * While checking sessionStorage, keep the intro component out of
   * the visual tree. The main page can remain underneath.
   */
  if (!checked || !visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
      role="dialog"
      aria-label="Triune intro animation"
    >
      <div className="relative w-[320px] text-center">
        <span
          ref={pulseRef}
          className="absolute left-1/2 top-[76px] -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-paper"
        />

        <div
          ref={markWrapRef}
          className="mx-auto h-[168px] w-[168px] overflow-hidden rounded-full"
        >
          <Image
            src="/brand/triune-mark.png"
            alt="Triune"
            width={168}
            height={168}
            priority
            className="h-full w-full object-cover"
          />
        </div>

        <p
          ref={nameRef}
          className="font-display mt-7 text-[2.75rem] font-medium tracking-[0.06em] text-paper"
        >
          TRIUNE
        </p>

        <div
          ref={subRef}
          className="mt-3 flex justify-center gap-3 text-[0.68rem] tracking-[0.35em] text-slate"
        >
          <span>THE</span>
          <span>HOUSE</span>
          <span>OF</span>
          <span>BUILDERS</span>
        </div>

        <div
          ref={dividerRef}
          className="mx-auto mt-6 h-px w-16 origin-center bg-slate-dim"
        />

        <div
          ref={sloganRef}
          className="mt-5 text-[0.72rem] tracking-[0.25em] text-slate"
        >
          BUILT TO BE TRUSTED
        </div>
      </div>

      {skippable && (
        <button
          onClick={handleSkip}
          className="absolute bottom-8 right-8 text-xs tracking-wide text-slate hover:text-paper transition-colors cursor-pointer"
        >
          Skip
        </button>
      )}
    </div>
  );
}
