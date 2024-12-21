'use client';

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Políticas de Privacidade</h1>
      <p className="mb-4">
        Sua privacidade é importante para nós. Esta política explica como coletamos, usamos e protegemos as
        informações pessoais dos usuários do site PH Tatuagens.
      </p>

      <h2 className="text-xl font-bold mt-6">Coleta de Informações</h2>
      <p className="mb-4">
        Podemos coletar informações como nome, email e telefone ao preencher formulários no nosso site.
        Essas informações são usadas apenas para comunicação direta com os usuários.
      </p>

      <h2 className="text-xl font-bold mt-6">Uso de Informações</h2>
      <p className="mb-4">
        As informações coletadas são usadas para melhorar nossos serviços, responder a perguntas e enviar
        atualizações relevantes.
      </p>

      <h2 className="text-xl font-bold mt-6">Proteção de Dados</h2>
      <p className="mb-4">
        Utilizamos medidas técnicas e organizacionais para proteger suas informações contra acesso não
        autorizado, perda ou destruição.
      </p>

      <h2 className="text-xl font-bold mt-6">Alterações na Política</h2>
      <p className="mb-4">
        Esta política pode ser atualizada ocasionalmente. Recomendamos revisar esta página regularmente para
        estar ciente de quaisquer mudanças.
      </p>

      <h2 className="text-xl font-bold mt-6">Contato</h2>
      <p className="mb-4">
        Para dúvidas sobre esta política, entre em contato conosco pelo email{' '}
        <a href="mailto:contato@phtatuagens.com" className="text-blue-500 hover:underline">
          contato@phtatuagens.com
        </a>
        .
      </p>
    </main>
  );
}
