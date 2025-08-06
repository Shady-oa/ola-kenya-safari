import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Globe, 
  Heart,
  CheckCircle,
  MessageCircle,
  Phone,
  Star,
  TreePine,
  Camera,
  Shield
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import teamPhoto from '@/assets/team-photo.jpg';
import happyTourists from '@/assets/happy-tourists.jpg';
import safariLodge from '@/assets/safari-lodge.jpg';
import wildlifeBigFive from '@/assets/wildlife-bigfive.jpg';

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Kenya",
      description: "We are proud Kenyans who love sharing our country's natural beauty and rich culture with the world."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety is our top priority. We maintain the highest safety standards in all our operations."
    },
    {
      icon: Users,
      title: "Expert Guides",
      description: "Our local guides have years of experience and deep knowledge of Kenya's wildlife and culture."
    },
    {
      icon: Globe,
      title: "Sustainable Tourism",
      description: "We practice responsible tourism that benefits local communities and protects our environment."
    }
  ];

  const achievements = [
    { number: "15+", label: "Years of Experience" },
    { number: "2,000+", label: "Happy Travelers" },
    { number: "50+", label: "Tour Packages" },
    { number: "4.9", label: "Average Rating" }
  ];

  const team = [
    {
      name: "David Ongoro",
      role: "Founder & CEO",
      description: "With over 15 years in the tourism industry, David founded Ola Tour and Travels with a vision to showcase Kenya's beauty to the world."
    },
    {
      name: "Sarah Mwangi",
      role: "Safari Operations Manager",
      description: "Sarah manages our safari operations and ensures every wildlife experience exceeds expectations."
    },
    {
      name: "James Kimani",
      role: "Cultural Tours Director",
      description: "James specializes in cultural experiences and works closely with local communities to provide authentic encounters."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/20 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={teamPhoto} 
            alt="Ola Tour and Travels Team"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-accent/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            About Ola Tour and Travels
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Your trusted partner for unforgettable Kenya experiences. 
            We're passionate locals who love sharing our country's magic with the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-sunset text-lg px-8 py-4" asChild>
              <a 
                href="https://wa.me/254759190097?text=Hello%20Ola%20Tour%20and%20Travels%2C%20I%20would%20like%20to%20know%20more%20about%20your%20company."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Us
              </a>
            </Button>
            <Button variant="outline" className="btn-ghost-safari text-white border-white/30 hover:bg-white/10" asChild>
              <a href="tel:+254759190097">
                <Phone className="mr-2 h-5 w-5" />
                Call +254 759 190 097
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Founded in 2009, Ola Tour and Travels began as a small family business with a big dream: 
                  to share Kenya's incredible beauty with travelers from around the world. What started 
                  with a single safari vehicle has grown into one of Kenya's most trusted tour operators.
                </p>
                <p>
                  Our founder, David Ongoro, grew up in the shadow of Mount Kenya and spent his childhood 
                  exploring the country's national parks with his father, a wildlife ranger. This early 
                  exposure to Kenya's wilderness instilled in him a deep love for the land and its wildlife.
                </p>
                <p>
                  Today, we're proud to have welcomed over 2,000 travelers from more than 40 countries, 
                  each leaving with unforgettable memories and a piece of Kenya in their hearts.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <img
                src={happyTourists}
                alt="Happy tourists on safari"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <img
                src={wildlifeBigFive}
                alt="Kenya wildlife"
                className="w-full h-60 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-safari p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-lg">
                To provide authentic, safe, and unforgettable travel experiences that showcase 
                Kenya's natural beauty, rich culture, and warm hospitality while supporting 
                local communities and conservation efforts.
              </p>
            </Card>

            <Card className="card-safari p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground text-lg">
                To be Kenya's leading tour operator, recognized globally for excellence in 
                sustainable tourism, outstanding customer service, and our commitment to 
                preserving Kenya's natural heritage for future generations.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do at Ola Tour and Travels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="card-safari p-6 text-center hover-scale">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our passionate team of local experts is dedicated to making your Kenya experience extraordinary
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <img
              src={teamPhoto}
              alt="Ola Tour and Travels Team"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            
            <div className="space-y-8">
              {team.map((member, index) => (
                <Card key={index} className="card-safari p-6">
                  <CardContent className="p-0">
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Choose 
                <span className="text-gradient-safari block">Ola Tour and Travels?</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Local Expertise</h3>
                    <p className="text-muted-foreground">Born and raised in Kenya, we know the best hidden gems and authentic experiences.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Personalized Service</h3>
                    <p className="text-muted-foreground">Every tour is tailored to your interests, budget, and travel style.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">24/7 Support</h3>
                    <p className="text-muted-foreground">We're always available to assist you before, during, and after your trip.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Sustainable Tourism</h3>
                    <p className="text-muted-foreground">We support local communities and conservation efforts with every tour.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <img
              src={safariLodge}
              alt="Safari lodge experience"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Explore Kenya?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let us create an unforgettable journey that showcases the best of our beautiful country.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-sunset text-lg px-8 py-4" asChild>
              <a 
                href="https://wa.me/254759190097?text=Hello%20Ola%20Tour%20and%20Travels%2C%20I%20would%20like%20to%20plan%20a%20Kenya%20safari."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Planning
              </a>
            </Button>
            <Button variant="outline" className="btn-ghost-safari text-lg px-8 py-4">
              <Camera className="mr-2 h-5 w-5" />
              View Gallery
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;