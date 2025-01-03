'use client';

export default function ProductCategories() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Explore Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="https://as1.ftcdn.net/v2/jpg/09/24/88/84/1000_F_924888473_atZbZXWzp76sYHwpOfRRvvzTesVN9tO3.jpg"
              alt="Flowers"
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Flowers</h3>
              <p className="text-gray-600">Discover a wide variety of fresh flowers for every occasion.</p>
              <a href="/products" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Shop Flowers
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="https://newindiansupermarket.com/cdn/shop/collections/pooja.png?v=1723464590&width=1296"
              alt="Spiritual Items"
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Spiritual Items</h3>
              <p className="text-gray-600">Explore our collection of spiritual items to enhance your practice.</p>
              <a href="/products" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Shop Spiritual Items
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
