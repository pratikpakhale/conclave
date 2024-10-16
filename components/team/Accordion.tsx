"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import { team_member } from "@/types/Teams";
import Member from "./Member";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Accordion({
  Heading,
  List,
}: {
  Heading: string;
  List: team_member[];
}) {
  const [open, setOpen] = useState(false);

  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);

  const xMoveContainer = useRef<gsap.QuickToFunc | null>(null);
  const yMoveContainer = useRef<gsap.QuickToFunc | null>(null);
  const xMoveCursor = useRef<gsap.QuickToFunc | null>(null);
  const yMoveCursor = useRef<gsap.QuickToFunc | null>(null);
  const xMoveCursorLabel = useRef<gsap.QuickToFunc | null>(null);
  const yMoveCursorLabel = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x: number, y: number) => {
    xMoveContainer.current?.(x);
    yMoveContainer.current?.(y);
    xMoveCursor.current?.(x);
    yMoveCursor.current?.(y);
    xMoveCursorLabel.current?.(x);
    yMoveCursorLabel.current?.(y);
  };

  const manageModal = (
    active: boolean,
    index: number,
    x: number,
    y: number
  ) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <section className="pt-12 w-full z-[5] overflow-hidden bg-[#ecf5ff] px-2 sm:px-4 md:px-10 lg:px-24 xl:px-44 relative flex flex-col">
      <div
        onMouseMove={(e) => {
          moveItems(e.clientX, e.clientY);
        }}
        className="w-full mx-auto max-w-[1200px] px-10 flex flex-col gap-20"
      >
        <div className="w-full border-b">
          <div className="w-full text-2xl font-semibold flex justify-between items-center">
            <div className="">{Heading} </div>
            <button className="" onClick={() => setOpen(!open)}>
              {open ? "-" : "+"}
            </button>
          </div>

          <motion.div
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            animate={!open ? "hidden" : "visible"}
            className="text-sm justify-start origin-[0] pt-4 flex flex-col w-full items-center"
          >
            <motion.div
              variants={{
                visible: { height: "auto" },
                hidden: { height: 0 },
              }}
              animate={!open ? "hidden" : "visible"}
              className="overflow-clip text-sm flex flex-col w-full items-center"
            >
              <div className="flex flex-col items-center w-full gap-[calc(clamp(1rem,-0.1036rem+1.7817vw,1.3rem))]">
                <div className="flex flex-col font-clash text-[#233554] w-full border-t border-light-text">
                  {List.map((member, index) => (
                    <Member
                      index={index}
                      position={member?.position}
                      title={member?.title}
                      linkedin={member?.linkedin}
                      manageModal={manageModal}
                      key={index}
                    />
                  ))}

                  <>
                    <motion.div
                      ref={modalContainer}
                      variants={scaleAnimation}
                      initial="initial"
                      animate={active ? "enter" : "closed"}
                      className="fixed top-1/2 left-1/2 bg-white pointer-events-none overflow-hidden rounded z-3 h-[200px] w-[200px]"
                    >
                      <div
                        style={{ top: index * -100 + "%" }}
                        className="relative h-full w-full transition-[top_0.5s_cubic-bezier(0.76,0,0.24,1)]"
                      >
                        {List.map((member, index) => {
                          const { src, color } = member;
                          return (
                            <div
                              className="h-full w-full flex items-center justify-center"
                              style={{ backgroundColor: color }}
                              key={`modal_${index}`}
                            >
                              <Image
                                src={`/team/${src}`}
                                width={300}
                                height={0}
                                alt="image"
                                className="h-auto"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                    {/* <motion.div
                    ref={cursor}
                    className="w-[80px] h-[80px] rounded-[50%] bg-[#8a84e3] text-white fixed z-3 flex items-center justify-center pointer-events-none"
                    variants={scaleAnimation}
                    initial="initial"
                    animate={active ? "enter" : "closed"}
                  ></motion.div> */}
                    {/* <motion.div
                    ref={cursorLabel}
                    className="w-[80px] h-[80px] rounded-[50%] text-white fixed z-3 flex items-center justify-center pointer-events-none bg-transparent"
                    variants={scaleAnimation}
                    initial="initial"
                    animate={active ? "enter" : "closed"}
                  >
                    View
                  </motion.div> */}
                  </>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
