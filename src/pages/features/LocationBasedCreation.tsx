
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { CheckCircle2, MapPin, Building, Store, Search, Globe } from 'lucide-react';

const LocationBasedCreation = () => {
  return (
    <FeatureLayout
      title="Location-Based Website Creation"
      subtitle="Automatically generate websites tailored to your business location and type, optimized for local search visibility."
      heroImage="https://images.unsplash.com/photo-1553484771-0a615f264d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overview Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">How Location-Based Creation Works</h2>
          <p className="text-lg text-gray-700 mb-6">
            Fethr uses advanced AI algorithms to create websites that are specifically tailored to your business location. By analyzing geographical data and local search patterns, we ensure your website attracts the right customers in your area.
          </p>
          <p className="text-lg text-gray-700">
            Our location-based approach doesn't just consider where you are—it builds a complete digital presence that resonates with local customers and optimizes for local search results.
          </p>
        </div>
        
        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Google My Business Integration</h3>
            <p className="text-gray-700 mb-4">
              Connect your Google My Business account to automatically import your business details, hours, reviews, and more. Your website will be pre-populated with accurate information that's consistent across all platforms.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Automatic import of business hours, address, and phone number</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Synchronized updates between GMB and your website</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Display Google reviews on your website</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Building className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Local Business Schema</h3>
            <p className="text-gray-700 mb-4">
              Every website we create includes proper schema markup that helps search engines understand your business type, location, and offerings. This structured data improves how your business appears in search results.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Rich search results with your business information</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Industry-specific schema markup</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Enhanced visibility in Google's Knowledge Graph</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Store className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Industry-Specific Templates</h3>
            <p className="text-gray-700 mb-4">
              Fethr analyzes your business type and location to recommend templates that work best for businesses like yours. A restaurant in Miami might get different design suggestions than a law firm in Seattle.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Templates designed for your specific industry</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Region-appropriate color schemes and styles</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Industry-specific sections and features</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Search className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Local SEO Optimization</h3>
            <p className="text-gray-700 mb-4">
              Every page is automatically optimized for local search with location-based keywords, meta descriptions, and content that helps you rank higher in your service area.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Automatic local keyword integration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Location-based meta tags and descriptions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Google Maps integration on contact pages</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* How It Works */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-16 h-16 rounded-full bg-fethr-light-blue flex items-center justify-center text-fethr-blue text-2xl font-bold mb-4 md:mb-0 md:mr-6">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Connect Your Business Information</h3>
                <p className="text-gray-700">
                  Enter your business name or connect your Google My Business account. Fethr will automatically import your business details, including address, hours, and services.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-16 h-16 rounded-full bg-fethr-light-blue flex items-center justify-center text-fethr-blue text-2xl font-bold mb-4 md:mb-0 md:mr-6">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI Analyzes Your Location</h3>
                <p className="text-gray-700">
                  Our AI analyzes your location, business type, and local search patterns to determine the optimal website structure, content, and SEO strategy.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-16 h-16 rounded-full bg-fethr-light-blue flex items-center justify-center text-fethr-blue text-2xl font-bold mb-4 md:mb-0 md:mr-6">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Generate Location-Optimized Website</h3>
                <p className="text-gray-700">
                  Fethr builds your website with location-specific elements, including local keywords, area maps, and geographical references that resonate with your audience.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-16 h-16 rounded-full bg-fethr-light-blue flex items-center justify-center text-fethr-blue text-2xl font-bold mb-4 md:mb-0 md:mr-6">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ongoing Local Optimization</h3>
                <p className="text-gray-700">
                  As your business evolves and local search trends change, Fethr continuously updates your website to maintain optimal local visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits */}
        <div className="bg-gradient-to-r from-fethr-light-blue to-fethr-light-purple p-10 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Location-Based Creation Matters</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <Globe className="text-fethr-blue mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-2">Increased Local Visibility</h3>
              <p className="text-gray-700">
                Websites optimized for local search get up to 3x more traffic from people in your service area.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <Building className="text-fethr-blue mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-2">Higher Conversion Rates</h3>
              <p className="text-gray-700">
                Location-relevant content builds trust with local customers, increasing your conversion rates by up to 45%.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <MapPin className="text-fethr-blue mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-2">Better Customer Experience</h3>
              <p className="text-gray-700">
                Location-aware websites provide relevant information that helps customers make faster decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
};

export default LocationBasedCreation;
