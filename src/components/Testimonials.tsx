
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  image: string;
  delay: string;
}

const Testimonial = ({ quote, author, company, image, delay }: TestimonialProps) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md animate-slide-up opacity-0" 
      style={{ animationDelay: delay }}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-4">{quote}</p>
      <div className="flex items-center">
        <img src={image} alt={author} className="w-10 h-10 rounded-full mr-3 object-cover" />
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Loved by <span className="gradient-text">Business Owners</span></h2>
          <p className="text-xl text-gray-600">See what our customers have to say about their experience with Fethr.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            quote="Fethr changed my business completely. I had a website built in under an hour that looks like I paid thousands for it. The AI somehow captured exactly what my café needed."
            author="Sarah Johnson"
            company="Sunrise Café"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            delay="0.1s"
          />
          <Testimonial 
            quote="As a freelance photographer, I needed a portfolio that stood out. Fethr pulled my Google business info and created a stunning website that showcases my work perfectly."
            author="Marcus Chen"
            company="MC Photography"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            delay="0.2s"
          />
          <Testimonial 
            quote="Our local hardware store had been putting off getting a website for years. With Fethr, it took me 15 minutes to create a site that's already bringing in new customers."
            author="Emma Rodriguez"
            company="Downtown Hardware"
            image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            delay="0.3s"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
