"use client"

import { useEffect, useState } from "react"
import Header from "./components/header"
import HeroSection from "./components/hero-section"
import FeaturesSection from "./components/features-section"
import DatabaseVisualSection from "./components/database-visual-section"
import PerformanceSection from "./components/performance-section"
import PricingSection from "./components/pricing-section"
import Footer from "./components/footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="relative min-h-screen bg-black">
        <HeroSection />
        <FeaturesSection />
        <DatabaseVisualSection />
        <PerformanceSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}

