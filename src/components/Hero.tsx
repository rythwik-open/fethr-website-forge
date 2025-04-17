
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-fethr-light-blue to-fethr-light-purple opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-fethr-light-purple to-fethr-light-coral opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative z-10">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-1 transition-all hover:rotate-0 duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2426&q=80" 
                  alt="Fethr website builder in action" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="absolute -top-5 -left-5 bg-white rounded-lg shadow-lg p-3 z-20 transform -rotate-3 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-fethr-light-blue flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-fethr-blue" />
                </div>
                <span className="font-medium text-sm">AI-Powered</span>
              </div>
            </div>
            
            <div className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-3 z-20 transform rotate-3 animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-fethr-light-coral flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-fethr-coral">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-medium text-sm">Responsive</span>
              </div>
            </div>
          </div>
          
          {/* Right column - Text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-fethr-light-blue text-fethr-blue text-sm font-medium mb-6">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              AI-powered website creation
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Websites that <span className="text-fethr-blue">work harder</span> for your business
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Fethr transforms your business information into a stunning, location-optimized website in minutes. No design skills required.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-fethr-blue mt-1 shrink-0" size={20} />
                <p className="text-gray-700">Intelligent integration with Google My Business to streamline your online presence</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-fethr-blue mt-1 shrink-0" size={20} />
                <p className="text-gray-700">Location-based optimization that boosts your visibility in local search results</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-fethr-blue mt-1 shrink-0" size={20} />
                <p className="text-gray-700">Intuitive drag-and-drop customization that gives you complete control</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-fethr-blue hover:bg-fethr-purple text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-fethr-blue/20 hover:shadow-fethr-purple/20 transition-all duration-300">
                Start for free
              </Button>
              <Button variant="outline" className="border-fethr-blue text-fethr-blue hover:bg-fethr-light-blue text-lg px-8 py-6 rounded-xl group">
                See examples
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
