import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-blue-700 uppercase">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-5">
              Professional Laundry &
              <span className="block text-blue-600 mt-1">
                Dry Cleaning Service
              </span>
            </h2>

            {/* Accent line */}
            <div className="w-16 h-1 bg-blue-600 rounded-full mb-6"></div>

            {/* Text */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
              We provide reliable laundry and dry-cleaning services designed to
              make your life easier with modern equipment and quality care.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              From daily wear to delicate fabrics, we ensure safe cleaning with
              fast turnaround, affordable pricing, and doorstep pickup.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span className="text-gray-700 text-sm sm:text-base font-medium">
                  Premium Fabric Care
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span className="text-gray-700 text-sm sm:text-base font-medium">
                  Fast Turnaround
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span className="text-gray-700 text-sm sm:text-base font-medium">
                  Affordable Pricing
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span className="text-gray-700 text-sm sm:text-base font-medium">
                  Pickup & Delivery
                </span>
              </div>
            </div>

            {/* Button */}
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Read More
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1000"
              alt="Laundry Service"
              className="w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] object-cover rounded-2xl shadow-xl"
            />

            {/* Floating Card */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg border border-gray-100">
              <h4 className="text-2xl font-bold text-blue-600">10+</h4>
              <p className="text-gray-600 text-xs sm:text-sm font-medium">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
