"use client"

import { useEffect, useRef } from "react"

export default function NeonGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main grid */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 230, 153, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 230, 153, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.2))'
        }}
      />

      {/* Overlay grid for depth */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 230, 153, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 230, 153, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.1))'
        }}
      />

      {/* Glow effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#00E699]/10 via-transparent to-[#00E699]/10"
        style={{
          filter: 'blur(80px)'
        }}
      />
    </div>
  )
}

