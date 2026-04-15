'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Video autoplay failed, fallback handled by poster
      })
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback image while video loads */}
        <div
          className={`absolute inset-0 bg-espresso transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: 'url(/images/hero-fallback.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setIsVideoLoaded(true)}
          className="h-full w-full object-cover"
          poster="/images/hero-fallback.jpg"
        >
          <source src="/videos/hero-horses.mp4" type="video/mp4" />
          <source src="/videos/hero-horses.webm" type="video/webm" />
        </video>

        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/40 to-espresso/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-gold md:text-base">
          Premium Paardenfokkerij sinds 1952
        </p>
        
        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
          <span className="text-balance">
            Ervaar Hippische
            <br className="hidden sm:inline" />
            {' '}Excellentie
          </span>
        </h1>
        
        <p className="mx-auto mb-10 max-w-2xl font-sans text-base leading-relaxed text-white/80 md:text-lg lg:text-xl">
          Waar erfgoed en moderne excellentie samenkomen. Al generaties lang 
          toonaangevend in de fokkerij van uitzonderlijke paarden.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            onClick={() => scrollToSection('paarden')}
            className="bg-gold px-8 text-gold-foreground hover:bg-gold-hover"
          >
            Ontdek Onze Collectie
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('erfgoed')}
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            Ons Verhaal
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('paarden')}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/60 transition-colors hover:text-gold"
        aria-label="Scroll naar beneden"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  )
}
