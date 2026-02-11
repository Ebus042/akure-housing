import { Home } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="my-2 md:mx-10 mx-2">
      <nav className=" flex items-center justify-between gap-5">
        <div className="flex items-center gap-2 font-bold">
          <Home size={24} className="md:hidden text-green-800" />
          <Home size={32} className="hidden md:block text-green-800" />
          <h3 className="text-green-800 text-xl md:text-3xl">
            Akure<span className="text-black">Rent</span>
          </h3>
        </div>
        <ul
          className="flex items-center gap-3 md:gap-8 mx-2 md:text-2xl 
        md:mx-10"
        >
          <li>Pages</li>
          <li>Contact</li>
          <li className="bg-green-900 px-4 py-1 text-white rounded-md">
            Search
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
