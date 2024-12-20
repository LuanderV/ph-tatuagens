// components/Header.tsx
export function Header() {
    return (
      <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">PH Terres</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Início</a></li>
            <li><a href="/services" className="hover:underline">Serviços</a></li>
            <li><a href="/contact" className="hover:underline">Contato</a></li>
            <li><a href="/gallery" className="hover:underline">Galeria</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  