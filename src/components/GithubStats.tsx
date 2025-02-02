import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github } from 'lucide-react';

const GithubStats = () => {
  const { t } = useTranslation();

  return (
    <section id="github-stats" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Github className="w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-bold">GitHub Stats</h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Diez111&show_icons=true&theme=radical"
            alt="GitHub Stats"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Diez111&layout=compact"
            alt="Top Languages"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default GithubStats;