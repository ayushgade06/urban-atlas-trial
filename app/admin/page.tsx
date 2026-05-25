"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import AdminLogin from "@/components/AdminLogin";

type Buyer = {
  id: string;
  name: string;
  phone: string;
  locality: string;
  budget: string;
};

type Seller = {
  id: string;
  name: string;
  phone: string;
  locality: string;
  plotSize: string;
  price: string;
};

type Dashboard = {
  buyerCount: number;
  sellerCount: number;
  recentBuyers: Buyer[];
  recentSellers: Seller[];
};

const thClass =
  "py-3.5 px-5 text-left text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-widest";
const tdClass = "py-4 px-5 text-sm text-[#111827]";
const trClass = "border-t border-[#F3F4F6] hover:bg-[#FAFAFA] transition-colors duration-100";

export default function AdminPage() {
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [loading, setLoading] = useState(true);

  const loadDashboard = useCallback(async () => {
    setLoading(true);
    const response = await fetch("/api/admin/dashboard");
    setDashboard(response.ok ? await response.json() : null);
    setLoading(false);
  }, []);

  useEffect(() => {
    void loadDashboard();
  }, [loadDashboard]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FAFAFA]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 rounded-full border-2 border-[#FF385C] border-t-transparent animate-spin" />
          <p className="text-sm text-[#9CA3AF]">Loading dashboard…</p>
        </div>
      </div>
    );
  }

  if (!dashboard) {
    return <AdminLogin onSuccess={loadDashboard} />;
  }

  return (
    <>
      {/* Top bar */}
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
          <span className="badge">Admin</span>
        </div>
      </nav>

      <main className="min-h-screen pt-24 pb-28 px-6 bg-[#FAFAFA]">
        <div className="mx-auto max-w-5xl">

          {/* Page title */}
          <div className="mb-12 animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF385C] mb-3">Admin</p>
            <h1 className="text-[2rem] font-bold text-[#111827] tracking-[-0.025em]">
              Dashboard
            </h1>
            <p className="mt-1.5 text-[0.9375rem] text-[#6B7280]">
              Submissions overview and export.
            </p>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-2 gap-4 mb-8 animate-fade-up-delay-1">
            {[
              { label: "Total Buyers", value: dashboard.buyerCount, icon: "👤" },
              { label: "Total Sellers", value: dashboard.sellerCount, icon: "🏠" },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-[1.25rem] border border-[#E5E7EB] bg-white px-8 py-7"
                style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}
              >
                <p className="text-sm text-[#9CA3AF] mb-3 flex items-center gap-2">
                  <span>{kpi.icon}</span>
                  {kpi.label}
                </p>
                <p className="text-[3rem] font-black text-[#111827] tracking-tight leading-none">
                  {kpi.value}
                </p>
              </div>
            ))}
          </div>

          {/* Export row */}
          <div className="flex flex-wrap gap-3 mb-10 animate-fade-up-delay-1">
            <a
              href="/api/export/buyers"
              className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#FAFAFA] transition-colors"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v7M4 7l3 3 3-3M2 11h10" stroke="#6B7280" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Export Buyers
            </a>
            <a
              href="/api/export/sellers"
              className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#FAFAFA] transition-colors"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v7M4 7l3 3 3-3M2 11h10" stroke="#6B7280" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Export Sellers
            </a>
          </div>

          {/* Recent Buyers */}
          <div
            className="rounded-[1.25rem] border border-[#E5E7EB] bg-white overflow-hidden mb-5 animate-fade-up-delay-2"
            style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}
          >
            <div className="px-6 py-5 border-b border-[#F3F4F6] flex items-center justify-between">
              <h2 className="text-sm font-semibold text-[#111827]">Recent Buyers</h2>
              <span className="badge">{dashboard.recentBuyers.length} entries</span>
            </div>
            {dashboard.recentBuyers.length === 0 ? (
              <div className="px-6 py-14 text-center">
                <p className="text-sm text-[#9CA3AF]">No buyers submitted yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#FAFAFA]">
                    <tr>
                      <th className={thClass}>Name</th>
                      <th className={thClass}>Phone</th>
                      <th className={thClass}>Locality</th>
                      <th className={thClass}>Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dashboard.recentBuyers.map((buyer) => (
                      <tr key={buyer.id} className={trClass}>
                        <td className={tdClass + " font-medium"}>{buyer.name}</td>
                        <td className={tdClass + " text-[#6B7280]"}>{buyer.phone}</td>
                        <td className={tdClass + " text-[#6B7280]"}>{buyer.locality}</td>
                        <td className={tdClass}>
                          <span className="inline-flex rounded-full border border-[#E5E7EB] bg-[#FAFAFA] px-2.5 py-1 text-xs font-medium text-[#111827]">
                            {buyer.budget}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Recent Sellers */}
          <div
            className="rounded-[1.25rem] border border-[#E5E7EB] bg-white overflow-hidden animate-fade-up-delay-3"
            style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}
          >
            <div className="px-6 py-5 border-b border-[#F3F4F6] flex items-center justify-between">
              <h2 className="text-sm font-semibold text-[#111827]">Recent Sellers</h2>
              <span className="badge">{dashboard.recentSellers.length} entries</span>
            </div>
            {dashboard.recentSellers.length === 0 ? (
              <div className="px-6 py-14 text-center">
                <p className="text-sm text-[#9CA3AF]">No sellers submitted yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#FAFAFA]">
                    <tr>
                      <th className={thClass}>Name</th>
                      <th className={thClass}>Phone</th>
                      <th className={thClass}>Locality</th>
                      <th className={thClass}>Plot Size</th>
                      <th className={thClass}>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dashboard.recentSellers.map((seller) => (
                      <tr key={seller.id} className={trClass}>
                        <td className={tdClass + " font-medium"}>{seller.name}</td>
                        <td className={tdClass + " text-[#6B7280]"}>{seller.phone}</td>
                        <td className={tdClass + " text-[#6B7280]"}>{seller.locality}</td>
                        <td className={tdClass + " text-[#6B7280]"}>{seller.plotSize}</td>
                        <td className={tdClass}>
                          <span className="inline-flex rounded-full border border-[#E5E7EB] bg-[#FAFAFA] px-2.5 py-1 text-xs font-medium text-[#111827]">
                            {seller.price}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </main>
    </>
  );
}
