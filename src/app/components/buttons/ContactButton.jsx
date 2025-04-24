'use client';

const ContactButton = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-10 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl"
      onClick={() => scrollToSection('contatti')}
    >
      Parliamo del tuo progetto
    </button>
  );
};

export default ContactButton;
