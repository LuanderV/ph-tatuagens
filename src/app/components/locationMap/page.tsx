'use client';

export function LocationMap() {
  return (
    <div className="my-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Nossa Localização</h2>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1193.7587790089724!2d-52.18115941719214!3d-32.19184122400713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951185edf6106e05%3A0xedbe23bdf8e4924b!2sR.%206%2C%201238%20-%20Parque%20Guanabara%2C%20Rio%20Grande%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1734771195662!5m2!1spt-BR!2sbr"
          width="100%"
          height="500"
          style={{
            border: '0',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
