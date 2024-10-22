import React from "react";
import { LandingComponents } from "@/types/Home";

export default function LandingComponent(props: LandingComponents) {
  const Icon = props?.icon; // Destructure the icon component

  return (
    <a
      className={`absolute -translate-y-1/2 cursor-pointer rounded-lg hover:scale-125 hover:z-[6] component-transition z-[5] text-[#797373]`}
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        right: props?.right,
        top: props?.top,
        transformOrigin: "center",
        transform: props?.transform,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.color = props?.color ? props?.color : "#e8e8e8")
      }
      onMouseLeave={(e) => (e.currentTarget.style.color = "#797777")}
    >
      {Icon && (
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
      )}
    </a>
  );
}
