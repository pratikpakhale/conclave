"use client";
import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { data1, data2, data3, data4 } from "@/data/over-the-years";
import { useScroll, useTransform, motion, cubicBezier } from "framer-motion";
import Link from "next/link";

// gsap.registerPlugin(ScrollTrigger);

export default function OverTheYears() {
  const targetRef = useRef(null);
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: targetRef,
    offset: ["60% end", "end end"],
  });

  // Second scroll progress (80% to end)
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef,
    offset: ["80% end", "end end"],
  });

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: targetRef,
    offset: ["85% end", "end end"],
  });

  const size = useTransform(scrollYProgress1, [0, 1], ["50%", "4000%"], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  });

  const opacity = useTransform(scrollYProgress1, [0, 1], [0, 1], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  });

  const width = useTransform(scrollYProgress2, [0, 1], ["0vw", "96vw"], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  });

  const opac = useTransform(scrollYProgress3, [0, 1], [0, 1], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  });

  const height = useTransform(scrollYProgress2, [0, 1], ["0vh", "70vh"], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  });

  // useEffect(() => {
  //   const mainSection = document.querySelector(
  //     "#over-the-years"
  //   ) as HTMLElement;

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#over-the-years",
  //       start: "top bottom", // Start when the section's top reaches the bottom of the viewport
  //       end: "bottom top", // End when the bottom reaches the top of the viewport
  //       scrub: 1,
  //     },
  //   });

  //   tl.fromTo(
  //     "#mask",
  //     { maskSize: "150%" },
  //     {
  //       maskSize: "4000%",
  //       scrollTrigger: {
  //         trigger: "#over-the-years",
  //         start: "center center",
  //         //   end: () => "+=" + (mainSection?.offsetHeight ?? 0) / 6,
  //         scrub: 1,
  //       },
  //     }
  //   );

  //   tl.fromTo(
  //     ".opac",
  //     { opacity: 0 },
  //     {
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: "#over-the-years",
  //         start: "center center",
  //         end: () => "+=" + ((mainSection?.offsetHeight ?? 0) * 2) / 6,
  //         scrub: 1,
  //       },
  //     }
  //   );
  // });
  return (
    <section className="hidden md:block bg-text-col h-screen relative">
      {/* <div className="h-[50vh] z-[5] bg-[#ecf5ff] w-full"></div> */}
      <section id="over-the-years" className="h-[130vh] top-[-80vh] absolute">
        <motion.div
          id="mask"
          ref={targetRef}
          style={{ maskSize: size }}
          className="flex w-full items-center justify-center overflow-hidden sticky top-0 h-[160%] mask-years"
        >
          <div className="bg-black h-full w-full flex grayscale relative object-cover gap-[2vw] p-[2vw] overflow-hidden justify-center items-center">
            <motion.div
              style={{ opacity: opacity }}
              className="min-w-40 w-[30%] h-full flex flex-col gap-[2vw] relative"
            >
              {data1?.map((item, index) => (
                <div key={index} className="opac rounded-lg w-full">
                  <Image
                    className="h-auto w-full object-cover"
                    alt="image1"
                    src={`/over-the-years/` + item}
                    height={0}
                    width={0}
                    sizes="100%"
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              style={{ opacity: opacity }}
              className="min-w-40 w-[30%] h-full flex flex-col gap-[2vw] relative"
            >
              {data2?.map((item, index) => (
                <div key={index} className="opac rounded-lg w-full">
                  <Image
                    className="h-auto w-full object-cover"
                    alt="image1"
                    src={`/over-the-years/` + item}
                    height={0}
                    width={0}
                    sizes="100%"
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              style={{ opacity: opacity }}
              className="min-w-40 w-[30%] h-full flex flex-col gap-[2vw] relative"
            >
              {data3?.map((item, index) => (
                <div key={index} className="opac rounded-lg w-full">
                  <Image
                    className="h-auto w-full object-cover"
                    alt="image1"
                    src={`/over-the-years/` + item}
                    height={0}
                    width={0}
                    sizes="100%"
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              style={{ opacity: opacity }}
              className="min-w-40 w-[30%] h-full flex flex-col gap-[2vw] relative"
            >
              {data4?.map((item, index) => (
                <div key={index} className="opac rounded-lg w-full">
                  <Image
                    className="h-auto w-full object-cover"
                    alt="image1"
                    src={`/over-the-years/` + item}
                    height={0}
                    width={0}
                    sizes="100%"
                  />
                </div>
              ))}
            </motion.div>

            <motion.div
              style={{ width: width, height: height }}
              className="fixed bottom-0 bg-color1/95 p-48px text-text-col backdrop-blur-2xl rounded-t-24px shadow-[0_-3px_hsla(0,0%,100%,.149)]"
            >
              <motion.div
                style={{ opacity: opac }}
                className=" flex flex-col items-center justify-between "
              >
                <div className="flex flex-col gap-4 w-full">
                  <h2 className="text-28px leading-[1.1]">
                    Connect with us to be a part of the HR Conclave 2024 and
                    explore endless opportunities!
                  </h2>
                  <Link
                    href={"/contact"}
                    className="w-fit text-color1 bg-text-col px-24px py-12px text-16px rounded-16px"
                  >
                    Contact
                  </Link>
                </div>

                <div className="w-full grid grid-cols-4 text-12px pt-48px">
                  <div className="h-full flex items-end">
                    <div>Copyright © IIIT Dharwad - 2024</div>
                  </div>
                  <div className="pr-20">
                    Indian Institute of Information Technology (IIIT) Dharwad,
                    Ittigatti Rd, near Sattur Colony, Karnataka 580009 92VG+24
                    Joga Yellapur, Karnataka
                  </div>
                  <div className="pr-20 flex flex-col gap-12px">
                    <div className="font-bold mb-4">Site Map</div>
                    <Link href={"/testimonials"}>Testimonials</Link>
                    <Link href={"/rsvp"}>RSVP</Link>
                    <Link href={"/attendee"}>Attendee</Link>
                    <Link href={"/team"}>Committee</Link>
                    <Link href={"/developers"}>Team</Link>
                  </div>
                  <div className="pr-20 flex flex-col gap-12px">
                    <div className="font-bold mb-4">Follow Us</div>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/cgc-connect-iiit-dharwad-1a0321333/"
                    >
                      Linkedin
                    </a>
                    <a target="_blank" href="https://x.com/cgc_iiitdwd">
                      Twitter
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/cgc.iiitdwd/"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </section>
  );
}
