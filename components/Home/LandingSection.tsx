"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import HeroSection from "./HeroSection";

export function LandingSection() {
  return (
    <div className="h-[100dvh] relative w-full bg-[#080618] flex flex-col items-center justify-center overflow-hidden">
      {/* <HeroSection /> */}
      <div className="translate-y-[20%]">
        <h1 className="text-[clamp(44px,10vw,100px)] font-bold text-center text-white relative z-20">
          Conclave 2024
        </h1>
        <div className="w-[80rem] h-72 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-[#080618] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </div>
  );
}
