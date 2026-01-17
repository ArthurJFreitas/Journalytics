'use client';  

import { Timeline } from "@/app/components/ui/timeline";
import AnimatedSubtitle from "./AnimatedSubtitle";
import { useRef } from "react";

export default function JournalyticTimeline() {

  const sectionRef = useRef<HTMLDivElement>(null);

  const data = [
    {
      title: "Take Action",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm">
            No more copy and pasting back and forth between Excel or Word. With our easy-to-use Actions, adding structure to your journal is a breeze.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm">
            Our Actions are designed from the best practice recommendations of investment and decision-making thought leaders.
          </p>
          <img
            src="https://journalytic.com/assets/phone-actions.zzzSgQqz919.webp"
            alt="Take Action feature"
            className="w-[600px] h-auto max-w-2xl rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "Analytics",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm">
            Research shows that tracking yourself has a big impact, and this certainly applies to investing. Journalytic gives you reports you won't find anywhere else, and we are continually adding more.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm">
            The fastest way to improve your decision-making is to keep score. Journalytic makes that easy.
          </p>
          <img
            src="https://journalytic.com/assets/tablet-analytics.zzzDe7Xi4xk.webp"
            alt="Analytics dashboard"
            className="w-[600px] h-auto max-w-2xl rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "Track Decisions",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm">
            Journalytic allows you to record and track the consequences of your decisions.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm">
            Buying and selling create an obvious impact. What about the opportunity cost of investments you pass on? Journalytic helps you learn from mistakes and prioritize your research time.
          </p>
          <img
            src="https://journalytic.com/assets/phone-decisions.zzzuYm7GdHM.webp"
            alt="Track Decisions feature"
            className="w-[600px] h-auto max-w-2xl rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative w-full overflow-clip">
     
      <Timeline data={data} />
    </section>
  );
}