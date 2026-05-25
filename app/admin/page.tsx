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
  "py-3 px-4 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide";
const tdClass = "py-3 px-4 text-sm text-[#111827]";
const trClass = "border-t border-[#E5E7EB] hover:bg-[#FAFAFA] transition-colors";

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
        <p className="text-sm text-[#6B7280]">Loading…</p>
      </div>
    );
  }

  if (!dashboard) {
    return <AdminLogin onSuccess={loadDashboard} />;
  }

  return (
    <>
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-[#111827] font-semibold text-sm tracking-tight"
          >
            Urban Atlas
          </Link>
          <span className="text-xs text-[#6B7280]">Admin</span>
        </div>
      </nav>

      <main className="min-h-screen pt-28 pb-24 px-6 bg-[#FAFAFA]">
        <div className="mx-auto max-w-5xl">

          {/* Page title */}
          <div className="mb-10">
            <h1 className="text-2xl font-bold text-[#111827] tracking-tight">
              Dashboard
            </h1>
            <p className="mt-1 text-sm text-[#6B7280]">
              Submissions overview and export.
            </p>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {[
              { label: "Buyers", value: dashboard.buyerCount },
              { label: "Sellers", value: dashboard.sellerCount },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-3xl border border-[#E5E7EB] bg-white px-7 py-6"
                style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
              >
                <p className="text-xs font-medium text-[#6B7280] uppercase tracking-wide mb-2">
                  {kpi.label}
                </p>
                <p className="text-4xl font-bold text-[#111827] tracking-tight">
                  {kpi.value}
                </p>
              </div>
            ))}
          </div>

          {/* Export row */}
          <div className="flex gap-3 mb-10">
            <a
              href="/api/export/buyers"
              className="rounded-full border border-[#E5E7EB] bg-white px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#FAFAFA] transition-colors"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
            >
              Export Buyers ↓
            </a>
            <a
              href="/api/export/sellers"
              className="rounded-full border border-[#E5E7EB] bg-white px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#FAFAFA] transition-colors"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
            >
              Export Sellers ↓
            </a>
          </div>

          {/* Recent Buyers */}
          <div
            className="rounded-3xl border border-[#E5E7EB] bg-white overflow-hidden mb-6"
            style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
          >
            <div className="px-6 py-5 border-b border-[#E5E7EB]">
              <h2 className="text-sm font-semibold text-[#111827]">
                Recent Buyers
              </h2>
            </div>
            {dashboard.recentBuyers.length === 0 ? (
              <div className="px-6 py-12 text-center text-sm text-[#6B7280]">
                No buyers yet.
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
                          <span className="inline-flex rounded-full border border-[#E5E7EB] bg-[#FAFAFA] px-2.5 py-0.5 text-xs font-medium text-[#111827]">
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
            className="rounded-3xl border border-[#E5E7EB] bg-white overflow-hidden"
            style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
          >
            <div className="px-6 py-5 border-b border-[#E5E7EB]">
              <h2 className="text-sm font-semibold text-[#111827]">
                Recent Sellers
              </h2>
            </div>
            {dashboard.recentSellers.length === 0 ? (
              <div className="px-6 py-12 text-center text-sm text-[#6B7280]">
                No sellers yet.
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
                          <span className="inline-flex rounded-full border border-[#E5E7EB] bg-[#FAFAFA] px-2.5 py-0.5 text-xs font-medium text-[#111827]">
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
