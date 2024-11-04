import React from "react";
import { LandingComponents } from "@/types/Home";
import Image from "next/image";

export default function LandingComponent(props: LandingComponents) {
  // const Icon = props?.icon; // Destructure the icon component

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
      {/* {Icon && (
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
      )} */}
      <Image
        className="h-6 sm:h-4 md:h-6 lg:h-8 xl:h-10 w-auto grayscale hover:grayscale-0"
        alt={"icon"}
        src={props?.icon}
        width={0}
        height={0}
        sizes="100%"
      />
    </a>
  );
}
