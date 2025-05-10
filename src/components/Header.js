import React from 'react';
import personalData from '../mock/personalData';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white p-8 rounded-b-3xl shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-32 h-32 rounded-full bg-white shadow-xl mb-4 md:mb-0 md:mr-8 overflow-hidden">
          <img 
            src="https://randomuser.me/api/portraits/men/1.jpg" 
            alt={personalData.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">{personalData.name}</h1>
          <h2 className="text-2xl text-indigo-200 mb-4">{personalData.title}</h2>
          <p className="text-indigo-100 max-w-lg">{personalData.about}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;