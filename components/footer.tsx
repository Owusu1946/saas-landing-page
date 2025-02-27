"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-[#00E699]/10 bg-black py-16">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="space-y-4 text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Zap className="h-6 w-6 text-[#00E699]" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00E699] to-[#00E699]/50">
                Saas Pro
              </span>
            </div>
            <p className="text-sm text-neutral-400">
              Serverless PostgreSQL for modern applications.
            </p>
          </div>
          
          <div className="space-y-4 text-center lg:text-left">
            <h4 className="text-sm font-medium text-white">Product</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link href="#features" className="hover:text-[#00E699] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-[#00E699] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#docs" className="hover:text-[#00E699] transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-center lg:text-left">
            <h4 className="text-sm font-medium text-white">Company</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link href="#about" className="hover:text-[#00E699] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-[#00E699] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#careers" className="hover:text-[#00E699] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-center lg:text-left">
            <h4 className="text-sm font-medium text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link href="#privacy" className="hover:text-[#00E699] transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="hover:text-[#00E699] transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#00E699] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 border-t border-[#00E699]/10 pt-8 text-center text-sm text-neutral-400"
        >
          © {new Date().getFullYear()} <Link href="https://github.com/Owusu1946" target="_blank" className="hover:text-[#00E699] transition-colors">Owusu1946</Link>. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
} 