'use client';

export default function Products() {
  const products = [
    {
      name: 'Beautiful Rose Bouquet',
      price: '$29.99',
      img1: 'https://www.fnp.com/images/pr/l/v200/heavenly-6-white-roses-bunch_3.jpg',
      img2: 'https://www.fnp.com/images/pr/l/v200/heavenly-6-white-roses-bunch_2.jpg',
    },
    {
      name: 'Sunny Vibe Roses',
      price: '$29.99',
      img1: 'https://www.fnp.com/images/pr/l/v200/sunny-vibes-roses-n-gerberas-jar_1.jpg',
      img2: 'https://www.fnp.com/images/pr/l/v200/sunny-vibes-roses-n-gerberas-jar_2.jpg',
    },
    {
      name: 'Blooming Birthday Floral Jar',
      price: '$29.99',
      img1: 'https://www.fnp.com/images/pr/l/v200/blooming-birthday-floral-jar_1.jpg',
      img2: 'https://www.fnp.com/images/pr/l/v200/blooming-birthday-floral-jar_2.jpg',
    },
    {
      name: 'Winter Wonderful Flowers',
      price: '$29.99',
      img1: 'https://www.fnp.com/images/pr/l/v200/winter-wonderland-flowers_1.jpg',
      img2: 'https://www.fnp.com/images/pr/l/v200/winter-wonderland-flowers_3.jpg',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Explore Our Flowers</h2>
        <p className="text-gray-600 mb-12">Brighten your day with our fresh and beautiful flowers.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <img src={product.img1} alt={product.name} className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-0" />
              <img src={product.img2} alt={product.name} className="absolute inset-0 w-full h-48 object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
                <a
                  href="#"
                  className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200"
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
