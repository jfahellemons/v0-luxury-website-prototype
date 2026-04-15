'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Award, Calendar, Dna } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { FadeIn } from '@/components/animations/fade-in'

interface Horse {
  id: string
  name: string
  breed: string
  age: number
  description: string
  image: string
  achievements: string[]
  pedigree: string
}

const horses: Horse[] = [
  {
    id: '1',
    name: 'Valentino',
    breed: 'KWPN',
    age: 8,
    description: 'Een uitzonderlijke hengst met een indrukwekkende afstamming. Valentino combineert kracht met elegantie en heeft bewezen succesvol te zijn in de internationale dressuur.',
    image: '/images/horses/valentino.jpg',
    achievements: ['Grand Prix Dressuur', 'KWPN Kampioen 2023', 'Nederlands Kampioen Jonge Paarden'],
    pedigree: 'Vivaldi x Jazz',
  },
  {
    id: '2',
    name: 'Isabella',
    breed: 'KWPN',
    age: 6,
    description: 'Een gracieuze merrie met buitengewone bewegingen. Isabella toont uitzonderlijk talent voor de hoogste niveaus van de dressuursport.',
    image: '/images/horses/isabella.jpg',
    achievements: ['Nationaal Kampioen Jonge Paarden', 'Preferent Merrie', 'PSG Niveau'],
    pedigree: 'Desperado x Ferro',
  },
  {
    id: '3',
    name: 'Wellington',
    breed: 'KWPN',
    age: 10,
    description: 'Een ervaren springpaard met een ongeëvenaarde techniek. Wellington heeft talloze overwinningen behaald in internationale Grand Prix-wedstrijden.',
    image: '/images/horses/wellington.jpg',
    achievements: ['CSI 5* Winnaar', 'Nations Cup Veteraan', 'Dutch Masters Finalist'],
    pedigree: 'Zirocco Blue x Heartbreaker',
  },
  {
    id: '4',
    name: 'Aurora',
    breed: 'KWPN',
    age: 5,
    description: 'Een veelbelovende jonge merrie met buitengewone aanleg voor zowel dressuur als springen. Aurora vertoont een perfecte combinatie van atletisch vermogen en temperament.',
    image: '/images/horses/aurora.jpg',
    achievements: ['Fokdag Kampioen', 'Veulenkampioen Noord-Brabant', 'IBOP Geslaagd'],
    pedigree: 'Glamourdale x Apache',
  },
  {
    id: '5',
    name: 'Maximilian',
    breed: 'KWPN',
    age: 12,
    description: 'Een gevestigde Grand Prix-hengst met een indrukwekkende staat van dienst. Maximilian is niet alleen succesvol in de sport maar ook als fokpaard.',
    image: '/images/horses/maximilian.jpg',
    achievements: ['Olympisch Reserve', 'CDI-W Winnaar', 'Keur Hengst'],
    pedigree: 'Totilas x Gribaldi',
  },
  {
    id: '6',
    name: 'Seraphina',
    breed: 'KWPN',
    age: 7,
    description: 'Een elegante merrie die uitblinkt in haar bewegingen en uitstraling. Seraphina combineert haar sportieve talent met een uitzonderlijk karakter.',
    image: '/images/horses/seraphina.jpg',
    achievements: ['Small Tour Kampioen', 'Ster Merrie', 'PAVO Cup Finalist'],
    pedigree: 'Expression x De Niro',
  },
]

export function GallerySection() {
  const [selectedHorse, setSelectedHorse] = useState<Horse | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = (horse: Horse) => {
    setSelectedHorse(horse)
    setIsOpen(true)
  }

  const navigateHorse = (direction: 'prev' | 'next') => {
    if (!selectedHorse) return
    const currentIndex = horses.findIndex(h => h.id === selectedHorse.id)
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + horses.length) % horses.length
      : (currentIndex + 1) % horses.length
    setSelectedHorse(horses[newIndex])
  }

  return (
    <section id="paarden" className="bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mx-auto mb-6 h-0.5 w-16 bg-gold" />
            <h2 className="mb-4 font-sans text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              Onze Paarden
            </h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
              Ontdek onze zorgvuldig geselecteerde paarden, elk gefokt en getraind 
              volgens de hoogste standaarden van de hippische sport.
            </p>
          </div>
        </FadeIn>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {horses.map((horse, index) => (
            <FadeIn key={horse.id} delay={index * 0.1}>
              <button
                onClick={() => openModal(horse)}
                className="group relative aspect-square w-full overflow-hidden rounded-sm bg-muted focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <Image
                  src={horse.image}
                  alt={horse.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-espresso/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="font-sans text-2xl font-semibold text-white">
                    {horse.name}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-white/80">
                    {horse.breed} | {horse.age} jaar
                  </p>
                  <span className="mt-4 border-b border-gold pb-0.5 font-sans text-sm text-gold">
                    Bekijk Details
                  </span>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent 
            className="max-h-[90vh] max-w-6xl overflow-y-auto border-0 bg-background p-0"
            showCloseButton={false}
          >
            {selectedHorse && (
              <div className="flex flex-col">
                {/* Close Button */}
                <DialogClose className="absolute right-4 top-4 z-20 rounded-full bg-white/90 p-2 text-foreground transition-colors hover:bg-gold hover:text-gold-foreground">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Sluiten</span>
                </DialogClose>

                {/* Image */}
                <div className="relative aspect-square bg-muted/40 sm:aspect-[5/4] lg:aspect-[16/10]">
                  <Image
                    src={selectedHorse.image}
                    alt={selectedHorse.name}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={() => navigateHorse('prev')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
                    aria-label="Vorig paard"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => navigateHorse('next')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
                    aria-label="Volgend paard"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Details */}
                <div className="flex flex-col p-8 lg:p-10">
                  <DialogTitle className="font-sans text-3xl font-bold text-foreground lg:text-4xl">
                    {selectedHorse.name}
                  </DialogTitle>
                  
                  <DialogDescription className="sr-only">
                    Details over {selectedHorse.name}
                  </DialogDescription>
                  
                  <div className="mt-2 flex items-center gap-4 font-sans text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Dna className="h-4 w-4 text-gold" />
                      {selectedHorse.breed}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-gold" />
                      {selectedHorse.age} jaar
                    </span>
                  </div>

                  <div className="mt-4 h-0.5 w-12 bg-gold" />

                  <p className="mt-6 font-sans text-base leading-relaxed text-muted-foreground">
                    {selectedHorse.description}
                  </p>

                  {/* Pedigree */}
                  <div className="mt-6">
                    <p className="font-sans text-xs font-medium uppercase tracking-wider text-taupe">
                      Afstamming
                    </p>
                    <p className="mt-1 font-sans text-lg text-foreground">
                      {selectedHorse.pedigree}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="mt-6">
                    <p className="font-sans text-xs font-medium uppercase tracking-wider text-taupe">
                      Prestaties
                    </p>
                    <ul className="mt-3 space-y-2">
                      {selectedHorse.achievements.map((achievement, index) => (
                        <li 
                          key={index}
                          className="flex items-center gap-2 font-sans text-sm text-foreground"
                        >
                          <Award className="h-4 w-4 text-gold" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <Button 
                      className="w-full bg-gold text-gold-foreground hover:bg-gold-hover"
                      onClick={() => {
                        setIsOpen(false)
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      Informatie Aanvragen
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
