'use client';

const TeamContactButton = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contatti');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-10 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl"
      onClick={scrollToContact}
    >
      Lavora con noi
    </button>
  );
};

export default TeamContactButton;
