"use client";

import { useState } from "react";
import Link from "next/link";
import BuyerForm from "@/components/BuyerForm";
import SellerForm from "@/components/SellerForm";

export default function SubmitPage() {
  const [tab, setTab] = useState<"buyer" | "seller">("buyer");

  return (
    <>
      {/* Slim top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-[#111827] font-semibold text-sm tracking-tight"
          >
            Urban Atlas
          </Link>
          <Link href="/" className="text-xs text-[#6B7280] hover:text-[#111827] transition-colors">
            ← Back
          </Link>
        </div>
      </nav>

      <main className="min-h-screen pt-28 pb-24 px-6 bg-[#FAFAFA]">
        <div className="mx-auto max-w-md">

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-[2rem] font-bold text-[#111827] tracking-tight leading-tight">
              Join Urban Atlas<br />Network
            </h1>
            <p className="mt-3 text-sm text-[#6B7280]">
              Submit buyer interest or seller listing.
            </p>
          </div>

          {/* Card wrapper */}
          <div
            className="rounded-3xl border border-[#E5E7EB] bg-white p-8"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
          >
            {/* Segmented tabs */}
            <div className="flex bg-[#FAFAFA] rounded-2xl p-1 border border-[#E5E7EB] mb-8">
              <button
                id="tab-buyer"
                className={`flex-1 py-2.5 text-sm font-medium rounded-xl transition-all ${
                  tab === "buyer"
                    ? "bg-white text-[#111827] shadow-sm border border-[#E5E7EB]"
                    : "text-[#6B7280] hover:text-[#111827]"
                }`}
                onClick={() => setTab("buyer")}
              >
                Buyer
              </button>
              <button
                id="tab-seller"
                className={`flex-1 py-2.5 text-sm font-medium rounded-xl transition-all ${
                  tab === "seller"
                    ? "bg-white text-[#111827] shadow-sm border border-[#E5E7EB]"
                    : "text-[#6B7280] hover:text-[#111827]"
                }`}
                onClick={() => setTab("seller")}
              >
                Seller
              </button>
            </div>

            {tab === "buyer" ? <BuyerForm /> : <SellerForm />}
          </div>
        </div>
      </main>
    </>
  );
}
