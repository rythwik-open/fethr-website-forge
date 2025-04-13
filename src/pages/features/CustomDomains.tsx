
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { CheckCircle2, Globe, Lock, Layers, Shield, Award } from 'lucide-react';

const CustomDomains = () => {
  return (
    <FeatureLayout
      title="Custom Domains"
      subtitle="Connect your own domain or get a new one through our platform. Establish your professional online identity with a branded web address."
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overview Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Your Business Deserves Its Own Domain</h2>
          <p className="text-lg text-gray-700 mb-6">
            A custom domain name is essential for establishing a professional online presence. With Fethr, you can easily connect your existing domain or register a new one directly through our platform. We handle all the technical setup so you can focus on growing your business.
          </p>
          <p className="text-lg text-gray-700">
            Every paid plan includes a free custom domain for the first year, making it simple to launch a professional website with your own branded web address.
          </p>
        </div>
        
        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Globe className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Domain Registration</h3>
            <p className="text-gray-700 mb-4">
              Search and register your perfect domain name directly through Fethr. We offer competitive pricing on hundreds of domain extensions, from classic .com to industry-specific options.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Free domain for 1 year with paid plans</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Hundreds of domain extensions available</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Domain suggestion tool for finding available names</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Layers className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Domain Connection</h3>
            <p className="text-gray-700 mb-4">
              Already own a domain? Connect it to your Fethr website in minutes with our easy domain connection process. We provide step-by-step instructions for all major domain registrars.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Simple DNS configuration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Automatic DNS verification</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Support for domain transfers</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Lock className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Free SSL Certificates</h3>
            <p className="text-gray-700 mb-4">
              Every domain connected to Fethr automatically gets a free SSL certificate, ensuring your website is secure and trusted by visitors and search engines.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Automatic HTTPS encryption</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Improved search engine rankings</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Annual certificate renewal included</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Award className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Premium DNS</h3>
            <p className="text-gray-700 mb-4">
              Our enterprise-grade DNS ensures your website loads quickly and reliably around the world, with built-in security features to protect against attacks.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Global DNS network for faster loading</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>DDoS protection included</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>99.9% uptime guarantee</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Domain Features */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-16">
          <div className="p-8 bg-gradient-to-r from-fethr-blue to-fethr-purple text-white">
            <h3 className="text-2xl font-bold mb-2">Complete Domain Management</h3>
            <p>All the tools you need to manage your domains in one place</p>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="mx-auto text-fethr-blue mb-4" size={32} />
                <h4 className="text-lg font-semibold mb-2">Domain Privacy</h4>
                <p className="text-gray-600">Keep your personal information private with free WHOIS privacy protection included with all domains.</p>
              </div>
              
              <div className="text-center">
                <Layers className="mx-auto text-fethr-blue mb-4" size={32} />
                <h4 className="text-lg font-semibold mb-2">Subdomain Control</h4>
                <p className="text-gray-600">Create and manage unlimited subdomains for different sections of your business or testing environments.</p>
              </div>
              
              <div className="text-center">
                <Globe className="mx-auto text-fethr-blue mb-4" size={32} />
                <h4 className="text-lg font-semibold mb-2">Email Forwarding</h4>
                <p className="text-gray-600">Create professional email addresses with your domain that forward to your existing email account.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* How It Works */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-16 h-16 rounded-full bg-fethr-light-blue flex items-center justify-center text-fethr-blue text-2xl font-bold mb-4 md:mb-0 md:mr-6">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Domain</h3>
                <p className="text-gray-700">
                  Search for available domains directly in your Fethr dashboard, or enter the details of a domain you already own.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-16 h-16 rounded-full bg-fethr-light-blue flex items-center justify-center text-fethr-blue text-2xl font-bold mb-4 md:mb-0 md:mr-6">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Register or Connect</h3>
                <p className="text-gray-700">
                  Either register a new domain through our platform, or follow our simple instructions to connect your existing domain.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-16 h-16 rounded-full bg-fethr-light-blue flex items-center justify-center text-fethr-blue text-2xl font-bold mb-4 md:mb-0 md:mr-6">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Automatic Setup</h3>
                <p className="text-gray-700">
                  We automatically configure your domain settings, including DNS records and SSL certificates. No technical knowledge required.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-16 h-16 rounded-full bg-fethr-light-blue flex items-center justify-center text-fethr-blue text-2xl font-bold mb-4 md:mb-0 md:mr-6">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Go Live</h3>
                <p className="text-gray-700">
                  Once your domain is connected, your website is immediately accessible at your custom web address, professionally branded for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Domain FAQ */}
        <div className="bg-gray-100 rounded-2xl p-10 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">How long does it take for my domain to work?</h3>
              <p className="text-gray-700">
                New domain registrations typically activate within minutes. For existing domains, the connection process usually takes 24-48 hours for DNS changes to propagate worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I transfer my existing domain to Fethr?</h3>
              <p className="text-gray-700">
                Yes. You can either transfer domain ownership to us for centralized management, or simply connect your domain while keeping it registered with your current provider.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Do you offer email hosting with domains?</h3>
              <p className="text-gray-700">
                We offer email forwarding with all domains. For full email hosting, we provide easy integration with popular email providers like Google Workspace and Microsoft 365.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">What happens to my domain after the free year?</h3>
              <p className="text-gray-700">
                After your first free year, you'll be notified about renewal at our standard domain pricing. You can choose to renew through us or transfer the domain to another registrar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
};

export default CustomDomains;
