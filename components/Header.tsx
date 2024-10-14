import React from "react";

export default function Header({ text }: { text: string }) {
  return (
    <h1 className="font-anton top-10 mb-20 relative left-8 z-[2] w-full text-[3rem] text-[#1b1e24] uppercase leading-[1] md:text-[90px]">
      {text}
      <span className="font-anton absolute -bottom-3 -left-2 z-[-1] text-[6rem] text-[#1b1e24]/20 md:-left-8 md:text-[150px]">
        {text}
      </span>
    </h1>
  );
}
