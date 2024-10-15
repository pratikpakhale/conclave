'use client';

import About from '@/components/About';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';

import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <div className='w-full flex flex-col '>
      <SmoothScroll>
        <Navbar />
        <HeroSection />
        <About />
        <Footer />
      </SmoothScroll>
    </div>
  );
}
