
import React from 'react';
import { Users, Globe, Zap } from 'lucide-react';

const StatItem = ({ icon, number, label }: { icon: React.ReactNode, number: string, label: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-fethr-light-blue flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="text-3xl sm:text-4xl font-bold mb-2 gradient-text">{number}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted by <span className="gradient-text">Business Owners</span> Worldwide</h2>
          <p className="text-xl text-gray-600">Join thousands of businesses using Fethr to create their online presence.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <StatItem 
            icon={<Users className="text-fethr-blue" size={24} />} 
            number="10,000+" 
            label="Active Users" 
          />
          <StatItem 
            icon={<Globe className="text-fethr-blue" size={24} />} 
            number="150+" 
            label="Countries Reached" 
          />
          <StatItem 
            icon={<Zap className="text-fethr-blue" size={24} />} 
            number="3 minutes" 
            label="Average Setup Time" 
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
