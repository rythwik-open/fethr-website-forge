
import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white py-20 sm:py-32">
      {/* Background Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-fethr-light-blue rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-fethr-light-purple rounded-full opacity-70 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Hero Text */}
          <div className="lg:w-1/2 z-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Create professional websites with <span className="gradient-text">AI-powered precision</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Fethr transforms your business information into a stunning, location-optimized website in minutes. No design skills required.
            </p>
            
            <div className="flex flex-col space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle2 className="text-fethr-blue mr-3" size={22} />
                <p className="text-lg">Intelligent integration with Google My Business</p>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-fethr-blue mr-3" size={22} />
                <p className="text-lg">Location-based optimization for local SEO</p>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-fethr-blue mr-3" size={22} />
                <p className="text-lg">Intuitive drag-and-drop customization</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-fethr-blue hover:bg-fethr-purple text-white text-lg px-8 py-6">
                Start for free
                <Zap className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="border-fethr-blue text-fethr-blue hover:bg-fethr-light-blue text-lg px-8 py-6">
                See examples
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <Sparkles className="text-fethr-coral mr-2" size={20} />
              <p className="text-gray-600">No credit card required to start</p>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 z-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto lg:ml-auto lg:mr-0 max-w-lg">
              <div className="blob bg-gradient-to-br from-fethr-blue to-fethr-purple p-1 shadow-xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2426&q=80" 
                    alt="Fethr website builder in action" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg animate-float">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-fethr-light-coral flex items-center justify-center">
                    <Zap className="h-5 w-5 text-fethr-coral" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">AI-powered</p>
                    <p className="text-xs text-gray-500">Intelligent design</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 bg-white p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-fethr-light-blue flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-fethr-blue">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Mobile-Ready</p>
                    <p className="text-xs text-gray-500">Responsive design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
