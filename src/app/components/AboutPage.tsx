import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Users, Award } from 'lucide-react';

export function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1767785990437-dfe1fe516fe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwdGVhbSUyMGtpdGNoZW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNzM5NzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Chef team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-[800px] mx-auto px-4">
          <h1 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2 }}>
            Our Story
          </h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto text-center">
            <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '0.875rem' }} className="text-[#5D7553] uppercase tracking-wider mb-4">
              Our Mission
            </p>
            <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '2.5rem', fontWeight: 600 }} className="text-[#06211A] mb-6">
              Creating Food That Brings People Together
            </h2>
            <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.125rem' }} className="text-[#6E7B8B] leading-relaxed">
              At Speedy X Catering, we believe that food is more than just sustenance—it's an experience. 
              Every dish we create tells a story, celebrates a moment, and brings people closer together. 
              Our journey began with a simple passion for cooking and has grown into a commitment to 
              delivering exceptional culinary experiences for every occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#E3E4E6]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '2.5rem', fontWeight: 600 }} className="text-[#06211A] mb-4">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-[#06211A] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.5rem', fontWeight: 500 }} className="text-[#06211A] mb-4">
                Passion for Quality
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B]">
                We source only the freshest ingredients and craft each dish with care and attention to detail.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-[#06211A] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.5rem', fontWeight: 500 }} className="text-[#06211A] mb-4">
                Community Focus
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B]">
                Building connections through food is at the heart of everything we do, from catering to cooking classes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-[#06211A] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.5rem', fontWeight: 500 }} className="text-[#06211A] mb-4">
                Excellence in Service
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B]">
                From consultation to execution, we ensure every event is handled with professionalism and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[500px] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1665088127661-83aeff6104c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGluZ3JlZGllbnRzJTIwdmVnZXRhYmxlcyUyMGNvb2tpbmd8ZW58MXx8fHwxNzcyNjU5NTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fresh ingredients"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '0.875rem' }} className="text-[#5D7553] uppercase tracking-wider mb-4">
                Our Culinary Philosophy
              </p>
              <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '2.5rem', fontWeight: 600 }} className="text-[#06211A] mb-6">
                Fresh, Thoughtful, Inspired
              </h2>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.125rem' }} className="text-[#6E7B8B] leading-relaxed mb-4">
                Our approach to catering is simple: start with the best ingredients, respect their natural flavors, 
                and let creativity guide the way. We draw inspiration from global cuisines while honoring traditional 
                cooking techniques.
              </p>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.125rem' }} className="text-[#6E7B8B] leading-relaxed">
                Whether we're preparing a five-course dinner or teaching a cooking class, we believe that food should 
                be accessible, delicious, and made with love. That's the Speedy X Catering promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="py-20 bg-[#E3E4E6]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '2.5rem', fontWeight: 600 }} className="text-[#06211A] mb-4">
              Moments We've Created
            </h2>
            <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.125rem' }} className="text-[#6E7B8B]">
              A glimpse into the events and experiences we've had the pleasure of catering
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
          </div>
        </div>
      </section>
    </div>
  );
}
