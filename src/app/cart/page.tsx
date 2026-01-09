"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import styles from "./page.module.css";

export default function CartPage() {
    const { items, removeFromCart, total, clearCart } = useCart();

    if (items.length === 0) {
        return (
            <div className="container" style={{ textAlign: "center", paddingTop: "4rem" }}>
                <h1 className="heading-2">Your cart is empty</h1>
                <Link href="/" className="btn btn-primary" style={{ marginTop: "1rem" }}>
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container">
            <h1 className="heading-1">Shopping Cart</h1>

            <div className={`glass-panel ${styles.cartContainer}`}>
                <div className={styles.items}>
                    {items.map((item) => (
                        <div key={item.id} className={styles.item}>
                            <img src={item.image} alt={item.name} className={styles.image} />
                            <div className={styles.details}>
                                <h3>{item.name}</h3>
                                <p className={styles.price}>${item.price}</p>
                                <p className={styles.qty}>Qty: {item.quantity}</p>
                            </div>
                            <div className={styles.actions}>
                                <span className={styles.subtotal}>${(item.price * item.quantity).toFixed(2)}</span>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="btn btn-secondary"
                                    style={{ padding: "0.4rem 0.8rem", fontSize: "0.8rem", color: "#ef4444", borderColor: "#ef4444" }}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.summary}>
                    <div className={styles.summaryRow}>
                        <span>Subtotal</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <div className={styles.summaryRow}>
                        <span>Tax (10%)</span>
                        <span>${(total * 0.1).toFixed(2)}</span>
                    </div>
                    <div className={`${styles.summaryRow} ${styles.total}`}>
                        <span>Total</span>
                        <span>${(total * 1.1).toFixed(2)}</span>
                    </div>

                    <div className={styles.summaryActions}>
                        <button onClick={clearCart} className="btn btn-secondary" style={{ width: "100%" }}>
                            Clear Cart
                        </button>
                        <Link href="/checkout" className="btn btn-primary" style={{ width: "100%", textAlign: "center" }}>
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
