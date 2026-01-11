import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/layout/HeroSection';
import TreatmentsSection from '@/components/layout/TreatmentsSection';
import AboutSection from '@/components/layout/AboutSection';
import TestimonialsSection from '@/components/layout/TestimonialsSection';
import ContactSection from '@/components/layout/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TreatmentsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}