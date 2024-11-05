import React from "react";
import ScrollReveal from "../ScrollReveal";
import { motion } from "framer-motion";
import { ConnectData } from "@/data/Connect";

export default function Connect() {
  return (
    <div className="w-full px-8px sm:px-16px md:px-24px lg:px-28px xl:px-48px flex flex-col gap-24px py-20 text-color1 bg-text-col">
      <div className="text-h2 max-w-7xl w-full tracking-[-0.022em] leading-[1.1] font-semibold text-center mx-auto mb-28px">
        <ScrollReveal>
          <p>
            Join us to{" "}
            <span className="inline-block bg-[0_0] bg-[url('https://www.apple.com/careers/images/fy21/apple_jobs_gradient_final_Apple_Jobs_Gradients_Full_Large/desktop@2x.png')] bg-clip-text [-webkit-text-fill-color:transparent] [-webkit-box-decoration-break:clone] [background-size:100%_100%]">
              innovate, collaborate, and advance
            </span>
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>your career in meaningful ways.</p>
        </ScrollReveal>
      </div>

      <motion.div
        className="w-full text-center grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 gap-8px lg:grid-cols-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2, // Controls the stagger of the child animations
            },
          },
        }}
      >
        {ConnectData.map((card, index) => (
          <ScrollReveal delay={index * 0.2} key={index}>
            <motion.div
              key={index}
              className="rounded-16px p-16px cursor-pointer hover:[background:linear-gradient(45deg,white,white)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.300/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.300/.48))_border-box] border-transparent animate-border border-[2px] bg-white aspect-square group relative flex items-center justify-center"
              transition={{ duration: 0.3 }}
            >
              <div className="text-28px xl:text-20px font-medium group-hover:text-24px transition-all duration-500 group-hover:-translate-y-full">
                {card?.title}
              </div>
              <div className="absolute font-light bottom-0 mb-24px mx-120px w-[60%] text-16px xl:text-12px opacity-0 transition-all duration-500 group-hover:opacity-100">
                {card?.content}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </motion.div>
    </div>
  );
}
