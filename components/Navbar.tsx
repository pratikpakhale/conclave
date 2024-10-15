"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { IoMenu } from "react-icons/io5";
import { NavbarContext } from "@/context/NavbarContext";
import Image from "next/image";

export default function Navbar() {
  const { option, setOption } = useContext(NavbarContext);
  const [open, setOpen] = useState(false);
  const lenis = useLenis(({ scroll }) => {});

  const navs = [
    {
      href: "/#home",
      name: "Home",
    },
    {
      href: "/#testimonials",
      name: "Testimonials",
    },
    {
      href: "/#timeline",
      name: "Timeline",
    },
    {
      href: "/#speakers",
      name: "Speakers",
    },
    {
      href: "/team",
      name: "Team",
    },
  ];

  return (
    <div className="w-full">
      <Image
        src={"/Brandlogo.png"}
        alt="main logo"
        className="w-16 aspect-square fixed rounded-2xl border border-[#0b132b] top-6 left-4 z-[90] object-cover"
        width={0}
        height={0}
        sizes="100%"
      />
      {/* <nav className="w-full px-2 sm:px-4 md:px-10 lg:px-24 xl:px-44 py-4 flex justify-between items-center"> */}
      <nav className="fixed right-4 top-6 z-[100] flex w-fit items-center rounded-full bg-[#0b132b] p-4 text-center shadow-lg backdrop-blur md:left-0 md:right-0 md:mx-auto md:px-2">
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="flex md:hidden text-white"
        >
          <IoMenu />
        </button>
        <div
          id="nav-highlight"
          style={{ transform: `translateX(${100 * option}%)` }}
          className="absolute z-[-1] hidden h-10 w-28 rounded-full bg-[#3a506b] transition-all duration-300 md:flex"
        ></div>
        {navs.map((navItem, i) => (
          <Link
            key={i}
            href={navItem.href}
            className={`hidden w-28 justify-center text-[#e1e5f2] md:flex ${
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
      </nav>

      <div
        className={`fixed left-0 top-0 z-50 flex h-full w-screen flex-col bg-black/70 px-8 py-10 backdrop-blur-sm transition-all duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex w-full items-center justify-between">
          <div></div>
          <button className="text-white" onClick={() => setOpen(!open)}>
            <IoMenu className="text-white" />
          </button>
        </div>
        <div className="flex w-full flex-col items-center text-white gap-6 py-20">
          {navs.map((navItem, i) => (
            <Link
              key={i}
              className=""
              onClick={() => {
                setOpen(!open);
                lenis?.scrollTo(navItem.href.slice(1), {
                  lerp: 0.07,
                  duration: 0.6,
                });
              }}
              href={navItem.href}
            >
              {navItem.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
