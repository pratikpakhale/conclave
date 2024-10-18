"use client";

// import About from '@/components/Home/About';
import Footer from "@/components/Footer";
// import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Navbar";

// import SmoothScroll from "@/components/SmoothScroll";
import TimeLine from "@/components/Home/TimeLine";
import OverTheYears from "@/components/Home/OverTheYears";
// import Testimonials from "@/components/Testimonials/Testimonials";
import { LandingSection } from "@/components/Home/LandingSection";
import { TestimonialMain } from "@/components/Home/Testimonials/TestimonialMain";
import TestimonialsPage from "@/components/Testimonials";
import { useEffect, useState } from "react";
import About from "@/components/Home/About";
import Connect from "@/components/Home/Connect";
import LinkedInMain from "@/components/Linkedin/LinkedInMain";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({ lerp: 0.005 });

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <div className="w-full flex flex-col font-grotesk">
      <Navbar />
      <div className="z-[5] w-full">
        <LandingSection />
        {/* <HeroSection /> */}
        <About />
        <Connect />
        <LinkedInMain />
        <TestimonialsPage />
        {/* <TestimonialMain /> */}
        <TimeLine />
        <OverTheYears />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
