"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSubtitle from "./AnimatedSubtitle";

gsap.registerPlugin(ScrollTrigger);

export default function Vision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="vision" ref={sectionRef} className="w-full pt-16 pb-32 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold text-black mb-16 text-center font-poppins">
          <AnimatedSubtitle
            triggerRef={sectionRef as React.RefObject<HTMLDivElement>}
            delay={0.2}
            className="text-3xl font-bold text-black mb-8 font-poppins"
          >Vison</AnimatedSubtitle>
        </h2>

        <div ref={contentRef} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12">
         <h1 className="text-black font-bold text-3xl">Humans Plus Machines</h1>

          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              We're on a mission to radically augment decision-making. Although Journalytic is in early beta, the product road map is already long and kaleidoscopic. We have a distinct vision for integrating best practices.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              The future isn't humans versus machines. It's humans + machines producing augmented intelligence. Journalytic is on the cutting edge of combining human creativity with the debiasing power of machines. Our goal is to empower people rather than make them obsolete.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-center">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
