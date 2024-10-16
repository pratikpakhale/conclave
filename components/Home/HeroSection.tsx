"use client";

import React, { useState, useEffect } from "react";
import { companies } from "@/data/Landing";
import { Companies } from "@/types/Home";
import LandingComponent from "./LandingCompnent";

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

  // Calculating movement based on cursor position
  const moveX = 1 / 2 - mousePosition.x / window.innerWidth;
  const moveY = 1 / 2 - mousePosition.y / window.innerHeight;

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
            text={company.name}
          />
        );
      })}
    </>
  );
}
