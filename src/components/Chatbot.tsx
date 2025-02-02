import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  text: string;
  isUser: boolean;
}

const Chatbot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setIsLoading(true);

    try {
      // Note: In a production environment, you should use environment variables for the API key
      const genAI = new GoogleGenerativeAI('AIzaSyAz0Z46EvtFVRBYrTTmBQ9O038Tlns1ue0');
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const prompt = `Actúa como LautiBot, experto en Ingeniería en Sistemas y Técnico Electrónico. Responde en español de forma elegante, profesional y concisa. Usuario: ${userMessage}`;
      
      const result = await model.generateContent(prompt);
      const response = result.response.text();
      
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    } catch {
      setMessages(prev => [...prev, { text: 'Lo siento, ha ocurrido un error. Por favor, intenta de nuevo más tarde.', isUser: false }]);
    } finally {
      setIsLoading(false);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  return (
    <>
      {/* Chat bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 
          w-12 h-12 bg-blue-600 text-white rounded-full shadow-xl 
          hover:bg-blue-700 transition-colors
          flex items-center justify-center z-[9998]"
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat container */}
      {isOpen && (
        <div className="fixed inset-x-0 bottom-20 sm:inset-auto sm:bottom-24 sm:right-6 
          z-[9999] p-4 sm:p-0 transition-all duration-300">
          <div className="relative w-full sm:w-[320px] h-[500px] sm:h-[450px] 
            bg-white rounded-2xl shadow-2xl border border-gray-200 
            flex flex-col overflow-hidden">
            {/* Header */}
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
              rounded-t-2xl flex items-center gap-3">
              <Bot size={24} />
              <div>
                <h3 className="font-semibold text-base">{t('chatbot.title')}</h3>
                <p className="text-sm text-blue-100">{t('chatbot.subtitle')}</p>
              </div>
            </div>

            {/* Messages container */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
              {messages.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  <Bot size={48} className="mx-auto mb-4 text-blue-600" />
                  <p className="text-sm">{t('chatbot.welcome')}</p>
                </div>
              )}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-2.5 ${
                      message.isUser
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white shadow-md rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap break-words">{message.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white shadow-md max-w-[80%] rounded-2xl rounded-bl-none p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input form */}
            <form onSubmit={handleSubmit} className="p-2 border-t border-gray-200 bg-white">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t('chatbot.placeholder')}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-sm placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-9 h-9 flex items-center justify-center flex-shrink-0"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;