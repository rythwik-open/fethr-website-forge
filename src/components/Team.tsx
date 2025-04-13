
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const TeamMember = ({ name, role, bio, imageUrl, linkedin, twitter, email }: TeamMemberProps) => {
  return (
    <Card className="overflow-hidden animate-slide-up opacity-0" style={{animationDelay: '0.2s'}}>
      <div className="aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-fethr-blue font-medium">{role}</p>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-gray-600">{bio}</p>
      </CardContent>
      <CardFooter className="flex gap-3 pt-0">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-fethr-blue transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-fethr-blue transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="text-gray-500 hover:text-fethr-blue transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

const Team = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Emma Bennett",
      role: "CEO & Co-founder",
      bio: "Former Google product lead with expertise in AI and machine learning. Emma leads our vision for AI-powered websites.",
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "#",
      twitter: "#",
      email: "emma@fethr.com"
    },
    {
      name: "David Chen",
      role: "CTO & Co-founder",
      bio: "Ex-Amazon engineer who built multiple successful AI systems. David leads our engineering team and technical strategy.",
      imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sarah Rodriguez",
      role: "Chief Design Officer",
      bio: "Award-winning designer with 15+ years of experience creating beautiful, user-focused digital experiences.",
      imageUrl: "https://images.unsplash.com/photo-1589786722741-e1d723f8b474?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "#",
      email: "sarah@fethr.com"
    },
    {
      name: "Michael Johnson",
      role: "VP of Customer Success",
      bio: "Customer experience expert focused on ensuring businesses get maximum value from their Fethr websites.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "#",
      twitter: "#",
      email: "michael@fethr.com"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our <span className="gradient-text">Team</span></h2>
          <p className="text-xl text-gray-600">The passionate experts behind Fethr's mission to revolutionize business websites.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              imageUrl={member.imageUrl}
              linkedin={member.linkedin}
              twitter={member.twitter}
              email={member.email}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team combines expertise in AI, design, local SEO, and small business growth to create the perfect solution for your online presence.
          </p>
          <a href="/about" className="text-fethr-blue hover:text-fethr-purple font-medium">
            Learn more about our story and vision →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
