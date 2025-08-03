import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  Users, 
  MapPin, 
  Star, 
  Camera, 
  Plane,
  Filter,
  Calendar
} from 'lucide-react';
import wildlifeBigFive from '@/assets/wildlife-bigfive.jpg';
import coastParadise from '@/assets/coast-paradise.jpg';
import maasaiCulture from '@/assets/maasai-culture.jpg';

const TourPackages = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const tourPackages = [
    {
      id: 1,
      title: "Big Five Safari Adventure",
      description: "Experience Kenya's iconic wildlife in Maasai Mara, Amboseli, and Tsavo National Parks",
      image: wildlifeBigFive,
      duration: "7 Days",
      groupSize: "4-12 People",
      price: "$1,899",
      rating: 4.9,
      reviews: 156,
      category: "Safari",
      highlights: ["Big Five Guarantee", "Luxury Lodges", "Professional Guide"],
      badge: "Most Popular"
    },
    {
      id: 2,
      title: "Coastal Beach Paradise",
      description: "Relax on pristine beaches of Diani and Watamu, with snorkeling and cultural excursions",
      image: coastParadise,
      duration: "5 Days",
      groupSize: "2-8 People", 
      price: "$1,299",
      rating: 4.8,
      reviews: 89,
      category: "Beach",
      highlights: ["Private Beach Access", "Dhow Sailing", "Coral Reef Diving"],
      badge: "Best Value"
    },
    {
      id: 3,
      title: "Maasai Cultural Immersion",
      description: "Authentic cultural experience with Maasai communities, traditional ceremonies and crafts",
      image: maasaiCulture,
      duration: "3 Days",
      groupSize: "6-15 People",
      price: "$799",
      rating: 4.9,
      reviews: 203,
      category: "Cultural",
      highlights: ["Traditional Village Stay", "Warrior Training", "Handcraft Workshops"],
      badge: "Authentic Experience"
    }
  ];

  const filters = ['All', 'Safari', 'Beach', 'Cultural', 'Adventure'];

  const filteredPackages = activeFilter === 'All' 
    ? tourPackages 
    : tourPackages.filter(pkg => pkg.category === activeFilter);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unforgettable Kenya 
            <span className="text-gradient-safari block">Tour Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From thrilling safaris to pristine beaches and authentic cultural encounters, 
            discover the perfect Kenya adventure tailored just for you.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 ${
                  activeFilter === filter 
                    ? 'bg-gradient-safari text-white' 
                    : 'btn-ghost-safari'
                }`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {filter}
              </Button>
            ))}
          </div>
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
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-lg font-bold text-primary">{tour.price}</span>
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
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-playfair text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {tour.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-accent fill-current" />
                    <span className="text-sm font-medium">{tour.rating}</span>
                    <span className="text-xs text-muted-foreground">({tour.reviews})</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {tour.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button className="btn-safari flex-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                  <Button variant="outline" className="btn-ghost-safari">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button className="btn-sunset text-lg px-8 py-4">
            <Plane className="mr-2 h-5 w-5" />
            View All Tour Packages
          </Button>
          <p className="text-muted-foreground mt-4">
            Can't find what you're looking for? Let us create a custom safari experience just for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;