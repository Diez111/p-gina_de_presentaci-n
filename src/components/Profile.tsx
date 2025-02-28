import { useTranslation } from 'react-i18next';
import { Terminal, Cpu } from 'lucide-react';
import profilePic from './file.jpg';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <section id="profile" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('profile.title')}
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <img src={profilePic} alt="Profile" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                {t('profile.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-blue-600">
                  <Terminal size={20} />
                </div>
                <div className="flex items-center gap-2 text-purple-600">
                  <Cpu size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
