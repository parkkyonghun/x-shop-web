"use client";

import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useState, useMemo } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === "All" || product.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, category]);

  return (
    <div className="container">
      <header style={{ padding: "4rem 0", textAlign: "center" }}>
        <h1 className="heading-1">Future of Commerce</h1>
        <p style={{ fontSize: "1.2rem", color: "var(--muted)", maxWidth: "600px", margin: "0 auto 3rem" }}>
          Discover the latest in tech, wearables, and holographic gear.
          Curated for the modern explorer.
        </p>

        <div className="glass-panel" style={{
          padding: "1.5rem",
          display: "flex",
          gap: "1rem",
          maxWidth: "700px",
          margin: "0 auto",
          flexWrap: "wrap",
          alignItems: "center"
        }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              minWidth: "200px",
              padding: "0.8rem",
              borderRadius: "0.5rem",
              border: "1px solid var(--border)",
              background: "var(--background)",
              color: "var(--foreground)"
            }}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              padding: "0.8rem",
              borderRadius: "0.5rem",
              border: "1px solid var(--border)",
              background: "var(--background)",
              color: "var(--foreground)",
              minWidth: "150px"
            }}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </header>

      <section className="card-grid" style={{ marginBottom: "4rem" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "4rem", color: "var(--muted)" }}>
            <h3>No products found matching your criteria.</h3>
          </div>
        )}
      </section>
    </div>
  );
}
