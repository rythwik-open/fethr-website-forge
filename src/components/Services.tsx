
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Sparkles, MoveRight, Palette, Layers, BarChart3, Rocket, Globe } from 'lucide-react';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features,
  primaryColor,
  secondaryColor 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  features: string[],
  primaryColor: string,
  secondaryColor: string 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-up opacity-0" style={{animationDelay: '0.2s'}}>
      <div className={`${primaryColor} p-8`}>
        <div className={`${secondaryColor} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/90">{description}</p>
      </div>
      <div className="p-8">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-fethr-blue mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full border-fethr-blue text-fethr-blue hover:bg-fethr-light-blue">
          Learn more
          <MoveRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Palette className="text-white h-8 w-8" />,
      title: "AI Website Creation",
      description: "Intelligent design based on your business type and preferences",
      primaryColor: "bg-fethr-blue",
      secondaryColor: "bg-blue-600",
      features: [
        "Industry-specific templates",
        "Location-based content",
        "Automated design recommendations",
        "Smart content generation"
      ]
    },
    {
      icon: <Globe className="text-white h-8 w-8" />,
      title: "Local SEO Optimization",
      description: "Get found by customers searching in your area",
      primaryColor: "bg-fethr-purple",
      secondaryColor: "bg-indigo-600",
      features: [
        "Local keyword optimization",
        "Google My Business integration",
        "Location-based metadata",
        "Local backlink strategy"
      ]
    },
    {
      icon: <BarChart3 className="text-white h-8 w-8" />,
      title: "Business Analytics",
      description: "Track performance and understand your audience",
      primaryColor: "bg-fethr-coral",
      secondaryColor: "bg-red-500",
      features: [
        "Visitor tracking dashboard",
        "Conversion analytics",
        "Customer journey mapping",
        "Competitor benchmarking"
      ]
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-fethr-light-blue px-4 py-1 rounded-full mb-4">
            <Sparkles className="text-fethr-blue mr-2 h-4 w-4" />
            <span className="text-sm font-medium text-fethr-blue">Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tailored Services for <span className="gradient-text">Every Business Need</span></h2>
          <p className="text-xl text-gray-600">From AI-powered website creation to ongoing optimization, we provide end-to-end solutions.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              primaryColor={service.primaryColor}
              secondaryColor={service.secondaryColor}
            />
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-fethr-light-blue to-fethr-light-purple rounded-2xl overflow-hidden shadow-lg">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-8 md:mb-0 md:pr-8">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
                <Rocket className="text-fethr-blue mr-2 h-4 w-4" />
                <span className="text-sm font-medium text-fethr-blue">Enterprise Solutions</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a more customized solution?</h3>
              <p className="text-gray-700 mb-6">
                For businesses with complex requirements, our enterprise team offers bespoke solutions with dedicated support and advanced features.
              </p>
              <Button className="bg-fethr-blue hover:bg-fethr-purple text-white">
                Contact our enterprise team
              </Button>
            </div>
            <div className="md:w-2/5">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-semibold mb-3">Enterprise features include:</h4>
                <ul className="space-y-2">
                  {[
                    "Custom API integrations",
                    "Dedicated account manager",
                    "Advanced security features",
                    "Multi-site management",
                    "Training and onboarding"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-fethr-blue mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
