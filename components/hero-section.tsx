"use client"

import { Button } from "@/components/ui/button"
import NeonGrid from "./neon-grid"

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <NeonGrid />
      </div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-[64px] leading-tight font-bold tracking-tight mb-6 relative">
            <span className="text-white">Serverless </span>
            <span className="text-neutral-500">Postgres</span>
            <br />
            <span className="text-[#00E699] [text-shadow:0_0_20px_rgba(0,230,153,0.3)]">Made Easy</span>
          </h1>

          <p className="text-neutral-400 text-xl max-w-3xl mx-auto mb-12">
            Scale to infinity with Serverless Postgres. Experience autoscaling storage 
            and compute with a generous free tier.
          </p>

          <div className="flex items-center justify-center gap-4 mb-20">
            <Button 
              size="lg" 
              className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-6 text-lg rounded-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Start for Free</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/5 px-8 py-6 text-lg rounded-lg backdrop-blur-sm"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-24">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">100k+</div>
              <div className="text-neutral-500">Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">16.2k</div>
              <div className="text-neutral-500">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-neutral-500">Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
} 