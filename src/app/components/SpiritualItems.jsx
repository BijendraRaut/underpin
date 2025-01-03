'use client';

export default function SpiritualItems() {
  const items = [
    {
      name: 'Sampoorna Havan Sangrah',
      price: '$19.99',
      image: 'https://www.samskarahome.com/cdn/shop/files/SampoornaHavanSangrah12SambraniCups4.jpg?v=1693567927&width=360',
    },
    {
      name: 'SPN Deity Replicas',
      price: '$14.99',
      image: 'https://bhaktishop.com/cdn/shop/files/DEITIES-TEMPLE-BACKGROUND.jpg?v=1695046155&width=800',
    },
    {
      name: 'Puja Set Standard',
      price: '$14.99',
      image: 'https://bhaktishop.com/cdn/shop/files/2023-11-11-p-0206.jpg?v=1699809896&width=400',
    },
    {
      name: 'Aromatic Incense Sticks',
      price: '$14.99',
      image: 'https://bhaktipooja.com/wp-content/uploads/2020/09/IMG_20200102_190139-e1602320325398-280x280.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Discover Spiritual Items</h2>
        <p className="text-gray-600 mb-12">Enhance your spiritual journey with our unique products.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-blue-100 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-500">{item.price}</p>
                <a
                  href="#"
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Add to Cart
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
