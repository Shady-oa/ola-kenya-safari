import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Events = () => {
  const ongoingEvents = [
    {
      id: 1,
      title: "Great Migration Season",
      date: "July - October 2024",
      location: "Maasai Mara National Reserve",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      description: "Witness the spectacular wildebeest migration crossing the Mara River. This natural phenomenon is considered one of the Seven Wonders of the World.",
      status: "ongoing",
      duration: "3-7 days",
      groupSize: "4-8 people"
    },
    {
      id: 2,
      title: "Coastal Cultural Festival",
      date: "August - September 2024",
      location: "Mombasa & Diani Beach",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      description: "Experience the rich Swahili culture with traditional dhow sailing, local cuisine, and historical tours of Old Town Mombasa.",
      status: "ongoing",
      duration: "5-10 days",
      groupSize: "2-12 people"
    }
  ];

  const upcomingEvents = [
    {
      id: 3,
      title: "Mount Kenya Climbing Expedition",
      date: "November 15-22, 2024",
      location: "Mount Kenya National Park",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      description: "Challenge yourself with a guided climb to Point Lenana, Africa's second-highest peak. Perfect for adventure enthusiasts.",
      status: "upcoming",
      duration: "8 days",
      groupSize: "6-10 people"
    },
    {
      id: 4,
      title: "Northern Kenya Safari",
      date: "December 10-18, 2024",
      location: "Samburu & Laikipia",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      description: "Explore Kenya's remote northern regions, home to unique wildlife including Grevy's zebras, reticulated giraffes, and Somali ostriches.",
      status: "upcoming",
      duration: "9 days",
      groupSize: "4-8 people"
    },
    {
      id: 5,
      title: "New Year Safari Celebration",
      date: "December 28, 2024 - January 3, 2025",
      location: "Amboseli National Park",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      description: "Welcome the New Year with elephants against the backdrop of Mount Kilimanjaro. Special celebration dinner included.",
      status: "upcoming",
      duration: "7 days",
      groupSize: "8-15 people"
    },
    {
      id: 6,
      title: "Bird Watching Paradise",
      date: "January 20-27, 2025",
      location: "Lake Nakuru & Lake Naivasha",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      description: "A photographer's dream tour focusing on Kenya's incredible bird diversity, including flamingos, eagles, and over 400 species.",
      status: "upcoming",
      duration: "8 days",
      groupSize: "4-10 people"
    }
  ];

  const EventCard = ({ event }: { event: any }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <Badge 
          className={`absolute top-4 right-4 ${
            event.status === 'ongoing' 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {event.status === 'ongoing' ? 'Ongoing' : 'Upcoming'}
        </Badge>
      </div>
      
      <div className="p-6">
        <h3 className="font-playfair text-xl font-bold text-foreground mb-3">
          {event.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Calendar className="h-4 w-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Clock className="h-4 w-4" />
            <span>{event.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Users className="h-4 w-4" />
            <span>{event.groupSize}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          {event.description}
        </p>
        
        <div className="flex gap-3">
          <Button className="btn-safari flex-1">
            Book Now
          </Button>
          <Button variant="outline" className="btn-ghost-safari">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-safari text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Safari Events & Expeditions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join our special events and seasonal expeditions for unique Kenya experiences
            </p>
          </div>
        </section>

        {/* Ongoing Events */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
                Ongoing Events
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Currently active experiences you can join
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {ongoingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
                Upcoming Events
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Book early for these exciting future adventures
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-playfair font-bold mb-6">
              Want to Create Your Own Event?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              We specialize in custom group tours and private expeditions. Let us design the perfect Kenya experience for your group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-light text-white"
                asChild
              >
                <a 
                  href="https://wa.me/254759190097?text=Hello%20Ola%20Tour%20and%20Travels%2C%20I%20want%20to%20create%20a%20custom%20group%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plan Custom Event
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a 
                  href="mailto:info@olatours.co.ke?subject=Custom%20Event%20Enquiry&body=I%20would%20like%20to%20plan%20a%20custom%20event%20with%20Ola%20Tour%20and%20Travels."
                >
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;