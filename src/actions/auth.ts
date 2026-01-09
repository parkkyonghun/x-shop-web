"use server";

import db from "@/lib/db";
import { createSession, logout } from "@/lib/session";
import bcrypt from "bcryptjs";
// import { v4 as uuidv4 } from "uuid";
import { redirect } from "next/navigation";

// Since uuid isn't installed, let's use a simple random string for now or install it.
// I'll use crypto.randomUUID() which is native in Node > 19
import crypto from "crypto";

export async function registerAction(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name || !email || !password) {
        return { error: "All fields are required" };
    }

    // Check if user exists
    const existingUser = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
    if (existingUser) {
        return { error: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const id = crypto.randomUUID();

    // Insert user
    try {
        const stmt = db.prepare("INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)");
        stmt.run(id, name, email, hashedPassword);
    } catch (err) {
        console.error(err);
        return { error: "Database error" };
    }

    // Create session
    await createSession({ id, name, email });
    redirect("/");
}

export async function loginAction(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const user: any = db.prepare("SELECT * FROM users WHERE email = ?").get(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return { error: "Invalid credentials" };
    }

    await createSession({ id: user.id, name: user.name, email: user.email, avatar: user.avatar });
    redirect("/");
}

export async function logoutAction() {
    await logout();
    redirect("/login");
}
