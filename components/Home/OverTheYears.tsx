// "use client";
import React from "react";
import Image from "next/image";
import { data1, data2 } from "@/data/over-the-years";

export default function OverTheYears() {
  return (
    <section className="block bg-text-col h-[150vh] w-full relative">
      <div className="bg-black h-full w-full flex relative object-cover gap-[2vw] px-[2vw] overflow-hidden justify-center items-center">
        <div
          // style={{ opacity: opacity }}
          className="min-w-40 w-[30%] overflow-hidden  h-full relative"
        >
          <div className="[padding-block:1rem] flex flex-col gap-[2vw] h-max flex-nowrap animate-infinite-scroll-y direction-reverse">
            {data1?.map((item, index) => (
              <Image
                className={`h-auto w-full object-cover rounded-lg`}
                alt="image1"
                src={`/over-the-years/${item}`}
                key={index}
                height={0}
                width={0}
                sizes="100%"
                placeholder="blur"
                blurDataURL="/over-the-years/loading.jpg"
              />
            ))}
          </div>
        </div>
        <div
          // style={{ opacity: opacity }}
          className="min-w-40 w-[30%] overflow-hidden  h-full relative"
        >
          <div className="[padding-block:1rem] flex flex-col gap-[2vw] h-max flex-nowrap animate-infinite-scroll-y">
            {data2?.map((item, index) => (
              <Image
                className={`h-auto w-full object-cover rounded-lg`}
                alt="image1"
                src={`/over-the-years/${item}`}
                key={index}
                height={0}
                width={0}
                sizes="100%"
                placeholder="blur"
                blurDataURL="/over-the-years/loading.jpg"
              />
            ))}
          </div>
        </div>
        <div
          // style={{ opacity: opacity }}
          className="min-w-40 w-[30%] overflow-hidden  h-full relative"
        >
          <div className="[padding-block:1rem] flex flex-col gap-[2vw] h-max flex-nowrap animate-infinite-scroll-y direction-reverse">
            {data1?.map((item, index) => (
              <Image
                className={`h-auto w-full object-cover rounded-lg`}
                alt="image1"
                src={`/over-the-years/${item}`}
                key={index}
                height={0}
                width={0}
                sizes="100%"
                placeholder="blur"
                blurDataURL="/over-the-years/loading.jpg"
              />
            ))}
          </div>
        </div>
        <div
          // style={{ opacity: opacity }}
          className="min-w-40 w-[30%] overflow-hidden h-full relative"
        >
          <div className="[padding-block:1rem] flex flex-col gap-[2vw] h-max flex-nowrap animate-infinite-scroll-y">
            {data2?.map((item, index) => (
              <Image
                className={`h-auto w-full object-cover rounded-lg`}
                alt="image1"
                src={`/over-the-years/${item}`}
                key={index}
                height={0}
                width={0}
                sizes="100%"
                placeholder="blur"
                blurDataURL="/over-the-years/loading.jpg"
              />
            ))}
          </div>
        </div>

        {/* mobile */}

        {/* <motion.div
              style={{ opacity: opacity }}
              className="min-w-40 w-[50%] overflow-hidden md:hidden h-full relative"
            >
              <div className="[padding-block:1rem] flex flex-col gap-[2vw] h-max flex-nowrap animate-infinite-scroll-y">
                {data11?.map((item, index) => (
                  <Image
                    className={`h-auto w-full object-cover rounded-lg`}
                    alt="image1"
                    src={`/over-the-years/${item}`}
                    key={index}
                    height={0}
                    width={0}
                    sizes="100%"
                    placeholder="blur"
                    blurDataURL="/over-the-years/loading.jpg"
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: opacity }}
              className="min-w-40 w-[50%] overflow-hidden md:hidden h-full relative"
            >
              <div className="[padding-block:1rem] flex flex-col gap-[2vw] h-max flex-nowrap animate-infinite-scroll-y direction-reverse">
                {data12?.map((item, index) => (
                  <Image
                    className={`h-auto w-full object-cover rounded-lg`}
                    alt="image1"
                    src={`/over-the-years/${item}`}
                    key={index}
                    height={0}
                    width={0}
                    sizes="100%"
                    placeholder="blur"
                    blurDataURL="/over-the-years/loading.jpg"
                  />
                ))}
              </div>
            </motion.div> */}

        {/* <motion.div
          style={{ width: width, height: height }}
          className="fixed bottom-0 bg-color1/95 p-28px md:p-48px text-text-col backdrop-blur-2xl rounded-t-24px shadow-[0_-3px_hsla(0,0%,100%,.149)]"
        >
          <motion.div
            style={{ opacity: opac }}
            className=" flex overflow-clip h-full flex-col items-center justify-between"
          >
            <div className="flex flex-col gap-4 w-full">
              <h2 className="text-16px md:text-28px leading-[1.1]">
                Connect with us to be a part of the HR Conclave 2024 and explore
                endless opportunities!
              </h2>
              <Link
                href={"/contact"}
                className="w-fit text-color1 bg-text-col px-24px py-12px text-16px rounded-16px"
              >
                Contact
              </Link>
            </div>

            <div className="w-full hidden md:flex flex-col h-full flex-1 justify-between text-12px pt-48px">
              <div className="grid grid-cols-4">
                <div className="h-full flex items-end"></div>
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

              <div className="">Copyright © IIIT Dharwad - 2024</div>
            </div>

            <div className="flex flex-col py-4 gap-4 w-full text-12px md:hidden">
              <div className="">
                Indian Institute of Information Technology (IIIT) Dharwad,
                Ittigatti Rd, near Sattur Colony, Karnataka 580009 92VG+24 Joga
                Yellapur, Karnataka
              </div>
              <div className="grid grid-cols-2 text-xs">
                <div className="pr-20 flex flex-col gap-8px">
                  <div className="font-bold mb-2">Site Map</div>
                  <Link href={"/testimonials"}>Testimonials</Link>
                  <Link href={"/rsvp"}>RSVP</Link>
                  <Link href={"/attendee"}>Attendee</Link>
                  <Link href={"/team"}>Committee</Link>
                  <Link href={"/developers"}>Team</Link>
                </div>
                <div className="pr-20 flex flex-col gap-12px">
                  <div className="font-bold mb-2">Follow Us</div>
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
              <div className="h-full flex items-end w-full">
                <div className="text-end w-full">
                  Copyright © IIIT Dharwad - 2024
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}
