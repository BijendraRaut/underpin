import mongoose from "mongoose";
import Product from "../src/models/Product.js";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from the root directory
dotenv.config({ path: join(__dirname, "..", ".env.local") });

const products = [
  // Dairy Products
  {
    name: "Fresh Milk",
    category: "Dairy",
    price: 60,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/app/assets/products/sliding_images/jpeg/89cb3ef5-0003-4100-bcf4-f97092f30997.jpg",
    volume: "1 L",
  },
  {
    name: "Amul Paneer",
    category: "Dairy",
    price: 80,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/app/assets/products/sliding_images/jpeg/e3f63e12-631f-4193-9160-ea4ddcbd6c5c.jpg",
    weight: "200g",
  },
  {
    name: "Mother Dairy Dahi",
    category: "Dairy",
    price: 45,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/app/assets/products/sliding_images/jpeg/921dc7a0-0a78-44d0-80e9-f49f0cba1073.jpg",
    weight: "400g",
  },
  // Bakery Products
  {
    name: "Harvest Gold Atta Bread",
    category: "Bakery",
    price: 45,
    image:
      "https://harvestgold.in/image/ProductImage/cd3ea4bf6482efebe5d2c4ff7a38211c.jpg",
    weight: "400g",
  },
  {
    name: "Fresh Butter Croissant",
    category: "Bakery",
    price: 35,
    image:
      "https://harvestgold.in/image/ProductImage/8132120b9685aa81e452c78b77db9225.png",
    weight: "60g",
  },
  {
    name: "Multigrain Bread",
    category: "Bakery",
    price: 55,
    image:
      "https://harvestgold.in/image/ProductImage/621c0748a21b315ec92b005107e3b1f8.jpg",
    weight: "450g",
  },
  {
    name: "Chocolate Muffins",
    category: "Bakery",
    price: 40,
    image:
      "https://harvestgold.in/image/ProductImage/469ff8e684cece134c857e0cf014e1d0.png",
    weight: "4 pieces",
  },
  {
    name: "Pav Buns",
    category: "Bakery",
    price: 30,
    image:
      "https://harvestgold.in/image/ProductImage/ddcdea8e66b6c2f3f52c54dc3df51713.png",
    weight: "6 pieces",
  },

  // Flowers

  {
    name: "Lotus Flowers",
    category: "Flowers",
    price: 199,
    image:
      "https://www.bigbasket.com/media/uploads/p/l/40201307_1-fresho-white-orchids.jpg",
    weight: "5 stems",
  },
  {
    name: "Marigold Garland",
    category: "Flowers",
    price: 150,
    image:
      "https://www.bigbasket.com/media/uploads/p/l/40196767_2-hoovu-fresh-assorted-roses-puja-flowers.jpg",
    weight: "2 strings",
  },
  {
    name: "Mixed Puja Flowers",
    category: "Flowers",
    price: 399,
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/246204fb8d4388d43c5892d71a30a9e3",
    weight: "15 stems",
  },
  {
    name: "Jasmine Gajra",
    category: "Flowers",
    price: 80,
    image:
      "https://www.bigbasket.com/media/uploads/p/l/40196767_2-hoovu-fresh-assorted-roses-puja-flowers.jpg",
    weight: "2 pieces",
  },
  {
    name: "HARVEST GOLD WHITE BREAD",
    category: "Bakery",
    weight: "350.00 G",
    price: "40",
    image:
      "https://harvestgold.in/image/ProductImage/2e59c4e30312f9c14b5fbf18f31e2ccb.png",
  },
  {
    name: "AMUL TAAZA TONED MILK",
    category: "Dairy",
    volume: "500.00 ML",
    price: "25",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/da/cms-assets/cms/product/94c99c0b-0cb1-4c07-b91d-586c5300945b.jpg",
  },
  {
    name: "HARVEST GOLD ZERO MAIDA PAV",
    category: "Bakery",
    weight: "250.00 G",
    price: "45",
    image:
      "https://harvestgold.in/image/ProductImage/ddcdea8e66b6c2f3f52c54dc3df51713.png",
  },
  {
    name: "HARVEST GOLD KULCHA BREAD",
    category: "Bakery",
    weight: "250.00 G",
    price: "35",
    image:
      "https://harvestgold.in/image/ProductImage/8461ac9d832d52e43f25e8de1c500b4a.png",
  },
  {
    name: "HARVEST GOLD ATTA BURGER BUNS",
    category: "Bakery",
    weight: "200.00 G",
    price: "45",
    image:
      "https://harvestgold.in/image/ProductImage/8132120b9685aa81e452c78b77db9225.png",
  },
  {
    name: "HARVEST GOLD BREAD ATTA KULCHA",
    category: "Bakery",
    weight: "250.00 G",
    price: "45",
    image:
      "https://harvestgold.in/image/ProductImage/d3d6240f9c2a4c939a65cf089438aa4f.png",
  },
  {
    name: "HARVEST GOLD MILK BREAD",
    category: "Bakery",
    weight: "400.00 G",
    price: "50",
    image:
      "https://harvestgold.in/image/ProductImage/5ee7dd530eae6365cdf5cbb60ebe0fff.png",
  },
  {
    name: "HARVEST GOLD PIZZA BREAD BASE",
    category: "Bakery",
    weight: "250.00 G",
    price: "50",
    image:
      "https://harvestgold.in/image/ProductImage/8ed22bc168f8abc975e9220d5388e9f8.png",
  },
  {
    name: "HARVEST GOLD HALKA PHULKA",
    category: "Bakery",
    weight: "200.00 G",
    price: "20",
    image:
      "https://harvestgold.in/image/ProductImage/a6b395e1997ef1d168087d8e718e3c1a.png",
  },
  {
    name: "HARVEST GOLD- 100% WHOLE WHEAT BREAD",
    category: "Bakery",
    weight: "450.00 G",
    price: "60",
    image:
      "https://harvestgold.in/image/ProductImage/cd3ea4bf6482efebe5d2c4ff7a38211c.jpg",
  },
  {
    name: "HARVEST GOLD- 100% ATTA BREAD",
    category: "Bakery",
    weight: "450.00 G",
    price: "60",
    image:
      "https://harvestgold.in/image/ProductImage/b4deeaf38ba0e4219e078a19d7859795.jpg",
  },
  {
    name: "HARVEST GOLD BROWN BREAD SMART PACK",
    category: "Bakery",
    weight: "250.00 G",
    price: "30",
    image:
      "https://harvestgold.in/image/ProductImage/e36713631d6c1b978d621ed654c54298.jpg",
  },
  {
    name: "HARVEST GOLD BOMBAY PAV",
    category: "Bakery",
    weight: "250.00 G",
    price: "45",
    image:
      "https://harvestgold.in/image/ProductImage/ddcdea8e66b6c2f3f52c54dc3df51713.png",
  },
  {
    name: "HARVEST GOLD- HEARTY BROWN BREAD",
    category: "Bakery",
    weight: "400.00 G",
    price: "55",
    image:
      "https://harvestgold.in/image/ProductImage/e36713631d6c1b978d621ed654c54298.jpg",
  },
  {
    name: "HARVEST GOLD WHITE BREAD",
    category: "Bakery",
    weight: "700.00 G",
    price: "60",
    image:
      "https://harvestgold.in/image/ProductImage/2e59c4e30312f9c14b5fbf18f31e2ccb.png",
  },
  {
    name: "HARVEST GOLD- MULTIGRAIN BREAD- 13 GRAINS & SEEDS",
    category: "Bakery",
    weight: "450.00 G",
    price: "70",
    image:
      "https://harvestgold.in/image/ProductImage/621c0748a21b315ec92b005107e3b1f8.jpg",
  },
  {
    name: "HARVEST GOLD BURGER BUNS",
    category: "Bakery",
    weight: "6.00 Pieces",
    price: "55",
    image:
      "https://harvestgold.in/image/ProductImage/d26f9632b5566f1e696a9d234085f58e.png",
  },
  {
    name: "HARVEST GOLD SWEET BUNS",
    category: "Bakery",
    weight: "2.00 Pieces",
    price: "40",
    image:
      "https://harvestgold.in/image/ProductImage/469ff8e684cece134c857e0cf014e1d0.png",
  },
  {
    name: "HARVEST GOLD BROWN BREAD",
    category: "Bakery",
    weight: "2.00 Pieces",
    price: "90",
    image:
      "https://harvestgold.in/image/ProductImage/e36713631d6c1b978d621ed654c54298.jpg",
  },
  {
    name: "AMUL COW MILK",
    category: "Dairy",
    weight: "500.00 ML",
    price: "29",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/assets/products/sliding_images/jpeg/89cb3ef5-0003-4100-bcf4-f97092f30997.jpg",
  },
  {
    name: "AMUL GOLD PASTEURISED FULL CREAM MILK",
    category: "Dairy",
    weight: "500.00 ML",
    price: "33",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/xrj8lmdwtc3ll27s9wvc",
  },
  {
    name: "Mother Dairy TONED MILK",
    category: "Dairy",
    weight: "500.00 ML",
    price: "28",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/assets/products/sliding_images/jpeg/e3f63e12-631f-4193-9160-ea4ddcbd6c5c.jpg",
  },
  {
    name: "Mother Dairy COW MILK",
    category: "Dairy",
    weight: "500.00 ML",
    price: "29",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/app/assets/products/sliding_images/jpeg/921dc7a0-0a78-44d0-80e9-f49f0cba1073.jpg",
  },
  {
    name: "Mother Dairy FULL CREAM MILK",
    category: "Dairy",
    weight: "500.00 ML",
    price: "33",
    image:
      "https://www.bigbasket.com/media/uploads/p/l/40147028_5-mother-dairy-full-cream-milk.jpg",
  },
  {
    name: "Roses",
    category: "Flowers",
    price: "120",
    image:
      "https://www.bigbasket.com/media/uploads/p/l/40196767_2-hoovu-fresh-assorted-roses-puja-flowers.jpg",
  },
  {
    name: "Orchids",
    category: "Flowers",
    price: "150",
    image:
      "https://www.bigbasket.com/media/uploads/p/l/40201307_1-fresho-white-orchids.jpg",
  },
  {
    name: "Shevanti",
    category: "Flowers",
    price: "150",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/246204fb8d4388d43c5892d71a30a9e3",
  },
];

async function seedProducts() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Delete existing products
    await Product.deleteMany({});
    console.log("Cleared existing products");

    // Insert new products
    const createdProducts = await Product.insertMany(products);
    console.log(`Successfully seeded ${createdProducts.length} products`);

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
}

// Run the seeding function
seedProducts();
