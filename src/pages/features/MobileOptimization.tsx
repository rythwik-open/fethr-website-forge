
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { CheckCircle2, Smartphone, Tablet, Monitor, Zap, BarChart } from 'lucide-react';

const MobileOptimization = () => {
  return (
    <FeatureLayout
      title="Mobile Optimization"
      subtitle="Create websites that look and perform perfectly on every device, from smartphones to desktops."
      heroImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overview Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Mobile Optimization Matters</h2>
          <p className="text-lg text-gray-700 mb-6">
            Over 60% of web traffic now comes from mobile devices. Fethr ensures your website looks beautiful and functions perfectly across all screen sizes, giving your visitors a seamless experience no matter how they access your site.
          </p>
          <p className="text-lg text-gray-700">
            Our mobile optimization goes beyond responsive design. We optimize for touch interactions, loading speed, and mobile-specific features that keep your mobile visitors engaged and converting.
          </p>
        </div>
        
        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Responsive Design System</h3>
            <p className="text-gray-700 mb-4">
              Every element of your Fethr website automatically adjusts to fit perfectly on any screen size. Our fluid grid system ensures proper spacing, readable text, and optimally sized images regardless of device.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Fluid layouts that adapt to any screen dimension</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Properly scaled images that maintain quality</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Touch-friendly navigation and buttons</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Mobile Performance Optimization</h3>
            <p className="text-gray-700 mb-4">
              Mobile users expect fast-loading pages. Fethr automatically optimizes your site's performance with techniques like image compression, code minification, and lazy loading to ensure speedy mobile experiences.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Compressed images that load quickly on mobile networks</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Lazy loading for below-the-fold content</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Minified code for faster page rendering</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Tablet className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Device-Specific Features</h3>
            <p className="text-gray-700 mb-4">
              Fethr detects the visitor's device and enables special features like click-to-call on smartphones, optimized forms for touch input, and properly sized navigation menus for each screen type.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Click-to-call buttons on mobile devices</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Mobile-optimized contact forms</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Smart navigation that adapts to screen size</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <BarChart className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Mobile SEO Boost</h3>
            <p className="text-gray-700 mb-4">
              Google prioritizes mobile-friendly websites in search results. Fethr implements all mobile SEO best practices, helping your site rank higher in mobile searches.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Google Mobile-Friendly certification</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Accelerated Mobile Pages (AMP) compatibility</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Mobile-first indexing optimization</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Preview Section */}
        <div className="bg-white p-10 rounded-2xl shadow-md mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">See How Your Site Looks Across Devices</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="flex justify-center items-end">
              <div className="w-1/4 relative z-30 transform -translate-x-8">
                <div className="rounded-xl overflow-hidden shadow-lg border-4 border-gray-800">
                  <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Mobile View" className="w-full" />
                </div>
                <div className="text-center mt-3 text-gray-700">Mobile</div>
              </div>
              <div className="w-1/3 relative z-20 transform -translate-x-4">
                <div className="rounded-xl overflow-hidden shadow-lg border-4 border-gray-800">
                  <img src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="Tablet View" className="w-full" />
                </div>
                <div className="text-center mt-3 text-gray-700">Tablet</div>
              </div>
              <div className="w-1/2 relative z-10">
                <div className="rounded-xl overflow-hidden shadow-lg border-4 border-gray-800">
                  <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Desktop View" className="w-full" />
                </div>
                <div className="text-center mt-3 text-gray-700">Desktop</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testing and Validation */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Rigorous Mobile Testing & Validation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 mx-auto gradient-bg rounded-full flex items-center justify-center mb-4">
                <Monitor className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Device Testing</h3>
              <p className="text-gray-700">
                Your site is automatically tested across 50+ devices and screen sizes to ensure compatibility.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 mx-auto gradient-bg rounded-full flex items-center justify-center mb-4">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Speed Testing</h3>
              <p className="text-gray-700">
                Performance is tested on various connection speeds to optimize loading times.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 mx-auto gradient-bg rounded-full flex items-center justify-center mb-4">
                <Smartphone className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Touch Testing</h3>
              <p className="text-gray-700">
                All interactive elements are verified for touch-friendliness and proper spacing.
              </p>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="bg-gradient-to-r from-fethr-blue to-fethr-purple rounded-2xl overflow-hidden mb-16">
          <div className="grid md:grid-cols-3 divide-x divide-white/20">
            <div className="p-10 text-center text-white">
              <div className="text-4xl font-bold mb-2">+68%</div>
              <p>More mobile conversions with optimized sites</p>
            </div>
            <div className="p-10 text-center text-white">
              <div className="text-4xl font-bold mb-2">3.5s</div>
              <p>Average load time on mobile devices</p>
            </div>
            <div className="p-10 text-center text-white">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p>Google Mobile-Friendly score</p>
            </div>
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
};

export default MobileOptimization;
