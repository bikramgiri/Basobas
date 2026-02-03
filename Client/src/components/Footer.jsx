import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <Link to="/" className="flex items-center gap-2 group mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold text-white bg-clip-text">
                Basobas
              </span>
            </Link>
            <p className="text-sm mb-4">
              Nepal's trusted platform for discovering and booking quality
              hostels. Find your perfect home away from home.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-pink-600 rounded-lg transition-colors"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-blue-400 rounded-lg transition-colors"
              >
                <Twitter className="size-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-red-600 rounded-lg transition-colors"
              >
                <Youtube className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/browse"
                  className="hover:text-blue-400 transition-colors"
                >
                  Explore Hostels
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="hover:text-blue-400 transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* For Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Hostel Owners</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/list-hostel"
                  className="hover:text-blue-400 transition-colors"
                >
                  List Your Hostel
                </Link>
              </li>
              <li>
                <Link
                  to="/hosteler-dashboard"
                  className="hover:text-blue-400 transition-colors"
                >
                  Owner Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="hover:text-blue-400 transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/success-stories"
                  className="hover:text-blue-400 transition-colors"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="size-5 shrink-0 mt-0.5" />
                <span>Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-5 shrink-0" />
                <span>+977 01-XXXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-5 shrink-0" />
                <span>info@basobas.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2">Newsletter</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; 2026 Basobas. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="hover:text-blue-400 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
