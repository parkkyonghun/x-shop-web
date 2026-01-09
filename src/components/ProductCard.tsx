"use client";

import { Product } from "@/types";
import styles from "./ProductCard.module.css";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();

    return (
        <div className={`glass-panel product-card ${styles.card}`}>
            <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.name} className={styles.image} />
            </div>
            <div className={styles.content}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.title}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.footer}>
                    <span className={styles.price}>${product.price}</span>
                    <button
                        className="btn btn-primary"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
