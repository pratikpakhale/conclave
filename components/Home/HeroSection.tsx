"use client";

import React, { useState, useEffect } from "react";
import { companies } from "@/data/Landing";
import { Companies } from "@/types/Home";
import LandingComponent from "./LandingCompnent";

export default function HeroSection() {
  // Set initial state without accessing window properties
  const [mousePosition, setMousePosition] = useState({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });

  useEffect(() => {
    // Check if window is defined (i.e., code is running on the client side)
    if (typeof window !== "undefined") {
      // Set initial mouse position based on window dimensions
      setMousePosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });

      const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  // Calculate movement based on cursor position
  const moveX =
    typeof window !== "undefined"
      ? 1 / 2 - mousePosition.x / window.innerWidth
      : 0;
  const moveY =
    typeof window !== "undefined"
      ? 1 / 2 - mousePosition.y / window.innerHeight
      : 0;

  return (
    <div className="absolute w-full h-full">
      <div
        className="pointer-events-none absolute inset-0 z-[1] transition-all duration-500 ease-out"
        style={{
          background: `radial-gradient(440px at ${mousePosition.x}px ${
            mousePosition.y +
            (typeof window !== "undefined" ? window.pageYOffset : 0)
          }px, #15151744, transparent 70%)`,
          transition: "background 0.5s ease", // Smooth transition for background position
        }}
      ></div>
      <div className="absolute bg-[url('/hero-bg.svg')] bg-cover h-full w-full z-[2]"></div>
      <div className="hidden md:block">
        {companies.map((company: Companies, index) => {
          return (
            <LandingComponent
              key={index}
              right={company.right}
              top={company.top}
              transform={`translate3d(${moveX * ((index % 5) + 1) * 40}px, ${
                moveY * ((index % 5) + 1) * 40
              }px, 0px)`}
              icon={company.name}
            />
          );
        })}
      </div>
    </div>
  );
}
