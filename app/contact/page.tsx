"use client";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Page() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-150, -300]);
  return (
    <section className="bg-[#080618] min-h-[100dvh]">
      <Navbar />
      <div className="max-w-5xl flex flex-col mx-auto text-white">
        <div className="flex-1 flex-col flex">
          <div className="flex px-10 md:px-0 items-end mb-[16rem]">
            <div className="pt-[16rem] flex-1 pr-10 text-[clamp(30px,7vw,72px)] leading-[1.1]">
              Let&apos;s start a project together
            </div>
            <div className="flex-none w-[300px] pl-10">
              <Image
                height={0}
                width={0}
                sizes="100%"
                className="h-20 w-20 object-cover rounded-full"
                alt="image"
                src={"/Photo.jpg"}
              />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-10">
            <div className="flex-1 px-10 md:px-0">
              <div className="w-full flex-1 border-t border-t-slate-600 py-10">
                <div className="val flex w-full text-[1.3rem]">
                  <div className="flex flex-col">
                    <div className="mb-4">What&apos;s your name?</div>
                    <input
                      type="text"
                      className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                      placeholder="John Doe *"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full border-t border-t-slate-600 py-10">
                <div className="val flex w-full text-[1.3rem]">
                  <div className="flex flex-col">
                    <div className="mb-4">What&apos;s your email?</div>
                    <input
                      type="email"
                      className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                      placeholder="john@email.com *"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full border-t border-t-slate-600 py-10">
                <div className="val flex w-full text-[1.3rem]">
                  <div className="flex flex-col">
                    <div className="mb-4">
                      What services are you looking for?
                    </div>
                    <input
                      className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                      placeholder="Web Design, Web Development... "
                    />
                  </div>
                </div>
              </div>
              <div className="w-full border-t border-t-slate-600 py-10">
                <div className="val flex w-full text-[1.3rem]">
                  <div className="flex flex-col">
                    <div className="mb-4">Your message</div>
                    <input
                      className="placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full"
                      placeholder="Hello Nikhil, can you help me with... *"
                    />
                  </div>
                </div>
              </div>

              <div className="py-40">
                <div className="border-b border-b-gray-500 pb-[100px] relative">
                  <motion.div
                    style={{ x }}
                    className="absolute right-0 -translate-y-1/2"
                  >
                    <button className="w-[150px] md:w-[180px] aspect-square bg-[#8a84e3] text-white rounded-full absolute flex items-center justify-center">
                      <p className="z-[2] relative">Send it!</p>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="w-[300px] pl-10 text-sm flex-none">
              <div className="mb-10">
                <span className="text-gray-700 uppercase">Contact Details</span>
                <div className="mt-2">nikhilkarthik241103@gmail.com</div>
              </div>
              <div className="mb-10">
                <span className="text-gray-700 uppercase">
                  Business Details
                </span>
                <div className="mt-2">Location: India</div>
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <span className="text-gray-700 uppercase">Socials</span>
                <a
                  className="mt-2"
                  target="_blank"
                  href="https://www.linkedin.com/in/nikhilkarthik24/"
                >
                  Linkedin
                </a>
                <a
                  className="mt-2"
                  target="_blank"
                  href="https://www.x.com/@nikhilkarthik24/"
                >
                  Twitter
                </a>
                <a
                  className="mt-2"
                  target="_blank"
                  href="https://www.instagram.com/nikhilkarthik_24/"
                >
                  Instagram
                </a>
                <a
                  className="mt-2"
                  target="_blank"
                  href="https://github.com/C-NikhilKarthik"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-white flex-col-reverse md:flex-row gap-4 justify-between p-5">
        <div className="flex gap-[10px] items-end">
          <span className="flex flex-col gap-4">
            <h3 className="px-1 text-gray-400">Version</h3>
            <p className="px-1 cursor-pointer ">2024 © Edition</p>
          </span>
          {/* <span className="flex flex-col gap-4">
              <h3 className="text-gray-400">Local Time</h3>
              <p>11:49 PM GMT+2</p>
            </span> */}
        </div>
        <span className="flex border-b border-b-gray-500 md:border-b-0 flex-col gap-4 pb-4 md:pb-0 md:items-end">
          <h3 className="text-gray-400">Socials</h3>
          <div className="flex gap-4 flex-wrap">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nikhilkarthik24/"
            >
              Linkedin
            </a>
            <a target="_blank" href="https://www.x.com/@nikhilkarthik24/">
              Twitter
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/nikhilkarthik_24/"
            >
              Instagram
            </a>
          </div>
        </span>
      </div>
    </section>
  );
}
