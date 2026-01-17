"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import WordOnlyTextEffect from "./WordOnlyTextEffect";
import { BorderBeamButton } from "./BorderBeamButton";

function Hero() {
  const subtitleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!subtitleRef.current) return;

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.9, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-black font-poppins text-center mt-32 mb-42">
      <WordOnlyTextEffect text="Build Profitable Habits" />
      <span ref={subtitleRef} className="font-medium text-base mt-4 text-gray-600 self-center xl:w-2/4">If you&apos;re serious about self-improvement, Journalytic is unlike any investment tool you&apos;ve ever seen.</span>
      <BorderBeamButton>Start Journaling</BorderBeamButton>
    </div>
  );
}

export default Hero;