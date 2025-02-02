import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Spotify-Descargar-Me-gustas',
    description: 'Obtengo la lista de "me gusta" con la API de Spotify y descargo canciones desde YouTube.',
    link: 'https://github.com/Diez111/Spotify-Descargar-Me-gustas'
  },
  {
    title: 'ConstruyendoHuellas',
    description: 'Proyecto orientado a soluciones innovadoras.',
    link: 'https://github.com/Diez111/ConstruyendoHuellas'
  },
  {
    title: 'AlquiDiez',
    description: 'Solución práctica para facilitar tareas específicas.',
    link: 'https://github.com/Diez111/AlquiDiez'
  },
  {
    title: 'StoicApp',
    description: 'Aplicación para mejorar la productividad y organizar tareas.',
    link: 'https://github.com/Diez111/StoicApp'
  }
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('projects.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span className="mr-2">{t('projects.viewMore')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;