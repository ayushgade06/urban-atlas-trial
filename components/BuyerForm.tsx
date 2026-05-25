"use client";

import { FormEvent, useState } from "react";

const localities = [
  "Gomti Nagar Extension",
  "Vrindavan Yojana",
  "Sushant Golf City",
  "Janakipuram Extension",
];

export default function BuyerForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    locality: localities[0],
    budget: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/buyers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    if (response.ok) {
      setMessage("Buyer requirement submitted.");
      setForm({ name: "", phone: "", locality: localities[0], budget: "" });
    } else {
      setMessage("Something went wrong.");
    }
  }

  return (
    <form className="mt-8 space-y-4" onSubmit={submit}>
      <input
        className="w-full rounded border p-3"
        placeholder="Name"
        required
        value={form.name}
        onChange={(event) => setForm({ ...form, name: event.target.value })}
      />
      <input
        className="w-full rounded border p-3"
        placeholder="Phone"
        required
        value={form.phone}
        onChange={(event) => setForm({ ...form, phone: event.target.value })}
      />
      <select
        className="w-full rounded border p-3"
        value={form.locality}
        onChange={(event) => setForm({ ...form, locality: event.target.value })}
      >
        {localities.map((locality) => (
          <option key={locality}>{locality}</option>
        ))}
      </select>
      <input
        className="w-full rounded border p-3"
        placeholder="Budget"
        required
        value={form.budget}
        onChange={(event) => setForm({ ...form, budget: event.target.value })}
      />
      <button
        className="w-full rounded bg-accent p-3 font-medium text-white disabled:opacity-60"
        disabled={loading}
        type="submit"
      >
        {loading ? "Submitting..." : "Submit Buyer Requirement"}
      </button>
      {message && <p className="text-sm text-neutral-600">{message}</p>}
    </form>
  );
}

