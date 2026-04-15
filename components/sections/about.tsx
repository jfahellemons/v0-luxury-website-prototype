'use client'

import Image from 'next/image'
import { FadeIn } from '@/components/animations/fade-in'

export function AboutSection() {
  return (
    <section id="erfgoed" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm lg:aspect-[3/4]">
              <Image
                src="/images/stable-heritage.jpg"
                alt="Historische stal van Lips Stables"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Accent border */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border-2 border-gold" />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right" delay={0.2}>
            <div className="mb-6 h-0.5 w-16 bg-gold" />
            
            <h2 className="mb-6 font-sans text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              Erfgoed
            </h2>
            
            <div className="space-y-4 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Al meer dan zeventig jaar staat Lips Stables synoniem voor 
                uitmuntendheid in de Nederlandse paardenwereld. Wat begon als 
                een bescheiden familiebedrijf in het hart van Noord-Brabant, 
                is uitgegroeid tot een van de meest gerespecteerde namen in 
                de internationale hippische sport.
              </p>
              
              <p>
                Onze filosofie is eenvoudig maar onwrikbaar: elk paard verdient 
                de hoogste standaard van zorg, training en toewijding. Deze 
                waarden worden van generatie op generatie doorgegeven, resulterend 
                in paarden die excelleren in dressuur, springen en eventing.
              </p>
              
              <p>
                Met trots hebben wij door de jaren heen talloze kampioenen 
                gefokt en getraind, waarvan velen op het hoogste niveau hebben 
                gepresteerd. Maar bovenal zijn wij trots op de duurzame relaties 
                die wij opbouwen met eigenaren en ruiters wereldwijd.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-8 border-t border-border pt-10">
              <div>
                <p className="font-sans text-3xl font-bold text-gold md:text-4xl">70+</p>
                <p className="mt-1 font-sans text-sm text-muted-foreground">Jaren Ervaring</p>
              </div>
              <div>
                <p className="font-sans text-3xl font-bold text-gold md:text-4xl">500+</p>
                <p className="mt-1 font-sans text-sm text-muted-foreground">Gefokte Paarden</p>
              </div>
              <div>
                <p className="font-sans text-3xl font-bold text-gold md:text-4xl">50+</p>
                <p className="mt-1 font-sans text-sm text-muted-foreground">Kampioenen</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
