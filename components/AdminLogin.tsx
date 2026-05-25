"use client";

import { FormEvent, useState } from "react";

export default function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    setLoading(false);
    if (response.ok) {
      onSuccess();
    } else {
      setError("Invalid credentials.");
    }
  }

  return (
    <form className="mx-auto mt-16 max-w-sm space-y-4" onSubmit={submit}>
      <h1 className="text-2xl font-semibold">Admin Login</h1>
      <input
        className="w-full rounded border p-3"
        placeholder="Email"
        required
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className="w-full rounded border p-3"
        placeholder="Password"
        required
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        className="w-full rounded bg-accent p-3 font-medium text-white disabled:opacity-60"
        disabled={loading}
        type="submit"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
      {error && <p className="text-sm text-accent">{error}</p>}
    </form>
  );
}

