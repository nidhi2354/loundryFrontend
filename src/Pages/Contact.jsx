import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function Contact() {
  return (
    <section className="bg-gradient-to-b from-sky-50 via-white to-sky-50 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-sky-950 tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Have questions about our laundry services? We'd love to hear from
            you. Send us a message and our team will respond quickly.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-3xl shadow-sm border border-sky-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-950 mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-3 rounded-xl">
                  <Phone className="text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sky-950">Phone Number</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-3 rounded-xl">
                  <Mail className="text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sky-950">Email Address</h3>
                  <p className="text-gray-600 text-sm md:text-base break-all">
                    support@laundryhub.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-3 rounded-xl">
                  <MapPin className="text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sky-950">Location</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Gomti Nagar, Lucknow, Uttar Pradesh
                  </p>
                </div>
              </div>

              {/* Timing */}
              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-3 rounded-xl">
                  <Clock className="text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sky-950">Working Hours</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Mon - Sat : 8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-sm border border-sky-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-950 mb-8">
              Send Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 md:py-4 rounded-xl border border-sky-200
                focus:outline-none focus:ring-2 focus:ring-sky-400
                text-sm md:text-base transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 md:py-4 rounded-xl border border-sky-200
                focus:outline-none focus:ring-2 focus:ring-sky-400
                text-sm md:text-base transition"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-3 md:py-4 rounded-xl border border-sky-200
                focus:outline-none focus:ring-2 focus:ring-sky-400
                text-sm md:text-base transition"
              />

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 md:py-4 rounded-xl border border-sky-200
                focus:outline-none focus:ring-2 focus:ring-sky-400
                text-sm md:text-base transition resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-sky-600 hover:bg-sky-700
                text-white py-3 md:py-4 rounded-xl font-semibold
                text-base md:text-lg transition-all duration-300
                shadow-md hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-sky-600 to-cyan-500 text-white rounded-3xl p-8 md:p-14 text-center shadow-xl">
          <h2 className="text-2xl md:text-4xl font-black mb-3">
            Fast & Reliable Laundry Service
          </h2>

          <p className="mb-6 text-sm md:text-lg opacity-95">
            Free Pickup & Delivery Available Across the City.
          </p>

          <button
            className="bg-white text-sky-600 px-6 md:px-8 py-3 rounded-full font-bold
            hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Book Service Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
