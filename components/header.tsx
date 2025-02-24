"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-neutral-800 bg-black">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.4 14.2L16 2L7.6 14.2L16 26.4L24.4 14.2Z" 
                fill="currentColor" 
                className="text-[#00E699]"/>
            </svg>
            <span className="text-xl font-semibold text-white">SaaS</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-neutral-300 hover:text-white">
                Product
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-neutral-300 hover:text-white">
                Solutions
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <Link href="/docs" className="text-sm text-neutral-300 hover:text-white">
              Docs
            </Link>
            <Link href="/pricing" className="text-sm text-neutral-300 hover:text-white">
              Pricing
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-neutral-300 hover:text-white">
                Company
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </nav>

          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com/Owusu1946/saas-landing-page" 
              target="_blank"
              className="hidden lg:flex items-center gap-1 text-neutral-300 hover:text-white"
            >
              <svg height="20" width="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <span className="text-sm">16.2k</span>
            </Link>
            <Link href="/login" className="text-sm text-neutral-300 hover:text-white">
              Log In
            </Link>
            <Button className="bg-[#00E699] hover:bg-[#00cc88] text-black font-medium">
              Sign Up
            </Button>
          </div>
        </div>
      </header>
  )
} 