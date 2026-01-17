"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSubtitleProps {
  children: string;
  triggerRef: React.RefObject<HTMLDivElement> | null;
  delay?: number;
  className?: string;
}

export default function AnimatedSubtitle({
  children,
  triggerRef,
  delay = 0.2,
  className = "text-gray-600 text-lg",
}: AnimatedSubtitleProps) {
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!subtitleRef.current || !triggerRef?.current) return;

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: delay,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [triggerRef, delay]);

  return (
    <p ref={subtitleRef} className={className}>
      {children}
    </p>
  );
}
