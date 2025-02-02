import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:lautaroagustindiez@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('contact.title')}
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            {/* Contact Info */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-4 md:p-8">
              <h3 className="text-2xl font-semibold mb-6">{t('contact.getInTouch')}</h3>
              <div className="space-y-6">
                <p className="text-blue-100">
                  {t('contact.description')}
                </p>
                <div className="space-y-4">
                  <a href="mailto:lautaroagustindiez@gmail.com" 
                     className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors">
                    <Mail size={20} />
                    <span>lautaroagustindiez@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3 p-4 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <User size={16} className="mr-2" />
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <Mail size={16} className="mr-2" />
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <MessageSquare size={16} className="mr-2" />
                    {t('contact.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder={t('contact.subjectPlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <MessageSquare size={16} className="mr-2" />
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none"
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  <Send className="w-5 h-5" />
                  {t('contact.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;