import React from "react";
import { ShieldCheck, Truck, Clock, Sparkles } from "lucide-react";

function About() {
  return (
    <section className="bg-gradient-to-b from-sky-50 via-white to-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
              About Our Laundry Service
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] text-gray-900">
              Fresh Clothes,
              <span className="block text-sky-500 mt-2">Hassle-Free Life</span>
            </h1>

            <div className="w-24 h-1 bg-sky-500 rounded-full mt-8"></div>

            <p className="mt-8 text-lg leading-8 text-gray-600 max-w-xl">
              We provide premium laundry and dry-cleaning services with fast
              pickup and delivery. Our mission is to save your valuable time
              while keeping your clothes fresh, clean, and perfectly cared for.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              Using advanced cleaning technology and high-quality products, we
              ensure every garment receives the care it deserves, delivering
              convenience and reliability directly to your doorstep.
            </p>

            <button className="mt-10 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-sky-200 transition-all duration-300 hover:-translate-y-1">
              Explore Services
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c"
              alt="Laundry Service"
              className="w-full h-[320px] md:h-[450px] lg:h-[550px] object-cover rounded-[32px] shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl">
              <h4 className="text-3xl font-bold text-sky-600">10K+</h4>
              <p className="text-gray-600 text-sm font-medium">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-32">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900">
            Why Choose Us
          </h2>

          <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto text-lg">
            Experience premium garment care with reliable service, modern
            cleaning technology, and exceptional customer support.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            <div className="bg-white p-8 rounded-3xl border border-sky-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group">
              <ShieldCheck
                className="text-sky-500 mb-6 group-hover:scale-110 transition duration-500"
                size={50}
              />

              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Quality Care
              </h3>

              <p className="text-gray-600 leading-7">
                Professional cleaning methods tailored for every fabric type.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-sky-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group">
              <Truck
                className="text-sky-500 mb-6 group-hover:scale-110 transition duration-500"
                size={50}
              />

              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Free Pickup
              </h3>

              <p className="text-gray-600 leading-7">
                Convenient pickup and delivery services right at your doorstep.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-sky-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group">
              <Clock
                className="text-sky-500 mb-6 group-hover:scale-110 transition duration-500"
                size={50}
              />

              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Quick Service
              </h3>

              <p className="text-gray-600 leading-7">
                Fast turnaround times without compromising quality standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-sky-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group">
              <Sparkles
                className="text-sky-500 mb-6 group-hover:scale-110 transition duration-500"
                size={50}
              />

              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Fresh Results
              </h3>

              <p className="text-gray-600 leading-7">
                Clean, fresh, and perfectly folded clothes delivered every time.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-32 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-[32px] p-8 md:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center text-white">
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold">10K+</h3>
              <p className="mt-3 text-sky-100">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-4xl lg:text-5xl font-bold">15+</h3>
              <p className="mt-3 text-sky-100">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl lg:text-5xl font-bold">50K+</h3>
              <p className="mt-3 text-sky-100">Orders Completed</p>
            </div>

            <div>
              <h3 className="text-4xl lg:text-5xl font-bold">24/7</h3>
              <p className="mt-3 text-sky-100">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
