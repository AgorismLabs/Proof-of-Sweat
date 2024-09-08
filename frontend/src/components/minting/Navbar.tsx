"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaDumbbell, FaTimes } from "react-icons/fa";
import logo from "../../../public/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle for mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-600 text-white p-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3">
        <div className="text-5xl text-indigo-400">

        <FaDumbbell/>
        </div>
          <span className="font-bold text-xl">NFT GYM PASS</span>
        </Link>
        <w3m-button />
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-5 space-y-5 text-center transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
          <w3m-button />
       
      </div>
    </nav>
  );
};

export default Navbar;
