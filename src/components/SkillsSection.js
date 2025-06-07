import React, { useState, useEffect } from 'react';
import skillsData from '../mock/skillsData';
import languagesData from '../mock/languagesData';

const SkillsSection = () => {
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    skillsData.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedSkills(prev => [...prev, index]);
      }, index * 150);
    });

    languagesData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * 100 + 500);
    });
  }, []);

  const getSkillColor = (level) => {
    if (level >= 90) return 'from-green-400 to-emerald-500';
    if (level >= 75) return 'from-blue-400 to-blue-500';
    if (level >= 60) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-red-500';
  };

  const getSkillIcon = (skillName) => {
    const icons = {
      'JavaScript': '🟨',
      'React': '⚛️',
      'Node.js': '🟢',
      'Python': '🐍',
      'HTML/CSS': '🎨',
      'Git': '📚',
      'SQL': '🗄️',
      'TypeScript': '🔷',
      'MongoDB': '🍃',
      'Express': '🚀'
    };
    return icons[skillName] || '💻';
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 animate-fade-in-up">
            ⚡ Habilidades & Competencias
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Tecnologías y herramientas que domino</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="glass-card-dark p-8 hover-lift">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Habilidades Técnicas</h3>
            </div>

            <div className="space-y-6">
              {skillsData.map((skill, index) => (
                <div key={skill.id} className="group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{getSkillIcon(skill.name)}</span>
                      <span className="font-semibold text-white group-hover:gradient-text transition-all duration-300">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-blue-300 font-mono text-sm bg-blue-500/20 px-2 py-1 rounded">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="relative">
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{
                          width: animatedSkills.includes(index) ? `${skill.level}%` : '0%'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                    </div>

                    <div
                      className={`absolute top-0 h-3 bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full opacity-50 blur-sm transition-all duration-1000`}
                      style={{
                        width: animatedSkills.includes(index) ? `${skill.level}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card-dark p-8 hover-lift">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Idiomas</h3>
            </div>

            <div className="space-y-6">
              {languagesData.map((language, index) => (
                <div
                  key={language.id}
                  className={`group transition-all duration-500 ${
                    visibleItems.includes(index)
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-4'
                  }`}
                >
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-xl">🗣️</span>
                      </div>
                      <span className="font-semibold text-white text-lg group-hover:gradient-text transition-all duration-300">
                        {language.name}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i < (language.level === 'Nativo' ? 5 : language.level === 'Avanzado' ? 4 : language.level === 'Intermedio' ? 3 : 2)
                                ? 'bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg shadow-purple-500/50'
                                : 'bg-gray-600'
                            }`}
                          ></div>
                        ))}
                      </div>

                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium">
                        {language.level}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Tecnologías', value: skillsData.length, icon: '💻' },
            { label: 'Idiomas', value: languagesData.length, icon: '🌍' },
            { label: 'Experiencia', value: '3+ años', icon: '⏱️' },
            { label: 'Proyectos', value: '15+', icon: '🚀' }
          ].map((stat, index) => (
            <div key={index} className="glass-card-dark p-6 text-center hover-lift">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;