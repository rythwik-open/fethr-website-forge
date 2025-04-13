
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock3 } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface BlogPostProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  slug: string;
}

const BlogPost = ({ title, excerpt, imageUrl, date, readTime, author, slug }: BlogPostProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col animate-slide-up opacity-0" style={{animationDelay: '0.2s'}}>
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock3 className="h-4 w-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
        <Link to={`/blog/${slug}`} className="hover:text-fethr-blue transition-colors">
          <h3 className="text-xl font-bold line-clamp-2">{title}</h3>
        </Link>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <p className="text-gray-600 line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={author.avatarUrl} 
            alt={author.name} 
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />
          <span className="text-sm font-medium">{author.name}</span>
        </div>
        <Link to={`/blog/${slug}`} className="text-fethr-blue hover:text-fethr-purple transition-colors">
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

const BlogPreview = () => {
  const blogPosts: BlogPostProps[] = [
    {
      title: "How AI is Revolutionizing Small Business Websites",
      excerpt: "Discover how artificial intelligence is making it easier than ever for small businesses to create professional websites that convert visitors into customers.",
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89f12e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Apr 02, 2025",
      readTime: "5 min read",
      author: {
        name: "Emma Bennett",
        avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      slug: "ai-revolutionizing-small-business-websites"
    },
    {
      title: "5 Ways to Optimize Your Website for Local Search",
      excerpt: "Learn proven strategies to enhance your website's visibility in local search results and attract more customers in your area.",
      imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Mar 24, 2025",
      readTime: "7 min read",
      author: {
        name: "Michael Johnson",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      slug: "optimize-website-local-search"
    },
    {
      title: "The Business Owner's Guide to Website Analytics",
      excerpt: "Understanding your website analytics doesn't have to be complicated. This guide breaks down the essential metrics every business owner should track.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Mar 18, 2025",
      readTime: "6 min read",
      author: {
        name: "Sarah Rodriguez",
        avatarUrl: "https://images.unsplash.com/photo-1589786722741-e1d723f8b474?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      slug: "business-owners-guide-website-analytics"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between max-w-6xl mx-auto mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest <span className="gradient-text">Insights</span></h2>
            <p className="text-xl text-gray-600">Expert advice to help grow your business online.</p>
          </div>
          <Link to="/blog">
            <Button variant="outline" className="border-fethr-blue text-fethr-blue hover:bg-fethr-light-blue">
              View all articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <BlogPost 
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl}
              date={post.date}
              readTime={post.readTime}
              author={post.author}
              slug={post.slug}
            />
          ))}
        </div>

        <div className="mt-16 max-w-6xl mx-auto bg-fethr-light-blue rounded-2xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4761FF" d="M40.2,-62.1C53.5,-52.9,66.8,-44.6,75.2,-32.1C83.5,-19.7,87,-3.1,84.4,12.7C81.8,28.5,73.2,43.5,61.8,56.5C50.5,69.5,36.5,80.4,20.6,84.9C4.8,89.4,-12.9,87.5,-27.9,80.4C-42.8,73.3,-55,61.1,-66.4,47.7C-77.9,34.4,-88.6,20,-89.7,4.6C-90.8,-10.8,-82.4,-27.1,-71.3,-39.9C-60.2,-52.7,-46.6,-61.9,-33,-67.8C-19.4,-73.7,-5.8,-76.3,6.2,-86.3C18.1,-96.2,26.8,-71.2,40.2,-62.1Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="relative z-10 md:max-w-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="text-gray-700 mb-6">
              Get the latest insights, tips, and resources delivered straight to your inbox. No spam, just valuable content to help grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fethr-blue flex-grow"
              />
              <Button className="bg-fethr-blue hover:bg-fethr-purple text-white whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
