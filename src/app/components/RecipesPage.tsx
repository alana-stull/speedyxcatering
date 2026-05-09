import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface RecipesPageProps {
  onViewRecipe: (recipeId: number) => void;
}

export function RecipesPage({ onViewRecipe }: RecipesPageProps) {
  const recipes = [
    {
      id: 1,
      title: 'Coconut Mango Chicken',
      description: 'A tropical twist on classic chicken with coconut milk and fresh mango.',
      image: 'https://images.unsplash.com/photo-1715941873444-e8ec67753c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwbWFuZ28lMjBjaGlja2VuJTIwZGlzaHxlbnwxfHx8fDE3NzI3MzkzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      time: '45 min',
      difficulty: 'Medium',
    },
    {
      id: 2,
      title: 'Argentinian Chimichurri Steak',
      description: 'Perfectly grilled steak topped with vibrant herb sauce.',
      image: 'https://images.unsplash.com/photo-1606516073760-d86ffd6056ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjBoZXJicyUyMHNhdWNlfGVufDF8fHx8MTc3MjczOTM3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      time: '30 min',
      difficulty: 'Easy',
    },
    {
      id: 3,
      title: 'Mediterranean Stuffed Peppers',
      description: 'Colorful bell peppers filled with quinoa, feta, and sun-dried tomatoes.',
      image: 'https://images.unsplash.com/photo-1738654402962-5ccd8b35f6af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVmZmVkJTIwcGVwcGVycyUyMG1lZGl0ZXJyYW5lYW58ZW58MXx8fHwxNzcyNzM5MzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      time: '60 min',
      difficulty: 'Medium',
    },
    {
      id: 4,
      title: 'Creamy Tuscan Pasta',
      description: 'Rich and indulgent pasta with sun-dried tomatoes and spinach.',
      image: 'https://images.unsplash.com/photo-1762631178597-847861217da0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2glMjBpdGFsaWFuJTIwZm9vZHxlbnwxfHx8fDE3NzI3MDk2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      time: '25 min',
      difficulty: 'Easy',
    },
    {
      id: 5,
      title: 'Herb-Crusted Salmon',
      description: 'Tender salmon fillet with a crispy herb crust and lemon butter sauce.',
      image: 'https://images.unsplash.com/photo-1675870793073-70306dbc541f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBkaXNoJTIwcGxhdGVkJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzI3Mzk3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      time: '35 min',
      difficulty: 'Medium',
    },
    {
      id: 6,
      title: 'Street-Style Tacos',
      description: 'Authentic Mexican tacos with slow-cooked meat and fresh toppings.',
      image: 'https://images.unsplash.com/photo-1722875183792-bebac14859b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMG1leGljYW4lMjBmb29kJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcyNjI3MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      time: '50 min',
      difficulty: 'Medium',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-[#06211A] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2 }} className="mb-6">
            Recipes
          </h1>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.25rem' }} className="text-white/90 max-w-[700px] mx-auto">
            Explore our collection of dishes inspired by the flavors we love to cook and share. 
            Each recipe is tested, refined, and ready for your kitchen.
          </p>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <div 
                key={recipe.id} 
                onClick={() => onViewRecipe(recipe.id)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span style={{ fontFamily: 'Figtree, sans-serif', fontSize: '0.875rem' }} className="text-[#5D7553]">
                      {recipe.time}
                    </span>
                    <span className="w-1 h-1 bg-[#5D7553] rounded-full" />
                    <span style={{ fontFamily: 'Figtree, sans-serif', fontSize: '0.875rem' }} className="text-[#5D7553]">
                      {recipe.difficulty}
                    </span>
                  </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-[#E3E4E6]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '2.5rem', fontWeight: 600 }} className="text-[#06211A] mb-6">
            Want More Recipes?
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.125rem' }} className="text-[#6E7B8B] mb-8">
            Join our cooking classes to learn these recipes hands-on with our professional chefs, 
            or subscribe to our newsletter for new recipes delivered monthly.
          </p>
          <button
            style={{ fontFamily: 'Figtree, sans-serif' }}
            className="bg-[#06211A] text-white px-8 py-4 rounded-lg hover:bg-[#184023] transition-colors"
          >
            Join Our Cooking Classes
          </button>
        </div>
      </section>
    </div>
  );
}
