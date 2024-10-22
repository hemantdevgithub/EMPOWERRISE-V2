import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons from react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black shadow-lg fixed top-0 w-full z-[999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link className="flex-shrink-0 flex items-center" to={"/"}>
            <img className="h-8 w-8" src="logo.png" alt="EmpowerRise Logo" />
            <span className="ml-2 text-2xl font-bold">EmpoweRRise</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="block hover:bg-gray-200  px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block hover:bg-gray-200  px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block hover:bg-gray-200  px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block hover:bg-gray-200  px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" /> // Close icon
              ) : (
                <FiMenu className="h-6 w-6" /> // Menu icon
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block hover:bg-rise text-black px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block hover:bg-rise text-black px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block hover:bg-rise text-black px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block hover:bg-rise text-black px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
