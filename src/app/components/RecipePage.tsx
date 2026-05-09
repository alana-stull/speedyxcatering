import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, Users, ChefHat, Download, ArrowLeft } from 'lucide-react';

interface RecipePageProps {
  onBack: () => void;
}

export function RecipePage({ onBack }: RecipePageProps) {
  const relatedRecipes = [
    {
      id: 2,
      title: 'Argentinian Chimichurri Steak',
      image: 'https://images.unsplash.com/photo-1606516073760-d86ffd6056ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjBoZXJicyUyMHNhdWNlfGVufDF8fHx8MTc3MjczOTM3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      title: 'Mediterranean Stuffed Peppers',
      image: 'https://images.unsplash.com/photo-1738654402962-5ccd8b35f6af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVmZmVkJTIwcGVwcGVycyUyMG1lZGl0ZXJyYW5lYW58ZW58MXx8fHwxNzcyNzM5MzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 4,
      title: 'Creamy Tuscan Pasta',
      image: 'https://images.unsplash.com/photo-1762631178597-847861217da0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2glMjBpdGFsaWFuJTIwZm9vZHxlbnwxfHx8fDE3NzI3MDk2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div>
      {/* Back Button */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            style={{ fontFamily: 'Figtree, sans-serif' }}
            className="text-[#06211A] hover:text-[#184023] transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Recipes
          </button>
        </div>
      </section>

      {/* Recipe Hero */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '3rem', fontWeight: 700, lineHeight: 1.2 }} className="text-[#06211A] mb-4">
                Coconut Mango Chicken
              </h1>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.125rem' }} className="text-[#6E7B8B] mb-6">
                A tropical twist on classic chicken that combines creamy coconut milk with sweet mango 
                and aromatic spices. This dish brings the flavors of Southeast Asia to your dinner table.
              </p>
              
              {/* Recipe Meta */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#E3E4E6] rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#06211A]" />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '0.875rem' }} className="text-[#6E7B8B]">
                      Prep Time
                    </p>
                    <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A]">
                      45 min
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#E3E4E6] rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#06211A]" />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '0.875rem' }} className="text-[#6E7B8B]">
                      Serves
                    </p>
                    <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A]">
                      4 people
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#E3E4E6] rounded-full flex items-center justify-center">
                    <ChefHat className="w-5 h-5 text-[#06211A]" />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '0.875rem' }} className="text-[#6E7B8B]">
                      Difficulty
                    </p>
                    <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A]">
                      Medium
                    </p>
                  </div>
                </div>
              </div>

              <button
                style={{ fontFamily: 'Figtree, sans-serif' }}
                className="bg-[#06211A] text-white px-6 py-3 rounded-lg hover:bg-[#184023] transition-colors inline-flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Recipe PDF
              </button>
            </div>

            <div className="h-[500px] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1715941873444-e8ec67753c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwbWFuZ28lMjBjaGlja2VuJTIwZGlzaHxlbnwxfHx8fDE3NzI3MzkzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coconut Mango Chicken"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients & Instructions */}
      <section className="py-12 bg-[#E3E4E6]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Ingredients */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-2xl sticky top-24">
                <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.75rem', fontWeight: 600 }} className="text-[#06211A] mb-6">
                  Ingredients
                </h2>
                <ul className="space-y-3">
                  <li style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] flex items-start">
                    <span className="text-[#5D7553] mr-3">•</span>
                    4 boneless chicken breasts
                  </li>
                  <li style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] flex items-start">
                    <span className="text-[#5D7553] mr-3">•</span>
                    1 can (14 oz) coconut milk
                  </li>
                  <li style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] flex items-start">
                    <span className="text-[#5D7553] mr-3">•</span>
                    2 ripe mangoes, diced
                  </li>
                  <li style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] flex items-start">
                    <span className="text-[#5D7553] mr-3">•</span>
                    3 cloves garlic, minced
                  </li>
                  <li style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] flex items-start">
                    <span className="text-[#5D7553] mr-3">•</span>
                    1 tbsp fresh ginger, grated
                  </li>
                  <li style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] flex items-start">
                    <span className="text-[#5D7553] mr-3">•</span>
                    2 tbsp curry powder
                  </li>
                  <li style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] flex items-start">
                    <span className="text-[#5D7553] mr-3">•</span>
                    1 red bell pepper, sliced
                  </li>
                  <li style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] flex items-start">
                    <span className="text-[#5D7553] mr-3">•</span>
                    2 tbsp olive oil
                  </li>
                  <li style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] flex items-start">
                    <span className="text-[#5D7553] mr-3">•</span>
                    Fresh cilantro for garnish
                  </li>
                  <li style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] flex items-start">
                    <span className="text-[#5D7553] mr-3">•</span>
                    Salt and pepper to taste
                  </li>
                </ul>
              </div>
            </div>

            {/* Instructions */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl">
                <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.75rem', fontWeight: 600 }} className="text-[#06211A] mb-6">
                  Instructions
                </h2>
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-[#06211A] text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span style={{ fontFamily: 'Figtree, sans-serif' }}>1</span>
                    </div>
                    <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] pt-1">
                      Season the chicken breasts with salt, pepper, and 1 tablespoon of curry powder. 
                      Let marinate for 15 minutes at room temperature.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-[#06211A] text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span style={{ fontFamily: 'Figtree, sans-serif' }}>2</span>
                    </div>
                    <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] pt-1">
                      Heat olive oil in a large skillet over medium-high heat. Add the chicken breasts 
                      and cook for 5-6 minutes on each side until golden brown. Remove and set aside.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-[#06211A] text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span style={{ fontFamily: 'Figtree, sans-serif' }}>3</span>
                    </div>
                    <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] pt-1">
                      In the same skillet, add garlic and ginger. Sauté for 1-2 minutes until fragrant. 
                      Add the red bell pepper and cook for another 2 minutes.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-[#06211A] text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span style={{ fontFamily: 'Figtree, sans-serif' }}>4</span>
                    </div>
                    <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] pt-1">
                      Pour in the coconut milk and add the remaining curry powder. Stir well and bring 
                      to a gentle simmer.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-[#06211A] text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span style={{ fontFamily: 'Figtree, sans-serif' }}>5</span>
                    </div>
                    <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] pt-1">
                      Return the chicken to the skillet and add half of the diced mango. Cover and 
                      simmer for 15 minutes until the chicken is cooked through.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-[#06211A] text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span style={{ fontFamily: 'Figtree, sans-serif' }}>6</span>
                    </div>
                    <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A] pt-1">
                      Remove from heat and stir in the remaining fresh mango. Garnish with cilantro 
                      and serve immediately over jasmine rice or with naan bread.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Recipes */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '2.5rem', fontWeight: 600 }} className="text-[#06211A] mb-12">
            Related Recipes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.25rem', fontWeight: 500 }} className="text-[#06211A]">
                    {recipe.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
