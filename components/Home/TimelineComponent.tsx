import { TimelineType } from "@/types/Home";
import React from "react";
import Reveal from "../Reveal";

export default function TimelineComponent(props: TimelineType) {
  return (
    <div className="grid relative w-full grid-cols-[80px_1fr] md:grid-cols-[180px_1fr_2fr]">
      <div className="w-full flex justify-center">
        <div className="sticky top-[50vh] translate-x-[1px] w-4 h-4 rounded-full shadow-[0_0_0_8px_#000] bg-white"></div>
      </div>
      <Reveal delay={0.1} width="100%" yPos={true}>
        <div className="w-full hidden py-8 md:py-10 md:block">
          <p className="sticky text-text-col top-[50vh] text-4xl leading-[1.2] font-semibold tracking-[-0.03em]">
            {props?.time}
          </p>
        </div>
      </Reveal>
      {/* <div className="w-full text-white py-10">
        <p className="text-2xl font-semibold"> {props?.heading}</p>
        {props?.content}
      </div> */}
      <Reveal delay={0.3} width="100%" yPos={false}>
        <div className="w-full py-8 md:py-10 md:block hidden text-text-col pr-2">
          <p className="text-lg md:text-28px leading-9 font-semibold">
            {" "}
            {props?.heading}
          </p>
          {props?.content}
        </div>
      </Reveal>

      <div className="block py-8 md:py-10 md:hidden w-full overflow-hidden pr-2">
        <Reveal delay={0.1} width="100%" yPos={true}>
          <div className="w-full">
            <p className="sticky text-text-col top-[50vh] text-xl md:text-4xl leading-[1.2] font-semibold tracking-[-0.03em]">
              {props?.time}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.3} width="100%" yPos={false}>
          <div className="w-full text-text-col py-10 pr-2">
            <p className="text-lg md:text-2xl leading-10 font-semibold">
              {" "}
              {props?.heading}
            </p>
            {props?.content}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
