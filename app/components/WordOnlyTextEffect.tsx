"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function WordOnlyTextEffect({
  text = "This is a sample text effect animation.",
}: {
  text?: string;
}) {
  const scope = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [splitting, setSplitting] = useState<unknown>(null);

  useEffect(() => {
    // dynamic import of splitting to avoid SSR issues
    // @ts-expect-error no types for the runtime import
    import("splitting").then((Splitting) => setSplitting(() => Splitting.default));
  }, []);

  useEffect(() => {
    if (!splitting || !scope.current) return;

    (splitting as (options: { target: HTMLElement }) => void)({ target: scope.current });

    const words = scope.current.querySelectorAll(".word");
    if (!words || !words.length) return;

    if (timelineRef.current) timelineRef.current.kill();

    timelineRef.current = gsap
      .timeline({ paused: true })
      .eventCallback("onComplete", () => setIsPlaying(false));

    timelineRef.current.fromTo(
      words,
      { willChange: "opacity", opacity: 0, filter: "blur(20px)" },
      {
        duration: 1,
        ease: "power1.inOut",
        opacity: 1,
        filter: "blur(0px)",
        stagger: { each: 0.05, from: "random" },
      }
    );

    timelineRef.current.restart();
    setIsPlaying(true);

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, [splitting, text]);

  return (
    <div className="relative grid place-items-center">
      <div
        ref={scope}
        data-splitting
        className="mx-auto max-w-lg text-center font-poppins text-black text-6xl [&_.char]:inline-block [&_.word]:inline-block [&_.word]:whitespace-nowrap"
        aria-live="polite"
      >
        {text}
      </div>
    </div>
  );
}
