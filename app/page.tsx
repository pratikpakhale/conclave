// 'use client';

// import About from '@/components/Home/About';
import Footer from "@/components/Footer";
// import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Navbar";

import SmoothScroll from "@/components/SmoothScroll";
import TimeLine from "@/components/Home/TimeLine";
import OverTheYears from "@/components/Home/OverTheYears";
import Testimonials from "@/components/Testimonials/Testimonials";
import { LandingSection } from "@/components/Home/LandingSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col font-urbanist">
      <SmoothScroll>
        <Navbar />
        <LandingSection />
        {/* <HeroSection /> */}
        {/* <About /> */}
        <Testimonials />
        <TimeLine />
        <OverTheYears />
        <Footer />
      </SmoothScroll>
    </div>
  );
}
