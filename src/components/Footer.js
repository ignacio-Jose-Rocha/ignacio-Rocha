import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Mi CV Interactivo </p>
        <p className="mt-2 text-gray-400">Diseñado con React y TailwindCSS</p>
      </div>
    </footer>
  );
};

export default Footer;
