import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { 
  Calendar as CalendarIcon, 
  Users, 
  MapPin, 
  Phone,
  MessageCircle,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    travelers: '',
    duration: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const steps = [
    { number: 1, title: 'Choose Destination', icon: MapPin },
    { number: 2, title: 'Select Dates', icon: CalendarIcon },
    { number: 3, title: 'Group Details', icon: Users },
    { number: 4, title: 'Contact Info', icon: Phone }
  ];

  const destinations = [
    'Maasai Mara Safari',
    'Amboseli National Park',
    'Diani Beach Paradise',
    'Mount Kenya Expedition',
    'Samburu Game Reserve',
    'Custom Safari Package'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Info */}
          <div>
            <div className="mb-8">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                Start Your Kenya
                <span className="text-gradient-sunset block">Adventure Today</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Ready to experience the magic of Kenya? Our expert team will craft 
                the perfect safari adventure tailored to your dreams and budget.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-success" />
                <span className="text-foreground">Instant booking confirmation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-success" />
                <span className="text-foreground">Expert local guides included</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-success" />
                <span className="text-foreground">24/7 support during your trip</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-success" />
                <span className="text-foreground">Flexible cancellation policy</span>
              </div>
            </div>

            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-sunset">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
              <Button variant="outline" className="btn-ghost-safari">
                <Phone className="mr-2 h-5 w-5" />
                Call +254 700 123 456
              </Button>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <Card className="card-safari p-0">
            <CardHeader className="bg-gradient-safari text-white rounded-t-xl">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Sparkles className="h-6 w-6" />
                Book Your Safari Experience
              </CardTitle>
              
              {/* Progress Steps */}
              <div className="flex justify-between mt-6">
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.number}
                      className={`flex items-center gap-2 ${
                        currentStep >= step.number ? 'text-white' : 'text-white/50'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                          currentStep >= step.number
                            ? 'bg-white text-primary border-white'
                            : 'border-white/50'
                        }`}
                      >
                        {currentStep > step.number ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <span className="text-sm font-medium">{step.number}</span>
                        )}
                      </div>
                      <span className="hidden sm:block text-sm">{step.title}</span>
                    </div>
                  );
                })}
              </div>
            </CardHeader>

            <CardContent className="p-6">
              {/* Step 1: Destination */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="destination">Choose Your Destination</Label>
                    <Select value={formData.destination} onValueChange={(value) => handleInputChange('destination', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {destinations.map((dest) => (
                          <SelectItem key={dest} value={dest}>{dest}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="duration">Trip Duration</Label>
                    <Select value={formData.duration} onValueChange={(value) => handleInputChange('duration', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-days">3 Days</SelectItem>
                        <SelectItem value="5-days">5 Days</SelectItem>
                        <SelectItem value="7-days">7 Days</SelectItem>
                        <SelectItem value="10-days">10 Days</SelectItem>
                        <SelectItem value="14-days">14 Days</SelectItem>
                        <SelectItem value="custom">Custom Duration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 2: Dates */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label>Select Your Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              )}

              {/* Step 3: Group Details */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="travelers">Number of Travelers</Label>
                    <Select value={formData.travelers} onValueChange={(value) => handleInputChange('travelers', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select group size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Person</SelectItem>
                        <SelectItem value="2">2 People</SelectItem>
                        <SelectItem value="3-4">3-4 People</SelectItem>
                        <SelectItem value="5-8">5-8 People</SelectItem>
                        <SelectItem value="9+">9+ People</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Info */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
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
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-6">
                {currentStep > 1 && (
                  <Button variant="outline" onClick={prevStep} className="flex-1">
                    Previous
                  </Button>
                )}
                {currentStep < 4 ? (
                  <Button onClick={nextStep} className="btn-safari flex-1">
                    Next Step
                  </Button>
                ) : (
                  <Button className="btn-sunset flex-1">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Complete Booking
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;