import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Code2 } from 'lucide-react';

const Welcome = () => {
  const { t } = useTranslation();

  const scrollToNext = () => {
    const nextSection = document.getElementById('profile');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <div className="animate-spin-slow mb-8">
          <Code2 size={80} />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Lautaro Agustín Diez
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          {t('welcome.title')}
        </p>
        <button
          onClick={scrollToNext}
          className="animate-bounce mt-8 p-2 rounded-full border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
          aria-label={t('welcome.scroll')}
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Welcome;