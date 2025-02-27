"use client"

import { useEffect, useState } from "react"
import Header from "./components/header"
import HeroSection from "./components/hero-section"
import FeaturesSection from "./components/features-section"
import DatabaseVisualSection from "./components/database-visual-section"
import PerformanceSection from "./components/performance-section"
import PricingSection from "./components/pricing-section"
import Footer from "./components/footer"
import TestimonialsSection from "@/components/testimonials-section"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed inset-0 overflow-y-auto overflow-x-hidden bg-black">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="relative flex-grow bg-black">
          <HeroSection />
          <FeaturesSection />
          <DatabaseVisualSection />
          <PerformanceSection />
          <TestimonialsSection />
          <PricingSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

