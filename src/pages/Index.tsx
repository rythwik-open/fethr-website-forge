
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import CaseStudies from '@/components/CaseStudies';
import Services from '@/components/Services';
import Comparison from '@/components/Comparison';
import Team from '@/components/Team';
import BlogPreview from '@/components/BlogPreview';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section with Side-by-side Layout */}
      <Hero />
      
      {/* Partners Bar */}
      <div className="bg-white">
        <Partners />
      </div>
      
      {/* Core Benefits */}
      <div className="py-16">
        <Stats />
      </div>
      
      {/* Feature Showcase */}
      <div className="bg-white py-16">
        <Features />
      </div>
      
      {/* How It Works */}
      <div className="bg-fethr-light-blue bg-opacity-20 py-16">
        <HowItWorks />
      </div>
      
      {/* Case Studies */}
      <div className="bg-white py-16">
        <CaseStudies />
      </div>
      
      {/* Services Grid */}
      <div className="py-16">
        <Services />
      </div>
      
      {/* Comparison Charts */}
      <div className="bg-white py-16">
        <Comparison />
      </div>
      
      {/* Team Section */}
      <div className="bg-fethr-light-purple bg-opacity-20 py-16">
        <Team />
      </div>
      
      {/* Blog Previews */}
      <div className="bg-white py-16">
        <BlogPreview />
      </div>
      
      {/* Testimonials Carousel */}
      <div className="py-16">
        <Testimonials />
      </div>
      
      {/* Pricing Tables */}
      <div className="bg-white py-16">
        <Pricing />
      </div>
      
      {/* Call to Action */}
      <CallToAction />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
