import { useState } from 'react';
import { Button } from '@/components/ui/button';
import MobileSidebar from '@/components/MobileSidebar';
import olaLogo from '@/assets/ola-logo.png';
import { 
  Phone, 
  MessageCircle, 
  Calendar,
  Camera,
  Users
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Tour Packages', href: '#tours' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Events', href: '/events' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <img 
                src={olaLogo} 
                alt="Ola Tour and Travels Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="font-playfair text-xl font-bold text-foreground">
                  Ola Tour and Travels
                </h1>
                <p className="text-xs text-muted-foreground">Kenya Safari Experts</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="safari-link text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="btn-ghost-safari"
              asChild
            >
              <a 
                href="https://wa.me/254759190097?text=Hello%20Ola%20Tour%20and%20Travels%2C%20I%20am%20interested%20in%20booking%20a%20tour."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button 
              size="sm" 
              className="btn-safari"
              asChild
            >
              <a href="tel:+254759190097">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileSidebar />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;