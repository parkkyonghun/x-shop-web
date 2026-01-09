import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const dbPath = path.join(process.cwd(), "x-shop.db");

// Ensure db file exists
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, "");
}

const db = new Database(dbPath);

// Initialize tables
// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    category TEXT,
    image TEXT,
    rating REAL,
    stock INTEGER DEFAULT 100,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    total REAL NOT NULL,
    status TEXT DEFAULT 'Pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS order_items (
    id TEXT PRIMARY KEY,
    order_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    price REAL NOT NULL,
    FOREIGN KEY(order_id) REFERENCES orders(id),
    FOREIGN KEY(product_id) REFERENCES products(id)
  );
`);

// Seed products if empty
const productCount = db.prepare("SELECT count(*) as count FROM products").get() as { count: number };
if (productCount.count === 0) {
  const seedProducts = [
    {
      id: "1",
      name: "Neon Quantum Headset",
      description: "Immersive audio experience with active noise cancellation and RBG lighting.",
      price: 299.99,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      rating: 4.8,
    },
    {
      id: "2",
      name: "CyberWatch Series X",
      description: "Advanced health tracking with holographic display interface.",
      price: 399.99,
      category: "Wearables",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      rating: 4.6,
    },
    {
      id: "3",
      name: "ErgoMech Keypad",
      description: "Split mechanical keyboard for ultimate programming efficiency.",
      price: 159.00,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b91add1?w=800&q=80",
      rating: 4.9,
    },
    {
      id: "4",
      name: "Hololens Glasses",
      description: "AR glasses that overlay digital information on the real world.",
      price: 1200.00,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281e960?w=800&q=80",
      rating: 4.5,
    },
    {
      id: "5",
      name: "Sonic Bass Speaker",
      description: "Portable 360-degree sound with deep bass technology.",
      price: 199.50,
      category: "Audio",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      rating: 4.7,
    },
    {
      id: "6",
      name: "Drone X1",
      description: "4K camera drone with autonomous follow modes.",
      price: 850.00,
      category: "Drones",
      image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800&q=80",
      rating: 4.8,
    },
  ];

  const insertProduct = db.prepare(
    "INSERT INTO products (id, name, description, price, category, image, rating) VALUES (@id, @name, @description, @price, @category, @image, @rating)"
  );

  const insertMany = db.transaction((products) => {
    for (const product of products) insertProduct.run(product);
  });

  insertMany(seedProducts);
  console.log("Seeded products table");
}

export default db;
