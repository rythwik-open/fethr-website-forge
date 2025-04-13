
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { CheckCircle2, X } from 'lucide-react';

const PricingTier = ({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  nonFeatures,
  buttonText, the
  recommended = false,
  delay
}: { 
  title: string, 
  price: string, 
  period: string, 
  description: string, 
  features: string[], 
  nonFeatures?: string[],
  buttonText: string,
  recommended?: boolean,
  delay: string
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden border ${recommended ? 'border-fethr-blue' : 'border-gray-200'} animate-slide-up opacity-0`} 
      style={{ animationDelay: delay }}
    >
      {recommended && (
        <div className="bg-fethr-blue text-white py-2 px-4 text-center text-sm font-medium">
          Recommended
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-end mb-4">
          <span className="text-4xl font-bold">{price}</span>
          {period && <span className="text-gray-500 ml-2">/{period}</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <Button className={`w-full ${recommended ? 'bg-fethr-blue hover:bg-fethr-purple' : 'bg-gray-800 hover:bg-gray-700'} text-white mb-8`}>
          {buttonText}
        </Button>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle2 className="text-fethr-blue flex-shrink-0 mr-2 mt-1" size={18} />
              <span>{feature}</span>
            </div>
          ))}
          
          {nonFeatures && nonFeatures.map((feature, index) => (
            <div key={index} className="flex items-start text-gray-500">
              <X className="text-gray-400 flex-shrink-0 mr-2 mt-1" size={18} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="relative bg-gray-50 overflow-hidden py-20">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-fethr-light-blue rounded-full opacity-70 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-fethr-light-purple rounded-full opacity-70 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600">
              Choose the plan that's right for your business. All plans include our core AI-powered website builder features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingTier 
              title="Free" 
              price="$0" 
              period="forever" 
              description="Perfect for individuals just getting started."
              features={[
                "AI website builder",
                "Drag & drop editor",
                "Mobile responsive design",
                "5 pages maximum",
                "Basic SEO tools",
                "Fethr subdomain (yoursite.fethr.com)",
                "Community support"
              ]}
              nonFeatures={[
                "Custom domain",
                "Remove Fethr branding",
                "Advanced SEO tools",
                "Analytics integration"
              ]}
              buttonText="Start for free"
              delay="0.1s"
            />
            
            <PricingTier 
              title="Pro" 
              price="$12" 
              period="month" 
              description="Ideal for small businesses and professionals."
              features={[
                "Everything in Free, plus:",
                "Unlimited pages",
                "Free custom domain for 1 year",
                "Remove Fethr branding",
                "Advanced SEO tools",
                "Google Analytics integration",
                "Priority support",
                "Blog functionality",
                "Custom forms",
                "Social media integration"
              ]}
              buttonText="Get started"
              recommended={true}
              delay="0.2s"
            />
            
            <PricingTier 
              title="Business" 
              price="$29" 
              period="month" 
              description="For growing businesses with advanced needs."
              features={[
                "Everything in Pro, plus:",
                "5 team members",
                "E-commerce functionality (up to 100 products)",
                "Advanced analytics dashboard",
                "Booking/appointment system",
                "Customer login area",
                "Email marketing integration",
                "Priority phone support",
                "White-label client access",
                "API access"
              ]}
              buttonText="Contact sales"
              delay="0.3s"
            />
          </div>
          
          <div className="mt-20 max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Can I upgrade or downgrade my plan at any time?</h3>
                  <p className="text-gray-700">
                    Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, your new rate will apply at the next billing cycle.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Do you offer a money-back guarantee?</h3>
                  <p className="text-gray-700">
                    Yes, we offer a 14-day money-back guarantee on all paid plans. If you're not satisfied for any reason, contact our support team for a full refund.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">What happens to my website if I cancel my subscription?</h3>
                  <p className="text-gray-700">
                    If you cancel a paid plan, your account will revert to the Free plan at the end of your billing cycle. Some premium features will become unavailable, but your core website will remain accessible.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Do you offer discounts for annual billing?</h3>
                  <p className="text-gray-700">
                    Yes, you can save 20% by choosing annual billing on any of our paid plans. This option is available during checkout or in your account settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;
