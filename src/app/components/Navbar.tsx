import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onBookCatering: () => void;
}

export function Navbar({ currentPage, onNavigate, onBookCatering }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'catering', label: 'Catering' },
    { id: 'recipes', label: 'Recipes' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 bg-white z-50 border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex-shrink-0"
          >
            <div style={{ fontFamily: 'Figtree, sans-serif' }} className="font-bold text-[#06211A] text-xl">
              Speedy X Catering
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                style={{ fontFamily: 'Figtree, sans-serif' }}
                className={`transition-colors ${
                  currentPage === item.id
                    ? 'text-[#06211A]'
                    : 'text-[#6E7B8B] hover:text-[#06211A]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onBookCatering}
              style={{ fontFamily: 'Figtree, sans-serif' }}
              className="bg-[#06211A] text-white px-6 py-2.5 rounded-lg hover:bg-[#184023] transition-colors"
            >
              Book Catering
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#06211A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#06211A]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  style={{ fontFamily: 'Figtree, sans-serif' }}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-[#E3E4E6] text-[#06211A]'
                      : 'text-[#6E7B8B] hover:bg-[#E3E4E6] hover:text-[#06211A]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onBookCatering();
                  setMobileMenuOpen(false);
                }}
                style={{ fontFamily: 'Figtree, sans-serif' }}
                className="bg-[#06211A] text-white px-4 py-2.5 rounded-lg hover:bg-[#184023] transition-colors mt-2"
              >
                Book Catering
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
