"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function OverTheYears() {
  useEffect(() => {
    const mainSection = document.querySelector(
      "#over-the-years"
    ) as HTMLElement;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#over-the-years",
        start: "top bottom", // Start when the section's top reaches the bottom of the viewport
        end: "bottom top", // End when the bottom reaches the top of the viewport
        scrub: 1,
      },
    });

    tl.fromTo(
      "#mask",
      { maskSize: "50%" },
      {
        maskSize: "4000%",
        scrollTrigger: {
          trigger: "#over-the-years",
          start: "center center",
          //   end: () => "+=" + (mainSection?.offsetHeight ?? 0) / 6,
          scrub: 1,
        },
      }
    );

    tl.fromTo(
      ".opac",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: "#over-the-years",
          start: "center center",
          end: () => "+=" + ((mainSection?.offsetHeight ?? 0) * 2) / 6,
          scrub: 1,
        },
      }
    );
  });
  return (
    <section className="bg-[#ecf5ff] hidden md:block">
      {/* <div className="h-[50vh] z-[5] bg-[#ecf5ff] w-full"></div> */}
      <section
        id="over-the-years"
        className="bg-[#ecf5ff] h-[160vh] pb-[70vh] relative"
      >
        <div
          id="mask"
          className="flex w-full items-center justify-center overflow-hidden sticky z-[5] top-0 h-[170%] mask-years"
        >
          <div className="bg-black h-full w-full flex grayscale relative object-cover z-[5] gap-[2vw] p-[2vw] overflow-hidden justify-center items-center">
            <div className="min-w-40 w-[30%] h-full flex flex-col gap-[2vw] relative">
              <div className="opac rounded-lg w-full">
                <Image
                  className="h-auto w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>

              <div className="opac rounded-lg w-full">
                <Image
                  className="h-auto w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>
              <div className="opac rounded-lg w-full">
                <Image
                  className="h-auto w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>
              <div className="opac rounded-lg w-full">
                <Image
                  className="h-auto w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>
              <div className="opac rounded-lg w-full h-[200px]">
                <Image
                  className="h-full w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>
            </div>

            <div className="min-w-40 w-[30%] h-full flex flex-col gap-[2vw] relative">
              <div className="opac rounded-lg w-full">
                <Image
                  className="h-auto w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>

              <div className="opac rounded-lg w-full">
                <Image
                  className="h-auto w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>
              <div className="opac rounded-lg w-full">
                <Image
                  className="h-auto w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>
              <div className="opac rounded-lg w-full">
                <Image
                  className="h-auto w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>
              <div className="opac rounded-lg w-full h-[200px]">
                <Image
                  className="h-full w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>
            </div>

            <div className="min-w-40 w-[30%] h-full flex flex-col gap-[2vw] relative">
              <div className="opac rounded-lg w-full">
                <Image
                  className="h-auto w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>

              <div className="opac rounded-lg w-full">
                <Image
                  className="h-auto w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>
              <div className="opac rounded-lg w-full">
                <Image
                  className="h-auto w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>
              <div className="opac rounded-lg w-full">
                <Image
                  className="h-auto w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>
              <div className="opac rounded-lg w-full h-[200px]">
                <Image
                  className="h-full w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>
            </div>

            <div className="min-w-40 w-[30%] h-full flex flex-col gap-[2vw] relative">
              <div className="opac rounded-lg w-full">
                <Image
                  className="h-auto w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>

              <div className="opac rounded-lg w-full">
                <Image
                  className="h-auto w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>
              <div className="opac rounded-lg w-full">
                <Image
                  className="h-auto w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>
              <div className="opac rounded-lg w-full">
                <Image
                  className="h-auto w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>
              <div className="opac rounded-lg w-full h-[200px]">
                <Image
                  className="h-full w-full object-cover"
                  alt="image1"
                  src={"/independence_day_78_4.jpg"}
                  height={0}
                  width={0}
                  sizes="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
