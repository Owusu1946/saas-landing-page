"use client"

export default function PerformanceGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 230, 153, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 230, 153, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0))'
        }}
      />
    </div>
  )
} 