
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold gradient-text">fethr</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-fethr-blue font-medium">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-fethr-blue font-medium">Testimonials</a>
            <a href="#pricing" className="text-gray-600 hover:text-fethr-blue font-medium">Pricing</a>
            <Button className="bg-fethr-blue hover:bg-fethr-purple text-white">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-600"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#features" className="block text-gray-600 hover:text-fethr-blue font-medium">Features</a>
            <a href="#testimonials" className="block text-gray-600 hover:text-fethr-blue font-medium">Testimonials</a>
            <a href="#pricing" className="block text-gray-600 hover:text-fethr-blue font-medium">Pricing</a>
            <Button className="w-full bg-fethr-blue hover:bg-fethr-purple text-white">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
