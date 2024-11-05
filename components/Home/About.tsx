import React from "react";
import ScrollReveal from "../ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-8px sm:px-16px md:px-24px lg:px-28px xl:px-48px flex flex-col gap-24px py-20 text-text-col bg-color1"
    >
      <div className="text-h2 max-w-7xl w-full tracking-[-0.022em] leading-[1.1] font-semibold text-center mx-auto mb-28px">
        <ScrollReveal>
          <p>
            Discover our{" "}
            <span className="inline-block bg-[0_0] bg-[url('https://www.apple.com/careers/images/fy21/apple_jobs_gradient_final_Apple_Jobs_Gradients_Cool/desktop@2x.png')] bg-clip-text [-webkit-text-fill-color:transparent] [-webkit-box-decoration-break:clone] [background-size:100%_100%]">
              mission, values, and commitment{" "}
            </span>
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p> to shaping futures.</p>
        </ScrollReveal>
      </div>
      <ScrollReveal>
        <div className="relative max-w-7xl w-full mx-auto">
          The IIIT Dharwad Conclave serves as a platform to connect students,
          academia, and industry experts, fostering discussions on talent
          acquisition, workforce development, and evolving HR trends. It offers
          students a chance to engage with industry leaders, gain insights into
          career development, and explore the latest innovations in the job
          market, bridging the gap between academia and industry for future
          success.
        </div>
      </ScrollReveal>
    </section>
  );
}
