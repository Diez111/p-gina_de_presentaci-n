import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
      aria-label="Toggle language"
    >
      <Globe size={20} />
      <span className="text-sm font-medium uppercase">{i18n.language}</span>
    </button>
  );
};

export default LanguageSelector;