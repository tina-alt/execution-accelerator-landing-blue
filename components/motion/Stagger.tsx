"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
};

export function Stagger({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
}: ContainerProps) {
  const prefersReduce = useReducedMotion();

  if (prefersReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 18,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const prefersReduce = useReducedMotion();
  if (prefersReduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

