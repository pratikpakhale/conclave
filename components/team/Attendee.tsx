"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

interface ProjectProps {
  index: number;
  title: string;
  position: string;
  linkedin: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
}

export default function Attendee({
  index,
  title,
  position,
  linkedin,
  manageModal,
}: ProjectProps) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="w-full group relative px-0 hover:px-12 transition-[padding] duration-500 flex items-center border-b border-light-text"
    >
      <div className="w-full flex z-[4] justify-between flex-col md:flex-row gap-4 items-center py-6">
        <div className="text-2xl text-[#454e61] font-bold text-light-text flex flex-col">
          <div>{title}</div>
          <div className="font-medium text-xs">{position}</div>
        </div>
        <Link href={linkedin}>
          <FaLinkedin />
        </Link>
      </div>
      <div className="bg-color1/50 opacity-10 h-0 group-hover:h-full transition-[height] duration-500 absolute w-screen left-1/2 -translate-x-1/2 z-0"></div>
    </div>
  );
}
