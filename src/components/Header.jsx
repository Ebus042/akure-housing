import { Home, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="my-2 md:mx-10">
      <nav className=" flex items-center justify-between gap-5">
        <div className="flex items-center font-bold mx-2">
          <Home size={24} className="md:hidden text-green-800" />
          <Home size={32} className="hidden md:block text-green-800" />
          <h3 className="text-green-800 text-xl md:text-3xl">
            Akure<span className="text-black">Rent</span>
          </h3>
        </div>
        <span
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden mx-4 text-green-800"
        >
          <Menu size={24} />
        </span>
        <div
          className={`
    fixed inset-0 bg-black/40 transition-opacity duration-300
    ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
    lg:hidden
  `}
          onClick={() => setIsMenuOpen(false)}
        />

        <ul
          className={`
    fixed top-0 right-0 h-screen w-64
    bg-white shadow-lg
    flex flex-col items-center gap-6 pt-20
    transform transition-transform duration-300 ease-in-out
    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
    lg:hidden
  `}
        >
          {/* Close button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 text-green-800"
          >
            <X size={24} />
          </button>
          <li>
            <Link to="/home" className="hover:text-green-800 transition">
              Properties
            </Link>
          </li>

          <li>
            <Link
              to="/book-inspection"
              className="hover:text-green-800 transition"
            >
              Book Inspection
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-green-800 transition">
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/home"
              className="bg-green-900 px-3 py-1 text-white rounded-md hover:bg-green-800 transition"
            >
              Search
            </Link>
          </li>
        </ul>

        <ul className="hidden lg:flex items-center text-sm gap-4 md:gap-8 mx-4 md:text-xl">
          <li>
            <Link to="/home" className="hover:text-green-800 transition">
              Properties
            </Link>
          </li>

          <li>
            <Link
              to="/book-inspection"
              className="hover:text-green-800 transition"
            >
              Book Inspection
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-green-800 transition">
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/home"
              className="bg-green-900 px-3 py-1 text-white rounded-md hover:bg-green-800 transition"
            >
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
