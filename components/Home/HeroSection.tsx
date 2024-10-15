"use client";

import React, { useState, useEffect } from "react";
import LandingComponent from "./LandingCompnent";
import { companies } from "@/data/Landing";
import { Companies } from "@/types/Home";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-[100dvh] z-[1] w-full bg-[#ecf5ff] relative flex items-center justify-center overflow-hidden"
    >
      <div className="z-[50]">
        <div className="flex p-[10vw] mask">
          <div className="flex border-[#002fff] z-[40] px-20 py-4 backdrop-blur-md rounded-lg border-[3px] text-[clamp(24px,6vw,54px)] font-bold bg-[#002fff19]">
            HR Conclave 2024
          </div>
        </div>
      </div>

      {companies.map((company: Companies, index) => {
        const moveX = 1 / 2 - mousePosition.x / window.innerWidth;
        const moveY = 1 / 2 - mousePosition.y / window.innerHeight;

        return (
          <LandingComponent
            key={index}
            right={company.right}
            top={company.top}
            transform={`translate3d(${moveX * ((index % 10) + 1) * 20}px, ${
              moveY * (index % 10) * 20
            }px, 0px)`}
            text={company.name}
          />
        );
      })}
    </section>
  );
}
