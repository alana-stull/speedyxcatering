import { X, Calendar, Users, Package } from 'lucide-react';

interface BookCateringModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookCateringModal({ isOpen, onClose }: BookCateringModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.75rem', fontWeight: 600 }} className="text-[#06211A]">
            Book Your Catering Event
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg hover:bg-[#E3E4E6] flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-[#06211A]" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          <form className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.25rem', fontWeight: 500 }} className="text-[#06211A] mb-4">
                Your Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label style={{ fontFamily: 'Figtree, sans-serif' }} className="block text-[#06211A] mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    style={{ fontFamily: 'Figtree, sans-serif' }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06211A] focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'Figtree, sans-serif' }} className="block text-[#06211A] mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    style={{ fontFamily: 'Figtree, sans-serif' }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06211A] focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label style={{ fontFamily: 'Figtree, sans-serif' }} className="block text-[#06211A] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    style={{ fontFamily: 'Figtree, sans-serif' }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06211A] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'Figtree, sans-serif' }} className="block text-[#06211A] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    style={{ fontFamily: 'Figtree, sans-serif' }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06211A] focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div>
              <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.25rem', fontWeight: 500 }} className="text-[#06211A] mb-4">
                Event Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label style={{ fontFamily: 'Figtree, sans-serif' }} className="block text-[#06211A] mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    style={{ fontFamily: 'Figtree, sans-serif' }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06211A] focus:border-transparent"
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'Figtree, sans-serif' }} className="block text-[#06211A] mb-2">
                    Event Time
                  </label>
                  <input
                    type="time"
                    style={{ fontFamily: 'Figtree, sans-serif' }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06211A] focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label style={{ fontFamily: 'Figtree, sans-serif' }} className="block text-[#06211A] mb-2">
                    <Users className="w-4 h-4 inline mr-1" />
                    Number of Guests *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    style={{ fontFamily: 'Figtree, sans-serif' }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06211A] focus:border-transparent"
                    placeholder="50"
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'Figtree, sans-serif' }} className="block text-[#06211A] mb-2">
                    Event Type
                  </label>
                  <select
                    style={{ fontFamily: 'Figtree, sans-serif' }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06211A] focus:border-transparent"
                  >
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Birthday Party</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label style={{ fontFamily: 'Figtree, sans-serif' }} className="block text-[#06211A] mb-2">
                  Event Location
                </label>
                <input
                  type="text"
                  style={{ fontFamily: 'Figtree, sans-serif' }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06211A] focus:border-transparent"
                  placeholder="Venue name and address"
                />
              </div>
            </div>

            {/* Package Selection */}
            <div>
              <label style={{ fontFamily: 'Figtree, sans-serif' }} className="block text-[#06211A] mb-2">
                <Package className="w-4 h-4 inline mr-1" />
                Select Package *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="relative flex items-start p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#06211A] transition-colors">
                  <input
                    type="radio"
                    name="package"
                    value="signature"
                    className="mt-1"
                  />
                  <div className="ml-3">
                    <span style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 500 }} className="text-[#06211A] block">
                      Signature Package
                    </span>
                    <span style={{ fontFamily: 'Figtree, sans-serif', fontSize: '0.875rem' }} className="text-[#6E7B8B]">
                      Three-course menu for 10-30 guests
                    </span>
                  </div>
                </label>
                <label className="relative flex items-start p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#06211A] transition-colors">
                  <input
                    type="radio"
                    name="package"
                    value="celebration"
                    className="mt-1"
                  />
                  <div className="ml-3">
                    <span style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 500 }} className="text-[#06211A] block">
                      Celebration Package
                    </span>
                    <span style={{ fontFamily: 'Figtree, sans-serif', fontSize: '0.875rem' }} className="text-[#6E7B8B]">
                      Five-course menu for 30+ guests
                    </span>
                  </div>
                </label>
              </div>
              <label className="relative flex items-start p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#06211A] transition-colors mt-4">
                <input
                  type="radio"
                  name="package"
                  value="custom"
                  className="mt-1"
                />
                <div className="ml-3">
                  <span style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 500 }} className="text-[#06211A] block">
                    Custom Package
                  </span>
                  <span style={{ fontFamily: 'Figtree, sans-serif', fontSize: '0.875rem' }} className="text-[#6E7B8B]">
                    Let's create a personalized experience for your event
                  </span>
                </div>
              </label>
            </div>

            {/* Additional Details */}
            <div>
              <label style={{ fontFamily: 'Figtree, sans-serif' }} className="block text-[#06211A] mb-2">
                Additional Details or Dietary Requirements
              </label>
              <textarea
                rows={4}
                style={{ fontFamily: 'Figtree, sans-serif' }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06211A] focus:border-transparent resize-none"
                placeholder="Tell us about any dietary restrictions, preferences, or special requests..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                style={{ fontFamily: 'Figtree, sans-serif' }}
                className="flex-1 px-6 py-4 border-2 border-gray-300 text-[#06211A] rounded-lg hover:bg-[#E3E4E6] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{ fontFamily: 'Figtree, sans-serif' }}
                className="flex-1 bg-[#06211A] text-white px-6 py-4 rounded-lg hover:bg-[#184023] transition-colors"
              >
                Submit Booking Request
              </button>
            </div>
          </form>
          
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '0.875rem' }} className="text-[#6E7B8B] text-center mt-6">
            We'll review your request and get back to you within 24 hours to confirm availability and discuss your event details.
          </p>
        </div>
      </div>
    </div>
  );
}
