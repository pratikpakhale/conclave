import { attendees } from "@/types/Attendees";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function AttendeesCard(attendee: attendees) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full py-4 border-b z-[0] border-color1 relative cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={false}
    >
      <motion.div
        className="max-w-7xl px-4 mx-auto flex justify-between items-center w-full"
        animate={{
          paddingLeft: isHovered ? "2.5rem" : "1rem",
          paddingRight: isHovered ? "2.5rem" : "1rem",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex gap-4">
          <motion.div
            animate={{
              height: isHovered ? "250px" : "160px",
              width: isHovered ? "200px" : "130px",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src={`/Attendees/${attendee?.src}`}
              alt={attendee?.name}
              height={0}
              width={0}
              sizes="100%"
              className="object-cover h-full w-full rounded-4px border border-slate-500 object-center"
            />
          </motion.div>

          <div className="flex flex-col justify-between">
            <div className="">
              <div className="text-lg font-semibold">{attendee?.name}</div>
              <div className="text-xs">{attendee?.position}</div>
              <div className="text-sm font-normal leading-4">
                {attendee?.company}
              </div>
            </div>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="flex flex-col"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="text-sm leading-4">
                    {attendee?.student2_name}
                  </div>
                  <div className="text-xs">{attendee?.student2_phone}</div>
                  <div className="text-sm leading-4">
                    {attendee?.student1_name}
                  </div>
                  <div className="text-xs">{attendee?.student1_phone}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div></div>
          <a target="_blank" href={attendee?.linkedin}>
            <div className="text-color1">
              <FaLinkedin size={30} />
            </div>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="bg-color1/50 absolute w-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isHovered ? 0.1 : 0,
          height: isHovered ? "100%" : "0%",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  );
}
