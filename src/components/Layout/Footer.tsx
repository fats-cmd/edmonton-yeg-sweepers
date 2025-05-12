import React from "react";
import { Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/95 text-white py-12 px-4 h-[500px]" >
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">
              EDMONTON (YEG) <span className="text-blue-400">SWEEPERS</span>
            </h2>
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <input
                type="email"
                placeholder="Email us"
                className="bg-transparent outline-none flex-1 text-sm"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Street Sweeping
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Parking Lot Cleaning
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Commercial Services
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors p-2">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors p-2">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors p-2">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} Edmonton YEG Sweepers. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 text-sm text-gray-400">
            <a
              href="/privacy"
              className="hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
