import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import UseCasesSection from "@/components/use-cases-section"
import PricingSection from "@/components/pricing-section"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
