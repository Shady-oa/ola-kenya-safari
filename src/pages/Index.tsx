import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TourPackages from '@/components/TourPackages';
import BookingSection from '@/components/BookingSection';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <TourPackages />
        <BookingSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
