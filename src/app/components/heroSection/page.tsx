export function HeroSection() {
    return (
      <section
        id="hero"
        className="bg-[url('/img/heroSection/hero-bg/hero-bg.jpg')] bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Arte Exclusiva, Feita com Paixão
        </h2>
        <p className="text-lg md:text-2xl mb-8">
          Transformando ideias em tatuagens únicas e personalizadas
        </p>
        <a
          href="#contact"
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
        >
          Agende sua consulta
        </a>
      </section>
    );
  }
  