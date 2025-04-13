
import React from 'react';

const Partners = () => {
  // Partner logos - using SVG for clean professional look
  const partners = [
    {
      name: "TechCorp",
      logo: (
        <svg className="h-8 w-auto" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#E5EDFF"/>
          <path d="M8 20H32" stroke="#4761FF" strokeWidth="4" strokeLinecap="round"/>
          <path d="M20 8V32" stroke="#4761FF" strokeWidth="4" strokeLinecap="round"/>
          <text x="50" y="25" className="text-xl font-bold" fill="#1A1F2C">TechCorp</text>
        </svg>
      )
    },
    {
      name: "AlphaSystems",
      logo: (
        <svg className="h-8 w-auto" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="20" fill="#FFE5E2"/>
          <path d="M20 8L32 32H8L20 8Z" fill="#FF6B5B"/>
          <text x="50" y="25" className="text-xl font-bold" fill="#1A1F2C">AlphaSystems</text>
        </svg>
      )
    },
    {
      name: "NexusInc",
      logo: (
        <svg className="h-8 w-auto" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#EAE5FF"/>
          <circle cx="20" cy="20" r="12" stroke="#6B46FE" strokeWidth="4"/>
          <text x="50" y="25" className="text-xl font-bold" fill="#1A1F2C">NexusInc</text>
        </svg>
      )
    },
    {
      name: "OptimaGroup",
      logo: (
        <svg className="h-8 w-auto" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="4" fill="#E5EDFF"/>
          <rect x="10" y="10" width="20" height="20" rx="2" stroke="#4761FF" strokeWidth="4"/>
          <text x="50" y="25" className="text-xl font-bold" fill="#1A1F2C">OptimaGroup</text>
        </svg>
      )
    },
    {
      name: "VistaAI",
      logo: (
        <svg className="h-8 w-auto" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#FFE5E2"/>
          <path d="M8 28L20 12L32 28" stroke="#FF6B5B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="50" y="25" className="text-xl font-bold" fill="#1A1F2C">VistaAI</text>
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 sm:py-16 border-t border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-gray-500 uppercase text-sm font-medium tracking-wider">Trusted by industry leaders worldwide</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center transition-transform hover:scale-105 duration-300">
              {partner.logo}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join over 2,500+ organizations that have transformed their online presence with our AI-powered website builder
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
