'use client';

import React, { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/app/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { DialogTitle } from '@radix-ui/react-dialog';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">PH Tatuagens</a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-400 transition">
            Início
          </a>
          <a href="#services" className="hover:text-blue-400 transition">
            Serviços
          </a>
          <a href="/gallery" className="hover:text-blue-400 transition">
            Galeria
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-800 text-white">
              {/* Adicionando DialogTitle */}
              <DialogTitle className="sr-only">Menu de Navegação</DialogTitle>
              <nav className="flex flex-col space-y-4 mt-8">
                <SheetClose asChild>
                  <a href="/" className="hover:text-blue-400 transition">
                    Início
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#services" className="hover:text-blue-400 transition">
                    Serviços
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="/gallery" className="hover:text-blue-400 transition">
                    Galeria
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#contact" className="hover:text-blue-400 transition">
                    Contato
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
