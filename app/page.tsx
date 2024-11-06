"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TimeLine from "@/components/Home/TimeLine";
import OverTheYears from "@/components/Home/OverTheYears";
import { LandingSection } from "@/components/Home/LandingSection";
import { TestimonialMain } from "@/components/Home/Testimonials/TestimonialMain";
import { useEffect, useState } from "react";
import About from "@/components/Home/About";
import Connect from "@/components/Home/Connect";
import LinkedInMain from "@/components/Linkedin/LinkedInMain";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: { lerp: 0.03 },
      });

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        // window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <div className="w-full flex flex-col bg-color1 font-grotesk">
      {/* <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence> */}
      <div className="z-[5] w-full">
        <Navbar />
        <LandingSection />
        {/* <HeroSection /> */}
        <About />
        <Connect />
        <LinkedInMain />
        {/* <TestimonialsPage /> */}
        <TestimonialMain />
        <TimeLine />
        <OverTheYears />
        <Footer />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
