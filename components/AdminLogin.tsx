"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const field =
  "w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/20 focus:border-[#FF385C] transition-all";

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
      setError("Invalid credentials. Please try again.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6 bg-[#FAFAFA]">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="mb-10 text-center">
          <Link href="/" className="text-[#111827] font-semibold text-sm tracking-tight">
            Urban Atlas
          </Link>
          <h1 className="mt-8 text-2xl font-bold text-[#111827] tracking-tight">
            Admin access
          </h1>
          <p className="mt-2 text-sm text-[#6B7280]">
            Sign in to manage submissions.
          </p>
        </div>

        <form
          className="space-y-3 rounded-3xl border border-[#E5E7EB] bg-white p-8"
          style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
          onSubmit={submit}
        >
          {error && (
            <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}
          <input
            id="admin-email"
            className={field}
            placeholder="Email address"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="admin-password"
            className={field}
            placeholder="Password"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            id="admin-signin"
            className="mt-1 w-full rounded-2xl bg-[#FF385C] py-3.5 text-sm font-medium text-white hover:bg-[#e0304f] disabled:opacity-50 transition-colors"
            disabled={loading}
            type="submit"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
