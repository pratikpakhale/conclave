import React from "react";
// import TestimonialCarousel from "./TestimonialCarousel";
import { testimonials1 } from "@/data/companies";
import Image from "next/image";
import TestimonialCarousel from "./TestimonialCarousel";

export default function Testimonials() {
  return (
    <div id="testimonials" className="py-40 bg-[#ecf5ff]">
      <div className="text-[#002fff] py-16 pl-10 tracking-[-0.03em] leading-[0.9]">
        <div className="text-[clamp(3.5em,6vw,4em)]">
          Inspiring Testimonials
        </div>
        <div className="text-[clamp(2.5em,6vw,3em)]">
          from our esteemed alumni.
        </div>
      </div>
      {/* <TestimonialCarousel /> */}
      <section className="py-20 w-full px-4 md:px-10">
        <div className="flex gap-10 md:flex-row flex-col items-center">
          <div className="overflow-hidden w-full">
            <div className="flex gap-12 opacity-[0.4] w-fit relative items-center flex-nowrap scroll">
              {testimonials1?.map((item, index) => (
                <div
                  className="border border-slate-400 w-[400px] p-4 rounded flex gap-4"
                  key={index}
                >
                  <div className="flex flex-col">
                    <div className="h-20 aspect-square rounded-full overflow-hidden">
                      <Image
                        width={0}
                        height={0}
                        sizes="100%"
                        className="h-full w-full object-cover"
                        src={item?.img}
                        alt={item?.name}
                      />
                    </div>

                    <p className="text-sm">{item?.company}</p>
                  </div>
                  <div className="flex justify-between flex-col">
                    <div className="">{item?.name}</div>
                    <div className="leading-[1.3]">{item?.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
