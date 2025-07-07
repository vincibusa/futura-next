import dynamic from 'next/dynamic';
import HeroSection from './components/sections/HeroSection';

// Dynamically import all sections below the fold for performance optimization
const AboutSection = dynamic(() => import('./components/sections/EditoriaSection'));
const ComfortZoneSection = dynamic(() => import('./components/sections/ComfortZoneSection'));
const TeamSection = dynamic(() => import('./components/sections/TeamSection'));
const ContactSection = dynamic(() => import('./components/sections/ContactSection'));
const TestimonialsSection = dynamic(() => import('./components/sections/TestimonialsSection'));
const AdvSection = dynamic(() => import('./components/sections/AdvSection'));

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AdvSection />
      <ComfortZoneSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
