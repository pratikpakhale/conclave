"use client";
import React from "react";
import HeroSection from "./HeroSection";

export function LandingSection() {
  return (
    <div className="h-[100dvh] relative w-full bg-text-col flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808016_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] "></div>
      <HeroSection />
      <div className="main">
        <div className="masker">
          <h1 className="text-[clamp(44px,10vw,88px)] font-bold text-center text-color1 relative z-20">
            Conclave 2024
          </h1>
        </div>
      </div>
    </div>
  );
}
