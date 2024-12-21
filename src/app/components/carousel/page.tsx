'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

export function Carousel() {
  const tattooImages = [
    '/img/carousel/1.png',
    '/img/carousel/2.png',
    '/img/carousel/3.png',
    '/img/carousel/4.png',
    '/img/carousel/5.png',
    '/img/carousel/6.png',
    '/img/carousel/7.png',
    '/img/carousel/8.png',
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Tatuagens Recentes</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1} // Exibe 1 slide por vez em telas pequenas
        breakpoints={{
          640: { slidesPerView: 2 }, // Exibe 2 slides a partir de 640px
          1024: { slidesPerView: 3 }, // Exibe 3 slides a partir de 1024px
        }}
        className="max-w-7xl mx-auto" // Centralizando o carrossel e limitando a largura
      >
        {tattooImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 transition-all transform hover:scale-105 hover:shadow-xl rounded-md">
              <Image
                src={image}
                alt={`Tattoo ${index + 1}`}
                width={500}
                height={500}
                className="w-full rounded-md shadow-lg"
                priority // Carregar imagem de forma otimizada
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <a
        href="/gallery"
        className="mt-8 inline-block bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
      >
        Ver Todas
      </a>
    </section>
  );
}
