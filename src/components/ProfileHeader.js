import React from 'react';
import personalData from '../mock/personalData';

const ProfileHeader = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-b-3xl shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-32 h-32 rounded-full bg-white shadow-xl mb-4 md:mb-0 md:mr-8 overflow-hidden border-4 border-blue-300">
          <img 
            src="https://i.imgur.com/9eLgPDY.jpeg" 
            alt={personalData.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">{personalData.name}</h1>
          <h2 className="text-2xl text-blue-200 mb-4">{personalData.title}</h2>
          <p className="text-blue-100 max-w-lg">{personalData.about}</p>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;