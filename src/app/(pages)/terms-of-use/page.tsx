'use client';

export default function TermsOfUse() {
  return (
    <main className="container mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
      <p className="mb-4">
        Ao acessar o site PH Tatuagens, você concorda com os seguintes termos e condições de uso. Por favor,
        leia atentamente.
      </p>

      <h2 className="text-xl font-bold mt-6">Uso do Site</h2>
      <p className="mb-4">
        O conteúdo do site PH Tatuagens, incluindo textos, imagens, e gráficos, é protegido por direitos de
        autor. Você pode visualizar, baixar e imprimir o conteúdo exclusivamente para uso pessoal e não
        comercial.
      </p>

      <h2 className="text-xl font-bold mt-6">Responsabilidade</h2>
      <p className="mb-4">
        A PH Tatuagens não se responsabiliza por danos diretos ou indiretos resultantes do uso indevido do
        site ou do conteúdo.
      </p>

      <h2 className="text-xl font-bold mt-6">Alterações</h2>
      <p className="mb-4">
        Reservamo-nos o direito de modificar, adicionar ou remover qualquer conteúdo ou parte dos Termos de
        Uso a qualquer momento, sem aviso prévio.
      </p>

      <h2 className="text-xl font-bold mt-6">Privacidade</h2>
      <p className="mb-4">
        As informações pessoais coletadas por meio do site estão sujeitas à nossa Política de Privacidade.
      </p>

      <h2 className="text-xl font-bold mt-6">Contato</h2>
      <p className="mb-4">
        Se você tiver dúvidas sobre os Termos de Uso, entre em contato conosco pelo email{' '}
        <a href="mailto:contato@phtatuagens.com" className="text-blue-500 hover:underline">
          contato@phtatuagens.com
        </a>
        .
      </p>
    </main>
  );
}
