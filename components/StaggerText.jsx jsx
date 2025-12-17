"use client"

import { motion } from "framer-motion"

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export default function StaggerText({ text, className = "" }) {
  return (
    <motion.span
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.04 },
        },
      }}
      initial="hidden"
      animate="visible"
      aria-hidden
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={child} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
