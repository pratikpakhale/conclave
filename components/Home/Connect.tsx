import React from "react";
import Reveal from "../Reveal";

export default function Connect() {
  return (
    <div className="w-full px-8px sm:px-16px md:px-24px lg:px-28px xl:px-48px flex flex-col gap-24px py-20 text-color1 bg-text-col">
      <Reveal delay={0.3} width="100%" yPos={true}>
        <div className="text-h2 max-w-7xl w-full mx-auto mb-4px">
          Why work with Us?
        </div>
      </Reveal>
      <div className="w-full text-center grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 gap-8px lg:grid-cols-4">
        <Reveal delay={0.6} width="100%" yPos={true}>
          <div className="rounded-16px cursor-pointer hover:[background:linear-gradient(45deg,white,white)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.300/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.300/.48))_border-box] border-transparent animate-border border-[2px] bg-white aspect-square group relative flex items-center justify-center">
            <div className="text-28px font-medium group-hover:text-24px transition-all duration-500 group-hover:-translate-y-full">
              Innovative Culture
            </div>
            <div className="absolute font-light bottom-0 mb-24px mx-120px w-[60%] text-16px opacity-0 transition-all duration-500 group-hover:opacity-100">
              We nurture creativity, fostering groundbreaking ideas and unique
              solutions.
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.7} width="100%" yPos={true}>
          <div className="rounded-16px cursor-pointer hover:[background:linear-gradient(45deg,white,white)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.300/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.300/.48))_border-box] border-transparent animate-border border-[2px] bg-white aspect-square group relative flex items-center justify-center">
            <div className="text-28px font-medium group-hover:text-24px transition-all duration-500 group-hover:-translate-y-full">
              Growth Opportunities
            </div>
            <div className="absolute font-light bottom-0 mb-24px mx-120px w-[60%] text-16px opacity-0 transition-all duration-500 group-hover:opacity-100">
              Unlock personal and professional growth through continuous
              learning and challenges.
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.8} width="100%" yPos={true}>
          <div className="rounded-16px cursor-pointer hover:[background:linear-gradient(45deg,white,white)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.300/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.300/.48))_border-box] border-transparent animate-border border-[2px] bg-white aspect-square group relative flex items-center justify-center">
            <div className="text-28px font-medium group-hover:text-24px transition-all duration-500 group-hover:-translate-y-full">
              Collaborative Environment
            </div>
            <div className="absolute font-light bottom-0 mb-24px mx-120px w-[60%] text-16px opacity-0 transition-all duration-500 group-hover:opacity-100">
              Work in a team-focused environment, driving success through
              cooperation.
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.9} width="100%" yPos={true}>
          <div className="rounded-16px cursor-pointer hover:[background:linear-gradient(45deg,white,white)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.300/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.300/.48))_border-box] border-transparent animate-border border-[2px] bg-white aspect-square group relative flex items-center justify-center">
            <div className="text-28px font-medium group-hover:text-24px transition-all duration-500 group-hover:-translate-y-full">
              Work-Life Balance
            </div>
            <div className="absolute font-light bottom-0 mb-24px mx-120px w-[60%] text-16px opacity-0 transition-all duration-500 group-hover:opacity-100">
              Enjoy a healthy balance between your professional and personal
              life.
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
