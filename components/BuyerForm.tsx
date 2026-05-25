"use client";

import { FormEvent, useState } from "react";

const localities = [
  "Gomti Nagar Extension",
  "Vrindavan Yojana",
  "Sushant Golf City",
  "Janakipuram Extension",
];

const field =
  "w-full rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#FF385C]/20 focus:border-[#FF385C] focus:bg-white transition-all appearance-none";

const label = "block text-xs font-semibold text-[#374151] mb-1.5 tracking-wide";

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

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-10 gap-5 text-center animate-fade-up">
        <div className="h-14 w-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="text-base font-semibold text-[#111827]">Requirement submitted!</p>
          <p className="mt-1 text-sm text-[#6B7280]">We&apos;ve received your buyer interest.</p>
        </div>
        <button
          className="text-sm text-[#FF385C] font-medium hover:underline"
          onClick={() => setStatus("idle")}
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={submit}>
      {status === "error" && (
        <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600 flex items-center gap-2 animate-fade-in">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M7 4v3.5M7 10v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Something went wrong. Please try again.
        </div>
      )}

      <div>
        <label className={label} htmlFor="buyer-name">Full name</label>
        <input
          id="buyer-name"
          className={field}
          placeholder="e.g. Rahul Sharma"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>

      <div>
        <label className={label} htmlFor="buyer-phone">Phone number</label>
        <input
          id="buyer-phone"
          className={field}
          placeholder="e.g. 98765 43210"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>

      <div>
        <label className={label} htmlFor="buyer-locality">Preferred locality</label>
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
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
            width="16" height="16" viewBox="0 0 16 16" fill="none"
          >
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div>
        <label className={label} htmlFor="buyer-budget">Budget range</label>
        <input
          id="buyer-budget"
          className={field}
          placeholder="e.g. ₹50L – ₹1Cr"
          required
          value={form.budget}
          onChange={(e) => setForm({ ...form, budget: e.target.value })}
        />
      </div>

      <button
        id="buyer-submit"
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
            Submitting…
          </span>
        ) : (
          "Submit Buyer Requirement"
        )}
      </button>
    </form>
  );
}
