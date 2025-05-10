import React, { useState } from 'react';

const NavigationMenu = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'experience', label: 'Experiencia' },
    { id: 'education', label: 'Educación' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <nav className="sticky top-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-4">
        <ul className="flex overflow-x-auto py-4 space-x-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition-colors ${
                  activeSection === section.id
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-indigo-100'
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenu;