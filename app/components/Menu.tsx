"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import Logo from "@/app/assets/logo.svg";
import Button from "./Button";

export default function Menu() {
  const navRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navRef.current || !menuItemsRef.current || !buttonsRef.current) return;

    gsap.set(navRef.current, { y: -80 });
    gsap.set(menuItemsRef.current.children, { opacity: 0, y: -10 });
    gsap.set(buttonsRef.current.children, { opacity: 0, x: 20 });

    gsap.to(navRef.current, {
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(menuItemsRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.2,
    });

    gsap.to(buttonsRef.current.children, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.35,
    });

    const links = menuItemsRef.current.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          scale: 1.1,
          color: "#277fa0",
          duration: 0.3,
          ease: "power2.out",
        });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(link, {
          scale: 1,
          color: "#000000",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Hover animation for buttons
    const buttons = buttonsRef.current.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          y: -3,
          boxShadow: "0 10px 20px rgba(39, 127, 160, 0.2)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          y: 0,
          boxShadow: "0 0px 0px rgba(39, 127, 160, 0)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 bg-white/20  backdrop-blur-md border-b border-gray-200/30 z-50"
    >
      <div className="flex items-center justify-between h-16 px-8 max-w-7xl mx-auto w-full">
        <div className="shrink-0">
          <Image
            src={Logo}
            alt="Journalytic Logo"
            width={160}
            height={28}
            className="h-7 w-auto"
          />
        </div>

        <div className="flex gap-6">
          <div ref={menuItemsRef} className="flex items-center gap-8 flex-1 ml-12">
            <a href="#features" className="text-black font-semibold cursor-pointer font-poppins">
              How It Works
            </a>
            <a href="#about" className="text-black font-semibold cursor-pointer font-poppins">
              Resources
            </a>
            {/* <a href="#vision" className="text-black font-semibold cursor-pointer font-poppins">
              Built for Investing
            </a> */}
            <a href="#vision" className="text-black font-semibold cursor-pointer font-poppins">
              Vision
            </a>
          </div>

      
        </div>
            <div ref={buttonsRef} className="flex items-center gap-4">
            <Button variant="outline" size="md">
              Log In
            </Button>
            <Button variant="primary" size="md">
              Sign Up
            </Button>
          </div>
      </div>
    </nav>
  );
} 