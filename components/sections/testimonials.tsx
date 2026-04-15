'use client'

import { Quote } from 'lucide-react'
import { FadeIn } from '@/components/animations/fade-in'

const testimonials = [
  {
    quote: 'De professionaliteit en toewijding van Lips Stables zijn ongeëvenaard. Mijn paard heeft zich onder hun begeleiding ontwikkeld tot een ware kampioen.',
    author: 'Marieke van den Berg',
    title: 'Dressuurruiter, Internationaal Niveau',
  },
  {
    quote: 'Al meer dan twintig jaar vertrouw ik op de expertise van de familie Lips. Hun kennis van bloedlijnen en oog voor kwaliteit is werkelijk uitzonderlijk.',
    author: 'Jan Willem Verstappen',
    title: 'Paardenfokker & Eigenaar',
  },
  {
    quote: 'De faciliteiten zijn wereldklasse en de verzorging is onberispelijk. Mijn paarden voelen zich er thuis en presteren beter dan ooit.',
    author: 'Elisabeth Jonker',
    title: 'Springamazone, KNHS Eredivisie',
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-espresso py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mx-auto mb-6 h-0.5 w-16 bg-gold" />
            <h2 className="mb-4 font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
              Wat Onze Klanten Zeggen
            </h2>
            <p className="font-sans text-base leading-relaxed text-white/70 md:text-lg">
              De ervaringen van eigenaren en ruiters die hun paarden aan ons toevertrouwen.
            </p>
          </div>
        </FadeIn>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className="relative h-full rounded-sm bg-white/5 p-8 backdrop-blur-sm">
                {/* Quote Icon */}
                <Quote className="mb-6 h-10 w-10 text-gold" />

                {/* Quote */}
                <blockquote className="mb-8 font-sans text-base italic leading-relaxed text-white/90">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                {/* Author */}
                <div className="border-t border-white/10 pt-6">
                  <p className="font-serif text-lg font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="mt-1 font-sans text-sm text-white/60">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
