import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import contactBanner from '@/assets/contact-banner.jpg';
import officeExterior from '@/assets/office-exterior.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Ola Tour and Travels,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}`;
    
    const whatsappUrl = `https://wa.me/254759190097?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+254 759 190 097",
      action: "tel:+254759190097"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+254 759 190 097",
      action: "https://wa.me/254759190097?text=Hello%20Ola%20Tour%20and%20Travels%2C%20I%20would%20like%20to%20get%20in%20touch."
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@olatours.co.ke",
      action: "mailto:info@olatours.co.ke?subject=Tour%20Enquiry&body=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20tours."
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Magson Plaza, 3rd Floor, Kisii",
      action: "https://maps.google.com/?q=Magson+Plaza+Kisii"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency contacts only" }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://olatours.co.ke"
    },
    {
      icon: Instagram,
      name: "Instagram", 
      url: "https://olatours.co.ke"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://olatours.co.ke"
    },
    {
      icon: Twitter,
      name: "X (Twitter)",
      url: "https://olatours.co.ke"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/20 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={contactBanner} 
            alt="Contact Ola Tour and Travels"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-accent/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Ready to start your Kenya adventure? Get in touch with our friendly team. 
            We're here to help you plan the perfect safari experience.
          </p>
          
          <Button className="btn-sunset text-lg px-8 py-4" asChild>
            <a 
              href="https://wa.me/254759190097?text=Hello%20Ola%20Tour%20and%20Travels%2C%20I%20would%20like%20to%20get%20in%20touch."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us Now
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="card-safari">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Send className="h-6 w-6" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+254 700 123 456"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your dream Kenya safari..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="btn-safari w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Quick Contact */}
              <div>
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <div className="grid gap-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index} className="card-safari p-4 hover-scale transition-all duration-300">
                        <CardContent className="p-0 flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{info.title}</h3>
                            <a 
                              href={info.action}
                              target={info.title === "WhatsApp" || info.title === "Office" ? "_blank" : undefined}
                              rel={info.title === "WhatsApp" || info.title === "Office" ? "noopener noreferrer" : undefined}
                              className="text-primary hover:text-primary/80 transition-colors"
                            >
                              {info.content}
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
              
              {/* Business Hours */}
              <Card className="card-safari">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="font-medium text-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Social Media */}
              <Card className="card-safari">
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Stay connected for travel tips and inspiration
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                          aria-label={social.name}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
                Visit Our Office
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Located in the heart of Kisii town, our office is easily accessible and we welcome 
                walk-in visitors. Come chat with our team about your dream Kenya adventure!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Magson Plaza, 3rd Floor, Kisii</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Mon-Fri: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <Button className="btn-safari" asChild>
                  <a 
                    href="https://maps.google.com/?q=Magson+Plaza+Kisii"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
                <Button variant="outline" className="btn-ghost-safari" asChild>
                  <a 
                    href="https://wa.me/254759190097?text=Hello%20Ola%20Tour%20and%20Travels%2C%20I%20would%20like%20to%20schedule%20an%20office%20visit."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Schedule Visit
                  </a>
                </Button>
              </div>
            </div>
            
            <img
              src={officeExterior}
              alt="Ola Tour and Travels Office - Magson Plaza Kisii"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
            24/7 Emergency Support
          </h2>
          <p className="text-muted-foreground mb-6">
            While traveling with us, you have access to 24/7 emergency support for any urgent matters.
          </p>
          <Button className="btn-sunset" asChild>
            <a href="tel:+254759190097">
              <Phone className="mr-2 h-4 w-4" />
              Emergency: +254 759 190 097
            </a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactUs;