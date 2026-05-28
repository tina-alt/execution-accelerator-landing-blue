"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "header" | "footer" | "article" | "li" | "ul";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 16,
  as = "div",
}: Props) {
  const prefersReduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (prefersReduce) {
    const Tag = as as keyof React.JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}

