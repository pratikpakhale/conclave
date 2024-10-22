import React from "react";
import LinkedInCarousel from "./EmblaCarousel";
import ScrollReveal from "../ScrollReveal";

export default function LinkedInMain() {
  return (
    <div className="w-full px-2 sm:px-4 md:px-8px lg:px-24px xl:px-48px flex flex-col py-20 text-text-col bg-color1">
      <div className="bg-color1 px-4 py-20 w-full text-center leading-[1.1] tracking-tighter flex items-center gap-2 flex-col">
        <ScrollReveal>
          <div className="text-48px font-bold">
            Stay connected with the latest
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="text-48px font-bold ">
            <span className="bg-clip-text text-transparent bg-[url('https://www.apple.com/careers/images/fy21/apple_jobs_gradient-final_Apple_Jobs_Gradients_Warm/desktop@2x.png')] [-webkit-text-fill-color:transparent] [-webkit-box-decoration-break:clone] [background-size:100%_100%]">
              insights and updates{" "}
            </span>
            from our community.
          </div>
        </ScrollReveal>
      </div>
      <LinkedInCarousel />
    </div>
  );
}
