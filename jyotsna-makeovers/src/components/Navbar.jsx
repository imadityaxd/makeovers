import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-pink-200 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-pink-800 tracking-wide">Jyotsna Makeovers</h1>
      <ul className="flex gap-6 text-pink-800 font-medium">
        <li><a href="#about" className="hover:text-pink-600 transition">About</a></li>
        <li><a href="#gallery" className="hover:text-pink-600 transition">Gallery</a></li>
        <li><a href="#contact" className="hover:text-pink-600 transition">Contact</a></li>
      </ul>
    </nav>
  );
}
