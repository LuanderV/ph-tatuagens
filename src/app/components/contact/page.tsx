// components/Contact.tsx
export function Contact() {
    return (
      <section id="contact" className="py-16 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Entre em Contato</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Seu Nome"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Seu Email"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Sua Mensagem"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700"
              rows={5}
            />
          </div>
          <button className="bg-blue-500 py-2 px-6 rounded-md hover:bg-blue-600 transition">
            Enviar
          </button>
        </form>
      </section>
    );
  }
  