import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Cpu, Server } from 'lucide-react';

const technologies = [
  { name: 'Python', badge: 'https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffdd54' },
  { name: 'TypeScript', badge: 'https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white' },
  { name: 'JavaScript', badge: 'https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black' },
  { name: 'Vue', badge: 'https://img.shields.io/badge/-Vue-35495E?style=flat&logo=vue.js&logoColor=4FC08D' },
  { name: 'C++', badge: 'https://img.shields.io/badge/C++-00599C?style=flat&logo=c%2B%2B&logoColor=white' },
  { name: 'Rust', badge: 'https://img.shields.io/badge/Rust-000000?style=flat&logo=rust&logoColor=white' },
  { name: 'Go', badge: 'https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white' },
  { name: 'HTML5', badge: 'https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white' },
  { name: 'CSS3', badge: 'https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3' }
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('skills.title')}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Technologies */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold">Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <img
                  key={index}
                  src={tech.badge}
                  alt={tech.name}
                  className="h-6"
                />
              ))}
            </div>
          </div>

          {/* Electronics */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-100 rounded-full">
                <Cpu className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold">{t('skills.electronics')}</h3>
            </div>
            <p className="text-gray-600 text-lg">
              {t('skills.electronicsDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;