import React from 'react';
import skillsData from '../mock/skillsData';
import languagesData from '../mock/languagesData';

const SkillsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Habilidades e Idiomas</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-700">Habilidades Técnicas</h3>
            <div className="space-y-4">
              {skillsData.map((skill) => (
                <div key={skill.id} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-700">Idiomas</h3>
            <div className="space-y-4">
              {languagesData.map((language) => (
                <div key={language.id} className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">{language.name}</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                    {language.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;