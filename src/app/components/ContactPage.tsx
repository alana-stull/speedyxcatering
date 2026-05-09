import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-[#06211A] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2 }} className="mb-6">
            Get in Touch
          </h1>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.25rem' }} className="text-white/90 max-w-[700px] mx-auto">
            Have questions about our catering services or want to discuss your event? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '2rem', fontWeight: 600 }} className="text-[#06211A] mb-6">
                Send Us a Message
              </h2>
              <form action="mailto:speedycatering@yahoo.com" method="POST" encType="text/plain" className="space-y-6">
                <div>
                  <label style={{ fontFamily: 'Figtree, sans-serif' }} className="block text-[#06211A] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    style={{ fontFamily: 'Figtree, sans-serif' }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06211A] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'Figtree, sans-serif' }} className="block text-[#06211A] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    style={{ fontFamily: 'Figtree, sans-serif' }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06211A] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'Figtree, sans-serif' }} className="block text-[#06211A] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    style={{ fontFamily: 'Figtree, sans-serif' }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06211A] focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'Figtree, sans-serif' }} className="block text-[#06211A] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    style={{ fontFamily: 'Figtree, sans-serif' }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06211A] focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'Figtree, sans-serif' }} className="block text-[#06211A] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    name="message"
                    style={{ fontFamily: 'Figtree, sans-serif' }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06211A] focus:border-transparent resize-none"
                    placeholder="Tell us about your event or ask us anything..."
                  />
                </div>
                <button
                  type="submit"
                  style={{ fontFamily: 'Figtree, sans-serif' }}
                  className="w-full bg-[#06211A] text-white px-6 py-4 rounded-lg hover:bg-[#184023] transition-colors inline-flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '2rem', fontWeight: 600 }} className="text-[#06211A] mb-6">
                Contact Information
              </h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E3E4E6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#06211A]" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.125rem', fontWeight: 500 }} className="text-[#06211A] mb-2">
                      Email
                    </h3>
                    <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B]">
                      speedycatering@yahoo.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E3E4E6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#06211A]" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.125rem', fontWeight: 500 }} className="text-[#06211A] mb-2">
                      Phone
                    </h3>
                    <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B]">
                      Main: (555) 123-4567
                    </p>
                    <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B]">
                      Catering: (555) 987-6543
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E3E4E6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#06211A]" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.125rem', fontWeight: 500 }} className="text-[#06211A] mb-2">
                      Location
                    </h3>
                    <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B]">
                      123 Culinary Avenue
                    </p>
                    <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B]">
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E3E4E6] p-8 rounded-2xl">
                <h3 style={{ fontFamily: 'Figtree, sans-serif', fontSize: '1.5rem', fontWeight: 500 }} className="text-[#06211A] mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A]">Monday - Friday</span>
                    <span style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B]">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A]">Saturday</span>
                    <span style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B]">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#06211A]">Sunday</span>
                    <span style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B]">Closed</span>
                  </div>
                </div>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '0.875rem' }} className="text-[#6E7B8B] mt-4">
                  *Event catering available 7 days a week
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-0 bg-white">
        <div className="w-full h-96 bg-[#E3E4E6] flex items-center justify-center">
          <p style={{ fontFamily: 'Figtree, sans-serif' }} className="text-[#6E7B8B]">
            Map will be integrated here
          </p>
        </div>
      </section>
    </div>
  );
}
