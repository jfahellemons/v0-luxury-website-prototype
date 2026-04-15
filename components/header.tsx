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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/98 shadow-sm backdrop-blur-sm'
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
          className="font-serif text-xl font-bold tracking-wide text-foreground transition-colors hover:text-gold lg:text-2xl"
        >
          Lips Stables
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={cn(
                'relative font-sans text-sm font-medium tracking-wide transition-colors',
                activeSection === link.href.replace('#', '')
                  ? 'text-gold'
                  : 'text-foreground/80 hover:text-foreground'
              )}
            >
              {link.label}
              {activeSection === link.href.replace('#', '') && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gold" />
              )}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            variant="outline"
            onClick={() => scrollToSection('#contact')}
            className="border-gold bg-transparent text-gold hover:bg-gold hover:text-gold-foreground"
          >
            Neem Contact Op
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-background sm:max-w-sm">
            <SheetTitle className="sr-only">Navigatie Menu</SheetTitle>
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between py-4">
                <span className="font-serif text-xl font-bold">Lips Stables</span>
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
