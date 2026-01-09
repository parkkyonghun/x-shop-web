import Link from "next/link";
import { getOrders } from "@/actions/order";

export default async function OrdersPage() {
    const orders: any[] = await getOrders();

    return (
        <div className="container">
            <h1 className="heading-1">Order History</h1>
            <div className="glass-panel" style={{ padding: "2rem" }}>
                {orders.length === 0 ? (
                    <div style={{ padding: "2rem", textAlign: "center", color: "var(--muted)" }}>
                        No orders found.
                    </div>
                ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr style={{ borderBottom: "1px solid var(--border)", textAlign: "left" }}>
                                <th style={{ padding: "1rem" }}>Order ID</th>
                                <th style={{ padding: "1rem" }}>Date</th>
                                <th style={{ padding: "1rem" }}>Total</th>
                                <th style={{ padding: "1rem" }}>Status</th>
                                <th style={{ padding: "1rem" }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} style={{ borderBottom: "1px solid var(--border)" }}>
                                    <td style={{ padding: "1rem", color: "var(--primary)" }}>
                                        <Link href={`/orders/${order.id}`} style={{ textDecoration: "underline", color: "inherit" }}>
                                            #{order.id.slice(0, 8)}
                                        </Link>
                                    </td>
                                    <td style={{ padding: "1rem" }}>{new Date(order.created_at).toLocaleDateString()}</td>
                                    <td style={{ padding: "1rem" }}>${order.total.toFixed(2)}</td>
                                    <td style={{ padding: "1rem" }}>
                                        <span style={{
                                            padding: "0.25rem 0.5rem",
                                            borderRadius: "4px",
                                            background: order.status === "Delivered" ? "rgba(16, 185, 129, 0.2)" : "rgba(245, 158, 11, 0.2)",
                                            color: order.status === "Delivered" ? "#10b981" : "#f59e0b",
                                            fontSize: "0.9rem"
                                        }}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: "1rem" }}>
                                        <Link href={`/orders/${order.id}`} className="btn btn-secondary" style={{ padding: "0.25rem 0.5rem", fontSize: "0.8rem" }}>
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
