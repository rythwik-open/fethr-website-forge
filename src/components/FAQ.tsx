
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay: string;
}

const FAQItem = ({ question, answer, isOpen, onClick, delay }: FAQItemProps) => {
  return (
    <div 
      className="border-b border-gray-200 py-6 animate-slide-up opacity-0" 
      style={{ animationDelay: delay }}
    >
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <div className="ml-2 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-fethr-blue" />
          ) : (
            <ChevronDown className="h-5 w-5 text-fethr-blue" />
          )}
        </div>
      </button>
      <div className={`mt-3 text-gray-600 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "How much does Fethr cost?",
      answer: "Fethr offers a free plan that lets you create a basic website. Our paid plans start at $12/month for the Pro plan and $29/month for the Business plan, with additional features like custom domains, e-commerce capabilities, and priority support."
    },
    {
      question: "Do I need technical skills to use Fethr?",
      answer: "Not at all! Fethr is designed for business owners without technical skills. Our AI-powered platform handles all the technical aspects of website creation, allowing you to focus on your business content."
    },
    {
      question: "Can I connect my own domain name?",
      answer: "Yes! You can connect your existing domain name to your Fethr website. This feature is available on our Pro and Business plans. If you don't have a domain yet, we can help you purchase one."
    },
    {
      question: "How does the Google My Business integration work?",
      answer: "Fethr can automatically pull information from your Google My Business profile, including your business hours, location, contact details, and reviews. This saves you time and ensures your website is consistent with your GMB listing."
    },
    {
      question: "Is my Fethr website mobile-friendly?",
      answer: "Absolutely! All websites created with Fethr are fully responsive and optimized for mobile devices. They look great and function perfectly on smartphones, tablets, and desktop computers."
    },
    {
      question: "Can I edit my website after it's published?",
      answer: "Yes, you can edit your website anytime. Our intuitive drag-and-drop editor makes it easy to update content, add new sections, or change the design of your website whenever you need to."
    }
  ];
  
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="text-xl text-gray-600">Got questions? We've got answers. Here are some of the most common questions about Fethr.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              delay={`${0.1 + (index * 0.1)}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
