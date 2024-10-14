"use client";

import React, { useState, useEffect } from "react";
import LandingComponent from "./LandingCompnent";
import { companies } from "@/data/Landing";
import { Companies } from "@/types/Home";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      className="min-h-[100dvh] w-full relative flex items-center justify-center overflow-hidden"
    >
      <div className="z-[50]">
        <div className="flex p-[10vw] bg-cover bg-[0_0] bg-[url('https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646da3412c037b5778b74830_gradient-shadow.png')]">
          <div className="flex border-[#3a506b] py-4 z-[40] bg-white/30 backdrop-blur-md px-10 rounded-lg border-[3px] text-[clamp(24px,6vw,54px)] font-semibold border-dashed">
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
