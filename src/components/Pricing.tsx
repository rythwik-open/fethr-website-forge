
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, X } from 'lucide-react';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PricingPlanProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  buttonText: string;
  highlight?: boolean;
  delay: string;
}

const PricingPlan = ({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  buttonText, 
  highlight = false,
  delay
}: PricingPlanProps) => {
  return (
    <div 
      className={`rounded-2xl overflow-hidden animate-slide-up opacity-0 ${
        highlight 
          ? 'border-2 border-fethr-blue relative shadow-xl' 
          : 'border border-gray-200 shadow-md'
      }`}
      style={{ animationDelay: delay }}
    >
      {highlight && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-fethr-blue text-white text-xs font-medium px-4 py-1 rounded-full">
            MOST POPULAR
          </div>
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          {period && <span className="text-gray-500">/{period}</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <Button 
          className={`w-full ${
            highlight 
              ? 'bg-fethr-blue hover:bg-fethr-purple' 
              : 'bg-gray-800 hover:bg-gray-700'
          } text-white`}
        >
          {buttonText}
        </Button>
      </div>
      <div className="bg-gray-50 p-6 md:p-8">
        <p className="font-medium text-sm text-gray-700 mb-4">INCLUDES:</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check className="h-5 w-5 text-fethr-blue mr-2 flex-shrink-0" />
              ) : (
                <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
              )}
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing = () => {
  const freeFeatures = [
    { name: 'AI-powered website creation', included: true },
    { name: 'Mobile responsive design', included: true },
    { name: 'Custom domain connection', included: false },
    { name: 'Google My Business integration', included: true },
    { name: 'Remove Fethr branding', included: false },
    { name: 'Advanced SEO tools', included: false },
    { name: 'E-commerce capabilities', included: false },
    { name: 'Priority support', included: false },
  ];

  const proFeatures = [
    { name: 'AI-powered website creation', included: true },
    { name: 'Mobile responsive design', included: true },
    { name: 'Custom domain connection', included: true },
    { name: 'Google My Business integration', included: true },
    { name: 'Remove Fethr branding', included: true },
    { name: 'Advanced SEO tools', included: true },
    { name: 'E-commerce capabilities', included: false },
    { name: 'Priority support', included: false },
  ];

  const businessFeatures = [
    { name: 'AI-powered website creation', included: true },
    { name: 'Mobile responsive design', included: true },
    { name: 'Custom domain connection', included: true },
    { name: 'Google My Business integration', included: true },
    { name: 'Remove Fethr branding', included: true },
    { name: 'Advanced SEO tools', included: true },
    { name: 'E-commerce capabilities', included: true },
    { name: 'Priority support', included: true },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, <span className="gradient-text">Transparent Pricing</span></h2>
          <p className="text-xl text-gray-600">Choose the plan that works best for your business needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingPlan 
            name="Free"
            price="$0"
            period="forever"
            description="Perfect for trying out Fethr and building your first website."
            features={freeFeatures}
            buttonText="Start for free"
            delay="0.1s"
          />
          <PricingPlan 
            name="Pro"
            price="$12"
            period="month"
            description="Everything you need for a professional online presence."
            features={proFeatures}
            buttonText="Get started"
            highlight={true}
            delay="0.2s"
          />
          <PricingPlan 
            name="Business"
            price="$29"
            period="month"
            description="Advanced features for growing businesses with online sales."
            features={businessFeatures}
            buttonText="Contact sales"
            delay="0.3s"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
