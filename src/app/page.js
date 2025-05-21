import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/EditoriaSection';

import ComfortZoneSection from './components/sections/ComfortZoneSection';

import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import AdvSection from './components/sections/AdvSection';

const HomePage = () => {
  return (
    <>

      <HeroSection />
      <AboutSection />
      <ComfortZoneSection />

      <AdvSection />

      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
