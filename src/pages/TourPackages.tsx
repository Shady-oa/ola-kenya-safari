import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Clock, 
  Users, 
  MapPin, 
  Star, 
  Camera, 
  Plane,
  Filter,
  Calendar,
  ChevronDown,
  MessageCircle,
  DollarSign,
  Mountain,
  Waves,
  TreePine
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import wildlifeBigFive from '@/assets/wildlife-bigfive.jpg';
import coastParadise from '@/assets/coast-paradise.jpg';
import maasaiCulture from '@/assets/maasai-culture.jpg';
import safariLodge from '@/assets/safari-lodge.jpg';
import kenyaDestinations from '@/assets/kenya-destinations.jpg';

const TourPackages = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [duration, setDuration] = useState('All');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const tourPackages = [
    {
      id: 1,
      title: "Big Five Safari Adventure",
      description: "Experience Kenya's iconic wildlife in Maasai Mara, Amboseli, and Tsavo National Parks with luxury accommodation and expert guides",
      image: wildlifeBigFive,
      duration: "7 Days",
      groupSize: "4-12 People",
      price: "$1,899",
      originalPrice: "$2,299",
      rating: 4.9,
      reviews: 156,
      category: "Safari",
      highlights: ["Big Five Guarantee", "Luxury Lodges", "Professional Guide", "Game Drives", "Cultural Visits"],
      badge: "Most Popular",
      includes: ["Airport transfers", "All meals", "Park fees", "Professional guide", "Luxury accommodation"]
    },
    {
      id: 2,
      title: "Coastal Beach Paradise",
      description: "Relax on pristine beaches of Diani and Watamu, with snorkeling, dhow sailing and cultural excursions to local villages",
      image: coastParadise,
      duration: "5 Days",
      groupSize: "2-8 People", 
      price: "$1,299",
      originalPrice: "$1,599",
      rating: 4.8,
      reviews: 89,
      category: "Beach",
      highlights: ["Private Beach Access", "Dhow Sailing", "Coral Reef Diving", "Spa Treatments", "Seafood Dining"],
      badge: "Best Value",
      includes: ["Beach resort accommodation", "Water sports", "Cultural tours", "All meals", "Airport transfers"]
    },
    {
      id: 3,
      title: "Maasai Cultural Immersion",
      description: "Authentic cultural experience with Maasai communities, traditional ceremonies, crafts and warrior training sessions",
      image: maasaiCulture,
      duration: "3 Days",
      groupSize: "6-15 People",
      price: "$799",
      originalPrice: "$999",
      rating: 4.9,
      reviews: 203,
      category: "Cultural",
      highlights: ["Traditional Village Stay", "Warrior Training", "Handcraft Workshops", "Storytelling", "Traditional Meals"],
      badge: "Authentic Experience",
      includes: ["Cultural guide", "Traditional accommodation", "All activities", "Meals", "Transportation"]
    },
    {
      id: 4,
      title: "Mount Kenya Expedition",
      description: "Challenging trek to Africa's second highest peak with breathtaking views and diverse ecosystems",
      image: safariLodge,
      duration: "6 Days",
      groupSize: "4-10 People",
      price: "$1,599",
      originalPrice: "$1,899",
      rating: 4.7,
      reviews: 67,
      category: "Adventure",
      highlights: ["Mountain Climbing", "Alpine Scenery", "Wildlife Viewing", "Professional Guides", "Camping"],
      badge: "Adventure",
      includes: ["Mountain guide", "Camping equipment", "All meals", "Park fees", "Emergency support"]
    }
  ];

  const filters = [
    { name: 'All', icon: Filter },
    { name: 'Safari', icon: TreePine },
    { name: 'Beach', icon: Waves },
    { name: 'Cultural', icon: Users },
    { name: 'Adventure', icon: Mountain }
  ];

  const priceRanges = ['All', 'Under $1000', '$1000-$1500', '$1500-$2000', 'Over $2000'];
  const durations = ['All', '1-3 Days', '4-6 Days', '7+ Days'];

  const filteredPackages = tourPackages.filter(pkg => {
    const categoryMatch = activeFilter === 'All' || pkg.category === activeFilter;
    const priceMatch = priceRange === 'All' || checkPriceRange(pkg.price, priceRange);
    const durationMatch = duration === 'All' || checkDuration(pkg.duration, duration);
    return categoryMatch && priceMatch && durationMatch;
  });

  function checkPriceRange(price: string, range: string): boolean {
    const numPrice = parseInt(price.replace('$', '').replace(',', ''));
    switch (range) {
      case 'Under $1000': return numPrice < 1000;
      case '$1000-$1500': return numPrice >= 1000 && numPrice <= 1500;
      case '$1500-$2000': return numPrice >= 1500 && numPrice <= 2000;
      case 'Over $2000': return numPrice > 2000;
      default: return true;
    }
  }

  function checkDuration(dur: string, range: string): boolean {
    const days = parseInt(dur);
    switch (range) {
      case '1-3 Days': return days >= 1 && days <= 3;
      case '4-6 Days': return days >= 4 && days <= 6;
      case '7+ Days': return days >= 7;
      default: return true;
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/20 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={kenyaDestinations} 
            alt="Kenya Destinations"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-accent/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Kenya Tour Packages
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover the magic of Kenya with our carefully curated tour packages. 
            From thrilling safaris to pristine beaches and authentic cultural experiences.
          </p>
          
          <Button className="btn-sunset text-lg px-8 py-4" asChild>
            <a 
              href="https://wa.me/254759190097?text=Hello%20Ola%20Tour%20and%20Travels%2C%20I%20would%20like%20to%20inquire%20about%20your%20tour%20packages."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Custom Quote
            </a>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Desktop Filters */}
          <div className="hidden md:block mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {filters.map((filter) => {
                const Icon = filter.icon;
                return (
                  <Button
                    key={filter.name}
                    variant={activeFilter === filter.name ? "default" : "outline"}
                    onClick={() => setActiveFilter(filter.name)}
                    className={`px-6 py-3 ${
                      activeFilter === filter.name 
                        ? 'bg-gradient-safari text-white' 
                        : 'btn-ghost-safari'
                    }`}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {filter.name}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Mobile Filters */}
          <div className="md:hidden mb-8">
            <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full justify-between mb-4">
                  <span className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="space-y-6">
                {/* Category Pills */}
                <Card className="p-4">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    Category
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {filters.map((filter) => {
                      const Icon = filter.icon;
                      return (
                        <button
                          key={filter.name}
                          onClick={() => setActiveFilter(filter.name)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            activeFilter === filter.name
                              ? 'bg-primary text-primary-foreground shadow-md scale-105'
                              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                          }`}
                        >
                          <Icon className="h-3 w-3" />
                          {filter.name}
                        </button>
                      );
                    })}
                  </div>
                </Card>

                {/* Price Range */}
                <Card className="p-4">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Price Range
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range}
                        onClick={() => setPriceRange(range)}
                        className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                          priceRange === range
                            ? 'bg-accent text-accent-foreground shadow-md'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </Card>

                {/* Duration */}
                <Card className="p-4">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    Duration
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {durations.map((dur) => (
                      <button
                        key={dur}
                        onClick={() => setDuration(dur)}
                        className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                          duration === dur
                            ? 'bg-secondary text-secondary-foreground shadow-md'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        {dur}
                      </button>
                    ))}
                  </div>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Tour Cards Grid */}
          <div className="tour-grid">
            {filteredPackages.map((tour, index) => (
              <div
                key={tour.id}
                className="card-safari scale-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Badge */}
                  {tour.badge && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      {tour.badge}
                    </Badge>
                  )}

                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl">
                    <div className="text-center">
                      <span className="text-lg font-bold text-primary block">{tour.price}</span>
                      {tour.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{tour.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Quick Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                    <div className="flex items-center gap-4 text-white text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {tour.groupSize}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-playfair text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {tour.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-accent fill-current" />
                      <span className="text-sm font-medium">{tour.rating}</span>
                      <span className="text-xs text-muted-foreground">({tour.reviews})</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {tour.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.slice(0, 3).map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button className="btn-safari flex-1" asChild>
                      <a 
                        href="https://wa.me/254759190097?text=Hello%20Ola%20Tour%20and%20Travels%2C%20I%20would%20like%20to%20book%20the%20tour%20package."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Now
                      </a>
                    </Button>
                    <Button variant="outline" className="btn-ghost-safari">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">
                No tours match your current filters.
              </p>
              <Button 
                onClick={() => {
                  setActiveFilter('All');
                  setPriceRange('All');
                  setDuration('All');
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button className="btn-sunset text-lg px-8 py-4" asChild>
              <a 
                href="https://wa.me/254759190097?text=Hello%20Ola%20Tour%20and%20Travels%2C%20I%20would%20like%20a%20custom%20safari%20experience."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Plane className="mr-2 h-5 w-5" />
                Request Custom Package
              </a>
            </Button>
            <p className="text-muted-foreground mt-4">
              Can't find what you're looking for? Let us create a custom safari experience just for you.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TourPackages;