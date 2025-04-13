
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { CheckCircle2, FileText, Calendar, Image, RefreshCcw, Users } from 'lucide-react';

const ContentManagement = () => {
  return (
    <FeatureLayout
      title="Easy Content Management"
      subtitle="Update your website content anytime, anywhere, with our intuitive content management system."
      heroImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overview Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Keep Your Website Fresh and Relevant</h2>
          <p className="text-lg text-gray-700 mb-6">
            Your website should evolve with your business. Fethr's content management system makes it easy to update text, images, and other content without technical skills. Whether you're publishing new blog posts, updating business hours, or adding product information, you can do it all with just a few clicks.
          </p>
          <p className="text-lg text-gray-700">
            Our user-friendly tools ensure your website always reflects the latest information about your business, helping you maintain a professional online presence.
          </p>
        </div>
        
        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <FileText className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Visual Text Editor</h3>
            <p className="text-gray-700 mb-4">
              Edit your website content with a familiar word processor-like interface. Format text, add links, and create lists without knowing HTML.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Rich text formatting options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Inline editing on live pages</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Spell check and grammar assistance</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Image className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Media Library</h3>
            <p className="text-gray-700 mb-4">
              Upload, organize, and reuse images and videos across your website. Our media management tools make it easy to maintain a consistent visual identity.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Drag-and-drop image uploads</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Automatic image optimization</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Image categorization and search</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
              <Calendar className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Scheduled Publishing</h3>
            <p className="text-gray-700 mb-4">
              Plan your content calendar by scheduling updates in advance. Perfect for seasonal promotions, holiday announcements, or new product launches.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Schedule content at specific dates and times</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Preview scheduled content before it goes live</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Content calendar view for planning</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Blog Management */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-16">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Integrated Blog Platform</h3>
              <p className="text-gray-600 mb-6">
                Publish regular blog posts to engage your audience and improve your SEO. Our intuitive blog management tools make it easy to create, categorize, and share your content.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Category and tag management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Featured images and media embedding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>SEO optimization for each post</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Social sharing integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-fethr-blue mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Comment moderation system</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-fethr-blue to-fethr-purple">
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                alt="Blog Management" 
                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
            </div>
          </div>
        </div>
        
        {/* Advanced Features */}
        <h2 className="text-3xl font-bold mb-8 text-center">Advanced Content Management</h2>
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="flex">
            <div className="mr-6">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center">
                <RefreshCcw className="text-white" size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Version Control</h3>
              <p className="text-gray-700">
                Never worry about losing your content. Our system keeps track of all previous versions, allowing you to revert to earlier editions if needed. Compare changes and see who made what modifications.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="mr-6">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center">
                <Users className="text-white" size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">User Roles & Permissions</h3>
              <p className="text-gray-700">
                Control who can edit your website with customizable user roles. Assign different levels of access to team members, from full administrative control to limited content editing capabilities.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="mr-6">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center">
                <FileText className="text-white" size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Content Templates</h3>
              <p className="text-gray-700">
                Create reusable templates for different types of content. Maintain consistent formatting and structure across your website with standardized layouts for product pages, team members, testimonials, and more.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="mr-6">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center">
                <Calendar className="text-white" size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Content Workflows</h3>
              <p className="text-gray-700">
                Set up approval processes for content publishing. Draft, review, approve, and publish content with structured workflows that ensure quality control, especially valuable for teams with multiple content creators.
              </p>
            </div>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="bg-gray-100 rounded-2xl p-10 mb-16">
          <div className="max-w-3xl mx-auto">
            <svg className="text-fethr-blue h-12 w-12 mb-6" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1.646 13.825 0 19.2c3.221 3.991 5.96 9.155 8.365 13.6h5.381c-3.461-5.822-6.115-10.52-7.881-15.168 1.987-0.26 4.234-0.425 6.201-3.25C14.096 10.821 12.697 7.149 9.352 4zM25.478 4c-4.897 3.456-7.706 9.825-9.352 15.2 3.221 3.991 5.96 9.155 8.365 13.6h5.381c-3.461-5.822-6.115-10.52-7.881-15.168 1.987-0.26 4.234-0.425 6.201-3.25C30.223 10.821 28.824 7.149 25.478 4z"></path>
            </svg>
            <p className="text-xl text-gray-700 italic mb-6">
              The content management system is so intuitive that I can update our restaurant's menu, daily specials, and event calendar myself in just minutes. No more waiting for a web developer or paying expensive fees for simple updates.
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                alt="Client Photo"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-gray-600">Owner, Sunrise Café</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
};

export default ContentManagement;
