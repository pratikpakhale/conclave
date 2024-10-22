"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import { motion } from "framer-motion";
import { companyIcons, positions } from "@/data/Landing";
import { Companies, Positions } from "@/types/Home";

export function LandingSection() {
  const [companies, setCompanies] = useState<Companies[]>([]);

  useEffect(() => {
    // Shuffle positions only
    const shuffledPositions = shuffleArray(positions);

    // Combine the shuffled positions with the company icons
    const newCompanies = companyIcons.map((icon, index) => ({
      name: icon?.icon,
      right: shuffledPositions[index].right,
      top: shuffledPositions[index].top,
      color: icon?.color ? icon?.color : null,
    }));

    setCompanies(newCompanies);
  }, []);

  const shuffleArray = (array: Positions[]) => {
    return array
      .map((value) => ({ ...value })) // Clone array to avoid mutation
      .sort(() => Math.random() - 0.5); // Random shuffle
  };

  const half = Math.ceil(companies.length / 2);
  const companiesFirstHalf = companies.slice(0, half);
  const companiesSecondHalf = companies.slice(half);
  return (
    <div className="h-[100dvh] relative w-full bg-text-col flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808016_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] "></div>
      <HeroSection />
      <div className="main">
        <div className="max-w-[100vw] block md:hidden absolute left-0 top-0 -translate-y-full overflow-hidden [mask:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)]">
          <div className="[padding-block:1rem] flex gap-16 w-max flex-nowrap animate-infinite-scroll">
            {companiesFirstHalf?.map((company, index) => {
              const Icon = company?.name;
              return (
                <Icon
                  key={index}
                  color={company?.color ? company?.color : "#151517"}
                  className="h-10 w-10"
                />
              );
            })}
            {companiesFirstHalf?.map((company, index) => {
              const Icon = company?.name;
              return (
                <Icon
                  key={index}
                  color={company?.color ? company?.color : "#151517"}
                  className="h-10 w-10"
                />
              );
            })}
          </div>
        </div>
        <div className="max-w-[100vw] block md:hidden absolute left-0 bottom-0 translate-y-full overflow-hidden [mask:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)] ">
          <div className="[padding-block:1rem] flex gap-16 w-max flex-nowrap animate-infinite-scroll direction-reverse">
            {companiesSecondHalf?.map((company, index) => {
              const Icon = company?.name;
              return (
                <Icon
                  key={index}
                  color={company?.color ? company?.color : "#151517"}
                  className="h-10 w-10"
                />
              );
            })}
            {companiesSecondHalf?.map((company, index) => {
              const Icon = company?.name;
              return (
                <Icon
                  key={index}
                  color={company?.color ? company?.color : "#151517"}
                  className="h-10 w-10"
                />
              );
            })}
          </div>
        </div>
        <div className="masker">
          <h1 className="text-[clamp(44px,10vw,88px)] leading-[1.2] font-bold text-center text-color1 relative z-20">
            <motion.div
              variants={{
                hidden: { scale: 1.3 },
                visible: { scale: 1 },
              }}
              initial="hidden" // Start from the hidden state
              animate="visible" // Animate to the visible state on load
              transition={{ duration: 0.9, ease: "easeInOut" }}
            >
              <p className="font-bold leading-[1.1] bg-clip-text text-transparent bg-gradient-to-tr from-slate-100 to-slate-200">
                IIIT Dharwad
              </p>
              <p className="font-bold leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Conclave 2024
              </p>
            </motion.div>
          </h1>
        </div>
      </div>
    </div>
  );
}
