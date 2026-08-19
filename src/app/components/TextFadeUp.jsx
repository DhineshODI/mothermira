"use client";

import { motion } from "framer-motion";

// Single Text / Heading Fade-Up
export function TextFadeUp({ children, delay = 0, y = 30, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Smooth cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger Wrapper for Lines, Lists, or Multiple Text Paragraphs
export function StaggerText({ children, staggerDelay = 0.15, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Child item inside StaggerText
export function StaggerTextItem({ children, y = 25, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: y },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1.0],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 2. Text Fade Down (Mela irundhu Keela) - NEW FOR YOUR REQUIREMENT
export function TextFadeDown({ children, delay = 0, y = -30, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: y }} // Negative Y value makes it come from TOP
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 3. Fade In Left to Right / Right to Left
export function TextFadeHorizontal({
  children,
  delay = 0,
  direction = "left",
  className = "",
}) {
  const xOffset = direction === "left" ? -40 : 40;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 4. Stagger Wrapper (Group Elements-ku)
export function StaggerContainer({
  children,
  staggerDelay = 0.15,
  className = "",
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 5. Stagger Child Item (Direction option-oda)
export function StaggerItem({ children, direction = "up", className = "" }) {
  const initialVariants = {
    up: { opacity: 0, y: 25 },
    down: { opacity: 0, y: -25 },
    left: { opacity: 0, x: -25 },
    right: { opacity: 0, x: 25 },
  };

  return (
    <motion.div
      variants={{
        hidden: initialVariants[direction] || initialVariants.up,
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1.0],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
