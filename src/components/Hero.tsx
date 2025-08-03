import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Star } from 'lucide-react';
import heroSafari from '@/assets/hero-safari.jpg';

const Hero = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "An absolutely magical safari experience! Ola Tours made our Kenya dream come true.",
      author: "Sarah & James Mitchell",
      rating: 5
    },
    {
      text: "Professional, knowledgeable guides and breathtaking wildlife encounters. Highly recommended!",
      author: "David Chen",
      rating: 5
    },
    {
      text: "The best vacation we've ever taken. Kenya's beauty exceeded all expectations.",
      author: "Emma Thompson",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroSafari} 
          alt="Kenya Safari Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-up">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Discover the 
            <span className="text-gradient-sunset block">Magic of Kenya</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience unforgettable safaris, pristine beaches, and authentic cultural encounters 
            with Kenya's most trusted tour operator.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="btn-safari text-lg px-8 py-4 animate-pulse-safari">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Safari
            </Button>
            <Button className="btn-ghost-safari text-lg px-8 py-4 text-white border-white/30 hover:bg-white/10">
              <MapPin className="mr-2 h-5 w-5" />
              Explore Destinations
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">2000+</div>
              <div className="text-white/80">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-white/80">Tour Packages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">4.9</div>
              <div className="text-white/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Testimonial */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-md mx-auto border border-white/20">
          <div className="flex justify-center mb-3">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-accent fill-current" />
            ))}
          </div>
          <p className="text-white/90 text-center mb-3 italic">
            "{testimonials[currentTestimonial].text}"
          </p>
          <p className="text-white/70 text-center text-sm">
            - {testimonials[currentTestimonial].author}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;