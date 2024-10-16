"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { motion } from "framer-motion";

export default function Cards() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-full aspect-square cursor-pointer relative flex items-center justify-center overflow-hidden"
      >
        <Image
          src={"/team/img1.webp"}
          alt={"hi"}
          height={0}
          width={0}
          sizes="100%"
          className="w-full aspect-square object-cover object-top grayscale-[100%]"
        />

        {/* The motion.div will expand on hover */}
        <motion.div
          initial={{ width: 0, height: 0 }}
          animate={
            hovered
              ? { width: "100%", height: "100%", opacity: 1 }
              : { width: 0, height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute bg-black/50 backdrop-blur flex items-center justify-center"
        >
          <div className="text-white">details</div>
        </motion.div>
      </div>

      <div className="w-full items-center flex mt-2 justify-between">
        <div className="">
          <div className="text-lg font-semibold">John Doe</div>
          <div className="text-sm leading-3">Google</div>
        </div>
        <GrAdd className="cursor-pointer font-bold" />
      </div>
    </div>
  );
}
