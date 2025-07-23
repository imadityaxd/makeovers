import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Contact />
      <footer className="bg-pink-200 text-center p-4 text-pink-800">
        © 2025 Jyotsna Makeovers. All rights reserved.
      </footer>
    </div>
  );
}

export default App;