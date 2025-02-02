import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Award } from 'lucide-react';

const courses = [
  {
    platform: 'Platzi',
    courses: [
      'Curso de Desarrollo Web',
      'Curso de Data Science e Inteligencia Artificial'
    ]
  },
  {
    platform: 'Cisco',
    courses: [
      'Linux Essentials'
    ]
  }
];

const Courses = () => {
  const { t } = useTranslation();

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('courses.title')}
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {courses.map((platform, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">{platform.platform}</h3>
              </div>
              <ul className="space-y-4">
                {platform.courses.map((course, courseIndex) => (
                  <li key={courseIndex} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;