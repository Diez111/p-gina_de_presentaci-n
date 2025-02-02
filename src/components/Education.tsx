import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Cpu } from 'lucide-react';

const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('education.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">{t('education.electronic.title')}</h3>
            </div>
            <p className="text-gray-600">{t('education.electronic.description')}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <GraduationCap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">{t('education.systems.title')}</h3>
            </div>
            <p className="text-gray-600">{t('education.systems.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;