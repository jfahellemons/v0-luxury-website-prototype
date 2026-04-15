'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet'
import { MagneticLink } from '@/components/animations/magnetic-link'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#paarden', label: 'Onze Paarden' },
  { href: '#diensten', label: 'Diensten' },
  { href: '#erfgoed', label: 'Erfgoed' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    let rafId: number | null = null

    const handleScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50)

        // Update active section — iterate in reverse order (bottom to top)
        // and pick the first section whose top is above the viewport threshold
        const sectionIds = navLinks.map(link => link.href.replace('#', ''))
        let found = false
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const element = document.getElementById(sectionIds[i])
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 150) {
              setActiveSection(sectionIds[i])
              found = true
              break
            }
          }
        }
        // If no section matched (e.g. at very top), default to first
        if (!found) {
          setActiveSection(sectionIds[0])
        }

        rafId = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Run once on mount to set initial state
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/70 shadow-lg shadow-espresso/5 backdrop-blur-xl border-b border-gold/15'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('#home')
          }}
          className="flex items-center gap-3 transition-all duration-500"
        >
          <img
            src="/images/lips-logo.png"
            alt="Lips Stables"
            className={cn(
              'transition-all duration-500',
              isScrolled ? 'h-10 lg:h-12' : 'h-12 lg:h-14'
            )}
          />
        </Link>

        {/* Desktop Navigation with magnetic hover effects */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <MagneticLink
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                isActive={isActive}
                className={cn(
                  isActive
                    ? 'text-gold'
                    : isScrolled
                      ? 'text-foreground/80 hover:text-foreground'
                      : 'text-white/80 hover:text-white'
                )}
              >
                {link.label}
              </MagneticLink>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            variant="outline"
            onClick={() => scrollToSection('#contact')}
            className={cn(
              'transition-all duration-500',
              isScrolled
                ? 'border-gold bg-transparent text-gold hover:bg-gold hover:text-gold-foreground'
                : 'border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white'
            )}
          >
            Neem Contact Op
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className={cn(
                isScrolled ? 'text-foreground' : 'text-white'
              )}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-background sm:max-w-sm">
            <SheetTitle className="sr-only">Navigatie Menu</SheetTitle>
            <div className="flex h-full flex-col pl-6">
              <div className="flex items-center py-4">
                <img
                  src="/images/lips-logo.png"
                  alt="Lips Stables"
                  className="h-10"
                />
              </div>

              <nav className="flex flex-1 flex-col gap-1 pt-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className={cn(
                        'flex w-full items-center py-4 font-sans text-lg font-medium transition-colors',
                        activeSection === link.href.replace('#', '')
                          ? 'text-gold'
                          : 'text-foreground hover:text-gold'
                      )}
                    >
                      {link.label}
                    </button>
                  </SheetClose>
                ))}
              </nav>

              <div className="border-t border-border py-6">
                <SheetClose asChild>
                  <Button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full bg-gold text-gold-foreground hover:bg-gold-hover"
                  >
                    Neem Contact Op
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
