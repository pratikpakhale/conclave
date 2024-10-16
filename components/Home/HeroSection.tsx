"use client";

import React, { useState, useEffect } from "react";
import { companies } from "@/data/Landing";
import { Companies } from "@/types/Home";
import LandingComponent from "./LandingCompnent";

export default function HeroSection() {
  // Set initial state without accessing window properties
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
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
    <>
      {companies.map((company: Companies, index) => {
        return (
          <LandingComponent
            key={index}
            right={company.right}
            top={company.top}
            transform={`translate3d(${moveX * ((index % 10) + 1) * 20}px, ${
              moveY * (index % 10) * 20
            }px, 0px)`}
            icon={company.name}
          />
        );
      })}
    </>
  );
}
