"use client";

import { motion, useInView, type HTMLMotionProps } from "framer-motion";
import React, { useRef } from "react";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  amount?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  y = 28,
  x = 0,
  duration = 0.7,
  amount = 0.18,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: false,
    amount,
    margin: "-8% 0px -8% 0px",
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x, filter: "blur(6px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)" }
          : { opacity: 0, y, x, filter: "blur(6px)" }
      }
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
