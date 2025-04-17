
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Sparkles } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-fethr-blue to-fethr-purple opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-fethr-light-blue opacity-40 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-fethr-light-purple opacity-40 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left column - Image */}
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
                alt="Team working on website" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-fethr-blue to-fethr-purple opacity-80"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-10">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-white" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-medium text-center">
                  "Fethr helped us create our dream website in just 15 minutes!"
                </p>
                <div className="mt-6 flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                    alt="Customer" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <div className="ml-3">
                    <p className="font-medium">Emma R.</p>
                    <p className="text-sm opacity-80">Small Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - Text */}
            <div className="p-8 md:p-12 lg:p-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-fethr-light-blue text-fethr-blue text-sm font-medium mb-6">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                Ready to launch your website?
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join thousands of satisfied customers
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Create your professional website in minutes with our AI-powered platform. No technical skills needed—just your business vision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-fethr-blue hover:bg-fethr-purple text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-fethr-blue/20 hover:shadow-fethr-purple/20 transition-all duration-300">
                  Start free trial
                </Button>
                <Button variant="outline" className="border-fethr-blue text-fethr-blue hover:bg-fethr-light-blue text-lg px-8 py-6 rounded-xl group">
                  Schedule a demo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </div>
              
              <p className="mt-6 text-gray-500 text-sm flex items-center">
                <span className="w-5 h-5 rounded-full bg-fethr-light-blue flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-fethr-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                No credit card required • 14-day free trial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
