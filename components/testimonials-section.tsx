"use client"

import { motion } from "framer-motion"
import { CardHoverEffect } from "./card-hover-effect"
import { Quote } from "lucide-react"
import Image from "next/image"

// Testimonial data structure
interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
  imageSrc?: string
}

export default function TestimonialsSection() {
  // Sample testimonials - replace with real data
  const testimonials: Testimonial[] = [
    {
      quote: "Switching to Serverless Postgres was the best decision we made this year. Our query performance increased by 3x while costs went down by 40%.",
      name: "Kenneth Owusu",
      title: "CEO & Founder",
      company: "Optimedix AI",
      imageSrc: "/download.jpeg"
    },
    {
      quote: "The autoscaling capabilities are incredible. We no longer worry about database performance during traffic spikes and can focus on building features.",
      name: "Michael Chen",
      title: "Engineering Lead",
      company: "Datalytics",
      imageSrc: "/download.jpeg"
    },
    {
      quote: "The migration process was seamless, and the performance improvements were immediate. Our development team is now much more productive.",
      name: "Aisha Patel",
      title: "VP of Engineering",
      company: "AppWorks",
      imageSrc: "/download.jpeg"
    }
  ]

  // Company logos
  const logos = [
    { name: "Company 1", logo: "/logo-placeholder.svg" },
    { name: "Company 2", logo: "/logo-placeholder.svg" },
    { name: "Company 3", logo: "/logo-placeholder.svg" },
    { name: "Company 4", logo: "/logo-placeholder.svg" },
    { name: "Company 5", logo: "/logo-placeholder.svg" },
    { name: "Company 6", logo: "/logo-placeholder.svg" },
    { name: "Company 7", logo: "/logo-placeholder.svg" },
    { name: "Company 8", logo: "/logo-placeholder.svg" },
  ];

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        
        {/* Animated glow orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-40 top-20 w-80 h-80 bg-[#00E699]/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -left-40 bottom-20 w-80 h-80 bg-[#00E699]/10 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-block rounded-full bg-[#00E699]/10 px-4 py-1.5 text-sm text-[#00E699] ring-1 ring-[#00E699]/20">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white mt-4">
              Trusted by Developers Worldwide
            </h2>
            <p className="text-neutral-400 md:text-xl/relaxed mt-4">
              See what teams are saying about our serverless PostgreSQL solution.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CardHoverEffect className="h-full">
                <div className="flex flex-col h-full p-8 bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl transition-all duration-300">
                  <Quote className="h-8 w-8 text-[#00E699]/40 mb-4" />
                  
                  <p className="text-white/90 mb-6 flex-grow">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center mt-auto">
                    {testimonial.imageSrc && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border border-[#00E699]/20">
                        <Image 
                          src={testimonial.imageSrc} 
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="text-white font-medium">{testimonial.name}</h4>
                      <p className="text-neutral-400 text-sm">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHoverEffect>
            </motion.div>
          ))}
        </div>
        
        {/* Company logos marquee */}
        <motion.div 
          className="mt-20 pt-12 border-t border-neutral-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-center text-neutral-500 text-sm mb-10">TRUSTED BY INNOVATIVE COMPANIES</p>
          
          <div className="relative w-full overflow-hidden">
            {/* First marquee row */}
            <div className="relative w-full overflow-hidden py-6 pointer-events-none">
              <motion.div 
                className="flex space-x-16 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  }
                }}
              >
                {/* Duplicated logos for seamless looping */}
                {[...logos, ...logos].map((company, i) => (
                  <div 
                    key={`${company.name}-${i}`} 
                    className="h-10 w-40 bg-neutral-800/30 rounded-md flex items-center justify-center text-neutral-500 border border-neutral-800/50"
                  >
                    {company.name}
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Second marquee row (opposite direction) */}
            <div className="relative w-full overflow-hidden py-6 pointer-events-none">
              <motion.div 
                className="flex space-x-16 whitespace-nowrap"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  }
                }}
              >
                {/* Duplicated logos for seamless looping */}
                {[...logos.reverse(), ...logos.reverse()].map((company, i) => (
                  <div 
                    key={`${company.name}-rev-${i}`} 
                    className="h-10 w-40 bg-neutral-800/30 rounded-md flex items-center justify-center text-neutral-500 border border-neutral-800/50"
                  >
                    {company.name}
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Gradient overlays for fade effect */}
            <div className="absolute pointer-events-none inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute pointer-events-none inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 