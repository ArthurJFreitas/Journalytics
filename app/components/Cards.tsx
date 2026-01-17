"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import AppleLogo from "@/app/assets/logos/apple.png";
import GoogleLogo from "@/app/assets/logos/google.png";
import MicrosoftLogo from "@/app/assets/logos/microsoft.png";
import NvideaLogo from "@/app/assets/logos/nvidia.svg";
import TeslaLogo from "@/app/assets/logos/tesla.png";

interface StockCard {
  symbol: string;
  title: string;
  logo: StaticImageData | string;
  description?: string;
  color: string;
}

const stocks: StockCard[] = [
  {
    symbol: "$AAPL",
    title: "Apple",
    logo: AppleLogo,
    description: "Buyback have totaled $350 billion since 2017",
    color: "from-gray-900 to-gray-700",
  },
  {
    symbol: "$GOOGL",
    title: "Google",
    logo: GoogleLogo,
    color: "from-red-500 to-yellow-500",
  },
  {
    symbol: "$META",
    title: "Meta",
    logo: MicrosoftLogo,
    description: "Reels growth momentum continues",
    color: "from-blue-700 to-indigo-600",
  },
  {
    symbol: "$TSLA",
    title: "Tesla",
    logo: TeslaLogo,
    color: "from-red-600 to-pink-500",
  },
  {
    symbol: "$NVDA",
    title: "NVIDIA",
    logo: NvideaLogo,
    description: "AI chip demand surging",
    color: "from-green-600 to-emerald-500",
  },
];

const positionConfig = [
  { top: 3, left: 5, size: "large" as const },
  { top: 10, left: 79, size: "small" as const },
  { top: 10, left: 12, size: "large" as const },
  { top: 9, left: 65, size: "small" as const },
  { top: 3, left: 70, size: "large" as const },
  { top: 1000, left: 12, size: "large" as const },
];

function StockCard({ stock, size }: { stock: StockCard; size: "small" | "large" }) {
  const isSmall = size === "small";

  return (
    <div
      className={`bg-white border border-gray-300 flex overflow-hidden transition-all duration-300 opacity-80`}
      style={{
        width: isSmall ? "100px" : "320px",
        height: isSmall ? "100px" : "100px",
        borderRadius: "12px",
        transformStyle: "preserve-3d",
        transform: "rotateX(2deg) rotateY(-3deg) rotateZ(0deg)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(39, 127, 160, 0.1)",
      }}
    >
      {isSmall ? (
        // Small card - logo centered
        <div className="w-full h-full flex items-center justify-center p-2">
          <Image
            src={stock.logo}
            alt={stock.title}
            width={56}
            height={56}
            className="rounded-lg object-contain"
          />
        </div>
      ) : (
        // Large card - logo left, text right
        <>
          {/* Logo Section - Left */}
          <div className="flex-shrink-0 w-1/3 flex items-center justify-center bg-gradient-to-br from-gray-50/50 to-white/50">
            <Image
              src={stock.logo}
              alt={stock.title}
              width={48}
              height={48}
              className="rounded-lg object-contain"
            />
          </div>

          <div className="w-px bg-gradient-to-b from-transparent via-gray-200/50 to-transparent" />

          <div className="flex-1 px-3 py-3 flex flex-col justify-center overflow-hidden">
            <p className="text-xs font-bold text-gray-900 truncate">{stock.symbol}</p>
            <p className="text-xs text-gray-700 font-medium truncate">{stock.title}</p>
            {stock.description && (
              <p className="text-xs text-gray-500  mt-1 leading-tight">{stock.description}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function Cards() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cardElements = cardsRef.current.querySelectorAll("[data-card]");

    cardElements.forEach((card) => {
      const offsetX = gsap.utils.random(-20, 20);
      const offsetY = gsap.utils.random(-20, 20);
      const duration = gsap.utils.random(3, 5);

      gsap.to(card, {
        x: offsetX,
        y: offsetY,
        duration: duration,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
  }, []);

  return (
    <div ref={cardsRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {stocks.map((stock, index) => (
        <div
          key={stock.symbol}
          data-card
          style={{
            position: "absolute",
            top: `${positionConfig[index].top}%`,
            left: `${positionConfig[index].left}%`,
          }}
        >
          <StockCard stock={stock} size={positionConfig[index].size} />
        </div>
      ))}
    </div>
  );
}

export default Cards;