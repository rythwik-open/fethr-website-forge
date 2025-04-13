
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "How Sunrise Café increased foot traffic by 47%",
      description: "After implementing a Fethr website with local SEO optimization, this local coffee shop saw a dramatic increase in new customer visits within just 3 months.",
      industry: "Food & Beverage",
      imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      link: "/case-studies/sunrise-cafe"
    },
    {
      title: "MC Photography's booking rate jumped 89%",
      description: "By using Fethr's AI-powered portfolio features, this photography business was able to showcase their work more effectively and attract high-value clients.",
      industry: "Creative Services",
      imageUrl: "https://images.unsplash.com/photo-1452587925148-ce544e77cde2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      link: "/case-studies/mc-photography"
    },
    {
      title: "Downtown Hardware's digital transformation story",
      description: "This 50-year-old hardware store embraced digital with a Fethr website, resulting in 112% growth in online inquiries and a new customer base.",
      industry: "Retail",
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      link: "/case-studies/downtown-hardware"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Success Stories from <span className="gradient-text">Real Businesses</span></h2>
          <p className="text-xl text-gray-600">See how organizations like yours achieved remarkable results with Fethr websites.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden animate-slide-up opacity-0" style={{ animationDelay: `${index * 0.1 + 0.1}s` }}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={study.imageUrl} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardDescription className="text-fethr-blue font-medium">{study.industry}</CardDescription>
                <CardTitle className="text-xl">{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{study.description}</p>
              </CardContent>
              <CardFooter>
                <Link to={study.link} className="text-fethr-blue hover:text-fethr-purple font-medium inline-flex items-center">
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/case-studies" className="inline-flex items-center text-fethr-blue hover:text-fethr-purple font-medium">
            View all case studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
