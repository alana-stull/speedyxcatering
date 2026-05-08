import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onBookCatering: () => void;
}

export function HomePage({ onNavigate, onBookCatering }: HomePageProps) {
  const recipes = [
    {
      id: 1,
      title: 'Coconut Mango Chicken',
      description: 'A tropical twist on classic chicken with coconut milk and fresh mango.',
      image: 'https://images.unsplash.com/photo-1715941873444-e8ec67753c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwbWFuZ28lMjBjaGlja2VuJTIwZGlzaHxlbnwxfHx8fDE3NzI3MzkzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      title: 'Argentinian Chimichurri',
      description: 'Vibrant herb sauce perfect for grilled meats and vegetables.',
      image: 'https://images.unsplash.com/photo-1606516073760-d86ffd6056ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjBoZXJicyUyMHNhdWNlfGVufDF8fHx8MTc3MjczOTM3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      title: 'Mediterranean Stuffed Peppers',
      description: 'Colorful bell peppers filled with quinoa, feta, and sun-dried tomatoes.',
      image: 'https://images.unsplash.com/photo-1738654402962-5ccd8b35f6af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVmZmVkJTIwcGVwcGVycyUyMG1lZGl0ZXJyYW5lYW58ZW58MXx8fHwxNzcyNzM5MzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1751651054936-db23f5d67160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGZvb2QlMjBzcHJlYWQlMjBlbGVnYW50fGVufDF8fHx8MTc3MjczOTM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Catering spread"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-[800px] mx-auto px-4">
          <h1 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2 }} className="mb-6">
            Flavor That Brings Your Event to Life
          </h1>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.25rem' }} className="mb-8 text-white/90">
            Fresh ingredients, thoughtful menus, and food made to bring people together.
          </p>
          <button
            onClick={onBookCatering}
            style={{ fontFamily: 'Figtree, sans-serif' }}
            className="bg-[#06211A] text-white px-8 py-4 rounded-lg hover:bg-[#184023] transition-colors inline-flex items-center gap-2"
          >
            Book Catering
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '2.5rem', fontWeight: 600 }} className="text-[#06211A] mb-4">
              Featured Recipes
            </h2>
            <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.125rem' }} className="text-[#6E7B8B]">
              From our kitchen to yours — a few of our favorite dishes to try at home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <div 
                key={recipe.id} 
                onClick={() => onNavigate('recipe')}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all cursor-pointer"
              >
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.5rem', fontWeight: 500 }} className="text-[#06211A] mb-3">
                    {recipe.title}
                  </h3>
                  <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B] mb-4">
                    {recipe.description}
                  </p>
                  <div
                    style={{ fontFamily: 'Figtree, sans-serif' }}
                    className="text-[#06211A] inline-flex items-center gap-2"
                  >
                    View Recipe
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-[#E3E4E6]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '2.5rem', fontWeight: 600 }} className="text-[#06211A] mb-4">
              What We Offer
            </h2>
            <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.125rem' }} className="text-[#6E7B8B]">
              A Taste of What We Do Best
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl">
              <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.5rem', fontWeight: 500 }} className="text-[#06211A] mb-4">
                Our Recipes
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B]">
                Bring our kitchen to yours with a collection of flavorful, easy-to-follow recipes. Each dish is crafted to inspire home cooks and help you recreate your favorites.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.5rem', fontWeight: 500 }} className="text-[#06211A] mb-4">
                Catering & Events
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B]">
                From intimate dinners to large celebrations, we create custom menus designed around your event, your tastes, and your guests.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.5rem', fontWeight: 500 }} className="text-[#06211A] mb-4">
                Private Chef & Classes
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B]">
                Enjoy a personalized dining experience or learn new skills with hands-on cooking sessions designed for individuals or small groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '0.875rem' }} className="text-[#5D7553] uppercase tracking-wider mb-4">
                About Speedy X Catering
              </p>
              <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '2.5rem', fontWeight: 600 }} className="text-[#06211A] mb-6">
                We Provide Inspired Menus and Memorable Experiences
              </h2>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.125rem' }} className="text-[#6E7B8B] leading-relaxed">
                At Speedy X Catering, we believe every meal should feel special. We focus on fresh ingredients, thoughtful recipes, and creating food that brings people together. Whether you're planning a celebration or simply looking for new flavors to try, our goal is to make every bite memorable.
              </p>
            </div>
            <div className="h-[500px] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1670819916552-67698b1c86ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaGVmJTIwY29va2luZ3xlbnwxfHx8fDE3NzI3MTI1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chef cooking"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catering Packages Section */}
      <section className="py-20 bg-[#E3E4E6]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '2.5rem', fontWeight: 600 }} className="text-[#06211A] mb-4">
              Catering Packages
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-10 rounded-2xl">
              <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.75rem', fontWeight: 600 }} className="text-[#06211A] mb-3">
                Signature Package
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B] mb-6">
                Perfect for smaller gatherings and intimate celebrations.
              </p>
              <ul className="space-y-3">
                <li style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] flex items-start">
                  <span className="text-[#5D7553] mr-2">•</span>
                  Custom three-course menu
                </li>
                <li style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] flex items-start">
                  <span className="text-[#5D7553] mr-2">•</span>
                  Setup and service
                </li>
                <li style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] flex items-start">
                  <span className="text-[#5D7553] mr-2">•</span>
                  Menu consultation
                </li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-2xl">
              <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.75rem', fontWeight: 600 }} className="text-[#06211A] mb-3">
                Celebration Package
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B] mb-6">
                A full catering experience designed for larger events.
              </p>
              <ul className="space-y-3">
                <li style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] flex items-start">
                  <span className="text-[#5D7553] mr-2">•</span>
                  Five-course menu
                </li>
                <li style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] flex items-start">
                  <span className="text-[#5D7553] mr-2">•</span>
                  Full-service catering
                </li>
                <li style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] flex items-start">
                  <span className="text-[#5D7553] mr-2">•</span>
                  Custom dessert options
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={onBookCatering}
              style={{ fontFamily: 'Figtree, sans-serif' }}
              className="bg-[#06211A] text-white px-8 py-4 rounded-lg hover:bg-[#184023] transition-colors"
            >
              Book Your Catering
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
