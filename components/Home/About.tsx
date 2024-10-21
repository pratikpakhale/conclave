import React from "react";
import Reveal from "../Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-8px sm:px-16px md:px-24px lg:px-28px xl:px-48px flex flex-col gap-24px py-20 text-text-col bg-color1"
    >
      <Reveal delay={0.3} width="100%" yPos={true}>
        <div className="text-h2 max-w-7xl w-full mx-auto mb-4px">About</div>
      </Reveal>
      <Reveal delay={0.5} width="100%" yPos={true}>
        <div className="relative max-w-7xl w-full mx-auto">
          The HR Conclave serves as a platform to connect students, academia,
          and industry experts, fostering discussions on talent acquisition,
          workforce development, and evolving HR trends. It offers students a
          chance to engage with industry leaders, gain insights into career
          development, and explore the latest innovations in the job market,
          bridging the gap between academia and industry for future success.
        </div>
      </Reveal>
    </section>
  );
}
