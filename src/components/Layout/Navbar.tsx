import React, { useState, useEffect } from "react";
import {
  HomeIcon,
  WrenchIcon,
  PhoneIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/", icon: <HomeIcon className="w-5 h-5" /> },
    {
      name: "Services",
      path: "/services",
      icon: <WrenchIcon className="w-5 h-5" />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <PhoneIcon className="w-5 h-5" />,
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-black/90"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="/"
            className="text-white font-bold text-xl md:text-2xl relative z-50"
          >
            EDMONTON (YEG) <span className="text-blue-400">SWEEPERS</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="text-white hover:text-gray-300 lg:not-last:text-sm px-4 py-2 rounded-lg transition-colors relative inline-flex items-center gap-2 group text-base"
              >
                {link.icon}
                <span className="relative">
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
              </a>
            ))}
            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm lg:text-base">
              Book now
            </button> */}
          </div>

          {/* Mobile Navigation */}
          <div
            className={`fixed inset-0 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
          >
            <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-blue-400 text-2xl flex items-center gap-3 transition-colors"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition-all duration-300 mt-4"
              >
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
