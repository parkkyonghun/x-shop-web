"use client";

import { loginAction } from "@/actions/auth";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        setError("");

        const result = await loginAction(formData);

        if (result?.error) {
            setError(result.error);
            setLoading(false);
        } else {
            // Redirection happens on server, but we can double check or let it happen
        }
    }

    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
            <div className="glass-panel" style={{ padding: "3rem", width: "100%", maxWidth: "450px" }}>
                <h1 className="heading-2" style={{ textAlign: "center", marginBottom: "2rem" }}>Welcome Back</h1>
                {error && (
                    <div style={{ background: "rgba(220, 38, 38, 0.2)", color: "#f87171", padding: "1rem", borderRadius: "0.5rem", marginBottom: "1.5rem", textAlign: "center" }}>
                        {error}
                    </div>
                )}
                <form action={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem" }}>Email</label>
                        <input
                            name="email"
                            type="email"
                            required
                            style={{ width: "100%", padding: "1rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)", background: "var(--background)", color: "var(--foreground)" }}
                        />
                    </div>
                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem" }}>Password</label>
                        <input
                            name="password"
                            type="password"
                            required
                            style={{ width: "100%", padding: "1rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)", background: "var(--background)", color: "var(--foreground)" }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ width: "100%", padding: "1rem" }}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
                <p style={{ textAlign: "center", marginTop: "1.5rem", color: "var(--muted)" }}>
                    Don't have an account? <Link href="/register" style={{ color: "var(--primary)" }}>Register</Link>
                </p>
            </div>
        </div>
    );
}
