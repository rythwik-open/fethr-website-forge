
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import CaseStudies from '@/components/CaseStudies';
import Services from '@/components/Services';
import Comparison from '@/components/Comparison';
import Team from '@/components/Team';
import BlogPreview from '@/components/BlogPreview';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Partners />
      <Stats />
      <Features />
      <HowItWorks />
      <CaseStudies />
      <Services />
      <Comparison />
      <Team />
      <BlogPreview />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
