export default function Gallery() {
    const galleryItems = [
      { type: 'image', src: '/img/carousel/1.png' },
      { type: 'image', src: '/img/carousel/2.png' },
      { type: 'image', src: '/img/carousel/3.png' },
      { type: 'image', src: '/img/carousel/4.png' },
      { type: 'image', src: '/img/carousel/5.png' },
      { type: 'image', src: '/img/carousel/6.png' },
      { type: 'image', src: '/img/carousel/7.png' },
      { type: 'image', src: '/img/carousel/8.png' },
    ];
  
    return (
      <main className="py-16 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-8">Galeria</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-md">
              {item.type === 'image' ? (
                <img src={item.src} alt={`Item ${index + 1}`} className="w-full rounded-md" />
              ) : (
                <video controls className="w-full rounded-md">
                  <source src={item.src} type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              )}
            </div>
          ))}
        </div>
      </main>
    );
  }
  