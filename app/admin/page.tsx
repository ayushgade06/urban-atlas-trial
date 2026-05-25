"use client";

import { useCallback, useEffect, useState } from "react";
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
    return <p className="p-8">Loading...</p>;
  }

  if (!dashboard) {
    return <AdminLogin onSuccess={loadDashboard} />;
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        <div className="flex gap-3">
          <a className="rounded bg-accent px-4 py-2 text-white" href="/api/export/buyers">
            Export Buyers
          </a>
          <a className="rounded bg-accent px-4 py-2 text-white" href="/api/export/sellers">
            Export Sellers
          </a>
        </div>
      </div>
      <div className="mt-10 flex gap-12 text-lg">
        <p>Buyer Count: <strong>{dashboard.buyerCount}</strong></p>
        <p>Seller Count: <strong>{dashboard.sellerCount}</strong></p>
      </div>
      <h2 className="mt-10 text-xl font-semibold">Recent Buyers</h2>
      <table className="mt-3 w-full text-left text-sm">
        <thead><tr><th>Name</th><th>Phone</th><th>Locality</th><th>Budget</th></tr></thead>
        <tbody>
          {dashboard.recentBuyers.map((buyer) => (
            <tr key={buyer.id} className="border-t">
              <td className="py-3">{buyer.name}</td><td>{buyer.phone}</td>
              <td>{buyer.locality}</td><td>{buyer.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="mt-10 text-xl font-semibold">Recent Sellers</h2>
      <table className="mt-3 w-full text-left text-sm">
        <thead><tr><th>Name</th><th>Phone</th><th>Locality</th><th>Plot Size</th><th>Price</th></tr></thead>
        <tbody>
          {dashboard.recentSellers.map((seller) => (
            <tr key={seller.id} className="border-t">
              <td className="py-3">{seller.name}</td><td>{seller.phone}</td>
              <td>{seller.locality}</td><td>{seller.plotSize}</td><td>{seller.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

