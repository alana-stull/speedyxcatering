import { Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#06211A] text-white py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Logo and description */}
          <div>
            <div style={{ fontFamily: 'Figtree, sans-serif' }} className="font-bold text-xl mb-4">
              Speedy X Catering
            </div>
            <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#B6C3DC]">
              Fresh ingredients, thoughtful menus, and food made to bring people together.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontFamily: 'Figtree, sans-serif' }} className="font-semibold mb-4">Get in Touch</h3>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#B6C3DC]" />
              <a href="mailto:contact@speedyxcatering.com" style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#B6C3DC] hover:text-white transition-colors">
                contact@speedyxcatering.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#184023] pt-8 text-center">
          <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#B6C3DC]">
            © 2026 Speedy X Catering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
