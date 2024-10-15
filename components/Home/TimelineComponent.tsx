import { TimelineType } from "@/types/Home";
import React from "react";

export default function TimelineComponent(props: TimelineType) {
  return (
    <div className="grid relative py-20 grid-cols-[1fr_180px_1fr]">
      <div className="w-full text-right">
        <p className="sticky text-white top-[50vh] text-4xl leading-[1.2] font-semibold tracking-[-0.03em]">
          {props?.time}
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="sticky top-[50vh] w-[15px] h-[15px] rounded-full shadow-[0_0_0_8px_#0a0a0a] bg-white"></div>
      </div>
      <div className="w-full text-white py-10">
        <p className="text-2xl font-semibold"> {props?.heading}</p>
        {props?.content}
      </div>
    </div>
  );
}
