import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Daily Essentials
            </h2>
            <p className="text-gray-600 mb-4">
              Your one-stop shop for fresh, quality products delivered to your
              doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaPinterest size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Product Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/bakery"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Bakery
                </Link>
              </li>
              <li>
                <Link
                  href="/category/dairy"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Dairy
                </Link>
              </li>
              <li>
                <Link
                  href="/category/flowers"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Flowers
                </Link>
              </li>
              <li>
                <Link
                  href="/category/pooja-items"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Pooja Items
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Us
            </h3>
            <address className="not-italic">
              <p className="text-gray-600 mb-2">
                123 Grocery Street,
                <br />
                Fresh Market, FM 12345
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:info@dailyessentials.com"
                  className="text-blue-600 hover:underline"
                >
                  info@dailyessentials.com
                </a>
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span>{" "}
                <a
                  href="tel:+18001234567"
                  className="text-blue-600 hover:underline"
                >
                  +1 (800) 123-4567
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar with copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Daily Essentials. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
