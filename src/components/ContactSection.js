import React, { useState, useEffect } from 'react';
import personalData from '../mock/personalData';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', `Contacto desde CV - ${formData.name}`);
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');

      const response = await fetch(`https://formsubmit.co/ajax/${personalData.email}`, {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setShowSuccessPopup(true);
        setFormData({ name: '', email: '', message: '' });

        // Auto-cerrar el popup después de 5 segundos
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 5000000000);
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: personalData.email,
      link: `mailto:${personalData.email}`,
      color: 'from-blue-500 to-blue-600',
      description: 'Respuesta en 24h',
      isLocation: false
    },
    {
      icon: '📱',
      label: 'Teléfono',
      value: personalData.phone,
      link: `tel:${personalData.phone}`,
      color: 'from-green-500 to-green-600',
      description: 'Llamadas y WhatsApp',
      isLocation: false
    },
    {
      icon: '📍',
      label: 'Ubicación',
      value: personalData.location,
      link: `https://maps.google.com/?q=${encodeURIComponent(personalData.location)}`,
      color: 'from-purple-500 to-purple-600',
      description: 'Buenos Aires, Argentina',
      isLocation: true
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: `https://${personalData.github}`,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'LinkedIn',
      url: `https://${personalData.linkedin}`,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 animate-fade-in-up">
            📧 Conectemos
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-base sm:text-lg px-4">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-card-dark p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                <span className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  💬
                </span>
                Información de Contacto
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {contactMethods.map((method, index) => {
                  if (method.isLocation) {
                    return (
                      <button
                        key={index}
                        onClick={() => setShowMapModal(true)}
                        className="group w-full text-left p-3 sm:p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover-lift"
                      >
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white text-lg sm:text-xl shadow-lg`}>
                            {method.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-white group-hover:gradient-text transition-all duration-300 text-sm sm:text-base">
                              {method.label}
                            </h4>
                            <p className="text-gray-300 text-xs sm:text-sm truncate">{method.value}</p>
                            <p className="text-gray-500 text-xs hidden sm:block">{method.description}</p>
                          </div>
                          <div className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    );
                  }

                  return (
                    <a
                      key={index}
                      href={method.link}
                      target="_self"
                      className="group block p-3 sm:p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 hover-lift"
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white text-lg sm:text-xl shadow-lg`}>
                          {method.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white group-hover:gradient-text transition-all duration-300 text-sm sm:text-base">
                            {method.label}
                          </h4>
                          <p className="text-gray-300 text-xs sm:text-sm truncate">{method.value}</p>
                          <p className="text-gray-500 text-xs hidden sm:block">{method.description}</p>
                        </div>
                        <div className="text-blue-400 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700/50">
                <h4 className="text-white font-semibold mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                  <span className="w-2 h-4 sm:h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></span>
                  Redes Sociales
                </h4>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      <div className="text-sm sm:text-base">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '0.3s'}}>
            <div className="glass-card-dark p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                <span className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                  ✉️
                </span>
                Envíame un Mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2 text-sm sm:text-base">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2 text-sm sm:text-base">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2 text-sm sm:text-base">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card-dark p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              ¿Listo para trabajar juntos?
            </h3>
            <p className="text-gray-300 mb-6">
              Estoy disponible para proyectos freelance y oportunidades de trabajo remoto.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Disponible para nuevos proyectos</span>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>

        {showMapModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowMapModal(false)}>
            <div className="glass-card-dark max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold gradient-text mb-2">📍 Mi Ubicación</h3>
                    <p className="text-gray-300">{personalData.location}</p>
                  </div>
                  <button
                    onClick={() => setShowMapModal(false)}
                    className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="relative w-full h-96 rounded-xl overflow-hidden border border-gray-600/50 bg-gradient-to-br from-blue-900 to-purple-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="text-8xl mb-6 animate-pulse">📍</div>
                      <h4 className="text-2xl font-bold gradient-text mb-4">San Miguel, Buenos Aires</h4>
                      <p className="text-xl text-gray-300 mb-2">Argentina</p>
                      <p className="text-gray-400 mb-8">Zona Metropolitana de Buenos Aires</p>

                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(personalData.location)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors font-medium text-lg shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Ver en Google Maps
                      </a>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-6 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-6 left-8 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Popup de éxito - CENTRADO Y RESPONSIVE */}
        {showSuccessPopup && (
          <div
            className="fixed top-0 left-0 w-full h-full z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-8"
            style={{
              position: 'fixed',
              zIndex: 99999,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          >
            {/* Fondo con overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm">
              {/* Partículas de fondo animadas */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-green-400/40 rounded-full animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${3 + Math.random() * 4}s`
                    }}
                  />
                ))}
              </div>

              {/* Ondas de fondo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-green-500/5 rounded-full animate-ping"></div>
                <div className="absolute w-80 h-80 bg-emerald-500/10 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute w-64 h-64 bg-green-400/15 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              </div>
            </div>

            {/* Modal principal - CENTRADO PERFECTO */}
            <div className="relative z-50 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg transform animate-scale-in overflow-hidden mx-auto">
              {/* Efectos de luz superior */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 h-20 sm:h-32 bg-white/10 rounded-full blur-3xl"></div>

              {/* Contenido principal - RESPONSIVE */}
              <div className="relative p-6 sm:p-8 md:p-10 text-center">
                {/* Icono principal con animaciones suaves - RESPONSIVE */}
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-white/30 shadow-2xl">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
                      <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Anillos animados alrededor del icono */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>
                  <div className="absolute inset-2 rounded-full border border-white/30 animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>

                {/* Título elegante - RESPONSIVE */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                  ✨ ¡Mensaje Enviado! ✨
                </h3>

                {/* Descripción elegante - RESPONSIVE */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-white/20">
                  <p className="text-green-50 text-base sm:text-lg leading-relaxed mb-2 sm:mb-4">
                    Tu mensaje ha sido enviado exitosamente.
                  </p>
                  <p className="text-green-100/80 text-sm sm:text-base">
                    Te responderé lo antes posible 💌
                  </p>
                </div>

                {/* Indicador de tiempo con animación - RESPONSIVE */}
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-green-50 mb-6 sm:mb-8 bg-white/5 rounded-full py-2 sm:py-3 px-4 sm:px-6 backdrop-blur-sm border border-white/10">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">Respuesta en 24h</span>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-300 rounded-full animate-pulse shadow-lg"></div>
                </div>

                {/* Botón elegante - RESPONSIVE */}
                <button
                  onClick={() => setShowSuccessPopup(false)}
                  className="group bg-white/20 hover:bg-white/30 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-500 hover:scale-105 sm:hover:scale-110 backdrop-blur-sm border border-white/30 shadow-xl hover:shadow-2xl relative overflow-hidden w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span className="text-sm sm:text-base">Perfecto</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </div>

              {/* Efectos decorativos mejorados - RESPONSIVE */}
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white/40 rounded-full animate-ping"></div>
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-yellow-300/60 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/50 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-300/50 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>

              {/* Estrellas decorativas - RESPONSIVE */}
              <div className="absolute top-8 left-8 sm:top-12 sm:left-12 text-sm sm:text-base text-white/30 animate-pulse">✨</div>
              <div className="absolute top-10 right-8 sm:top-16 sm:right-12 text-sm sm:text-base text-yellow-300/40 animate-pulse" style={{animationDelay: '0.7s'}}>⭐</div>
              <div className="absolute bottom-8 left-10 sm:bottom-12 sm:left-16 text-sm sm:text-base text-white/40 animate-pulse" style={{animationDelay: '1.2s'}}>💫</div>
              <div className="absolute bottom-10 right-10 sm:bottom-16 sm:right-16 text-sm sm:text-base text-green-300/50 animate-pulse" style={{animationDelay: '0.3s'}}>✨</div>

              {/* Brillo inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;