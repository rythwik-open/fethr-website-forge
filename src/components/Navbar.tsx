
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-fethr-blue to-fethr-purple text-white font-bold text-xl mr-2">f</div>
              <h1 className="text-2xl font-bold text-gray-900">fethr</h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {featureCategories.map((category) => (
                  <NavigationMenuItem key={category.title}>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-fethr-blue font-medium">
                      {category.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {category.items.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-fethr-light-blue hover:text-fethr-blue focus:bg-accent focus:text-accent-foreground"
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
            
            <a href="#testimonials" className="text-gray-700 hover:text-fethr-blue font-medium">Testimonials</a>
            <Link to="/pricing" className="text-gray-700 hover:text-fethr-blue font-medium">Pricing</Link>
            <Button className="bg-fethr-blue hover:bg-fethr-purple text-white rounded-full px-6">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 px-4 space-y-6 bg-white border-t border-gray-100">
            {featureCategories.map((category) => (
              <div key={category.title} className="space-y-3">
                <div className="font-semibold text-gray-900">{category.title}</div>
                <div className="space-y-2 ml-4">
                  {category.items.map((item) => (
                    <Link 
                      key={item.title}
                      to={item.href}
                      className="flex items-center text-gray-700 hover:text-fethr-blue py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <ChevronRight size={16} className="mr-1" />
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <a href="#testimonials" className="block text-gray-700 hover:text-fethr-blue font-medium py-1">Testimonials</a>
            <Link to="/pricing" className="block text-gray-700 hover:text-fethr-blue font-medium py-1">Pricing</Link>
            <Button className="w-full bg-fethr-blue hover:bg-fethr-purple text-white rounded-full mt-4">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
