
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-fethr-light-blue to-fethr-light-purple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to transform your business with a stunning website?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of businesses that trust Fethr to create beautiful, effective websites in minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-fethr-blue hover:bg-fethr-purple text-white text-lg px-8 py-6">
              Start creating for free
            </Button>
            <Button variant="outline" className="border-fethr-blue text-fethr-blue hover:bg-fethr-light-blue text-lg px-8 py-6">
              Book a demo <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
