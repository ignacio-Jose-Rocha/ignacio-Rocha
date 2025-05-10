import React, { useState } from 'react';
import ProfileHeader from './components/ProfileHeader';
import NavigationMenu from './components/NavigationMenu';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  const [activeSection, setActiveSection] = useState('experience');

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <ProfileHeader />
      <NavigationMenu activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
    </div>
  );
};

export default App;

