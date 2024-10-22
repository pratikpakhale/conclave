"use client";

import { useLenis } from "@studio-freight/react-lenis";
import { NavbarContext } from "@/context/NavbarContext";
import React, { useState, useContext } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useCycle,
} from "framer-motion";
import { MenuToggle } from "./MenuToggle";

const navs = [
  {
    href: "/attendees",
    name: "Attendees",
  },
  {
    href: "/team",
    name: "Committee",
  },
  {
    href: "/rsvp",
    name: "RSVP",
  },
  {
    href: "/sponsorship",
    name: "Sponsorship",
  },
  {
    href: "/testimonials",
    name: "Testimonials",
  },
  {
    href: "/developers",
    name: "Team",
  },
];

function Navbar() {
  const { option, setOption } = useContext(NavbarContext);
  const lenis = useLenis(({}) => {});
  const [open, toggleOpen] = useCycle(false, true);

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

  return (
    <div className="w-full fixed top-0 px-spacing-1 pt-spacing-1 z-[100] left-0 flex justify-between p-4 nav-transition">
      <Reveal delay={0.3} width="fit-content" yPos={true}>
        <motion.nav
          onMouseEnter={() => setHidden(false)}
          onMouseLeave={() => setHidden(true)}
          className="relative flex text-white [background:linear-gradient(45deg,#151517,theme(colors.slate.800)_50%,#151517)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-transparent bg-color1 border-[2px] animate-border px-8px py-8px text-label items-center w-fit rounded-16px nav-transition"
        >
          <div
            // onClick={() => setHidden(false)}
            className="w-10 h-10 overflow-hidden rounded-8px"
          >
            <Link href={"/"}>
              <Image
                src="/Brandlogo.png"
                alt="Logo"
                className="h-full w-full object-cover"
                width={0}
                height={0}
                sizes="100%"
              />
            </Link>
          </div>
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
      </Reveal>

      <motion.div
        animate={open ? "open" : "closed"}
        className="bg-white absolute z-[101] left-1/2 -translate-x-1/2 justify-center px-16px py-16px text-h4 rounded-16px w-fit h-fit flex md:hidden flex-col items-center"
      >
        <MenuToggle toggle={() => toggleOpen()} />

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

      <Reveal delay={0.3} width="fit-content" yPos={true}>
        <Link
          className="relative h-full [background:linear-gradient(45deg,#151517,theme(colors.slate.800)_50%,#151517)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-transparent animate-border bg-color1 border-[2px] flex justify-center items-center border-text-col px-24px py-12px text-white text-16px rounded-16px"
          href={"/contact"}
        >
          Get in touch
        </Link>
      </Reveal>
    </div>
  );
}

export default Navbar;
