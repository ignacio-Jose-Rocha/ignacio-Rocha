import React, { useState, useEffect } from 'react';

const NavigationMenu = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: 'experience', label: 'Experiencia', icon: '💼' },
    { id: 'education', label: 'Educación', icon: '🎓' },
    { id: 'projects', label: 'Proyectos', icon: '🚀' },
    { id: 'skills', label: 'Habilidades', icon: '⚡' },
    { id: 'contact', label: 'Contacto', icon: '📧' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'glass-card-dark shadow-2xl backdrop-blur-xl'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="hidden md:flex justify-center">
          <div className="glass-card-dark p-2 rounded-2xl">
            <ul className="flex space-x-2">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`group relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="flex items-center space-x-2">
                      <span className="text-lg">{section.icon}</span>
                      <span>{section.label}</span>
                    </span>

                    {activeSection === section.id && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    )}

                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:hidden">
          <div className="glass-card-dark rounded-2xl p-2">
            <div className="flex overflow-x-auto space-x-2 scrollbar-hide">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex-shrink-0 flex flex-col items-center px-4 py-3 rounded-xl font-medium text-xs transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-lg mb-1">{section.icon}</span>
                  <span className="whitespace-nowrap">{section.label}</span>

                  {activeSection === section.id && (
                    <div className="absolute -bottom-1 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>
    </nav>
  );
};

export default NavigationMenu;