'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu } from 'lucide-react'
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
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const sectionIds = useMemo(
    () => navLinks.map(link => link.href.replace('#', '')),
    []
  )

  const scrollToSection = useCallback((href: string) => {
    if (!isHomePage) {
      router.push(`/${href}`)
      return
    }

    const sectionId = href.replace('#', '')
    const element = document.getElementById(sectionId)
    if (!element) return

    setActiveSection(sectionId)
    window.history.replaceState(null, '', href)
    element.scrollIntoView({ behavior: 'smooth' })
  }, [isHomePage, router])

  useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) {
        setIsScrolled(true)
        return
      }
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isHomePage])

  useEffect(() => {
    if (!isHomePage) {
      return
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (sections.length === 0) return

    const updateActiveByPosition = () => {
      const viewportMiddle = window.innerHeight * 0.45
      let nextActive = sectionIds[0]
      let bestDistance = Number.POSITIVE_INFINITY

      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        const distance = Math.abs(rect.top - viewportMiddle)
        if (distance < bestDistance) {
          bestDistance = distance
          nextActive = section.id
        }
      }

      setActiveSection(nextActive)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length > 0) {
          const nextId = visibleEntries[0].target.id
          setActiveSection(nextId)
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: '-20% 0px -55% 0px',
      }
    )

    sections.forEach((section) => observer.observe(section))
    updateActiveByPosition()

    const handleHashChange = () => {
      const sectionId = window.location.hash.replace('#', '')
      if (sectionId && sectionIds.includes(sectionId)) {
        setActiveSection(sectionId)
      }
    }
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [isHomePage, sectionIds])

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
          href={isHomePage ? '#home' : '/#home'}
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
            const isActive =
              isHomePage && activeSection === link.href.replace('#', '')
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
          <Link
            href="/tim-lips"
            className={cn(
              'group relative font-sans text-sm font-medium tracking-wide transition-colors',
              pathname === '/tim-lips'
                ? 'text-gold'
                : isScrolled
                  ? 'text-foreground/80 hover:text-foreground'
                  : 'text-white/80 hover:text-white'
            )}
          >
            Tim Lips
            <span
              className={cn(
                'absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ease-out',
                pathname === '/tim-lips' ? 'w-full' : 'w-0 group-hover:w-full'
              )}
            />
          </Link>
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
            <div className="flex h-full flex-col px-6">
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
                        isHomePage && activeSection === link.href.replace('#', '')
                          ? 'text-gold'
                          : 'text-foreground hover:text-gold'
                      )}
                    >
                      {link.label}
                    </button>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    href="/tim-lips"
                    className={cn(
                      'flex w-full items-center py-4 font-sans text-lg font-medium transition-colors',
                      pathname === '/tim-lips'
                        ? 'text-gold'
                        : 'text-foreground hover:text-gold'
                    )}
                  >
                    Tim Lips
                  </Link>
                </SheetClose>
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
