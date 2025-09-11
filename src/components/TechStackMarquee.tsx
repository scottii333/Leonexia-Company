"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { techStack } from "./techStackData";

export const TechStackMarquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const repeatedStack = Array(50).fill(techStack).flat(); // 50x is usually enough

  useEffect(() => {
    if (!marqueeRef.current) return;

    const track =
      marqueeRef.current.querySelector<HTMLDivElement>(".marquee-track");
    if (!track) return;

    const trackWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: -trackWidth,
      duration: 200,
      repeat: -1,
      ease: "linear",
      modifiers: {
        x: (x) => `${parseFloat(x) % trackWidth}px`,
      },
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.resume();
  };

  return (
    <div
      ref={marqueeRef}
      className="relative overflow-hidden w-full py-10 bg-gradient-to-r from-green-700 via-green-800 to-green-900"
    >
      {/* Fade Overlays */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-green-900 to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-green-900 to-transparent pointer-events-none z-10"></div>

      {/* Marquee Track */}
      <div className="flex whitespace-nowrap gap-[5rem] marquee-track">
        {repeatedStack.map((tool, index) => (
          <div
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group flex flex-col items-center justify-center min-w-[10rem]"
          >
            {/* Logo */}
            <div className="relative w-[7rem] h-[7rem] mb-3 transition-transform duration-300 ease-in-out group-hover:scale-110">
              <Image
                src={tool.logo}
                alt={tool.name}
                fill
                className="object-contain filter invert brightness-0 saturate-0 transition-all duration-300 group-hover:invert-0 group-hover:brightness-100 group-hover:saturate-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
