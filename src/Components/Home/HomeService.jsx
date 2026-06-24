import { Link } from "react-router-dom";

const HomeService = () => {
  const services = [
    {
      title: "Wash & Fold",
      desc: "Professional washing and folding service for your daily clothes.",
      icon: "🧺",
    },

    {
      title: "Dry Cleaning",
      desc: "Special care for delicate fabrics and premium garments.",
      icon: "👔",
    },
    
    {
      title: "Pickup & Delivery",
      desc: "Convenient doorstep pickup and delivery at your preferred time.",
      icon: "🚚",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-700 font-bold uppercase tracking-widest mb-3">
            Our Services
          </p>

          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Quality Laundry Services
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide professional laundry solutions designed to keep your
            clothes fresh, clean, and perfectly maintained.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-5">{service.icon}</div>

              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>

              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeService;
