'use client';

import { useParams } from 'next/navigation';

export default function ProductCategoryPage() {
    const params = useParams(); // Use the `useParams` hook to get the category
    const categories = ['Bakery', 'Dairy', 'Flowers', 'Pooja Items'];
  // Placeholder data for categories and products (replace with actual data fetching logic)
  const products = [
    {
      id: 1,
      name: 'HARVEST GOLD WHITE BREAD',
      category: 'Bakery',
      weight: '350.00 G',
      price: '40',
      image: 'https://harvestgold.in/image/ProductImage/2e59c4e30312f9c14b5fbf18f31e2ccb.png',
    },
    {
      id: 2,
      name: 'AMUL TAAZA TONED MILK',
      category: 'Dairy',
      volume: '500.00 ML',
      price: '25',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/da/cms-assets/cms/product/94c99c0b-0cb1-4c07-b91d-586c5300945b.jpg',
    },
    {
      id: 3,
      name: 'Marigold Flower Bunch',
      category: 'Flowers',
      price: '120',
      image: 'https://www.bloomybliss.com/wp-content/uploads/2020/10/IMG_5965.jpg',
    },
    {
      id: 4,
      name: 'Pooja Kit for Diwali',
      category: 'Pooja-Items',
      price: '500',
      image: 'https://m.media-amazon.com/images/I/81Zuxky73qL.jpg',
    },
    {
      id: 5,
      name: 'HARVEST GOLD ZERO MAIDA PAV',
      category: 'Bakery',
      weight: '250.00 G',
      price: '45',
      image: 'https://harvestgold.in/image/ProductImage/ddcdea8e66b6c2f3f52c54dc3df51713.png'
    },
    {
      id: 6,
      name: 'HARVEST GOLD KULCHA BREAD',
      category: 'Bakery',
      weight: '250.00 G',
      price: '35',
      image: 'https://harvestgold.in/image/ProductImage/8461ac9d832d52e43f25e8de1c500b4a.png'
    },
    {
      id: 7,
      name: 'HARVEST GOLD ATTA BURGER BUNS',
      category: 'Bakery',
      weight: '200.00 G',
      price: '45',
      image: 'https://harvestgold.in/image/ProductImage/8132120b9685aa81e452c78b77db9225.png'
    },
    {
      id: 8,
      name: 'HARVEST GOLD BREAD ATTA KULCHA',
      category: 'Bakery',
      weight: '250.00 G',
      price: '45',
      image: 'https://harvestgold.in/image/ProductImage/d3d6240f9c2a4c939a65cf089438aa4f.png'
    },
    {
      id: 9,
      name: 'HARVEST GOLD MILK BREAD',
      category: 'Bakery',
      weight: '400.00 G',
      price: '50',
      image: 'https://harvestgold.in/image/ProductImage/5ee7dd530eae6365cdf5cbb60ebe0fff.png'
    },
    {
      id: 10,
      name: 'HARVEST GOLD PIZZA BREAD BASE',
      category: 'Bakery',
      weight: '250.00 G',
      price: '50',
      image: 'https://harvestgold.in/image/ProductImage/8ed22bc168f8abc975e9220d5388e9f8.png'
    },
    {
      id: 11,
      name: 'HARVEST GOLD HALKA PHULKA',
      category: 'Bakery',
      weight: '200.00 G',
      price: '20',
      image: 'https://harvestgold.in/image/ProductImage/a6b395e1997ef1d168087d8e718e3c1a.png'
    },
    {
      id: 12,
      name: 'HARVEST GOLD- 100% WHOLE WHEAT BREAD',
      category: 'Bakery',
      weight: '450.00 G',
      price: '60',
      image: 'https://harvestgold.in/image/ProductImage/cd3ea4bf6482efebe5d2c4ff7a38211c.jpg'
    },
    {
      id: 13,
      name: 'HARVEST GOLD- 100% ATTA BREAD',
      category: 'Bakery',
      weight: '450.00 G',
      price: '60',
      image: 'https://harvestgold.in/image/ProductImage/b4deeaf38ba0e4219e078a19d7859795.jpg'
    },
    {
      id: 14,
      name: 'HARVEST GOLD BROWN BREAD SMART PACK',
      category: 'Bakery',
      weight: '250.00 G',
      price: '30',
      image: 'https://harvestgold.in/image/ProductImage/e36713631d6c1b978d621ed654c54298.jpg'
    },
    {
      id: 15,
      name: 'HARVEST GOLD BOMBAY PAV',
      category: 'Bakery',
      weight: '250.00 G',
      price: '45',
      image: 'https://harvestgold.in/image/ProductImage/ddcdea8e66b6c2f3f52c54dc3df51713.png'
    },
    {
      id: 16,
      name: 'HARVEST GOLD- HEARTY BROWN BREAD',
      category: 'Bakery',
      weight: '400.00 G',
      price: '55',
      image: 'https://harvestgold.in/image/ProductImage/e36713631d6c1b978d621ed654c54298.jpg'
    },
    {
      id: 17,
      name: 'HARVEST GOLD WHITE BREAD',
      category: 'Bakery',
      weight: '700.00 G',
      price: '60',
      image: 'https://harvestgold.in/image/ProductImage/2e59c4e30312f9c14b5fbf18f31e2ccb.png'
    },
    {
      id: 18,
      name: 'HARVEST GOLD- MULTIGRAIN BREAD- 13 GRAINS & SEEDS',
      category: 'Bakery',
      weight: '450.00 G',
      price: '70',
      image: 'https://harvestgold.in/image/ProductImage/621c0748a21b315ec92b005107e3b1f8.jpg'
    },
    {
      id: 19,
      name: 'HARVEST GOLD BURGER BUNS',
      category: 'Bakery',
      weight: '6.00 Pieces',
      price: '55',
      image: 'https://harvestgold.in/image/ProductImage/d26f9632b5566f1e696a9d234085f58e.png'
    },
    {
      id: 20,
      name: 'HARVEST GOLD SWEET BUNS',
      category: 'Bakery',
      weight: '2.00 Pieces',
      price: '40',
      image: 'https://harvestgold.in/image/ProductImage/469ff8e684cece134c857e0cf014e1d0.png'
    },
    {
      id: 21,
      name: 'HARVEST GOLD BROWN BREAD',
      category: 'Bakery',
      weight: '2.00 Pieces',
      price: '90',
      image: 'https://harvestgold.in/image/ProductImage/e36713631d6c1b978d621ed654c54298.jpg'
    },
    {
      id: 22,
      name: 'AMUL COW MILK',
      category: 'dairy',
      weight: '500.00 ML',
      price: '29',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/assets/products/sliding_images/jpeg/89cb3ef5-0003-4100-bcf4-f97092f30997.jpg'
    },
    {
      id: 23,
      name: 'AMUL GOLD PASTEURISED FULL CREAM MILK',
      category: 'dairy',
      weight: '500.00 ML',
      price: '33',
      image: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/xrj8lmdwtc3ll27s9wvc'
    },
    {
      id: 24,
      name: 'Mother Dairy TONED MILK',
      category: 'dairy',
      weight: '500.00 ML',
      price: '28',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/assets/products/sliding_images/jpeg/e3f63e12-631f-4193-9160-ea4ddcbd6c5c.jpg'
    },
    {
      id: 25,
      name: 'Mother Dairy COW MILK',
      category: 'dairy',
      weight: '500.00 ML',
      price: '29',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/app/assets/products/sliding_images/jpeg/921dc7a0-0a78-44d0-80e9-f49f0cba1073.jpg'
    },
    {
      id: 26,
      name: 'Mother Dairy FULL CREAM MILK',
      category: 'dairy',
      weight: '500.00 ML',
      price: '33',
      image: 'https://www.bigbasket.com/media/uploads/p/l/40147028_5-mother-dairy-full-cream-milk.jpg'
    },
    {
      id: 27,
      name: 'Roses',
      category: 'Flowers',
      price: '120',
      image: 'https://www.bigbasket.com/media/uploads/p/l/40196767_2-hoovu-fresh-assorted-roses-puja-flowers.jpg',
    },
    {
      id: 28,
      name: 'Orchids',
      category: 'flowers',
      price: '150',
      image: 'https://www.bigbasket.com/media/uploads/p/l/40201307_1-fresho-white-orchids.jpg'
    },
   {
    id: 29,
      name: 'Shevanti',
      category: 'flowers',
      price: '150',
      image: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/246204fb8d4388d43c5892d71a30a9e3'
   },
   {
    id: 30,
    name: 'Incense sticks, cones, and dhoop',
    category: 'Pooja-Items',
    price: '165',
    image: 'https://www.jiomart.com/images/product/original/rvldigdb7i/the-aroma-factory-incense-dhoop-cone-for-puja-loban-100-herbal-0-charcoal-1-bottle-x-30-cones-legal-images-orvldigdb7i-p604424013-7-202309060606.jpg',
  },
  {
    id: 31,
    name: 'Pooja thalis',
    category: 'Pooja-Items',
    price: '450',
    image: 'https://newindiansupermarket.com/cdn/shop/collections/pooja.png?v=1723464590&width=1296'
  },
  {
    id: 32,
    name: 'Camphor (Kapoor) and ghee diya wicks',
    category: 'Pooja-Items',
    price: '295',
    image: 'https://m.media-amazon.com/images/I/81RMpt6kYPL._SX425_.jpg'
  },
  {
    id: 33,
    name: 'Brass or copper pooja items',
    category: 'Pooja-Items',
    price: '700',
    image: 'https://i.etsystatic.com/6743954/r/il/315148/3135929376/il_794xN.3135929376_8ovr.jpg'
  },
  {
    id: 33,
    name: 'Kumkum, and sandalwood paste',
    category: 'Pooja-Items',
    price: '300',
    image: 'https://vedicvaani.com/media/catalog/product/cache/2b3e8646327ee79632c9652ca8564677/m/y/mysore-sandal-p1-1.webp'
  },
  {
    id: 33,
    name: 'Sampoorna Sri Satyanarayan Pooja Kit',
    category: 'Pooja-Items',
    price: '1500.00',
    image: 'https://decortwist.com/cdn/shop/products/Untitled-Capture6274.jpg'
  },
  {
   id: 34,
    name: 'Sampoorna Havan Sangrah',
    category: 'Pooja-Items',
    price: '199.00',
    image: 'https://www.samskarahome.com/cdn/shop/files/SampoornaHavanSangrah12SambraniCups4.jpg?v=1693567927&width=360',
  },
  {
    id: 35,
    name: 'SPN Deity Replicas',
    category: 'Pooja-Items',
    price: '199.00',
    image: 'https://bhaktishop.com/cdn/shop/files/DEITIES-TEMPLE-BACKGROUND.jpg?v=1695046155&width=800',
  },
  {
    id: 36,
    name: 'Puja Set Standard',
    category: 'Pooja-Items',
    price: '1499.00',
    image: 'https://bhaktishop.com/cdn/shop/files/2023-11-11-p-0206.jpg?v=1699809896&width=400',
  },
  {
    id: 37,
    name: 'Aromatic Incense Sticks',
    category: 'Pooja-Items',
    price: '99.00',
    image: 'https://bhaktipooja.com/wp-content/uploads/2020/09/IMG_20200102_190139-e1602320325398-280x280.jpg',
  },

  ];

  // Get the selected category from the dynamic route
  const selectedCategory = params.category;

  // Filter products by category
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <div>

      {/* Header Section */}
      <header className="bg-green-500 text-white py-8 text-center">
        <h1 className="text-3xl font-bold capitalize">{selectedCategory}</h1>
        <p className="text-lg mt-2">Explore the best {selectedCategory} products.</p>
      </header>

      {/* Product Grid */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 m-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.weight || product.volume}</p>
                  <p className="text-green-500 font-bold">₹{product.price}</p>
                  <a
                    href={`/products/${product.id}`}
                    className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* If no products found */}
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-600 mt-8">No products found in this category.</p>
          )}
        </div>
      </section>
    </div>
  );
}
