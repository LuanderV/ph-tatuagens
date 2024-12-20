// components/Services.tsx
export function Services() {
    return (
      <section id="services" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-xl font-bold mb-4">Tatuagens Personalizadas</h3>
            <p>Criações exclusivas baseadas nas suas ideias.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-xl font-bold mb-4">Cobertura de Tatuagens</h3>
            <p>Redesenhe e renove tatuagens antigas.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-xl font-bold mb-4">Consultoria de Design</h3>
            <p>Discussão de conceitos e ideias antes de tatuar.</p>
          </div>
        </div>
      </section>
    );
  }
  