"use client"

import { useEffect, useState } from 'react'

interface TypeAnimationProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export function TypeAnimation({ text, className, delay = 0, speed = 50 }: TypeAnimationProps) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, delay, speed])

  return <span className={className}>{displayText}</span>
} 