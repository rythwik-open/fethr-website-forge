
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { CheckCircle2, Search, TrendingUp, FileText, Settings, Globe } from 'lucide-react';

const SeoTools = () => {
  return (
    <FeatureLayout
      title="Built-in SEO Tools"
      subtitle="Optimize your website for search engines and get found by more customers in your area."
      heroImage="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overview Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Rank Higher in Search Results</h2>
          <p className="text-lg text-gray-700 mb-6">
            Fethr's built-in SEO tools make it easy to optimize your website for search engines without needing specialized knowledge. Our AI analyzes your content and business information to automatically implement SEO best practices, helping you rank higher in search results and attract more visitors.
          </p>
          <p className="text-lg text-gray-700">
            From technical SEO to content optimization, we handle all the complex details so you can focus on running your business.
          </p>
        </div>
        
        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Search className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Keyword Optimization</h3>
            <p className="text-gray-700 mb-4">
              Our AI identifies the most relevant keywords for your business and location, then strategically incorporates them into your website's content, meta tags, and URLs.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Automatic keyword research and suggestions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Content analysis and optimization recommendations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Keyword density and placement optimization</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <FileText className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Meta Tags & Structured Data</h3>
            <p className="text-gray-700 mb-4">
              Fethr automatically generates optimized meta titles, descriptions, and structured data markup that helps search engines understand your content and display rich results.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Auto-generated meta titles and descriptions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Schema markup for local businesses</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Rich snippet optimization</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Settings className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Technical SEO</h3>
            <p className="text-gray-700 mb-4">
              We handle all the technical aspects of SEO that most website builders ignore, ensuring your site is properly indexed and crawled by search engines.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Optimized site structure and navigation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Automatic XML sitemap generation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Clean URL structure and redirects</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Mobile-friendly design for better rankings</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Globe className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Local SEO</h3>
            <p className="text-gray-700 mb-4">
              Specialized tools for local businesses to improve visibility in local search results and Google Maps listings.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Google My Business integration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Local business schema markup</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>NAP (Name, Address, Phone) consistency</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Location-based keyword optimization</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* SEO Dashboard */}
        <div className="bg-white rounded-xl overflow-hidden shadow-xl mb-16">
          <div className="p-8 bg-gradient-to-r from-fethr-blue to-fethr-purple text-white">
            <h3 className="text-2xl font-bold mb-2">SEO Dashboard</h3>
            <p>Track your SEO performance and get actionable insights to improve your rankings</p>
          </div>
          <div className="p-8">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="SEO Dashboard" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
        
        {/* SEO Tools Checklist */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Complete SEO Toolkit</h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gray-50 p-6 border-b">
              <h3 className="text-xl font-semibold">Everything you need to rank higher</h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
                <div className="flex items-center">
                  <CheckCircle2 className="text-fethr-blue mr-3" size={20} />
                  <span>Keyword research tools</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-fethr-blue mr-3" size={20} />
                  <span>Meta tag optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-fethr-blue mr-3" size={20} />
                  <span>XML and HTML sitemaps</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-fethr-blue mr-3" size={20} />
                  <span>Structured data markup</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-fethr-blue mr-3" size={20} />
                  <span>301 redirect management</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-fethr-blue mr-3" size={20} />
                  <span>Image alt text optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-fethr-blue mr-3" size={20} />
                  <span>Mobile SEO optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-fethr-blue mr-3" size={20} />
                  <span>Page speed optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-fethr-blue mr-3" size={20} />
                  <span>Google Search Console integration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-fethr-blue mr-3" size={20} />
                  <span>SEO performance reports</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-fethr-blue mr-3" size={20} />
                  <span>Competitor analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-fethr-blue mr-3" size={20} />
                  <span>Content optimization suggestions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* SEO Results */}
        <div className="bg-gradient-to-r from-fethr-light-blue to-fethr-light-purple p-10 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Real Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl text-center">
              <TrendingUp className="text-fethr-blue mx-auto mb-4" size={32} />
              <div className="text-4xl font-bold text-gray-800 mb-2">68%</div>
              <p className="text-gray-600">Average increase in organic traffic</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center">
              <Search className="text-fethr-blue mx-auto mb-4" size={32} />
              <div className="text-4xl font-bold text-gray-800 mb-2">Top 10</div>
              <p className="text-gray-600">Rankings for local keywords</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center">
              <Globe className="text-fethr-blue mx-auto mb-4" size={32} />
              <div className="text-4xl font-bold text-gray-800 mb-2">3x</div>
              <p className="text-gray-600">More leads from organic search</p>
            </div>
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
};

export default SeoTools;
