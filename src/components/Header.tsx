import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  MapPin,
  Calendar,
  Camera,
  Users
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '#home', icon: null },
    { name: 'Safari Tours', href: '#tours', icon: Camera },
    { name: 'Destinations', href: '#destinations', icon: MapPin },
    { name: 'Gallery', href: '#gallery', icon: Camera },
    { name: 'About Us', href: '#about', icon: Users },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-safari rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <div>
                <h1 className="font-playfair text-xl font-bold text-foreground">
                  Ola Tours
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
            <Button variant="outline" size="sm" className="btn-ghost-safari">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            <Button size="sm" className="btn-safari">
              <Calendar className="h-4 w-4 mr-2" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border/50">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {item.name}
                  </a>
                );
              })}
              
              {/* Mobile Action Buttons */}
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="outline" className="btn-ghost-safari justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </Button>
                <Button className="btn-safari justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Your Safari
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;