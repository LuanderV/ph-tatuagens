'use client';

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Informações da empresa */}
        <div>
          <h3 className="text-lg font-bold text-center">PH Tatuagens</h3>
          <p className="text-sm">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>

        {/* Links de navegação */}
        <nav className="flex space-x-4">
          <a href="/about" className="text-sm hover:text-blue-400 transition">
            Sobre
          </a>
          <a href="/privacy-policy" className="text-sm hover:text-blue-400 transition">
            Políticas de Privacidade
          </a>
          <a href="/terms-of-use" className="text-sm hover:text-blue-400 transition">
            Termos de Uso
          </a>
        </nav>

        {/* Redes sociais */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="w-5 h-5 hover:text-blue-400 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="w-5 h-5 hover:text-pink-400 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="w-5 h-5 hover:text-blue-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
