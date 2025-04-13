
import React from 'react';
import { Check, X, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ComparisonRow = ({ 
  feature, 
  fethrValue, 
  otherValues,
  highlight = false,
  tooltip 
}: { 
  feature: string, 
  fethrValue: React.ReactNode, 
  otherValues: React.ReactNode[],
  highlight?: boolean,
  tooltip?: string
}) => (
  <div className={`grid grid-cols-4 gap-4 py-4 ${highlight ? 'bg-fethr-light-blue/20' : ''} ${highlight ? '' : 'border-b border-gray-100'}`}>
    <div className="flex items-center">
      <span className="font-medium text-gray-900">{feature}</span>
      {tooltip && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
    <div className="flex items-center justify-center font-medium text-fethr-blue">
      {fethrValue}
    </div>
    {otherValues.map((value, index) => (
      <div key={index} className="flex items-center justify-center text-gray-500">
        {value}
      </div>
    ))}
  </div>
);

const Comparison = () => {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How <span className="gradient-text">Fethr</span> Compares</h2>
          <p className="text-xl text-gray-600">See why businesses choose Fethr over traditional website builders and agencies.</p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-4 gap-4 bg-gray-50 p-4 rounded-t-xl">
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-700">Feature</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="h-12 w-12 mb-2 rounded-full bg-fethr-light-blue flex items-center justify-center">
                <span className="text-fethr-blue font-bold">F</span>
              </div>
              <span className="font-semibold text-fethr-blue">Fethr</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="h-12 w-12 mb-2 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-700 font-bold">T</span>
              </div>
              <span className="font-semibold text-gray-700">Traditional Builders</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="h-12 w-12 mb-2 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-700 font-bold">A</span>
              </div>
              <span className="font-semibold text-gray-700">Agencies</span>
            </div>
          </div>

          <div className="p-4">
            <ComparisonRow 
              feature="Setup Time" 
              fethrValue="3 minutes"
              otherValues={["Hours", "Weeks"]}
              tooltip="Average time to get a website live from start to finish"
              highlight={true}
            />
            <ComparisonRow 
              feature="AI Optimization" 
              fethrValue={<Check className="h-5 w-5 text-fethr-blue" />}
              otherValues={[<X className="h-5 w-5 text-gray-400" />, <X className="h-5 w-5 text-gray-400" />]}
              tooltip="Uses AI to intelligently adapt to business type and location"
            />
            <ComparisonRow 
              feature="Google My Business Integration" 
              fethrValue={<Check className="h-5 w-5 text-fethr-blue" />}
              otherValues={[<X className="h-5 w-5 text-gray-400" />, <Check className="h-5 w-5 text-gray-500" />]}
            />
            <ComparisonRow 
              feature="Real-time Location SEO" 
              fethrValue={<Check className="h-5 w-5 text-fethr-blue" />}
              otherValues={[<X className="h-5 w-5 text-gray-400" />, <Check className="h-5 w-5 text-gray-500" />]}
              highlight={true}
            />
            <ComparisonRow 
              feature="Average Cost" 
              fethrValue="$12/mo"
              otherValues={["$20-35/mo", "$3,000-10,000"]}
            />
            <ComparisonRow 
              feature="Ongoing Maintenance" 
              fethrValue="Automated"
              otherValues={["Manual", "Additional Cost"]}
              tooltip="How updates and maintenance are handled after site creation"
            />
            <ComparisonRow 
              feature="Analytics & Insights" 
              fethrValue="Built-in"
              otherValues={["Basic", "Separate Tool"]}
              highlight={true}
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Experience the Fethr difference with our revolutionary approach to business websites that combines AI intelligence with local optimization.
          </p>
          <Button className="bg-fethr-blue hover:bg-fethr-purple text-white">
            Start your free trial
          </Button>
          <div className="mt-4">
            <Link to="/comparison" className="text-sm text-fethr-blue hover:text-fethr-purple">
              View detailed comparison →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
