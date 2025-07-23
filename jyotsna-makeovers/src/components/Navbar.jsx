import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-pink-200 shadow-md px-4 py-3">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-800 tracking-wide">Jyotsna Makeovers</h1>

        {/* Hamburger menu (mobile) */}
        <button
          className="sm:hidden text-pink-800 text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 text-pink-800 font-medium">
          <li><a href="#about" className="hover:text-pink-600 transition">About</a></li>
          <li><a href="#gallery" className="hover:text-pink-600 transition">Gallery</a></li>
          <li><a href="#contact" className="hover:text-pink-600 transition">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu (shown when isOpen is true) */}
      {isOpen && (
        <ul className="sm:hidden mt-3 space-y-2 text-pink-800 font-medium">
          <li><a href="#about" className="block hover:text-pink-600 transition">About</a></li>
          <li><a href="#gallery" className="block hover:text-pink-600 transition">Gallery</a></li>
          <li><a href="#contact" className="block hover:text-pink-600 transition">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
