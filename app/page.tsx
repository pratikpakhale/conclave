'use client';
import { useRef } from 'react';
// import About from '@/components/Home/About';
import Footer from '@/components/Footer';
// import HeroSection from "@/components/Home/HeroSection";
import Navbar from '@/components/Navbar';

import SmoothScroll from '@/components/SmoothScroll';
import TimeLine from '@/components/Home/TimeLine';
import OverTheYears from '@/components/Home/OverTheYears';
// import Testimonials from "@/components/Testimonials/Testimonials";
import TestimonialsPage from '@/components/Testimonials';
import { LandingSection } from '@/components/Home/LandingSection';

export default function Home() {
  const upperBoundary = useRef(null);
  const lowerBoundary = useRef(null);

  return (
    <div className='w-full flex flex-col font-urbanist'>
      <SmoothScroll>
        <Navbar />
        {/* <LandingSection /> */}
        {/* <HeroSection /> */}
        {/* <About /> */}
        <TestimonialsPage
          boundaries={[upperBoundary.current, lowerBoundary.current]}
        />
        <TimeLine ref={lowerBoundary} />
        <OverTheYears />
        <Footer />
      </SmoothScroll>
    </div>
  );
}
