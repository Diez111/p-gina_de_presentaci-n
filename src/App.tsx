import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Twitter, MessageCircle, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Components
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Courses from './components/Courses';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className={`text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
            Lautaro Agustín Diez
          </h1>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <a href="https://github.com/Diez111" target="_blank" rel="noopener noreferrer" 
               className={`hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              <Github size={20} />
            </a>
            <a href="http://www.linkedin.com/in/lautaro-agustin-diez-46916225b" target="_blank" rel="noopener noreferrer"
               className={`hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/Alguien45859689" target="_blank" rel="noopener noreferrer"
               className={`hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              <Twitter size={20} />
            </a>
            <a href="mailto:lautaroagustindiez@gmail.com"
               className={`hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Welcome />
        <Profile />
        <Education />
        <Projects />
        <Skills />
        <Courses />
        <GithubStats />
        <Contact />
        <Chatbot />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Lautaro Agustín Diez. {t('footer.rights')}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;