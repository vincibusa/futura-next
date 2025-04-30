
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/EditoriaSection';
import ServicesSection from './components/sections/ServicesSection';
import ComfortZoneSection from './components/sections/ComfortZoneSection';
import PortfolioSection from './components/sections/PortfolioSection';
import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';
import TestimonialsSection from './components/sections/TestimonialsSection';

const HomePage = () => {
  return (
    <>

      <HeroSection />
      <AboutSection />
      <ComfortZoneSection />
      <ServicesSection />
 
      <PortfolioSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
