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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#111827] font-semibold text-sm tracking-tight"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FF385C]" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="2.5" fill="white" />
                <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
              </svg>
            </span>
            Urban Atlas
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs text-[#6B7280] hover:text-[#111827] transition-colors"
          >
            ← Back
          </Link>
        </div>
      </nav>

      <main className="min-h-screen pt-24 pb-24 px-6 bg-[#FAFAFA]">
        {/* Centered layout */}
        <div className="mx-auto max-w-lg">

          {/* Page header */}
          <div className="mb-10 animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF385C] mb-4">Network Access</p>
            <h1 className="text-[2.25rem] font-bold text-[#111827] tracking-[-0.03em] leading-[1.1]">
              Join Urban Atlas<br />Network
            </h1>
            <p className="mt-3 text-[0.9375rem] text-[#6B7280] leading-relaxed">
              Submit buyer interest or a seller listing. Takes under a minute.
            </p>
          </div>

          {/* Card */}
          <div
            className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-8 animate-fade-up-delay-1"
            style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.05), 0 1px 6px rgba(0,0,0,0.04)" }}
          >
            {/* Tab switcher */}
            <div className="flex bg-[#FAFAFA] rounded-2xl p-1 border border-[#E5E7EB] mb-8">
              <button
                id="tab-buyer"
                className={`flex-1 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
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
                className={`flex-1 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                  tab === "seller"
                    ? "bg-white text-[#111827] shadow-sm border border-[#E5E7EB]"
                    : "text-[#6B7280] hover:text-[#111827]"
                }`}
                onClick={() => setTab("seller")}
              >
                Seller
              </button>
            </div>

            {/* Tab label */}
            <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-5">
              {tab === "buyer" ? "Buyer Requirement" : "Seller Listing"}
            </p>

            {tab === "buyer" ? <BuyerForm /> : <SellerForm />}
          </div>

          {/* Footer hint */}
          <p className="mt-6 text-center text-xs text-[#9CA3AF]">
            Have questions?{" "}
            <a
              href="https://wa.me/919527625400"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#16a34a] font-medium hover:underline"
            >
              Join WhatsApp Community
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
