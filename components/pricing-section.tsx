"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CardHoverEffect } from "./card-hover-effect"

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 230, 153, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 230, 153, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
          }}
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <div className="inline-block rounded-full bg-[#00E699]/10 px-4 py-1.5 text-sm text-[#00E699] ring-1 ring-[#00E699]/20">
              Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Simple, Usage-Based Pricing
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Start for free and scale as you grow. Pay only for what you use.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <CardHoverEffect className="relative p-8 bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-2">Hobby</h3>
              <p className="text-4xl font-bold text-white mb-4">Free</p>
              <ul className="space-y-2 text-neutral-400 mb-8">
                <li>1GB Storage</li>
                <li>Shared Resources</li>
                <li>Community Support</li>
              </ul>
              <Button 
                size="lg"
                className="w-full bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-6 text-lg rounded-lg"
              >
                Get Started
              </Button>
            </CardHoverEffect>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <CardHoverEffect className="relative p-8 bg-black/50 backdrop-blur-sm border border-[#00E699]/20 rounded-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#00E699] px-3 py-1 text-sm text-black font-medium">
                Popular
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
              <p className="text-4xl font-bold text-white mb-4">₵199</p>
              <ul className="space-y-2 text-neutral-400 mb-8">
                <li>10GB Storage</li>
                <li>Dedicated Resources</li>
                <li>Priority Support</li>
              </ul>
              <Button 
                size="lg"
                className="w-full bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-6 text-lg rounded-lg"
              >
                Get Started
              </Button>
            </CardHoverEffect>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <CardHoverEffect className="relative p-8 bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-4xl font-bold text-white mb-4">Custom</p>
              <ul className="space-y-2 text-neutral-400 mb-8">
                <li>Unlimited Storage</li>
                <li>Custom Resources</li>
                <li>24/7 Support</li>
              </ul>
              <Button 
                size="lg"
                variant="outline"
                className="w-full border-white/20 text-black hover:bg-white/5 px-8 py-6 text-lg rounded-lg"
              >
                Contact Sales
              </Button>
            </CardHoverEffect>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 