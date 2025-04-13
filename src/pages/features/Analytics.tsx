
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { CheckCircle2, BarChart, PieChart, LineChart, Users, MousePointer } from 'lucide-react';

const Analytics = () => {
  return (
    <FeatureLayout
      title="Analytics Integration"
      subtitle="Track your website performance and visitor behavior with powerful, easy-to-understand analytics tools."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overview Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Data-Driven Decisions for Your Business</h2>
          <p className="text-lg text-gray-700 mb-6">
            Understanding how visitors interact with your website is crucial for business success. Fethr provides comprehensive analytics tools that give you insights into your website's performance, visitor behavior, and conversion metrics.
          </p>
          <p className="text-lg text-gray-700">
            Our analytics features are designed to be powerful yet easy to understand, presenting complex data in clear visualizations that help you make informed decisions about your online presence.
          </p>
        </div>
        
        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <BarChart className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Built-in Analytics Dashboard</h3>
            <p className="text-gray-700 mb-4">
              Access key performance metrics directly in your Fethr dashboard. Track visitors, page views, bounce rates, and more without switching between platforms.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Real-time visitor tracking</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Traffic source analysis</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Page performance metrics</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Device and browser breakdowns</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <LineChart className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Google Analytics Integration</h3>
            <p className="text-gray-700 mb-4">
              Easily connect your Fethr website with Google Analytics 4 for more advanced tracking capabilities and integration with other Google services.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>One-click Google Analytics connection</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Automatic event tracking setup</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Custom dimension configuration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Enhanced ecommerce tracking (for online stores)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Visitor Insights</h3>
            <p className="text-gray-700 mb-4">
              Understand who your visitors are and how they interact with your website. Demographic information, behavior patterns, and engagement metrics help you tailor your content.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Audience demographics and interests</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>New vs. returning visitor analysis</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>User flow visualization</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Session duration and depth metrics</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <MousePointer className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Conversion Tracking</h3>
            <p className="text-gray-700 mb-4">
              Set up goals and track specific actions that matter to your business, from form submissions to product purchases, with detailed conversion reporting.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Custom goal configuration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Conversion rate optimization insights</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Funnel visualization and analysis</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Attribution modeling</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Analytics Dashboard Preview */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-16">
          <div className="p-8 bg-gradient-to-r from-fethr-blue to-fethr-purple text-white">
            <h3 className="text-2xl font-bold mb-2">Comprehensive Analytics Dashboard</h3>
            <p>Track all important metrics in one intuitive interface</p>
          </div>
          <div className="p-8">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Analytics Dashboard" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
        
        {/* Additional Analytics Features */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Powerful Analytics Tools</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 mx-auto gradient-bg rounded-full flex items-center justify-center mb-4">
                <PieChart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Reports</h3>
              <p className="text-gray-700">
                Create personalized reports with exactly the metrics that matter most to your business goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 mx-auto gradient-bg rounded-full flex items-center justify-center mb-4">
                <LineChart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Trends</h3>
              <p className="text-gray-700">
                Track changes over time with trend analysis that highlights patterns and growth opportunities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 mx-auto gradient-bg rounded-full flex items-center justify-center mb-4">
                <Share2 className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Export & Share</h3>
              <p className="text-gray-700">
                Export analytics data in multiple formats or schedule automated reports for your team.
              </p>
            </div>
          </div>
        </div>
        
        {/* Analytics Integrations */}
        <div className="bg-gray-100 rounded-2xl p-10 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Additional Analytics Integrations</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Google Tag Manager</h3>
                </div>
                <p className="text-gray-700">
                  Easily implement and manage marketing tags on your website without modifying code. Track conversions, retargeting, and more.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Facebook Pixel</h3>
                </div>
                <p className="text-gray-700">
                  Track website conversions from Facebook ads, optimize ads based on collected data, and build targeted audiences for future ads.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">HotJar</h3>
                </div>
                <p className="text-gray-700">
                  Visualize user behavior with heatmaps, session recordings, and conversion funnels to understand how visitors interact with your pages.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.883 12.238V17h1.668v-4.762h1.668V17h1.668v-4.762h.834V11h-.834V9.762c0-.922.753-1.667 1.668-1.667h.834V7h-.834a3.34 3.34 0 0 0-3.336 3.333V11H9.55v1.238h1.668zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Google Search Console</h3>
                </div>
                <p className="text-gray-700">
                  Monitor your site's presence in Google search results, optimize content, and identify issues affecting your search performance.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Analysis Benefits */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Turn Data Into Business Growth</h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gray-50 p-6 border-b">
              <h3 className="text-xl font-semibold">How Analytics Drive Results</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <BarChart className="text-fethr-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Optimize Conversion Paths</h4>
                    <p className="text-gray-700">
                      Identify where visitors drop off in your conversion funnel and optimize those pages to increase overall conversion rates.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <LineChart className="text-fethr-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Content Effectiveness</h4>
                    <p className="text-gray-700">
                      Understand which content resonates with your audience and focus your efforts on creating more of what works.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <Users className="text-fethr-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Audience Targeting</h4>
                    <p className="text-gray-700">
                      Learn exactly who your website visitors are and tailor your marketing efforts to attract more of your ideal customers.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <MousePointer className="text-fethr-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">ROI Measurement</h4>
                    <p className="text-gray-700">
                      Track the return on investment for your marketing campaigns and allocate budget to the channels that drive the best results.
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

export default Analytics;
