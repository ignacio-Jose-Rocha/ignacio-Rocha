import React, { useState, useEffect } from 'react';
import ProfileHeader from './components/ProfileHeader';
import NavigationMenu from './components/NavigationMenu';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  const [activeSection, setActiveSection] = useState('experience');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'experience':
        return <ExperienceSection />;
      case 'education':
        return <EducationSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <ExperienceSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-pink-900/20"></div>
        
        <div className="absolute -inset-10 opacity-40">
          {[...Array(80)].map((_, i) => {
            const size = Math.random() * 3 + 1;
            const colors = ['bg-blue-400', 'bg-purple-400', 'bg-pink-400', 'bg-cyan-400', 'bg-indigo-400'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            return (
              <div
                key={i}
                className="absolute animate-particle-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${4 + Math.random() * 6}s`
                }}
              >
                <div 
                  className={`${color} rounded-full opacity-70 shadow-lg`}
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    boxShadow: `0 0 ${size * 4}px currentColor`
                  }}
                ></div>
              </div>
            );
          })}
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <ProfileHeader />
        <NavigationMenu activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="transition-all duration-500 ease-in-out">
          {renderSection()}
        </main>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/5 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default App;

