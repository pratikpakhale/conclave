"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { motion } from "framer-motion";
import { attendees } from "@/types/Attendees";
import { FaLinkedin } from "react-icons/fa";

export default function Cards(attendee: attendees) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full max-w-[300px]">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-full aspect-square cursor-pointer rounded-4px border border-slate-800 bg-white relative flex items-center justify-center overflow-hidden"
      >
        <Image
          src={`/Attendees/${attendee?.src}`}
          alt={attendee?.title}
          height={0}
          width={0}
          sizes="100%"
          className="w-full aspect-square object-cover object-top"
        />

        {/* The motion.div will expand on hover */}
        <motion.a
          target="_blank"
          href={attendee?.linkedin}
          initial={{ width: 0, height: 0 }}
          animate={
            hovered
              ? { width: "100%", height: "100%", opacity: 1 }
              : { width: 0, height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute bg-black/50 backdrop-blur flex items-center justify-center"
        >
          <div className="text-white">
            <FaLinkedin size={30} />
          </div>
        </motion.a>
      </div>

      <div className="w-full items-center flex mt-2 justify-between">
        <div className="">
          <div className="text-lg font-semibold">{attendee?.title}</div>
          <div className="text-sm leading-4">{attendee?.company}</div>
          <div className="text-xs">{attendee?.position}</div>
        </div>
        <GrAdd className="cursor-pointer font-bold" />
      </div>
    </div>
  );
}
