'use client';

export default function About() {
  return (
    <main className="container mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Sobre Nós</h1>
      <p className="mb-4">
        A PH Tatuagens é um estúdio especializado em criar tatuagens únicas e personalizadas. Nossa missão é
        transformar suas ideias em obras de arte que se tornam parte de você.
      </p>

      <h2 className="text-xl font-bold mt-6">Nossa História</h2>
      <p className="mb-4">
        Fundado por tatuadores apaixonados pela arte e pela criatividade, o PH Tatuagens surgiu com o
        objetivo de oferecer uma experiência única para quem deseja fazer uma tatuagem. Ao longo dos anos, o
        estúdio cresceu e se tornou referência na área, oferecendo um ambiente acolhedor e profissionais
        altamente qualificados.
      </p>

      <h2 className="text-xl font-bold mt-6">Nossa Missão</h2>
      <p className="mb-4">
        Nosso objetivo é proporcionar a cada cliente uma experiência personalizada, criando tatuagens que
        reflitam suas histórias, sonhos e identidade.
      </p>

      <h2 className="text-xl font-bold mt-6">Nossos Valores</h2>
      <p className="mb-4">
        - Criatividade
        <br />
        - Excelência no Atendimento
        <br />
        - Compromisso com a Qualidade e Segurança
      </p>

      <h2 className="text-xl font-bold mt-6">Entre em Contato</h2>
      <p className="mb-4">
        Se você deseja saber mais sobre o nosso trabalho, entre em contato conosco pelo email{' '}
        <a href="mailto:contato@phtatuagens.com" className="text-blue-500 hover:underline">
          contato@phtatuagens.com
        </a>
        .
      </p>
    </main>
  );
}
