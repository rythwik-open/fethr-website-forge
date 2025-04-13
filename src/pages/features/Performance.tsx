
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { CheckCircle2, Zap, CloudLightning, Globe, Database, BarChart } from 'lucide-react';

const Performance = () => {
  return (
    <FeatureLayout
      title="Performance Optimization"
      subtitle="Lightning-fast websites that load quickly and perform flawlessly on all devices and connection speeds."
      heroImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overview Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Speed Matters for User Experience and SEO</h2>
          <p className="text-lg text-gray-700 mb-6">
            Website performance directly impacts user experience and search engine rankings. Fethr automatically optimizes every aspect of your website to ensure lightning-fast loading times, smooth interactions, and excellent performance scores.
          </p>
          <p className="text-lg text-gray-700">
            Our performance optimizations work behind the scenes, so you don't need to worry about technical details. Your website will simply load faster and perform better, keeping visitors engaged and improving your search rankings.
          </p>
        </div>
        
        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Automatic Image Optimization</h3>
            <p className="text-gray-700 mb-4">
              Images are often the largest elements on a webpage. Fethr automatically optimizes all your images for web, compressing them without quality loss and serving them in modern formats.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Intelligent image compression</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Responsive image sizing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>WebP format conversion for supported browsers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Lazy loading for off-screen images</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <CloudLightning className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Global CDN</h3>
            <p className="text-gray-700 mb-4">
              Every Fethr website is delivered through our global Content Delivery Network, with servers in strategic locations worldwide to serve your content from the closest location to each visitor.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>200+ edge locations worldwide</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Automatic content caching</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>DDoS protection built-in</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>HTTP/3 and QUIC support</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Database className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Code Optimization</h3>
            <p className="text-gray-700 mb-4">
              Clean, efficient code is essential for fast-loading websites. Fethr automatically optimizes all HTML, CSS, and JavaScript to ensure minimal file sizes and maximum performance.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Minification of all code resources</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>CSS and JavaScript bundling</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Tree-shaking to remove unused code</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Critical CSS extraction</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Globe className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Core Web Vitals Optimization</h3>
            <p className="text-gray-700 mb-4">
              Google's Core Web Vitals are key metrics that affect your search rankings. Fethr automatically optimizes for these metrics to improve both user experience and SEO.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Largest Contentful Paint (LCP) optimization</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>First Input Delay (FID) improvements</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Cumulative Layout Shift (CLS) prevention</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Regular automated performance audits</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Performance Dashboard */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-16">
          <div className="p-8 bg-gradient-to-r from-fethr-blue to-fethr-purple text-white">
            <h3 className="text-2xl font-bold mb-2">Performance Dashboard</h3>
            <p>Monitor your website's performance metrics and get actionable insights</p>
          </div>
          <div className="p-8">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Performance Dashboard" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
        
        {/* Additional Performance Features */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Advanced Performance Features</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 mx-auto gradient-bg rounded-full flex items-center justify-center mb-4">
                <Database className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Server-side Rendering</h3>
              <p className="text-gray-700">
                Pages are pre-rendered for faster initial load times and improved SEO performance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 mx-auto gradient-bg rounded-full flex items-center justify-center mb-4">
                <CloudLightning className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Browser Caching</h3>
              <p className="text-gray-700">
                Intelligent caching policies ensure returning visitors experience even faster load times.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 mx-auto gradient-bg rounded-full flex items-center justify-center mb-4">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resource Preloading</h3>
              <p className="text-gray-700">
                Critical resources are preloaded to ensure they're available immediately when needed.
              </p>
            </div>
          </div>
        </div>
        
        {/* Performance Stats */}
        <div className="bg-gradient-to-r from-fethr-blue to-fethr-purple rounded-2xl overflow-hidden mb-16">
          <div className="grid md:grid-cols-3 divide-x divide-white/20">
            <div className="p-10 text-center text-white">
              <div className="text-4xl font-bold mb-2">300%</div>
              <p>Faster loading times compared to average websites</p>
            </div>
            <div className="p-10 text-center text-white">
              <div className="text-4xl font-bold mb-2">90+</div>
              <p>Average Google PageSpeed score</p>
            </div>
            <div className="p-10 text-center text-white">
              <div className="text-4xl font-bold mb-2">45%</div>
              <p>Increase in conversion rates with optimized sites</p>
            </div>
          </div>
        </div>
        
        {/* Performance Impact */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Performance Matters</h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gray-50 p-6 border-b">
              <h3 className="text-xl font-semibold">The Business Impact of Website Speed</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <BarChart className="text-fethr-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Higher Conversion Rates</h4>
                    <p className="text-gray-700">
                      For every 1 second delay in page load time, conversions fall by 7%. Fethr's performance optimizations help maximize your conversion rates.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <Globe className="text-fethr-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Improved Search Rankings</h4>
                    <p className="text-gray-700">
                      Google uses page speed as a ranking factor. Faster websites have a significant advantage in search results, especially on mobile devices.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <Users className="text-fethr-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Better User Experience</h4>
                    <p className="text-gray-700">
                      53% of mobile users abandon sites that take longer than 3 seconds to load. Fast-loading sites keep visitors engaged and satisfied.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
};

export default Performance;
