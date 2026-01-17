"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PenTool, Users, Zap } from "lucide-react";
import AnimatedSubtitle from "./AnimatedSubtitle";

gsap.registerPlugin(ScrollTrigger);

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Journal to Improve",
    description: "Behavioral biases sabotage our best efforts. Journaling is the antidote to bias.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Close Feedback Loops",
    description: "Learning ramps with feedback. Journalytic accelerates your growth by closing key feedback loops.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Make It Easy",
    description: "You simply journal about your investments. Journalytic helps store and organize your thoughts and data, then gives you powerful analytics on the backend to peek into your process.",
  },
];

export default function FeatureCards() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = cardsRef.current.filter((card) => card !== null);

    gsap.to(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "top center",
        onEnter: () => {
          cards.forEach((card, index) => {
            gsap.to(card, {
              x: (index - 1) * 280,
              y: 0,
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
              delay: index * 0.15,
            });
          });
        },
      },
    });

    cards.forEach((card, index) => {
      gsap.set(card, {
        x: 0,
        y: index * 20,
        opacity: 0.8,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Header animation on scroll
  useEffect(() => {
    if (!headerRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
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
    <section id="features" className="w-full py-24 px-4 flex">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <h2 ref={titleRef} className="text-5xl md:text-4xl font-bold text-black mb-4 font-poppins">
            WHY JOURNALYTIC?
          </h2>
          <AnimatedSubtitle triggerRef={headerRef as React.RefObject<HTMLDivElement>} delay={0.2}>
            The journaling tool made for investing.
          </AnimatedSubtitle>
        </div>

        <div
          ref={containerRef}
          className="relative h-112 md:h-80 flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="absolute w-64 h-84 bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(2deg)",
                }}
              >
                <div className="text-blue-600 mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-black mb-4 font-poppins">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
