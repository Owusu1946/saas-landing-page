"use client"

import { motion } from "framer-motion"
import { Database, Globe2, Laptop, Zap, Shield, Code2 } from "lucide-react"
import { CardHoverEffect } from "./card-hover-effect"

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Enhanced grid background with multiple layers */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 230, 153, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 230, 153, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
          }}
        />
        {/* Animated glow orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-20 w-80 h-80 bg-[#00E699]/30 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -right-40 bottom-20 w-80 h-80 bg-[#00E699]/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-block rounded-full bg-[#00E699]/10 px-4 py-1.5 text-sm text-[#00E699] ring-1 ring-[#00E699]/20">
              Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Everything You Need for{" "}
              <span className="bg-gradient-to-r from-white to-[#00E699] text-transparent bg-clip-text">
                Modern Applications
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Built for developers who demand performance, reliability, and ease of use.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 py-16 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CardHoverEffect className="group h-full">
                <div className="relative p-8 bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl transition-all duration-300 hover:bg-[#00E699]/5 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00E699]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                    <div className="absolute top-0 right-0 w-[140%] h-[140%] bg-gradient-to-b from-[#00E699]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity transform rotate-45 translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="relative z-10">
                    <div className="mb-6 relative">
                      <div className="absolute -inset-2 bg-[#00E699]/20 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity" />
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00E699] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {feature.description}
                    </p>
                    {/* Feature stats */}
                    {feature.stats && (
                      <div className="mt-6 pt-6 border-t border-[#00E699]/10">
                        <div className="flex justify-between items-center text-sm">
                          {feature.stats.map((stat, i) => (
                            <div key={i} className="text-center">
                              <div className="text-[#00E699] font-bold">{stat.value}</div>
                              <div className="text-neutral-500">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardHoverEffect>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: <Database className="h-12 w-12 text-[#00E699]" />,
    title: "Serverless Scaling",
    description: "Automatically scales with your workload. Pay only for what you use with our intelligent resource allocation.",
    stats: [
      { value: "99.99%", label: "Uptime" },
      { value: "0.3ms", label: "Latency" },
      { value: "∞", label: "Scale" }
    ]
  },
  {
    icon: <Globe2 className="h-12 w-12 text-[#00E699]" />,
    title: "Global Distribution",
    description: "Deploy your database anywhere in the world with a single click. Multi-region support with automatic failover.",
    stats: [
      { value: "30+", label: "Regions" },
      { value: "<10ms", label: "Global RTT" },
      { value: "100%", label: "Availability" }
    ]
  },
  {
    icon: <Laptop className="h-12 w-12 text-[#00E699]" />,
    title: "Developer Experience",
    description: "Built for developers with modern tooling and instant setup. Comprehensive API and dashboard access.",
    stats: [
      { value: "5min", label: "Setup" },
      { value: "100+", label: "APIs" },
      { value: "24/7", label: "Support" }
    ]
  },
  {
    icon: <Zap className="h-12 w-12 text-[#00E699]" />,
    title: "Lightning Performance",
    description: "Optimized query execution with intelligent caching and indexing strategies for maximum speed.",
    stats: [
      { value: "<1ms", label: "Query Time" },
      { value: "10TB+", label: "Data Size" },
      { value: "1M+", label: "QPS" }
    ]
  },
  {
    icon: <Shield className="h-12 w-12 text-[#00E699]" />,
    title: "Enterprise Security",
    description: "Bank-grade encryption at rest and in transit. Advanced access controls and audit logging.",
    stats: [
      { value: "SOC2", label: "Compliant" },
      { value: "256bit", label: "Encryption" },
      { value: "HIPAA", label: "Ready" }
    ]
  },
  {
    icon: <Code2 className="h-12 w-12 text-[#00E699]" />,
    title: "Advanced Analytics",
    description: "Real-time analytics and monitoring. Custom dashboards and alerts for deep insights.",
    stats: [
      { value: "Real-time", label: "Analytics" },
      { value: "Custom", label: "Metrics" },
      { value: "AI", label: "Powered" }
    ]
  }
] 