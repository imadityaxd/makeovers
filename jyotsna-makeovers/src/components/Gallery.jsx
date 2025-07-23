import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/images/look1.png",
  "/images/look2.png",
  "/images/look3.png",
  "/images/look4.png",
  "/images/look5.png",
  "/images/look6.png",
  "/images/look7.png",
  "/images/look8.png",
];

export default function Gallery() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="gallery" className="py-16 bg-white text-gray-800 relative">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Gallery</h2>

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-pink-100"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex flex-nowrap overflow-x-auto overflow-y-hidden space-x-4 no-scrollbar px-8 scroll-smooth"
          >
            {images.map((src, index) => (
              <div key={index} className="flex-shrink-0 w-64 h-80">
                <img
                  src={src}
                  alt={`look-${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-pink-100"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
