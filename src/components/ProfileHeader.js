import React, { useState, useEffect } from 'react';
import personalData from '../mock/personalData';

const ProfileHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = personalData.title;

  useEffect(() => {
    setIsVisible(true);

    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className={`relative z-10 container mx-auto px-6 py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col lg:flex-row items-center justify-between">

          <div className="relative mb-8 lg:mb-0 lg:mr-12">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-75 animate-pulse-glow"></div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 animate-spin" style={{animationDuration: '8s'}}></div>

              <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl glass-card">
                <img
                  src="https://i.imgur.com/9eLgPDY.jpeg"
                  alt={personalData.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold gradient-text animate-fade-in-up text-shadow-lg">
                {personalData.name}
              </h1>

              <div className="h-12 flex items-center justify-center lg:justify-start">
                <h2 className="text-2xl lg:text-3xl font-medium text-blue-300 font-mono">
                  <span className="text-gray-400">{'>'}</span> {typedText}
                  <span className="animate-pulse text-blue-400">|</span>
                </h2>
              </div>

              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                {personalData.about}
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
                <div className="glass-card-dark px-4 py-2 hover-lift">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm">{personalData.location}</span>
                  </div>
                </div>

                <div className="glass-card-dark px-4 py-2 hover-lift">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{personalData.email}</span>
                  </div>
                </div>

                <div className="glass-card-dark px-4 py-2 hover-lift">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{personalData.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </header>
  );
};

export default ProfileHeader;