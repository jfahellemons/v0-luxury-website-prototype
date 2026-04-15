import Link from 'next/link'
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
]

const footerLinks = {
  navigatie: [
    { label: 'Home', href: '/#home' },
    { label: 'Onze Paarden', href: '/#paarden' },
    { label: 'Diensten', href: '/#diensten' },
    { label: 'Erfgoed', href: '/#erfgoed' },
    { label: 'Tim Lips', href: '/tim-lips' },
    { label: 'Contact', href: '/#contact' },
  ],
  diensten: [
    { label: 'Premium Fokkerij', href: '/#diensten' },
    { label: 'Professionele Training', href: '/#diensten' },
    { label: 'Veterinaire Zorg', href: '/#diensten' },
    { label: 'Luxe Stalling', href: '/#diensten' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-espresso text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="inline-block font-sans text-2xl font-bold text-white">
              Lips Stables
            </Link>
            <p className="mt-4 font-sans text-sm leading-relaxed text-white/70">
              Al meer dan 70 jaar toonaangevend in premium paardenfokkerij en 
              hippische excellentie in Nederland.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm bg-white/10 p-2 transition-colors hover:bg-gold hover:text-gold-foreground"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-sans text-lg font-semibold text-white">Navigatie</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.navigatie.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-sans text-lg font-semibold text-white">Diensten</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.diensten.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sans text-lg font-semibold text-white">Contact</h3>
            <div className="mt-4 space-y-3 font-sans text-sm text-white/70">
              <p>
                Stalweg 42<br />
                5281 AB Boxtel<br />
                Noord-Brabant
              </p>
              <p>
                <a href="tel:+31411123456" className="transition-colors hover:text-gold">
                  +31 (0)411 123 456
                </a>
              </p>
              <p>
                <a href="mailto:info@lipsstables.nl" className="transition-colors hover:text-gold">
                  info@lipsstables.nl
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-sans text-sm text-white/50">
              &copy; {currentYear} Lips Stables. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6">
              <Link 
                href="#" 
                className="font-sans text-sm text-white/50 transition-colors hover:text-gold"
              >
                Privacybeleid
              </Link>
              <Link 
                href="#" 
                className="font-sans text-sm text-white/50 transition-colors hover:text-gold"
              >
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
