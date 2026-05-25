"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const field =
  "w-full rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/20 focus:border-[#FF385C] focus:bg-white transition-all";

const label = "block text-xs font-semibold text-[#374151] mb-1.5 tracking-wide";

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
      <div className="w-full max-w-sm animate-fade-up">

        {/* Logo + heading */}
        <div className="mb-10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-[#111827] font-semibold text-sm">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FF385C]" aria-hidden="true">
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="2.5" fill="white" />
                <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
              </svg>
            </span>
            Urban Atlas
          </Link>

          <h1 className="mt-9 text-[2rem] font-bold text-[#111827] tracking-[-0.025em]">
            Admin access
          </h1>
          <p className="mt-2 text-sm text-[#6B7280]">
            Sign in to manage submissions.
          </p>
        </div>

        <form
          className="space-y-4 rounded-[1.5rem] border border-[#E5E7EB] bg-white p-8"
          style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.05), 0 1px 6px rgba(0,0,0,0.04)" }}
          onSubmit={submit}
        >
          {error && (
            <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600 flex items-center gap-2 animate-fade-in">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M7 4v3.5M7 10v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              {error}
            </div>
          )}

          <div>
            <label className={label} htmlFor="admin-email">Email address</label>
            <input
              id="admin-email"
              className={field}
              placeholder="admin@urbanatlas.in"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className={label} htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              className={field}
              placeholder="••••••••"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            id="admin-signin"
            className="mt-2 w-full rounded-2xl bg-[#FF385C] py-3.5 text-sm font-semibold text-white hover:bg-[#e0304f] disabled:opacity-50 transition-colors"
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <span className="inline-flex items-center gap-2 justify-center">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"/>
                  <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                </svg>
                Signing in…
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-[#9CA3AF]">
          <Link href="/" className="hover:text-[#6B7280] transition-colors">← Back to home</Link>
        </p>
      </div>
    </div>
  );
}
