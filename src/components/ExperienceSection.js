import React from 'react';
import experienceData from '../mock/experienceData';

const ExperienceSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Experiencia</h2>
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div key={exp.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-700">{exp.position}</h3>
                  <h4 className="text-lg text-gray-600">{exp.company}</h4>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-700">{exp.description}</p>
                <ul className="mt-2 list-disc list-inside">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
              <a 
                href={`https://${exp.url}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                {exp.url}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;