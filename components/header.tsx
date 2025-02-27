"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [stars, setStars] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Fetch GitHub stars
  useEffect(() => {
    fetch('https://api.github.com/repos/Owusu1946/saas-landing-page')
      .then(response => response.json())
      .then(data => {
        if (data.stargazers_count !== undefined) {
          setStars(data.stargazers_count)
        }
      })
      .catch(error => {
        console.error('Error fetching GitHub stars:', error)
      })
  }, [])

  // Format star count with k for thousands
  const formatStars = (count: number): string => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k'
    }
    return count.toString()
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-neutral-300 hover:text-white focus:outline-none">
              Product
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-neutral-900 border-neutral-800 text-white">
              <DropdownMenuItem className="hover:bg-neutral-800 focus:bg-neutral-800">
                <Link href="/product/features" className="w-full">Features</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-neutral-800 focus:bg-neutral-800">
                <Link href="/product/integrations" className="w-full">Integrations</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-neutral-800 focus:bg-neutral-800">
                <Link href="/product/changelog" className="w-full">Changelog</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-neutral-300 hover:text-white focus:outline-none">
              Solutions
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-neutral-900 border-neutral-800 text-white">
              <DropdownMenuItem className="hover:bg-neutral-800 focus:bg-neutral-800">
                <Link href="/solutions/startups" className="w-full">For Startups</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-neutral-800 focus:bg-neutral-800">
                <Link href="/solutions/enterprise" className="w-full">For Enterprise</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-neutral-800 focus:bg-neutral-800">
                <Link href="/solutions/case-studies" className="w-full">Case Studies</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/docs" className="text-sm text-neutral-300 hover:text-white">
            Docs
          </Link>
          <Link href="/pricing" className="text-sm text-neutral-300 hover:text-white">
            Pricing
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-neutral-300 hover:text-white focus:outline-none">
              Company
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-neutral-900 border-neutral-800 text-white">
              <DropdownMenuItem className="hover:bg-neutral-800 focus:bg-neutral-800">
                <Link href="/company/about" className="w-full">About Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-neutral-800 focus:bg-neutral-800">
                <Link href="/company/blog" className="w-full">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-neutral-800 focus:bg-neutral-800">
                <Link href="/company/careers" className="w-full">Careers</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-4">
          {/* GitHub Stars - Real Count */}
          <a 
            href="https://github.com/Owusu1946/saas-landing-page/stargazers" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1 text-neutral-300 hover:text-white"
            onClick={(e) => {
              e.preventDefault()
              window.open('https://github.com/Owusu1946/saas-landing-page/stargazers', '_blank')
              // Open star action in a new tab
              window.open('https://github.com/Owusu1946/saas-landing-page', '_blank')
            }}
          >
            <svg height="20" width="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            <span className="text-sm">{stars !== null ? formatStars(stars) : '...'}</span>
          </a>
          
          {/* Desktop login buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button className="bg-[#ffffff] hover:bg-[#00cc88]" variant="ghost" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button className="bg-[#00E699] hover:bg-[#ffffff] text-black font-medium">
              Sign Up
            </Button>
          </div>
          
          {/* Mobile menu toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            className="lg:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-black border-t border-neutral-800 z-50 overflow-hidden transition-all duration-300 ease-in-out">
          <div className="container py-4 flex flex-col gap-4">
            {/* Product Section */}
            <div className="border-b border-neutral-800 pb-4">
              <h3 className="text-white font-medium mb-2">Product</h3>
              <div className="flex flex-col gap-2 pl-2">
                <Link href="/product/features" className="text-neutral-400 hover:text-white py-1">
                  Features
                </Link>
                <Link href="/product/integrations" className="text-neutral-400 hover:text-white py-1">
                  Integrations
                </Link>
                <Link href="/product/changelog" className="text-neutral-400 hover:text-white py-1">
                  Changelog
                </Link>
              </div>
            </div>
            
            {/* Solutions Section */}
            <div className="border-b border-neutral-800 pb-4">
              <h3 className="text-white font-medium mb-2">Solutions</h3>
              <div className="flex flex-col gap-2 pl-2">
                <Link href="/solutions/startups" className="text-neutral-400 hover:text-white py-1">
                  For Startups
                </Link>
                <Link href="/solutions/enterprise" className="text-neutral-400 hover:text-white py-1">
                  For Enterprise
                </Link>
                <Link href="/solutions/case-studies" className="text-neutral-400 hover:text-white py-1">
                  Case Studies
                </Link>
              </div>
            </div>
            
            {/* Direct Links */}
            <div className="border-b border-neutral-800 pb-4">
              <Link href="/docs" className="block text-white py-2">
                Docs
              </Link>
              <Link href="/pricing" className="block text-white py-2">
                Pricing
              </Link>
            </div>
            
            {/* Company Section */}
            <div className="border-b border-neutral-800 pb-4">
              <h3 className="text-white font-medium mb-2">Company</h3>
              <div className="flex flex-col gap-2 pl-2">
                <Link href="/company/about" className="text-neutral-400 hover:text-white py-1">
                  About Us
                </Link>
                <Link href="/company/blog" className="text-neutral-400 hover:text-white py-1">
                  Blog
                </Link>
                <Link href="/company/careers" className="text-neutral-400 hover:text-white py-1">
                  Careers
                </Link>
              </div>
            </div>
            
            {/* GitHub and Auth buttons on mobile */}
            <div className="pt-2 flex flex-col gap-3">
              <a 
                href="https://github.com/Owusu1946/saas-landing-page/stargazers" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white py-1"
                onClick={(e) => {
                  e.preventDefault()
                  window.open('https://github.com/Owusu1946/saas-landing-page/stargazers', '_blank')
                  window.open('https://github.com/Owusu1946/saas-landing-page', '_blank')
                }}
              >
                <svg height="20" width="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                <span>Star on GitHub {stars !== null ? `(${formatStars(stars)})` : ''}</span>
              </a>
              
              <div className="flex gap-2 pt-2">
                <Button className="flex-1 bg-[#ffffff] hover:bg-[#00cc88]" variant="ghost" asChild>
                  <Link href="/login">Log In</Link>
                </Button>
                <Button className="flex-1 bg-[#00E699] hover:bg-[#ffffff] text-black font-medium">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}