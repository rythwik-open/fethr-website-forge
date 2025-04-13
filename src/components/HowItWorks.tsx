
import React from 'react';
import { Search, Calendar, Database, CheckCircle2 } from 'lucide-react';

const StepItem = ({ number, icon, title, description }: { 
  number: string, 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 animate-slide-up opacity-0" style={{ animationDelay: `${parseInt(number) * 0.1}s` }}>
      <div className="flex-shrink-0 relative">
        <div className="w-16 h-16 rounded-full bg-fethr-blue flex items-center justify-center text-white text-2xl font-bold">
          {number}
        </div>
        <div className="absolute top-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center -mr-2 -mt-2 shadow-md">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How <span className="gradient-text">Fethr</span> Works</h2>
          <p className="text-xl text-gray-600">Creating your professional website is easier than you think. Just follow these simple steps.</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12 relative">
          {/* Connecting line */}
          <div className="absolute top-8 bottom-8 left-8 md:left-8 w-0.5 bg-fethr-light-blue hidden md:block"></div>
          
          <StepItem 
            number="1" 
            icon={<Search className="text-fethr-blue" size={16} />} 
            title="Enter your business information" 
            description="Simply provide your business name and location to get started. If you have a Google My Business account, we can pull information directly from there."
          />
          
          <StepItem 
            number="2" 
            icon={<Calendar className="text-fethr-blue" size={16} />} 
            title="Select your industry and preferences" 
            description="Choose your business type and customize design preferences. Our AI will use this to create a website that matches your brand and industry standards."
          />
          
          <StepItem 
            number="3" 
            icon={<Database className="text-fethr-blue" size={16} />} 
            title="Review and edit your website" 
            description="Within minutes, your personalized website is ready! Use our intuitive editor to make any adjustments or add your custom content."
          />
          
          <StepItem 
            number="4" 
            icon={<CheckCircle2 className="text-fethr-blue" size={16} />} 
            title="Publish and go live" 
            description="Once you're satisfied with your website, simply hit publish! Your site will be live and ready to attract customers to your business."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
