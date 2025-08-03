import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Send,
  Award,
  Shield,
  Plane
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold">Ola Tours</h3>
                <p className="text-sm text-primary-foreground/80">Kenya Safari Experts</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              For over 15 years, we've been creating unforgettable Kenya safari experiences. 
              From the Big Five to pristine beaches, let us show you the real magic of Kenya.
            </p>

            {/* Certifications */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-accent" />
                <span>Licensed Tour Operator</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-accent" />
                <span>IATA Certified</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="bg-transparent border-primary-foreground/30 hover:bg-accent hover:border-accent">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent border-primary-foreground/30 hover:bg-accent hover:border-accent">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent border-primary-foreground/30 hover:bg-accent hover:border-accent">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent border-primary-foreground/30 hover:bg-accent hover:border-accent">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'Safari Tours',
                'Beach Holidays',
                'Cultural Tours',
                'Mountain Expeditions',
                'Group Tours',
                'Custom Safaris',
                'Gallery',
                'About Us'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 safari-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90">
                    Safari Center Building<br />
                    Kimathi Street, Nairobi<br />
                    Kenya
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-primary-foreground/90">+254 700 123 456</p>
                  <p className="text-primary-foreground/90">+254 722 789 012</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <p className="text-primary-foreground/90">info@olatours.co.ke</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="text-primary-foreground/90">
                    Mon - Fri: 8:00 AM - 6:00 PM<br />
                    Sat - Sun: 9:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-primary-foreground/90 mb-4">
              Get the latest safari tips, travel guides, and exclusive offers delivered to your inbox.
            </p>
            
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
                />
                <Button className="bg-accent hover:bg-accent-light text-white">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-xs text-primary-foreground/70">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20">
              <h5 className="font-semibold mb-2 flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                24/7 Emergency Support
              </h5>
              <p className="text-accent font-bold">+254 711 SAFARI (722-374)</p>
              <p className="text-xs text-primary-foreground/80 mt-1">
                For travelers currently on safari
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/80 text-sm">
                © {currentYear} Ola Tours Kenya. All rights reserved.
              </p>
              <p className="text-primary-foreground/60 text-xs mt-1">
                Licensed Safari Tour Operator • Kenya Tourism Board Certified
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Booking Terms
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Travel Insurance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;