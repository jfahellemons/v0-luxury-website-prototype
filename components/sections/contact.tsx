'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { FadeIn } from '@/components/animations/fade-in'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mx-auto mb-6 h-0.5 w-16 bg-gold" />
            <h2 className="mb-4 font-sans text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              Contact
            </h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
              Neem contact met ons op voor meer informatie over onze paarden, 
              diensten of om een bezoek te plannen aan onze stal.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact Info */}
          <FadeIn direction="left">
            <h3 className="mb-8 font-sans text-2xl font-semibold text-foreground">
              Contactgegevens
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-sm bg-gold/10 p-3">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-sans font-medium text-foreground">Adres</p>
                  <p className="mt-1 font-sans text-muted-foreground">
                    Stalweg 42<br />
                    5281 AB Boxtel<br />
                    Noord-Brabant, Nederland
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-sm bg-gold/10 p-3">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-sans font-medium text-foreground">Telefoon</p>
                  <a 
                    href="tel:+31411123456" 
                    className="mt-1 block font-sans text-muted-foreground transition-colors hover:text-gold"
                  >
                    +31 (0)411 123 456
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-sm bg-gold/10 p-3">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-sans font-medium text-foreground">E-mail</p>
                  <a 
                    href="mailto:info@lipsstables.nl" 
                    className="mt-1 block font-sans text-muted-foreground transition-colors hover:text-gold"
                  >
                    info@lipsstables.nl
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-sm bg-gold/10 p-3">
                  <Clock className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-sans font-medium text-foreground">Openingstijden</p>
                  <p className="mt-1 font-sans text-muted-foreground">
                    Maandag - Vrijdag: 08:00 - 18:00<br />
                    Zaterdag: 09:00 - 16:00<br />
                    Zondag: Op afspraak
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="right" delay={0.2}>
            <div className="rounded-sm bg-card p-8 shadow-sm lg:p-10">
            {isSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-6 rounded-full bg-gold/10 p-4">
                  <Send className="h-8 w-8 text-gold" />
                </div>
                <h3 className="mb-2 font-sans text-2xl font-semibold text-foreground">
                  Bericht Verzonden
                </h3>
                <p className="font-sans text-muted-foreground">
                  Bedankt voor uw interesse. Wij nemen zo spoedig mogelijk contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-sans text-sm font-medium">
                      Voornaam
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="border-border bg-background focus:border-gold focus:ring-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-sans text-sm font-medium">
                      Achternaam
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="border-border bg-background focus:border-gold focus:ring-gold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-sans text-sm font-medium">
                    E-mailadres
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="border-border bg-background focus:border-gold focus:ring-gold"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-sans text-sm font-medium">
                    Telefoonnummer
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="border-border bg-background focus:border-gold focus:ring-gold"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-sans text-sm font-medium">
                    Uw Bericht
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Vertel ons hoe wij u kunnen helpen..."
                    className="resize-none border-border bg-background focus:border-gold focus:ring-gold"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    'w-full bg-gold text-gold-foreground hover:bg-gold-hover',
                    isSubmitting && 'cursor-not-allowed opacity-70'
                  )}
                >
                  {isSubmitting ? 'Verzenden...' : 'Verstuur Bericht'}
                </Button>
              </form>
            )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
