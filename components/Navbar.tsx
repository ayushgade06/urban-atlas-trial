"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB]">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-6">

        {/* Logo and Subtitle */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 select-none group"
        >
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FF385C]"
            aria-hidden="true"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="4.5" fill="white" />
              <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2.2" strokeOpacity="0.6" />
            </svg>
          </span>
          <div className="flex flex-col text-left">
            <span className="text-[#111827] font-bold text-base tracking-tight leading-none">
              Urban Atlas
            </span>
            <span className="text-[10px] text-[#6B7280] font-medium tracking-wide mt-0.5 uppercase">
              Plot Intelligence for Lucknow
            </span>
          </div>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-7 text-xs font-semibold text-[#6B7280]">
          {["Inventory", "Localities", "Intelligence", "Broker Network", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href="#"
              className="hover:text-[#111827] transition-colors tracking-wide"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Actions (Desktop) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Join WhatsApp Button */}
          <a
            href="https://wa.me/919527625400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-xs font-semibold text-[#16a34a] hover:bg-green-50 hover:border-green-200 transition-colors shadow-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Join WhatsApp
          </a>

          {/* Request Access Button */}
          <Link
            href="/submit"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#FF385C] px-5 py-2 text-xs font-semibold text-white hover:bg-[#e0304f] transition-colors shadow-sm"
          >
            Request Access
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-1.5 rounded-lg hover:bg-[#FAFAFA] transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-5 bg-[#111827] transition-transform origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-px w-5 bg-[#111827] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-[#111827] transition-transform origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[#E5E7EB] bg-white px-6 py-5 flex flex-col gap-4 animate-fade-in">
          {["Inventory", "Localities", "Intelligence", "Broker Network", "About", "Contact"].map((item) => (
            <Link key={item} href="#" className="text-sm font-semibold text-[#111827]" onClick={() => setMenuOpen(false)}>
              {item}
            </Link>
          ))}
          <a
            href="https://wa.me/919527625400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#16a34a]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Join WhatsApp
          </a>
          <Link
            href="/submit"
            className="inline-flex items-center justify-center rounded-full bg-[#FF385C] px-5 py-2.5 text-sm font-semibold text-white"
            onClick={() => setMenuOpen(false)}
          >
            Request Access
          </Link>
        </div>
      )}
    </nav>
  );
}
