'use client'

import { Sparkles, GraduationCap, Heart, Home } from 'lucide-react'
import { FadeIn } from '@/components/animations/fade-in'

const services = [
  {
    icon: Sparkles,
    title: 'Premium Fokkerij',
    description: 'Zorgvuldig geselecteerde bloedlijnen en professionele fokprogramma\'s resulterend in paarden met uitzonderlijke kwaliteit en prestatiepotentieel.',
    link: '#contact',
  },
  {
    icon: GraduationCap,
    title: 'Professionele Training',
    description: 'Individuele trainingsprogramma\'s onder leiding van ervaren ruiters en trainers, afgestemd op het niveau en de doelen van elk paard.',
    link: '#contact',
  },
  {
    icon: Heart,
    title: 'Veterinaire Zorg',
    description: 'Uitgebreide gezondheidszorg in samenwerking met toonaangevende paardendierenartsen, inclusief preventieve zorg en sportgeneeskunde.',
    link: '#contact',
  },
  {
    icon: Home,
    title: 'Luxe Stalling',
    description: 'Moderne faciliteiten met ruime boxen, uitgebreide weides en een optimaal klimaat voor het welzijn en de ontwikkeling van uw paard.',
    link: '#contact',
  },
]

export function ServicesSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="diensten" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mx-auto mb-6 h-0.5 w-16 bg-gold" />
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              Onze Diensten
            </h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
              Van fokkerij tot training, wij bieden een volledig scala aan 
              premium diensten voor de meest veeleisende paardeneigenaren.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className="group relative h-full rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:border-gold/50 hover:shadow-lg">
                {/* Icon */}
                <div className="mb-6 inline-flex rounded-sm bg-gold/10 p-3">
                  <Icon className="h-6 w-6 text-gold" />
                </div>

                {/* Content */}
                <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                
                <p className="mb-6 font-sans text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Link */}
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center border-b border-transparent font-sans text-sm font-medium text-gold transition-colors hover:border-gold"
                >
                  Meer informatie
                </button>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
