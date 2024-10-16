import { LandingComponents } from "@/types/Home";
import React from "react";
export default function LandingComponent(props: LandingComponents) {
  return (
    <a
      className={` absolute -translate-y-1/2 hover:bg-[#bfdbf7] hover:text-[#537299] cursor-pointer rounded-lg hover:scale-150 hover:z-[1000] component-transition hover:border-[#3a506b] hover:shadow-hover-landing shadow-landing z-10 text-white bg-[#a6cdff23] px-[24px] py-[14px]`}
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
