import HeroSection from './components/HeroSection';
import ValuesSection from './components/ValuesSection';
import ProgramsSection from './components/ProgramsSection';
import NewsSection from './components/NewsSection';
import VideoSection from './components/VideoSection';
import CTASection from './components/CTASection';
import TestimonialsSection from './components/TestimonialsSection';
import Newsletter from '@/components/feature/Newsletter';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ValuesSection />
      <ProgramsSection />
      <NewsSection />
      <VideoSection />
      <CTASection />
      <TestimonialsSection />
      <Newsletter />
    </main>
  );
}