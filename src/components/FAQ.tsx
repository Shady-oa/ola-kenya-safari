import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What's included in your safari packages?",
      answer: "Our safari packages include professional guide services, comfortable accommodation, all meals, park entrance fees, game drives, and transport in well-maintained 4WD vehicles. We also provide bottled water, first aid, and emergency communication equipment.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      question: "What's the best time to visit Kenya for safari?",
      answer: "Kenya offers excellent wildlife viewing year-round. The Great Migration occurs from July to October, making it peak season. The dry seasons (January-March and June-October) offer easier wildlife spotting, while the wet seasons provide lush landscapes and fewer crowds.",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      question: "Do I need any vaccinations for Kenya?",
      answer: "Yellow fever vaccination is required if coming from an endemic area. We recommend consulting your doctor about malaria prophylaxis, typhoid, hepatitis A&B, and ensuring routine vaccinations are up to date. Medical facilities are available in major cities.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      question: "What should I pack for a Kenya safari?",
      answer: "Pack lightweight, neutral-colored clothing, comfortable walking shoes, hat, sunglasses, sunscreen, binoculars, camera with extra batteries, insect repellent, and any personal medications. We provide a detailed packing list upon booking.",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      question: "How close can we get to the animals?",
      answer: "Kenya's national parks maintain safe viewing distances - typically 25 meters from most animals. Our experienced guides position vehicles for optimal wildlife photography and viewing while respecting animal behavior and park regulations for everyone's safety.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards (Visa, MasterCard), bank transfers, and mobile money (M-Pesa). A deposit is required to secure your booking, with the balance due before travel. We also offer flexible payment plans for longer tours.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about planning your perfect Kenya adventure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm border border-border/50 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-border/50">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our expert team is here to help you plan the perfect Kenya experience. Get in touch for personalized assistance.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/254759190097?text=Hello%20Ola%20Tour%20and%20Travels%2C%20I%20have%20some%20questions%20about%20your%20tours."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">W</span>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700">WhatsApp Chat</p>
                    <p className="text-sm text-green-600">Instant responses</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+254759190097"
                  className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-700">Call Us</p>
                    <p className="text-sm text-blue-600">+254 759 190 097</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;