"use client"

import { Button } from "@/components/ui/button"
import NeonGrid from "./neon-grid"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative pt-23 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <NeonGrid />
      </div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      
      <section className="relative pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <Badge 
              variant="outline" 
              className="border-[#00E699]/30 text-[#00E699] px-4 py-1.5 text-sm flex items-center gap-2 hover:border-[#00E699]/60 transition-colors group cursor-pointer"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Now with 2x faster query performance</span>
              <motion.div
                className="ml-1"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.div>
            </Badge>
          </motion.div>
          
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
              className="border-white/20 text-black hover:bg-white/5 hover:text-black px-8 py-6 text-lg rounded-lg backdrop-blur-sm"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </section>
  )
} 