"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  id?: string;
}
export function Reveal({ children, as: Tag = "div", className = "", delay = 0, id }: RevealProps) {
  const reduced = useReducedMotion();
  return (
    <Tag className={className} id={id}>
      <motion.div
        initial={false}
        whileInView={reduced ? { opacity: 1, y: 0 } : { opacity: [0.95, 1], y: [12, 0] }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{
          duration: reduced ? 0 : 0.35,
          delay: reduced ? 0 : delay * 0.04,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </Tag>
  );
}
