import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { CateringPage } from './components/CateringPage';
import { RecipesPage } from './components/RecipesPage';
import { RecipePage } from './components/RecipePage';
import { ContactPage } from './components/ContactPage';
import { BookCateringModal } from './components/BookCateringModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleBookCatering = () => {
    setIsBookingModalOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onBookCatering={handleBookCatering} />;
      case 'about':
        return <AboutPage />;
      case 'catering':
        return <CateringPage onBookCatering={handleBookCatering} />;
      case 'recipes':
        return <RecipesPage onViewRecipe={() => handleNavigate('recipe')} />;
      case 'recipe':
        return <RecipePage onBack={() => handleNavigate('recipes')} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} onBookCatering={handleBookCatering} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onBookCatering={handleBookCatering}
      />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />

      <BookCateringModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
