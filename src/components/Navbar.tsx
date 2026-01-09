"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useCart } from "@/context/CartContext";
import { User } from "@/types";
import { logoutAction } from "@/actions/auth";

export default function Navbar({ user }: { user?: User | null }) {
    const { count } = useCart();

    return (
        <nav className={`${styles.navbar} glass-panel`}>
            <Link href="/" className={styles.logo}>
                X-Shop
            </Link>

            <div className={styles.links}>
                <Link href="/" className={styles.link}>Store</Link>
                {user && <Link href="/orders" className={styles.link}>Orders</Link>}
                {user && <Link href="/profile" className={styles.link}>Profile</Link>}
            </div>

            <div className={styles.actions}>
                {user ? (
                    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                        <span style={{ fontSize: "0.9rem", color: "var(--primary)" }}>{user.name}</span>
                        <form action={logoutAction}>
                            <button type="submit" className="btn btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}>
                                Logout
                            </button>
                        </form>
                    </div>
                ) : (
                    <Link href="/login" className="btn btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}>
                        Login
                    </Link>
                )}
                <Link href="/cart" className={styles.cartBtn}>
                    🛒
                    {count > 0 && <span className={styles.badge}>{count}</span>}
                </Link>
            </div>
        </nav>
    );
}

