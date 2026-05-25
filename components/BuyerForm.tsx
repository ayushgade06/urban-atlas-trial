"use client";

import { FormEvent, useState } from "react";

const localities = [
  "Gomti Nagar Extension",
  "Vrindavan Yojana",
  "Sushant Golf City",
  "Janakipuram Extension",
];

const field =
  "w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/20 focus:border-[#FF385C] transition-all appearance-none";

export default function BuyerForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    locality: localities[0],
    budget: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");

    const response = await fetch("/api/buyers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    if (response.ok) {
      setStatus("success");
      setForm({ name: "", phone: "", locality: localities[0], budget: "" });
    } else {
      setStatus("error");
    }
  }

  return (
    <form className="space-y-3" onSubmit={submit}>
      {status === "success" && (
        <div className="rounded-2xl border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-700">
          ✓ Buyer requirement submitted successfully.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
          Something went wrong. Please try again.
        </div>
      )}

      <input
        id="buyer-name"
        className={field}
        placeholder="Full name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        id="buyer-phone"
        className={field}
        placeholder="Phone number"
        required
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <div className="relative">
        <select
          id="buyer-locality"
          className={field + " pr-10 cursor-pointer"}
          value={form.locality}
          onChange={(e) => setForm({ ...form, locality: e.target.value })}
        >
          {localities.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <input
        id="buyer-budget"
        className={field}
        placeholder="Budget (e.g. ₹50L – ₹1Cr)"
        required
        value={form.budget}
        onChange={(e) => setForm({ ...form, budget: e.target.value })}
      />

      <button
        id="buyer-submit"
        className="mt-1 w-full rounded-2xl bg-[#FF385C] py-3.5 text-sm font-medium text-white hover:bg-[#e0304f] disabled:opacity-50 transition-colors"
        disabled={loading}
        type="submit"
      >
        {loading ? "Submitting…" : "Submit Buyer Requirement"}
      </button>
    </form>
  );
}
