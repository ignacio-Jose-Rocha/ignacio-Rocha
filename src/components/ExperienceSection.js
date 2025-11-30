import React, { useState, useEffect } from 'react';
import experienceData from '../mock/experienceData';

const ExperienceSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    experienceData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 animate-fade-in-up">
            💼 Experiencia Profesional
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Mi trayectoria en el desarrollo de software</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-pulse-glow"></div>

                <div className="ml-20">
                  <div className="glass-card-dark p-8 hover-lift group">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                          {exp.position}
                        </h3>
                        <h4 className="text-xl text-blue-300 mb-3 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
                          {exp.company}
                        </h4>
                      </div>
                      <div className="lg:ml-6">
                        <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-300 text-lg leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="space-y-3">
                        <h5 className="text-white font-semibold mb-3 flex items-center">
                          <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></span>
                          Responsabilidades clave:
                        </h5>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="text-gray-300 flex items-start">
                              <span className="text-blue-400 mr-3 mt-1.5 text-xs">▶</span>
                              <span className="flex-1">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {exp.url && (
                      <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 group"
                        >
                          <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          Ver sitio web
                        </a>

                        <div className="flex items-center space-x-2 text-gray-500 text-sm">
                          <span>Proyecto activo</span>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Experiencia en constante evolución</span>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;