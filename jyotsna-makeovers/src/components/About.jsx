import { FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-16 bg-pink-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/profilepic.jpg" // Replace with actual image path
            alt="Jyotsna"
            className="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-pink-300"
          />
        </div>

        {/* Description */}
        <p className="text-lg mb-4">
          Hi, I'm <span className="font-semibold">Jyotsna</span> — a passionate
          makeup artist with a flair for creativity and elegance. I specialize
          in bridal, party, and editorial makeup that enhances natural beauty
          and brings out the best in you. 💄✨
        </p>

        {/* Instagram Handle */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <FaInstagram className="text-pink-600 text-xl" />
          <a
            href="https://instagram.com/jyotsna2404makeovers_lucknow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 font-medium hover:underline"
          >
            @jyotsna2404makeovers_lucknow
          </a>
        </div>
      </div>
    </section>
  );
}
