import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay?: number;
}

export default function ScrollReveal({
  children,
  delay,
  width = "100%",
}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "start 55%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["80%", "0%"]);
  return (
    <motion.div
      ref={ref}
      style={{ position: "relative", width, opacity, translateY }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: delay,
        staggerChildren: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}
