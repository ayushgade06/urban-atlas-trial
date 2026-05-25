"use client";

import { FormEvent, useState } from "react";

const localities = [
  "Gomti Nagar Extension",
  "Vrindavan Yojana",
  "Sushant Golf City",
  "Janakipuram Extension",
];

export default function SellerForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    locality: localities[0],
    plotSize: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/sellers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    if (response.ok) {
      setMessage("Plot submitted.");
      setForm({
        name: "",
        phone: "",
        locality: localities[0],
        plotSize: "",
        price: "",
      });
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
        placeholder="Plot size (in sq ft)"
        required
        value={form.plotSize}
        onChange={(event) => setForm({ ...form, plotSize: event.target.value })}
      />
      <input
        className="w-full rounded border p-3"
        placeholder="Price"
        required
        value={form.price}
        onChange={(event) => setForm({ ...form, price: event.target.value })}
      />
      <button
        className="w-full rounded bg-accent p-3 font-medium text-white disabled:opacity-60"
        disabled={loading}
        type="submit"
      >
        {loading ? "Submitting..." : "Submit Plot"}
      </button>
      {message && <p className="text-sm text-neutral-600">{message}</p>}
    </form>
  );
}

