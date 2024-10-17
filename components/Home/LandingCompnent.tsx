import React from "react";
import { LandingComponents } from "@/types/Home";

export default function LandingComponent(props: LandingComponents) {
  const Icon = props?.icon; // Destructure the icon component

  return (
    <a
      className={`absolute -translate-y-1/2 hover:text-[#537299] cursor-pointer rounded-lg hover:scale-150 hover:z-[6] component-transition z-[5] text-[#3b373790]`}
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        right: props?.right,
        top: props?.top,
        transformOrigin: "center",
        transform: props?.transform, // Apply the transform prop directly
      }}
    >
      {Icon && <Icon size={44} />} {/* Render the icon if it exists */}
    </a>
  );
}
