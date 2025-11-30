import React, { useState, useEffect } from 'react';
import projectsData from '../mock/projectsData';

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    projectsData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleProjects(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  const getTechColor = (tech) => {
    const colors = {
      'React': 'from-blue-400 to-blue-600',
      'JavaScript': 'from-yellow-400 to-yellow-600',
      'Node.js': 'from-green-400 to-green-600',
      'Python': 'from-blue-500 to-blue-700',
      'HTML': 'from-orange-400 to-orange-600',
      'CSS': 'from-blue-400 to-blue-600',
      'MongoDB': 'from-green-500 to-green-700',
      'PostgreSQL': 'from-blue-600 to-indigo-700',
      'Express': 'from-gray-400 to-gray-600',
      'TypeScript': 'from-blue-600 to-blue-800',
      'Next.js': 'from-black to-gray-800',
      'TailwindCSS': 'from-cyan-400 to-cyan-600',
      'JWT': 'from-red-400 to-red-600',
      'Nodemailer': 'from-green-400 to-green-600',
      'Socket.io': 'from-purple-400 to-purple-600',
      'GPS API': 'from-indigo-400 to-indigo-600',
      'API Rest': 'from-teal-400 to-teal-600',
      'API': 'from-teal-400 to-teal-600',
      'CSS Modules': 'from-pink-400 to-pink-600',
      'MySQL': 'from-orange-500 to-orange-700',
      'Vercel': 'from-gray-700 to-black'
    };
    return colors[tech] || 'from-purple-400 to-purple-600';
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6 animate-fade-in-up relative">
              ✨ Proyectos Destacados
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            </h2>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-pink-500 rounded-full"></div>
          </div>
          <p className="text-gray-300 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Soluciones innovadoras desarrolladas con <span className="gradient-text font-semibold">pasión</span> y <span className="gradient-text font-semibold">tecnología de vanguardia</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-700 ${
                visibleProjects.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="glass-card-dark overflow-hidden hover-lift h-full flex flex-col relative group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500">
                <div className="relative overflow-hidden h-52 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
                  {project.image && !project.image.includes('placeholder') ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">💻</div>
                        <span className="text-gray-300 font-medium">Proyecto de Código</span>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="p-7 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 flex-grow leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 bg-gradient-to-r ${getTechColor(tech)} text-white text-xs font-semibold rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 border border-white/10`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-600/30">
                    <div className="flex items-center space-x-3">
                      <a
                        href={`https://github.com/${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-all duration-300 group hover:scale-105"
                      >
                        <svg className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                        </svg>
                        GitHub
                      </a>

                      {project.web && (
                        <a
                          href={project.web}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold transition-all duration-300 group hover:scale-105"
                        >
                          <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Web
                        </a>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                      <span className="font-medium">Activo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <div className="glass-card-dark max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold gradient-text">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 bg-gradient-to-r ${getTechColor(tech)} text-white text-sm font-medium rounded-full`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={`https://github.com/${selectedProject.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    Ver en GitHub
                  </a>

                  {selectedProject.web && (
                    <a
                      href={selectedProject.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Ver Sitio Web
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-20 text-center">
          <div className="glass-card-dark inline-flex items-center space-x-6 text-gray-400 px-8 py-4 rounded-full">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
              <span className="text-sm font-semibold">{projectsData.length} Proyectos Completados</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" style={{animationDelay: '0.5s'}}></div>
              <span className="text-sm font-semibold">Código Abierto</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" style={{animationDelay: '1s'}}></div>
              <span className="text-sm font-semibold">Tecnologías Modernas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;