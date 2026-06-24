import React from "react";
import { Shirt, WashingMachine, Truck, Sparkles } from "lucide-react";

function Services() {
  const services = [
    {
      icon: <WashingMachine size={45} />,
      title: "Laundry Service",
      desc: "Professional washing and folding services for your daily clothes.",
    },
    {
      icon: <Shirt size={45} />,
      title: "Dry Cleaning",
      desc: "Special care for delicate fabrics and premium garments.",
    },
    {
      icon: <Truck size={45} />,
      title: "Free Pickup & Delivery",
      desc: "Doorstep pickup and delivery to save your valuable time.",
    },
    {
      icon: <Sparkles size={45} />,
      title: "Premium Care",
      desc: "Advanced cleaning methods for spotless and fresh clothes.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-sky-50 via-white to-sky-50 overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <span className="inline-flex items-center bg-sky-100 text-sky-700 px-5 py-2 rounded-full text-sm md:text-base font-semibold shadow-sm">
          ✨ Our Services
        </span>

        <h1
          className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-black
          tracking-tight
          leading-tight
          text-sky-950
          mt-6
          "
        >
          Quality Laundry
          <span className="block text-sky-500">Services</span>
        </h1>

        <p
          className="
          text-gray-600
          text-base
          sm:text-lg
          md:text-xl
          leading-relaxed
          max-w-3xl
          mx-auto
          mt-6
          "
        >
          We provide fast, reliable, and affordable laundry solutions designed
          to keep your clothes fresh, clean, and perfectly cared for.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
              bg-white
              p-8
              rounded-3xl
              border
              border-sky-100
              shadow-sm
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-500
              group
              h-full
              flex
              flex-col
              cursor-pointer
              "
            >
              <div
                className="
                text-sky-500
                mb-6
                group-hover:scale-110
                transition-all
                duration-500
                "
              >
                {service.icon}
              </div>

              <h3
                className="
                text-xl
                md:text-2xl
                font-bold
                text-sky-950
                mb-4
                "
              >
                {service.title}
              </h3>

              <p
                className="
                text-gray-600
                leading-relaxed
                flex-grow
                "
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-black
            text-center
            text-sky-950
            mb-14
            "
          >
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div
              className="
              bg-sky-50
              p-8
              rounded-3xl
              text-center
              hover:shadow-lg
              transition
              duration-300
              "
            >
              <div
                className="
                w-14
                h-14
                md:w-16
                md:h-16
                bg-sky-500
                text-white
                rounded-full
                flex
                items-center
                justify-center
                text-xl
                md:text-2xl
                font-bold
                mx-auto
                mb-5
                "
              >
                1
              </div>

              <h3 className="text-2xl font-bold text-sky-900 mb-3">
                Schedule Pickup
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Book your laundry pickup online or by phone in just a few
                clicks.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="
              bg-sky-50
              p-8
              rounded-3xl
              text-center
              hover:shadow-lg
              transition
              duration-300
              "
            >
              <div
                className="
                w-14
                h-14
                md:w-16
                md:h-16
                bg-sky-500
                text-white
                rounded-full
                flex
                items-center
                justify-center
                text-xl
                md:text-2xl
                font-bold
                mx-auto
                mb-5
                "
              >
                2
              </div>

              <h3 className="text-2xl font-bold text-sky-900 mb-3">We Clean</h3>

              <p className="text-gray-600 leading-relaxed">
                Our experts wash, dry clean, and carefully handle every garment.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="
              bg-sky-50
              p-8
              rounded-3xl
              text-center
              hover:shadow-lg
              transition
              duration-300
              "
            >
              <div
                className="
                w-14
                h-14
                md:w-16
                md:h-16
                bg-sky-500
                text-white
                rounded-full
                flex
                items-center
                justify-center
                text-xl
                md:text-2xl
                font-bold
                mx-auto
                mb-5
                "
              >
                3
              </div>

              <h3 className="text-2xl font-bold text-sky-900 mb-3">
                Fast Delivery
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Receive your fresh, clean clothes right at your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">
        <div
          className="
          bg-gradient-to-r
          from-sky-600
          to-cyan-500
          rounded-[32px]
          p-8
          md:p-16
          text-center
          text-white
          shadow-2xl
          "
        >
          <h2
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-black
            mb-5
            "
          >
            Ready For Fresh Clothes?
          </h2>

          <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 opacity-95">
            Book your laundry service today and enjoy hassle-free cleaning,
            pickup, and delivery at your convenience.
          </p>

          <button
            className="
            bg-white
            text-sky-600
            px-8
            py-4
            rounded-full
            font-bold
            text-lg
            shadow-lg
            hover:scale-105
            hover:shadow-xl
            transition-all
            duration-300
            "
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
