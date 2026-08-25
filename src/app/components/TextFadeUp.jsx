"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// =====================================================
// 1. TEXT FADE UP
// =====================================================

export function TextFadeUp({
  children,
  delay = 0,
  y = 30,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        margin: "-80px",
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// =====================================================
// 2. STAGGER TEXT
// =====================================================

export function StaggerText({
  children,
  staggerDelay = 0.15,
  className = "",
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        margin: "-80px",
      }}
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

// =====================================================
// 3. STAGGER TEXT ITEM
// =====================================================

export function StaggerTextItem({
  children,
  y = 25,
  className = "",
}) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// =====================================================
// 4. TEXT FADE DOWN
// =====================================================

export function TextFadeDown({
  children,
  delay = 0,
  y = -30,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        margin: "-80px",
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// =====================================================
// 5. TEXT FADE HORIZONTAL
// =====================================================

export function TextFadeHorizontal({
  children,
  delay = 0,
  direction = "left",
  className = "",
}) {
  const xOffset = direction === "left" ? -40 : 40;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: xOffset,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: false,
        margin: "-80px",
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// =====================================================
// 6. TEXT FADE LEFT
// =====================================================

export function TextFadeLeft({
  children,
  delay = 0,
  x = -30,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: false,
        margin: "-80px",
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// =====================================================
// 7. TEXT FADE RIGHT
// =====================================================

export function TextFadeRight({
  children,
  delay = 0,
  x = 30,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: false,
        margin: "-80px",
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// =====================================================
// 8. STAGGER CONTAINER
// =====================================================

export function StaggerContainer({
  children,
  staggerDelay = 0.15,
  className = "",
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        margin: "-80px",
      }}
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

// =====================================================
// 9. STAGGER ITEM
// =====================================================

export function StaggerItem({
  children,
  direction = "up",
  className = "",
}) {
  const initialVariants = {
    up: {
      opacity: 0,
      y: 25,
    },
    down: {
      opacity: 0,
      y: -25,
    },
    left: {
      opacity: 0,
      x: -25,
    },
    right: {
      opacity: 0,
      x: 25,
    },
  };

  return (
    <motion.div
      variants={{
        hidden:
          initialVariants[direction] || initialVariants.up,

        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// =====================================================
// 10. GSAP FLIP LEFT
// =====================================================

export function FlipLeft({
  children,
  delay = 0,
  duration = 0.8,
}) {
  const ref = useRef(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        rotationY: -90,
        scale: 0.95,
        transformPerspective: 1000,
      },
      {
        opacity: 1,
        rotationY: 0,
        scale: 1,
        duration,
        delay,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "restart none restart reset",
        },
      },
    );
  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}

// =====================================================
// 11. GSAP FLIP RIGHT
// =====================================================

export function FlipRight({
  children,
  delay = 0,
  duration = 0.8,
}) {
  const ref = useRef(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        rotationY: 90,
        scale: 0.95,
        transformPerspective: 1000,
      },
      {
        opacity: 1,
        rotationY: 0,
        scale: 1,
        duration,
        delay,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "restart none restart reset",
        },
      },
    );
  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}