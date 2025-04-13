
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Smartphone, MousePointer, Search, Database, Globe, Zap, BarChart } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FeatureCard = ({ icon, title, description, link, delay }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  link: string,
  delay: string
}) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md card-hover animate-slide-up opacity-0" 
      style={{ animationDelay: delay }}
    >
      <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="text-fethr-blue hover:text-fethr-purple font-medium inline-flex items-center">
        Learn more
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 sm:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Powered by AI, Built for <span className="gradient-text">Your Business</span></h2>
          <p className="text-xl text-gray-600">Our intelligent platform creates personalized websites that match your brand, location, and business needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<MapPin className="text-white" size={24} />} 
            title="Location-Based Creation" 
            description="Automatically pull data from Google My Business to create a website that reflects your location and business type."
            link="/features/location-based-creation"
            delay="0.1s"
          />
          <FeatureCard 
            icon={<Smartphone className="text-white" size={24} />} 
            title="Mobile Optimization" 
            description="Every website is fully responsive and looks perfect on all devices, from desktops to smartphones."
            link="/features/mobile-optimization"
            delay="0.2s"
          />
          <FeatureCard 
            icon={<MousePointer className="text-white" size={24} />} 
            title="Drag-and-Drop Editor" 
            description="Customize your site with our intuitive drag-and-drop interface. No coding required."
            link="/features/drag-and-drop"
            delay="0.3s"
          />
          <FeatureCard 
            icon={<Search className="text-white" size={24} />} 
            title="SEO Friendly" 
            description="Built-in SEO tools help your website rank higher in search results, bringing more customers to your business."
            link="/features/seo-tools"
            delay="0.4s"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <FeatureCard 
            icon={<Database className="text-white" size={24} />} 
            title="Content Management" 
            description="Easily update and manage your website content with our simple and intuitive content management system."
            link="/features/content-management"
            delay="0.5s"
          />
          <FeatureCard 
            icon={<Globe className="text-white" size={24} />} 
            title="Custom Domains" 
            description="Connect your own domain or get a new one through our platform. Free subdomain included with every plan."
            link="/features/custom-domains"
            delay="0.6s"
          />
          <FeatureCard 
            icon={<Zap className="text-white" size={24} />} 
            title="Performance Optimization" 
            description="Lightning-fast websites with automatic optimization for speed and performance across all devices."
            link="/features/performance"
            delay="0.7s"
          />
          <FeatureCard 
            icon={<BarChart className="text-white" size={24} />} 
            title="Analytics Integration" 
            description="Track your website performance with built-in analytics and easy integration with Google Analytics."
            link="/features/analytics"
            delay="0.8s"
          />
        </div>

        <div className="mt-20">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">AI-Generated Websites in Minutes</h3>
                <p className="text-gray-600 mb-6">
                  Simply enter your business name and location, and our AI will generate a complete website tailored to your industry. Fethr analyzes Google My Business data and location information to create relevant content, choose appropriate images, and design a site that matches your brand.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    'Smart template selection based on your business type',
                    'Automatic content generation with industry-specific text',
                    'Location-optimized SEO for better local search rankings',
                    'Integrated contact forms and business hours from your GMB profile',
                    'Automated image selection that matches your business aesthetic'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-fethr-coral mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="self-start bg-fethr-blue hover:bg-fethr-purple text-white">
                  Learn more about our AI technology
                </Button>
              </div>
              <div className="bg-gradient-to-br from-fethr-blue to-fethr-purple">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                  alt="AI website creation" 
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
