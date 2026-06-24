function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">LaundryPro</h2>
            <p className="mt-3 text-gray-400">
              Fast, reliable, and affordable laundry services at your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="/" className="hover:text-white">
                  Services
                </a>
              </li>

              <li>
                <a href="/" className="hover:text-white">
                  About Us
                </a>
              </li>

              <li>
                <a href="/" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>

            <p className="text-gray-400">📍 Lucknow, Uttar Pradesh</p>

            <p className="text-gray-400 mt-2">📞 +91 98765 43210</p>

            <p className="text-gray-400 mt-2">✉️ support@laundrypro.com</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-500">
          © 2026 LaundryPro. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
