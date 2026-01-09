"use server";

import db from "@/lib/db";
import { getSession } from "@/lib/session";
import { CartItem } from "@/types";
import crypto from "crypto";
import { redirect } from "next/navigation";

export async function createOrder(cartItems: CartItem[], total: number) {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        return { error: "You must be logged in to place an order" };
    }

    const orderId = crypto.randomUUID();

    try {
        const insertOrder = db.prepare(
            "INSERT INTO orders (id, user_id, total, status) VALUES (?, ?, ?, ?)"
        );
        insertOrder.run(orderId, user.id, total, "Pending");

        const insertOrderItem = db.prepare(
            "INSERT INTO order_items (id, order_id, product_id, quantity, price) VALUES (?, ?, ?, ?, ?)"
        );

        const insertManyItems = db.transaction((items: CartItem[]) => {
            for (const item of items) {
                insertOrderItem.run(crypto.randomUUID(), orderId, item.id, item.quantity, item.price);
            }
        });

        insertManyItems(cartItems);
    } catch (err) {
        console.error("Failed to create order:", err);
        return { error: "Failed to create order" };
    }

    return { success: true, orderId };
}

export async function getOrders() {
    const session = await getSession();
    const user = session?.user;

    if (!user) return [];

    const orders = db.prepare("SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC").all(user.id);
    return orders;
}

export async function getOrderDetails(orderId: string) {
    const session = await getSession();
    const user = session?.user;

    if (!user) return null;

    const order = db.prepare("SELECT * FROM orders WHERE id = ? AND user_id = ?").get(orderId, user.id);

    if (!order) return null;

    const items = db.prepare(`
        SELECT oi.*, p.name, p.image 
        FROM order_items oi 
        JOIN products p ON oi.product_id = p.id 
        WHERE oi.order_id = ?
    `).all(orderId);

    return { ...order, items };
}
