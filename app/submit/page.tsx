"use client";

import { useState } from "react";
import BuyerForm from "@/components/BuyerForm";
import SellerForm from "@/components/SellerForm";

export default function SubmitPage() {
  const [tab, setTab] = useState<"buyer" | "seller">("buyer");

  return (
    <main className="mx-auto min-h-screen max-w-md px-6 py-12">
      <h1 className="text-3xl font-semibold">Submit Details</h1>
      <div className="mt-8 flex border-b">
        <button
          className={`w-1/2 p-3 ${tab === "buyer" ? "border-b-2 border-accent text-accent" : ""}`}
          onClick={() => setTab("buyer")}
        >
          Buyer
        </button>
        <button
          className={`w-1/2 p-3 ${tab === "seller" ? "border-b-2 border-accent text-accent" : ""}`}
          onClick={() => setTab("seller")}
        >
          Seller
        </button>
      </div>
      {tab === "buyer" ? <BuyerForm /> : <SellerForm />}
    </main>
  );
}

