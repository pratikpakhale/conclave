import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

export default function Testimonials() {
  return (
    <div className="py-40 bg-[#ecf5ff]">
      <div className="text-[#002fff] py-16 pl-10 tracking-[-0.03em] leading-[0.9]">
        <div className="text-[clamp(3.5em,6vw,4em)]">
          Inspiring Testimonials
        </div>
        <div className="text-[clamp(2.5em,6vw,3em)]">
          from our esteemed alumni.
        </div>
      </div>
      <TestimonialCarousel />
    </div>
  );
}
