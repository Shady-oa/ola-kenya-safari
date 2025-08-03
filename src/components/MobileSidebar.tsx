import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  MapPin,
  Calendar,
  Camera,
  Users,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Tour Packages', href: '#tours', icon: Camera },
    { name: 'Gallery', href: '/gallery', icon: Camera },
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'About Us', href: '#about', icon: Users },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://olatours.co.ke' },
    { name: 'Instagram', icon: Instagram, url: 'https://olatours.co.ke' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://olatours.co.ke' },
    { name: 'Twitter', icon: Twitter, url: 'https://olatours.co.ke' },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden text-foreground"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      
      <SheetContent side="left" className="w-80 px-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-safari rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <div>
                <h1 className="font-playfair text-lg font-bold text-foreground">
                  Ola Tour and Travels
                </h1>
                <p className="text-xs text-muted-foreground">Kenya Safari Experts</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-6">
              <ul className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      {item.href.startsWith('#') ? (
                        <a
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {Icon && <Icon className="h-5 w-5" />}
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="flex items-center gap-3 px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {Icon && <Icon className="h-5 w-5" />}
                          {item.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Contact Actions */}
            <div className="px-6 py-4 border-t border-border/50">
              <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/254759190097?text=Hello%20Ola%20Tour%20and%20Travels%2C%20I%20am%20interested%20in%20booking%20a%20tour."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-medium">WhatsApp</span>
                </a>
                
                <a
                  href="tel:+254759190097"
                  className="flex items-center gap-3 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">Call Now</span>
                </a>
                
                <a
                  href="mailto:info@olatours.co.ke?subject=Tour%20Enquiry&body=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20tours."
                  className="flex items-center gap-3 p-3 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">Email Us</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="px-6 py-4 border-t border-border/50">
              <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/70 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Office Address */}
            <div className="px-6 py-4 border-t border-border/50">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Our Office</p>
                  <p className="text-muted-foreground">
                    Magson Plaza, 3rd Floor<br />
                    Kisii, Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;