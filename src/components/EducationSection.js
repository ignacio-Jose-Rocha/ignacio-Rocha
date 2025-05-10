import React from 'react';
import educationData from '../mock/educationData';

const EducationSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Educación</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu) => (
            <div key={edu.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">{edu.degree}</h3>
              <p className="text-gray-600 mb-1">{edu.institution}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-500">{edu.year}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  edu.status === "Graduado" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-blue-100 text-blue-800"
                }`}>
                  {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;