import { Header } from '@/components/header'
import { HeroSection } from '@/components/sections/hero'
import { GallerySection } from '@/components/sections/gallery'
import { AboutSection } from '@/components/sections/about'
import { ServicesSection } from '@/components/sections/services'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <GallerySection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
