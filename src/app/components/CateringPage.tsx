import { ImageWithFallback } from './figma/ImageWithFallback';
import { Check } from 'lucide-react';

interface CateringPageProps {
  onBookCatering: () => void;
}

export function CateringPage({ onBookCatering }: CateringPageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1766719628920-854680a92c22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGV2ZW50JTIwc2V0dXB8ZW58MXx8fHwxNzcyNzM5MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Catering event setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-[800px] mx-auto px-4">
          <h1 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2 }}>
            Catering for Every Occasion
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '2.5rem', fontWeight: 600 }} className="text-[#06211A] mb-6">
            Your Event, Your Vision, Our Expertise
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.125rem' }} className="text-[#6E7B8B] leading-relaxed">
            At Speedy X Catering, we understand that every event is unique. That's why we work closely with you to design a 
            menu that reflects your style, fits your budget, and delights your guests. Whether it's a wedding, corporate event, 
            birthday celebration, or private dinner party, we bring culinary excellence to every plate.
          </p>
        </div>
      </section>

      {/* Catering Packages Section */}
      <section className="py-20 bg-[#E3E4E6]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '2.5rem', fontWeight: 600 }} className="text-[#06211A] mb-4">
              Our Catering Packages
            </h2>
            <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.125rem' }} className="text-[#6E7B8B]">
              Choose the package that fits your needs, or let us create a custom experience just for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Signature Package */}
            <div className="bg-white p-10 rounded-2xl">
              <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.75rem', fontWeight: 600 }} className="text-[#06211A] mb-3">
                Signature Package
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B] mb-6">
                Perfect for smaller gatherings and intimate celebrations (10-30 guests)
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#5D7553] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A]">
                    Custom three-course menu designed around your preferences
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#5D7553] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A]">
                    Professional setup, service, and cleanup
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#5D7553] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A]">
                    Complimentary menu consultation with our chef
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#5D7553] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A]">
                    Choice of appetizer, main course, and dessert
                  </p>
                </div>
              </div>
              <button
                onClick={onBookCatering}
                style={{ fontFamily: 'Figtree, sans-serif' }}
                className="w-full bg-[#06211A] text-white px-6 py-3 rounded-lg hover:bg-[#184023] transition-colors"
              >
                Select Signature Package
              </button>
            </div>

            {/* Celebration Package */}
            <div className="bg-[#06211A] text-white p-10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#5D7553] text-white px-4 py-1 rounded-full">
                <span style={{ fontFamily: 'Figtree, sans-serif', fontSize: '0.875rem' }}>Most Popular</span>
              </div>
              <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.75rem', fontWeight: 600 }} className="mb-3">
                Celebration Package
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-white/80 mb-6">
                A full catering experience designed for larger events (30+ guests)
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#5D7553] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p style={{ fontFamily: 'Figtree, sans-serif' }}>
                    Luxurious five-course menu with wine pairings
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#5D7553] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p style={{ fontFamily: 'Figtree, sans-serif' }}>
                    Full-service catering staff for the duration of your event
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#5D7553] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p style={{ fontFamily: 'Figtree, sans-serif' }}>
                    Custom dessert options and presentation
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#5D7553] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p style={{ fontFamily: 'Figtree, sans-serif' }}>
                    Premium tableware and elegant presentation
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#5D7553] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p style={{ fontFamily: 'Figtree, sans-serif' }}>
                    Dedicated event coordinator from start to finish
                  </p>
                </div>
              </div>
              <button
                onClick={onBookCatering}
                style={{ fontFamily: 'Figtree, sans-serif' }}
                className="w-full bg-white text-[#06211A] px-6 py-3 rounded-lg hover:bg-[#E3E4E6] transition-colors"
              >
                Select Celebration Package
              </button>
            </div>
          </div>

          <div className="text-center">
            <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B] mb-4">
              Need something different? We can create a fully customized package for your event.
            </p>
            <button
              onClick={onBookCatering}
              style={{ fontFamily: 'Figtree, sans-serif' }}
              className="text-[#06211A] hover:text-[#184023] transition-colors underline"
            >
              Request a Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '2.5rem', fontWeight: 600 }} className="text-[#06211A] mb-4">
              Event Gallery
            </h2>
            <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.125rem' }} className="text-[#6E7B8B]">
              See some of the beautiful events we've had the privilege to cater
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-80 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769812343875-c40f9ec7f846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZXZlbnQlMjBjYXRlcmluZyUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyNzM5NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wedding event"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-80 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769638913840-2ca96d90e8a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGJ1ZmZldCUyMGNhdGVyaW5nfGVufDF8fHx8MTc3MjczOTcyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Corporate event"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-80 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768725844862-a251caa28600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGFydHklMjBjYXRlcmluZyUyMGZvb2R8ZW58MXx8fHwxNzcyNzM5NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Outdoor party"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-80 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1751651054936-db23f5d67160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGZvb2QlMjBzcHJlYWQlMjBlbGVnYW50fGVufDF8fHx8MTc3MjczOTM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Food spread"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-80 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766719628920-854680a92c22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGV2ZW50JTIwc2V0dXB8ZW58MXx8fHwxNzcyNzM5MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Event setup"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-80 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1670819916552-67698b1c86ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaGVmJTIwY29va2luZ3xlbnwxfHx8fDE3NzI3MTI1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chef preparation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#06211A] text-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '2.5rem', fontWeight: 600 }} className="mb-6">
            Ready to Start Planning Your Event?
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.125rem' }} className="text-white/80 mb-8">
            Let's create an unforgettable culinary experience together. Get in touch today to discuss your event.
          </p>
          <button
            onClick={onBookCatering}
            style={{ fontFamily: 'Figtree, sans-serif' }}
            className="bg-white text-[#06211A] px-8 py-4 rounded-lg hover:bg-[#E3E4E6] transition-colors"
          >
            Book Your Catering Event
          </button>
        </div>
      </section>
    </div>
  );
}
