
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Fethr changed my business completely. I had a website built in under an hour that looks like I paid thousands for it. The AI somehow captured exactly what my café needed.",
    author: "Sarah Johnson",
    company: "Sunrise Café",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "As a freelance photographer, I needed a portfolio that stood out. Fethr pulled my Google business info and created a stunning website that showcases my work perfectly.",
    author: "Marcus Chen",
    company: "MC Photography",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Our local hardware store had been putting off getting a website for years. With Fethr, it took me 15 minutes to create a site that's already bringing in new customers.",
    author: "Emma Rodriguez",
    company: "Downtown Hardware",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "The location-based features have been a game-changer for our restaurant chain. Each location gets a custom page that ranks well in local searches.",
    author: "David Thompson",
    company: "Urban Bites",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "I was skeptical about AI website builders, but Fethr exceeded my expectations. It's intuitive, powerful, and the support team is always there when I need help.",
    author: "Jennifer Lee",
    company: "Wellness Studio",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our <span className="text-fethr-blue">Customers</span> Say</h2>
          <p className="text-xl text-gray-600">Real businesses achieving real results with Fethr</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Large quote icon */}
          <div className="absolute -top-12 left-0 text-fethr-light-blue opacity-20">
            <Quote size={80} />
          </div>
          
          {/* Testimonial cards */}
          <div className="relative overflow-hidden py-10">
            <div 
              className="transition-all duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <Card className="bg-white rounded-2xl p-8 shadow-lg border-0">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/3">
                        <div className="relative">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.author} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-fethr-blue rounded-full p-1">
                            <Quote size={18} className="text-white" />
                          </div>
                        </div>
                        <div className="mt-4 text-center md:text-left">
                          <div className="flex justify-center md:justify-start mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:w-2/3">
                        <p className="text-gray-700 text-lg italic mb-6">{testimonial.quote}</p>
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                          <p className="text-gray-500">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:border-fethr-blue hover:bg-fethr-light-blue text-gray-600 hover:text-fethr-blue transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2 items-center px-4">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'w-6 bg-fethr-blue' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:border-fethr-blue hover:bg-fethr-light-blue text-gray-600 hover:text-fethr-blue transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
