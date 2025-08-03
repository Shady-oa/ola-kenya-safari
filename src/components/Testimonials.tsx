import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah & James Mitchell",
      location: "London, UK",
      rating: 5,
      text: "Our 7-day safari with Ola Tours was absolutely magical! We saw all of the Big Five and our guide David was incredibly knowledgeable about the wildlife and local culture. The accommodations were luxurious and the entire experience exceeded our expectations. We're already planning our return trip!",
      tour: "Big Five Safari Adventure",
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "Emma Thompson",
      location: "Sydney, Australia",
      rating: 5,
      text: "The coastal experience was breathtaking! Swimming in crystal clear waters, sailing on traditional dhows, and exploring the coral reefs made this the perfect honeymoon destination. Ola Tours took care of every detail, allowing us to simply enjoy paradise.",
      tour: "Coastal Beach Paradise",
      image: "/api/placeholder/80/80"
    },
    {
      id: 3,
      name: "David Chen",
      location: "Toronto, Canada",
      rating: 5,
      text: "The Maasai cultural immersion was life-changing. Learning about traditional ways of life, participating in ceremonies, and connecting with the local community gave me a deep appreciation for Kenya's rich heritage. Truly authentic and respectful cultural tourism.",
      tour: "Maasai Cultural Immersion",
      image: "/api/placeholder/80/80"
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      location: "Barcelona, Spain",
      rating: 5,
      text: "Climbing Mount Kenya with Ola Tours was the adventure of a lifetime! The guides were professional, safety-conscious, and motivating. The stunning landscapes and sense of achievement reaching Point Lenana will stay with me forever.",
      tour: "Mount Kenya Expedition",
      image: "/api/placeholder/80/80"
    },
    {
      id: 5,
      name: "Robert & Linda Johnson",
      location: "Chicago, USA",
      rating: 5,
      text: "After 30 years of traveling, this was hands down our best vacation ever. Ola Tours' attention to detail, from airport transfers to daily game drives, was impeccable. The memories we made watching the Great Migration will last forever.",
      tour: "Great Migration Safari",
      image: "/api/placeholder/80/80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Travelers
            <span className="text-gradient-safari block">Are Saying</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from fellow adventurers who've 
            experienced the magic of Kenya with Ola Tours.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="testimonial-card">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Quote Icon */}
                <Quote className="h-12 w-12 text-accent mx-auto mb-6 opacity-60" />
                
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-accent fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-safari rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].location}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonials[currentIndex].tour}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-white shadow-card border-border/30 hover:shadow-sunset"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-white shadow-card border-border/30 hover:shadow-sunset"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2000+</div>
            <div className="text-muted-foreground">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Would Recommend</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;