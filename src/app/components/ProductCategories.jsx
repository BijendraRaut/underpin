'use client';

export default function ProductCategories() {
  return (
    <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Bakery */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://freshharvesteats.com/wp-content/uploads/2024/12/French-Bakery-Products-Freshharvesteats.png"
                alt="Bakery"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Bakery & Breads</h3>
                <p className="text-gray-600">Fresh breads, buns, and more.</p>
                <a
                  href="/products/bakery"
                  className="mt-4 inline-block text-green-500 hover:text-green-700 font-semibold"
                >
                  Explore
                </a>
              </div>
            </div>

            {/* Dairy */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://www.chanakyadairy.com/wp-content/uploads/2019/04/blog-pic.jpg "
                alt="Dairy"
                className="w-full h-48 object-cover"
              />
              {/* https://etimg.etb2bimg.com/photo/96331122.cms  */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Dairy & Milk</h3>
                <p className="text-gray-600">Fresh and pure milk products.</p>
                <a
                  href="/products/dairy"
                  className="mt-4 inline-block text-green-500 hover:text-green-700 font-semibold"
                >
                  Explore
                </a>
              </div>
            </div>

            {/* Flowers */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://as1.ftcdn.net/v2/jpg/09/24/88/84/1000_F_924888473_atZbZXWzp76sYHwpOfRRvvzTesVN9tO3.jpg"
                alt="Flowers"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Flowers</h3>
                <p className="text-gray-600">
                  Fresh blooms for every occasion.
                </p>
                <a
                  href="/products/flowers"
                  className="mt-4 inline-block text-green-500 hover:text-green-700 font-semibold"
                >
                  Explore
                </a>
              </div>
            </div>

            {/* Pooja Items */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://newindiansupermarket.com/cdn/shop/collections/pooja.png?v=1723464590&width=1296"
                alt="Pooja Items"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Pooja Items</h3>
                <p className="text-gray-600">
                  Essential items for every ritual.
                </p>
                <a
                  href="/products/pooja-items"
                  className="mt-4 inline-block text-green-500 hover:text-green-700 font-semibold"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
