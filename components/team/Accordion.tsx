import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import Member from "./Member";
import { team_member } from "@/types/Teams";

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
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [isMainExpanded, setIsMainExpanded] = useState(false);

  const { active, index } = modal;

  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

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

  const toggleMainSection = () => {
    setIsMainExpanded(!isMainExpanded);
    // If closing main section, close all individual sections
  };

  return (
    <section
      id="work"
      className=" w-full z-[5] overflow-hidden relative flex flex-col"
    >
      <div
        onMouseMove={(e) => {
          if (active) {
            moveItems(e.clientX, e.clientY);
          }
        }}
        className="w-full mx-auto max-w-[1200px] px-10 flex flex-col gap-20"
      >
        <div
          onClick={toggleMainSection}
          className="work-header pt-16 cursor-pointer flex justify-between items-center"
        >
          <p className="text-24px font-semibold">{Heading}</p>
          <span className="transform transition-transform duration-200 text-2xl">
            {isMainExpanded ? "−" : "+"}
          </span>
        </div>

        {isMainExpanded && (
          <div className="flex flex-col font-clash text-[#233554] border-t border-light-text">
            {List.map((project, index) => (
              <div key={index} className="border-b border-light-text">
                {/* <div
                  onClick={() => toggleSection(index)}
                  className="py-4 cursor-pointer flex justify-between items-center"
                >
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <span className="transform transition-transform duration-200 text-2xl">
                    {openSections[index] ? "−" : "+"}
                  </span>
                </div> */}

                {/* {openSections[index] && ( */}
                <div
                  className="pb-4"
                  onMouseEnter={(e) =>
                    manageModal(true, index, e.clientX, e.clientY)
                  }
                  onMouseLeave={() => manageModal(false, index, 0, 0)}
                >
                  <Member
                    index={index}
                    title={project.title}
                    position={project.position || ""}
                    linkedin={project.linkedin || ""}
                    manageModal={manageModal}
                  />
                </div>
                {/* )} */}
              </div>
            ))}
          </div>
        )}

        <>
          <motion.div
            ref={modalContainer}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
            className="fixed top-1/2 left-1/2 bg-white max-md:hidden rounded-8px pointer-events-none overflow-hidden z-3 h-[250px] aspect-square"
          >
            <div
              style={{ top: index * -100 + "%" }}
              className="relative h-full w-full transition-[top_0.5s_cubic-bezier(0.76,0,0.24,1)]"
            >
              {List.map((project, index) => {
                const { src, color } = project;
                return (
                  <div
                    className="h-full w-full flex items-center justify-center"
                    style={{ backgroundColor: color }}
                    key={`modal_${index}`}
                  >
                    <Image
                      src={`/projects/${src}`}
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
          <motion.div
            ref={cursor}
            className="w-[80px] h-[80px] rounded-[50%] max-md:hidden bg-[#8a84e3] text-white fixed z-3 flex items-center justify-center pointer-events-none"
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
          ></motion.div>
          <motion.div
            ref={cursorLabel}
            className="w-[80px] h-[80px] rounded-[50%] max-md:hidden text-white fixed z-3 flex items-center justify-center pointer-events-none bg-transparent"
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
          >
            View
          </motion.div>
        </>
      </div>
    </section>
  );
}
