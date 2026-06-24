import { Link } from "react-router-dom";

function HomeContact() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Need Laundry Service?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We provide fast, reliable, and affordable laundry services. Contact
            our team today and let us take care of your clothes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Contact Us
            </Link>

            <a
              href="tel:+919876543210"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContact;
