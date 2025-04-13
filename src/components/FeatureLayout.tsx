
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  children: React.ReactNode;
}

const FeatureLayout = ({ title, subtitle, heroImage, children }: FeatureLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-fethr-light-blue rounded-full opacity-70 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-fethr-light-purple rounded-full opacity-70 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
          <Link to="/" className="inline-flex items-center text-fethr-blue mb-6 hover:text-fethr-purple transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Back to home
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl mt-8 max-w-5xl mx-auto">
            <img src={heroImage} alt={title} className="w-full h-auto" />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="py-16">
        {children}
      </div>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-fethr-light-blue to-fethr-light-purple py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Create your own professional website with Fethr's powerful features today.
          </p>
          <Button className="bg-fethr-blue hover:bg-fethr-purple text-white text-lg px-8 py-6">
            Start building for free
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FeatureLayout;
