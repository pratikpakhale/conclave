"use client";
import React from "react";
// import styles from "./style.module.scss";
import Link from "next/link";

interface ProjectProps {
  index: number;
  title: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
}

export default function Member({ index, title, manageModal }: ProjectProps) {
  return (
    <Link
      href={"/"}
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="w-full group relative px-0 hover:px-12 transition-[padding] duration-500 flex items-center border-b border-light-text"
    >
      <div className="w-full flex z-[4] justify-between flex-col md:flex-row gap-4 items-center py-6">
        <p className="text-2xl font-bold text-light-text">{title}</p>
        <p className="text-sm text-[#8892b0]">Design & Development © 2024</p>
      </div>
      <div className="bg-main-text opacity-10 h-0 group-hover:h-full transition-[height] duration-500 absolute w-screen left-1/2 -translate-x-1/2 z-0"></div>
    </Link>
  );
}
