import React, { useState, useEffect } from 'react';
import educationData from '../mock/educationData';

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <div className="w-1 h-1 bg-blue-400 rounded-full opacity-60"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 animate-fade-in-up">
            🎓 Formación Académica
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Mi trayectoria educativa en tecnología</p>
        </div>

        {/* Timeline de educación */}
        <div className="relative">
          {/* Línea central del timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.3}s` }}
              >
                {/* Contenedor principal */}
                <div className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>

                  {/* Tarjeta de educación */}
                  <div className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                  }`}>
                    <div className="glass-card-dark p-8 hover-lift group">
                      {/* Header con icono y estado */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                          </div>
                          <div>
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                              edu.status === "Graduado"
                                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            }`}>
                              {edu.status === "Graduado" ? "✓" : "⏳"} {edu.status}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-2xl font-bold gradient-text">{edu.year}</span>
                        </div>
                      </div>

                      {/* Contenido principal */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                          {edu.degree}
                        </h3>

                        <div className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span className="text-sm">{edu.institution}</span>
                        </div>

                        {/* Barra de progreso */}
                        <div className="mt-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-gray-400">Progreso</span>
                            <span className="text-xs text-gray-400">
                              {edu.status === "Graduado" ? "100%" : "75%"}
                            </span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-1000 ${
                                edu.status === "Graduado"
                                  ? "bg-gradient-to-r from-green-400 to-green-600 w-full"
                                  : "bg-gradient-to-r from-blue-400 to-purple-600 w-3/4"
                              }`}
                              style={{ transitionDelay: `${(index * 0.3) + 0.5}s` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Decoración inferior */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                    </div>
                  </div>

                  {/* Punto central del timeline (solo en desktop) */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-900 shadow-lg relative z-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>

                  {/* Espacio vacío para el layout alternado */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de estadísticas */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card-dark p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold gradient-text mb-2">1</h3>
            <p className="text-gray-400">Título Completado</p>
          </div>

          <div className="glass-card-dark p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold gradient-text mb-2">1</h3>
            <p className="text-gray-400">En Progreso</p>
          </div>

          <div className="glass-card-dark p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold gradient-text mb-2">2+</h3>
            <p className="text-gray-400">Años de Estudio</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;