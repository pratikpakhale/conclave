"use client";
import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import type { Attendee } from "@/app/attendees/page";

export default function Cards({
  photoUrl: src,
  name,
  studentName2: third_year_poc,
  // third_year_contact,
  studentName1: fourth_year_poc,
  // fourth_year_contact,
  linkedIn: linkedin,
  designation: position,
  company,
  studentLinkedIn1,
  studentLinkedIn2,
}: Attendee) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-[400px] relative mx-auto">
      <motion.div
        layout
        className="w-full aspect-square rounded-lg border border-slate-800 bg-white overflow-hidden"
      >
        <motion.div
          layout
          className="w-full h-full z-[1] relative flex flex-col"
        >
          {/* Main Card Content */}
          <div className="flex-1 flex z-[-1] items-center justify-center relative">
            {src ? (
              <Image
                width={0}
                height={0}
                sizes="100%"
                src={src}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center">
                <span className="text-2xl text-slate-600">
                  {name?.charAt(0)}
                </span>
              </div>
            )}

            {/* Add Button */}
            <a
              href={linkedin}
              target="_blank"
              className="inline-flex absolute top-4 left-4 items-center space-x-2 text-blue-600 hover:text-blue-700"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            {(third_year_poc || fourth_year_poc) && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <GrAdd className="w-4 h-4" />
                </motion.div>
              </motion.button>
            )}
          </div>

          {/* Expandable Details Section */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                className="bg-slate-50/70 backdrop-blur z-[2] w-full bottom-0 absolute"
              >
                <div className="p-6 space-y-4">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-1"
                  >
                    <h2 className="font-semibold text-black">Student POC</h2>
                    <a
                      href={studentLinkedIn2}
                      target="_blank"
                      className="font-semibold text-slate-700 text-lg"
                    >
                      {third_year_poc}
                    </a>
                    {/* <p className="text-slate-600 leading-4">
                      {third_year_contact}
                    </p> */}

                    <a
                      href={studentLinkedIn1}
                      target="_blank"
                      className="font-semibold text-slate-700 leading-4 text-lg"
                    >
                      {fourth_year_poc}
                    </a>
                    {/* <p className="text-slate-600 leading-4">
                      {fourth_year_contact}
                    </p> */}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <div className="space-y-4">
        <motion.div className="space-y-0">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-slate-600 leading-5">{company}</p>
          <p className="text-slate-500 leading-5 text-sm">{position}</p>
        </motion.div>
      </div>
    </div>
  );
}
