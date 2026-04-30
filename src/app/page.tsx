import {
  Navigation,
  HeroSection,
  LuminaDifference,
  FeaturedCollection,
  RitualSection,
  SocialProof,
  NewsletterSection,
  ConsultationMapSection,
  Footer,
} from '@/components';
import FAQ from '@/components/faq';
import Navbar from '@/components/navbar';
import VoiceOfSatisfaction from '@/components/reviews';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  return (
    <main className="w-full">
      <BookingModal />
      <Navbar />
      <HeroSection />
      <LuminaDifference />
      <FeaturedCollection />
      <RitualSection />
      <SocialProof />
      <NewsletterSection />
      <VoiceOfSatisfaction />
      <FAQ />
      <ConsultationMapSection />
      {/* <Footer /> */}
    </main>
  );
}
