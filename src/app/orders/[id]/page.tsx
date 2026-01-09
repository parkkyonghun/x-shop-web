import { getOrderDetails } from "@/actions/order";
import { notFound } from "next/navigation";
import Link from "next/link";
// For static export, generate static params for all order IDs
export async function generateStaticParams() {
  // Return empty array to generate only the routes accessed at build time
  // Or fetch order IDs from your data source:
  // const orders = await getAllOrders();
  // return orders.map((order) => ({ id: order.id }));
  return [];
}

import styles from "./page.module.css";

export default async function OrderDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const order: any = await getOrderDetails(id);

    if (!order) {
        notFound();
    }

    return (
        <div className="container">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                <Link href="/orders" style={{ color: "var(--muted)", fontSize: "1.5rem" }}>←</Link>
                <h1 className="heading-1" style={{ marginBottom: 0 }}>Order Details</h1>
            </div>

            <div className="glass-panel" style={{ padding: "2rem" }}>
                <div className={styles.header}>
                    <div>
                        <p className={styles.label}>Order ID</p>
                        <p className={styles.value}>#{order.id}</p>
                    </div>
                    <div>
                        <p className={styles.label}>Date</p>
                        <p className={styles.value}>{new Date(order.created_at).toLocaleString()}</p>
                    </div>
                    <div>
                        <p className={styles.label}>Status</p>
                        <span className={styles.status} data-status={order.status}>{order.status}</span>
                    </div>
                </div>

                <div className={styles.items}>
                    <h2 className="heading-2" style={{ fontSize: "1.5rem", marginTop: "2rem" }}>Items</h2>
                    {order.items.map((item: any) => (
                        <div key={item.id} className={styles.item}>
                            <img src={item.image} alt={item.name} className={styles.image} />
                            <div className={styles.details}>
                                <h3>{item.name}</h3>
                                <p className={styles.price}>${item.price.toFixed(2)} x {item.quantity}</p>
                            </div>
                            <div className={styles.total}>
                                ${(item.price * item.quantity).toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.footer}>
                    <div className={styles.row}>
                        <span>Subtotal</span>
                        <span>${(order.total / 1.1).toFixed(2)}</span>
                    </div>
                    <div className={styles.row}>
                        <span>Tax</span>
                        <span>${(order.total - (order.total / 1.1)).toFixed(2)}</span>
                    </div>
                    <div className={`${styles.row} ${styles.grandTotal}`}>
                        <span>Total</span>
                        <span>${order.total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
