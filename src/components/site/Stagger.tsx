"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
export function Stagger({ children }: { children: ReactNode[] }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="process-grid"
      initial={false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ visible: { transition: { staggerChildren: reduced ? 0 : 0.07 } } }}
    >
      {children.map((child, i) => (
        <motion.div
          key={i}
          variants={{ visible: { opacity: [0.75, 1], y: reduced ? 0 : [8, 0] } }}
          transition={{ duration: reduced ? 0 : 0.35 }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
