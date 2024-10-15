import { LandingComponents } from "@/types/Home";
import React from "react";
export default function LandingComponent(props: LandingComponents) {
  return (
    <a
      className={`border absolute -translate-y-1/2 border-[rgb(216,216,216)] hover:bg-[#bfdbf7] hover:text-[#537299] ease-in-out cursor-pointer rounded-lg hover:scale-150 hover:z-[1000] component-transition duration-[1500ms] hover:border-[#3a506b] hover:shadow-hover-landing shadow-landing z-10 bg-white px-[24px] py-[14px]`}
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        right: props?.right,
        top: props?.top,
        transformOrigin: "center", // Add this line
        transform: props?.transform, // Apply the transform prop directly
      }}
    >
      {props?.text}
    </a>
  );
}
