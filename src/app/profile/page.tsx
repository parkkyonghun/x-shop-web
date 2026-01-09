import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/login");
    }

    const initials = user.name
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    return (
        <div className="container">
            <h1 className="heading-1">My Profile</h1>
            <div className="glass-panel" style={{ padding: "3rem", display: "flex", gap: "2rem", alignItems: "center", maxWidth: "800px", margin: "0 auto" }}>
                <div style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "white"
                }}>
                    {initials}
                </div>
                <div>
                    <h2 className="heading-2">{user.name}</h2>
                    <p style={{ fontSize: "1.2rem", color: "var(--muted)", marginBottom: "1rem" }}>{user.email}</p>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <button className="btn btn-primary">Edit Profile</button>
                        <button className="btn btn-secondary">Change Password</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
