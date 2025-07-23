export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center px-4 text-white"
      style={{ backgroundImage: "url('/images/bg-image.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Pink overlay */}
      <div className="absolute inset-0 bg-pink-200 bg-opacity-30 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Jyotsna Makeovers
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Enhancing beauty with a touch of elegance. Professional bridal and party makeup artist based in Lucknow.
        </p>
        <a
          href="#contact"
          className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-700 transition"
        >
          Book an Appointment
        </a>
      </div>
    </section>
  );
}
