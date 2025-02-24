"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface CardHoverEffectProps {
  children: ReactNode
  className?: string
}

export function CardHoverEffect({ children, className = "" }: CardHoverEffectProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative group ${className}`}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-b from-[#00E699]/30 to-[#00E699]/10 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
      {children}
    </motion.div>
  )
}

