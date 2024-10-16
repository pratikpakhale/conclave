"use client";

import { useLenis } from "@studio-freight/react-lenis";
import { NavbarContext } from "@/context/NavbarContext";
import React, { useState, useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Reveal from "./Reveal";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "./ui/moving-border";

const navs = [
  {
    href: "/#home",
    name: "Home",
  },
  {
    href: "/testimonials",
    name: "Testimonials",
  },
  {
    href: "rsvp",
    name: "RSVP",
  },
  {
    href: "/attendees",
    name: "Attendees",
  },
  {
    href: "/team",
    name: "Committee",
  },
  {
    href: "/developers",
    name: "Team",
  },
];

// Header component
function Navbar() {
  const { option, setOption } = useContext(NavbarContext);
  // const [open, setOpen] = useState(false);
  const lenis = useLenis(({}) => {});

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0; // Use 0 if previous is undefined
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 z-[100] left-0 flex justify-between p-4 nav-transition">
      <motion.nav className="p-2 fixed flex gap-4 items-center w-fit rounded nav-transition">
        <Reveal delay={0.2} width="fit-content" yPos={true}>
          <div className="w-12 h-12 rounded-lg overflow-hidden">
            <Image
              src="/Brandlogo.png"
              alt="Logo"
              className="h-full w-full object-cover"
              width={0}
              height={0}
              sizes="100%"
            />
          </div>
        </Reveal>
        <motion.div
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          animate={hidden ? "hidden" : "visible"}
          className="overflow-clip hidden md:block text-sm justify-start border border-color1 origin-[0] bg-text-col px-2 py-3 rounded items-center"
        >
          <motion.div
            variants={{
              visible: { width: "auto" },
              hidden: { width: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            className="overflow-clip text-sm flex items-center"
          >
            <div className="flex gap-[calc(clamp(1rem,-0.1036rem+1.7817vw,1.3rem))]">
              {navs.map((navItem, i) => (
                <Link
                  key={i}
                  href={navItem.href}
                  className={`hidden w-20 justify-center md:flex ${
                    option === i && "font-semibold"
                  }`}
                  onClick={() => {
                    setOption(i);
                    lenis?.scrollTo(navItem.href.slice(1), {
                      lerp: 0.07,
                      duration: 0.6,
                    });
                  }}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.nav>

      <motion.div className="bg-text-col border border-slate-800 absolute left-1/2 -translate-x-1/2 rounded justify-center p-3 w-fit h-fit flex md:hidden flex-col items-center gap-3">
        <RxHamburgerMenu
          onClick={() => {
            setOpen(!open);
            console.log(open);
          }}
          className="flex cursor-pointer z-[1000] w-fit md:hidden"
        />

        <motion.div
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          animate={!open ? "hidden" : "visible"}
          className="text-sm justify-start origin-[0] flex flex-col items-center"
        >
          <motion.div
            variants={{
              visible: { height: "auto", width: "auto" },
              hidden: { height: 0, width: 0 },
            }}
            animate={!open ? "hidden" : "visible"}
            className="overflow-clip text-sm flex flex-col items-center"
          >
            <div className="flex flex-col items-center gap-[calc(clamp(1rem,-0.1036rem+1.7817vw,1.3rem))]">
              {navs.map((navItem, i) => (
                <Link
                  key={i}
                  href={navItem.href}
                  className={`w-32 justify-center flex ${
                    option === i && "font-semibold"
                  }`}
                  onClick={() => {
                    setOption(i);
                    lenis?.scrollTo(navItem.href.slice(1), {
                      lerp: 0.07,
                      duration: 0.6,
                    });
                  }}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <Link className="fixed right-4 top-4" href={"/contact"}>
        <Button
          borderRadius="1.75rem"
          className="text-text-col border-sky-500/10 cursor-pointer "
        >
          Get in Touch
        </Button>
      </Link>
    </div>
  );
}

export default Navbar;
