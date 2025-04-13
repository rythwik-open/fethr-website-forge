
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { CheckCircle2, MousePointer, Layers, Palette, Move, Image, Type } from 'lucide-react';

const DragAndDrop = () => {
  return (
    <FeatureLayout
      title="Intuitive Drag-and-Drop Editor"
      subtitle="Customize every aspect of your website with our powerful visual editor – no coding knowledge required."
      heroImage="https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overview Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Create Without Limitations</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our drag-and-drop editor gives you the freedom to design your website exactly how you want it. Simply drag elements onto your page, customize them with a few clicks, and see your changes instantly. It's as easy as using a word processor, but the results are a professional website.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're starting from a template or building from scratch, you have complete control over the look and feel of your site without ever touching a line of code.
          </p>
        </div>
        
        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <MousePointer className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">True Visual Editing</h3>
            <p className="text-gray-700 mb-4">
              What you see is what you get. Edit text directly on the page, resize images with your mouse, and position elements exactly where you want them.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Edit text and images in place</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Real-time preview of all changes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Pixel-perfect positioning</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Layers className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Pre-built Blocks</h3>
            <p className="text-gray-700 mb-4">
              Choose from hundreds of pre-designed content blocks for headers, galleries, testimonials, contact forms, and more. Just drag them onto your page and customize.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Industry-specific content blocks</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Professionally designed elements</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Fully customizable components</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Palette className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Style Controls</h3>
            <p className="text-gray-700 mb-4">
              Customize colors, fonts, spacing, and more with intuitive controls. Create a cohesive brand experience across your entire website with ease.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Global style settings</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Custom color palettes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Typography controls</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Visual Editor Preview */}
        <div className="relative mb-20 overflow-hidden rounded-xl shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Visual Editor Interface" 
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Powerful Visual Editor</h3>
            <p>Design your perfect website with intuitive drag-and-drop controls</p>
          </div>
        </div>
        
        {/* Advanced Features */}
        <h2 className="text-3xl font-bold mb-8 text-center">Advanced Editing Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="flex">
            <div className="mr-6">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center">
                <Move className="text-white" size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Multi-element Selection</h3>
              <p className="text-gray-700">
                Select multiple elements at once to move, delete, or style them together. Group related items to create complex layouts that stay organized.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="mr-6">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center">
                <Image className="text-white" size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Image Editing</h3>
              <p className="text-gray-700">
                Crop, resize, and adjust images directly in the editor. Apply filters, add borders, and optimize images for web without leaving Fethr.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="mr-6">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center">
                <Type className="text-white" size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Advanced Typography</h3>
              <p className="text-gray-700">
                Full control over fonts, sizes, line height, letter spacing, and more. Choose from our library of web-safe fonts or use your own custom fonts.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="mr-6">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center">
                <Layers className="text-white" size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Revision History</h3>
              <p className="text-gray-700">
                Experiment freely with unlimited undo/redo and a full revision history. Restore previous versions of your site with a single click.
              </p>
            </div>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="bg-gray-100 rounded-2xl p-10 mb-16">
          <div className="max-w-3xl mx-auto">
            <svg className="text-fethr-blue h-12 w-12 mb-6" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1.646 13.825 0 19.2c3.221 3.991 5.96 9.155 8.365 13.6h5.381c-3.461-5.822-6.115-10.52-7.881-15.168 1.987-0.26 4.234-0.425 6.201-3.25C14.096 10.821 12.697 7.149 9.352 4zM25.478 4c-4.897 3.456-7.706 9.825-9.352 15.2 3.221 3.991 5.96 9.155 8.365 13.6h5.381c-3.461-5.822-6.115-10.52-7.881-15.168 1.987-0.26 4.234-0.425 6.201-3.25C30.223 10.821 28.824 7.149 25.478 4z"></path>
            </svg>
            <p className="text-xl text-gray-700 italic mb-6">
              I have no design experience, but Fethr's drag-and-drop editor made it so easy to create a professional website for my boutique. I could experiment with different layouts and see the changes immediately. It's like having a designer at my fingertips!
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                alt="Client Photo"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold">Michael Chen</p>
                <p className="text-sm text-gray-600">Owner, Urban Style Boutique</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 text-center shadow-md">
            <div className="text-4xl font-bold text-fethr-blue mb-2">2,500+</div>
            <p className="text-gray-700">Pre-built content blocks</p>
          </div>
          <div className="bg-white rounded-xl p-8 text-center shadow-md">
            <div className="text-4xl font-bold text-fethr-blue mb-2">87%</div>
            <p className="text-gray-700">Faster website creation time</p>
          </div>
          <div className="bg-white rounded-xl p-8 text-center shadow-md">
            <div className="text-4xl font-bold text-fethr-blue mb-2">100%</div>
            <p className="text-gray-700">Code-free experience</p>
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
};

export default DragAndDrop;
