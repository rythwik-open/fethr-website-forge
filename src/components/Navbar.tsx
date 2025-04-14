
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Feature categories with their sub-features
  const featureCategories = [
    {
      title: "Content",
      items: [
        { title: "Location-Based Creation", href: "/features/location-based-creation" },
        { title: "Drag and Drop", href: "/features/drag-and-drop" },
        { title: "Content Management", href: "/features/content-management" },
      ]
    },
    {
      title: "Technical",
      items: [
        { title: "Mobile Optimization", href: "/features/mobile-optimization" },
        { title: "SEO Tools", href: "/features/seo-tools" },
        { title: "Performance", href: "/features/performance" },
      ]
    },
    {
      title: "Business",
      items: [
        { title: "Custom Domains", href: "/features/custom-domains" },
        { title: "Analytics", href: "/features/analytics" },
      ]
    }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold gradient-text">fethr</h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {featureCategories.map((category) => (
                  <NavigationMenuItem key={category.title}>
                    <NavigationMenuTrigger className="text-gray-600 hover:text-fethr-blue font-medium">
                      {category.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {category.items.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  Explore our {item.title.toLowerCase()} features
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <a href="#testimonials" className="text-gray-600 hover:text-fethr-blue font-medium">Testimonials</a>
            <Link to="/pricing" className="text-gray-600 hover:text-fethr-blue font-medium">Pricing</Link>
            <Button className="bg-fethr-blue hover:bg-fethr-purple text-white">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-600"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {featureCategories.map((category) => (
              <div key={category.title} className="space-y-2">
                <div className="font-medium text-gray-800">{category.title}</div>
                <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                  {category.items.map((item) => (
                    <Link 
                      key={item.title}
                      to={item.href}
                      className="block text-gray-600 hover:text-fethr-blue"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <a href="#testimonials" className="block text-gray-600 hover:text-fethr-blue font-medium">Testimonials</a>
            <Link to="/pricing" className="block text-gray-600 hover:text-fethr-blue font-medium">Pricing</Link>
            <Button className="w-full bg-fethr-blue hover:bg-fethr-purple text-white">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
