"use client";

import { useLenis } from "@studio-freight/react-lenis";
import { NavbarContext } from "@/context/NavbarContext";
import React, { useState, useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Reveal from "./Reveal";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navs = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/testimonials",
    name: "Testimonials",
  },
  {
    href: "/rsvp",
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

  const Icon = open ? IoClose : RxHamburgerMenu;

  return (
    <div className="w-full fixed top-0 px-spacing-1 pt-spacing-1 z-[100] left-0 flex justify-between p-4 nav-transition">
      <motion.nav className="relative flex bg-white px-16px py-12px text-label items-center w-fit rounded-16px nav-transition">
        <Reveal delay={0.2} width="fit-content" yPos={true}>
          <div className="w-8 h-8 overflow-hidden">
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
            visible: {
              opacity: 1,
              paddingLeft:
                "calc(clamp(1rem, -0.1036rem + 1.7817vw, 1.5rem)*1.3)",
            },
            hidden: { opacity: 0, paddingLeft: 0 },
          }}
          animate={hidden ? "hidden" : "visible"}
          className="overflow-clip hidden md:block text-sm justify-start origin-[0] rounded items-center"
        >
          <motion.div
            variants={{
              visible: { width: "auto" },
              hidden: { width: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            className="overflow-clip text-sm flex items-center"
          >
            <div className="flex">
              {navs.map((navItem, i) => (
                <Link
                  key={i}
                  href={navItem.href}
                  className={`hidden justify-center  px-12px py-8px md:flex ${
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

      <motion.div className="bg-white absolute z-[101] left-1/2 -translate-x-1/2 justify-center px-16px py-16px text-h4 rounded-16px w-fit h-fit flex md:hidden flex-col items-center">
        <Icon
          size={24}
          onClick={() => {
            setOpen(!open);
            console.log(open);
          }}
          className="flex cursor-pointer w-fit md:hidden"
        />

        <motion.div
          variants={{
            visible: {
              opacity: 1,
              paddingTop:
                "calc(clamp(1rem, -0.1036rem + 1.7817vw, 1.5rem)*1.3)",
            },
            hidden: { opacity: 0, paddingTop: 0 },
          }}
          animate={!open ? "hidden" : "visible"}
          className="justify-start origin-[0] flex flex-col items-center"
        >
          <motion.div
            variants={{
              visible: {
                height: "auto",
                width: "90vw",
              },
              hidden: { height: 0, width: 0 },
            }}
            animate={!open ? "hidden" : "visible"}
            className="overflow-clip flex flex-col items-center"
          >
            <div className="flex flex-col items-center gap-48px">
              {navs.map((navItem, i) => (
                <Link
                  key={i}
                  href={navItem.href}
                  className={`justify-center font-light flex ${
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

      <Link
        className="relative bg-color1 border flex justify-center items-center border-text-col px-24px py-12px text-white text-16px rounded-16px"
        href={"/contact"}
      >
        {/* <Button
          borderRadius="1.75rem"
          className="text-text-col border-sky-500/10 cursor-pointer "
        >
          Get in Touch
        </Button> */}
        Get in touch
      </Link>
    </div>
  );
}

export default Navbar;
