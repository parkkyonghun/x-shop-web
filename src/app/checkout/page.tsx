"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createOrder } from "@/actions/order";

export default function CheckoutPage() {
    const { items, total, clearCart } = useCart();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (items.length === 0) {
            setError("Your cart is empty");
            setLoading(false);
            return;
        }

        const result = await createOrder(items, total * 1.1); // Including tax

        if (result.error) {
            setError(result.error);
            setLoading(false);
        } else {
            clearCart();
            router.push("/orders");
        }
    };

    return (
        <div className="container">
            <h1 className="heading-1">Checkout</h1>
            <div className="glass-panel" style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
                <h2 className="heading-2">Shipping Information</h2>

                {error && (
                    <div style={{ background: "rgba(220, 38, 38, 0.2)", color: "#f87171", padding: "1rem", borderRadius: "0.5rem", marginBottom: "1.5rem", textAlign: "center" }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem" }}>Full Name</label>
                        <input
                            type="text"
                            required
                            style={{ width: "100%", padding: "0.8rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "var(--background)", color: "var(--foreground)" }}
                            defaultValue="John Doe"
                        />
                    </div>
                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem" }}>Address</label>
                        <input
                            type="text"
                            required
                            style={{ width: "100%", padding: "0.8rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "var(--background)", color: "var(--foreground)" }}
                            defaultValue="123 Future St, Tech City"
                        />
                    </div>
                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem" }}>Credit Card</label>
                        <input
                            type="text"
                            required
                            placeholder="0000 0000 0000 0000"
                            style={{ width: "100%", padding: "0.8rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "var(--background)", color: "var(--foreground)" }}
                            defaultValue="4242 4242 4242 4242"
                        />
                    </div>

                    <div style={{ marginTop: "1rem", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.2rem", fontWeight: "bold" }}>
                            <span>Total to Pay</span>
                            <span>${(total * 1.1).toFixed(2)}</span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        {loading ? "Processing..." : "Place Order"}
                    </button>
                </form>
            </div>
        </div>
    );
}
