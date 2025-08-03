import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "wildlife",
      title: "African Elephants",
      description: "Majestic elephants in their natural habitat"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "wildlife",
      title: "Zebras and Antelopes",
      description: "Grazing peacefully on the savanna"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "landscape",
      title: "Mount Kenya",
      description: "Breathtaking mountain views"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "landscape",
      title: "Coastal Paradise",
      description: "Pristine beaches of the Kenyan coast"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "culture",
      title: "Desert Expedition",
      description: "Camel safari in northern Kenya"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "landscape",
      title: "Waterfalls",
      description: "Hidden gems in Kenya's highlands"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "culture",
      title: "Local Flora",
      description: "Beautiful indigenous flowers"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "landscape",
      title: "Desert Landscapes",
      description: "The vast beauty of Kenya's arid regions"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "landscape",
      title: "Misty Mountains",
      description: "Early morning in the highlands"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'wildlife', name: 'Wildlife' },
    { id: 'landscape', name: 'Landscapes' },
    { id: 'culture', name: 'Culture' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-safari text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Kenya Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore the breathtaking beauty of Kenya through our curated collection of photographs
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className="btn-safari"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Image Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleImageClick(index)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white">
                        <h3 className="font-semibold text-lg">{image.title}</h3>
                        <p className="text-sm text-white/80">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl w-full p-0 bg-black border-none">
            {selectedImage !== null && (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </Button>
                
                <img
                  src={filteredImages[selectedImage]?.src}
                  alt={filteredImages[selectedImage]?.title}
                  className="w-full max-h-[80vh] object-contain"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">
                    {filteredImages[selectedImage]?.title}
                  </h3>
                  <p className="text-white/80">
                    {filteredImages[selectedImage]?.description}
                  </p>
                </div>
                
                {selectedImage > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={handlePrevious}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                )}
                
                {selectedImage < filteredImages.length - 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={handleNext}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;