import Link from "next/link";
import Navbar from "@/components/Navbar";

const WA_LINK = "https://wa.me/919527625400";

// SVG Illustrations as pure React Components for crisp rendering

function ActiveMapIllustration() {
  return (
    <div className="relative w-full h-[260px] md:h-[300px] rounded-2xl overflow-hidden bg-[#EAEFF2] border border-[#E5E7EB]">
      {/* Background Map Grid & Roads */}
      <svg className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft Landmass shapes */}
        <path d="M-20 80 C 100 120, 200 40, 300 90 C 400 140, 480 80, 520 120 L520 400 L-20 400 Z" fill="#F3F6F8" />
        <path d="M120 -20 C 180 50, 320 20, 380 90 C 440 160, 490 200, 550 250 L550 -20 Z" fill="#EEF2F4" />
        
        {/* Secondary soft green parks */}
        <rect x="40" y="50" width="80" height="90" rx="12" fill="#E2F0D9" opacity="0.8" />
        <rect x="280" y="160" width="100" height="70" rx="16" fill="#E2F0D9" opacity="0.7" />
        <rect x="180" y="280" width="140" height="90" rx="20" fill="#E2F0D9" opacity="0.6" />

        {/* Rivers/Water body */}
        <path d="M-10 210 Q 150 180, 260 250 T 480 320" stroke="#C9DDF2" strokeWidth="18" strokeLinecap="round" />

        {/* Main Roads / Highways */}
        <path d="M-20 100 L 520 100" stroke="white" strokeWidth="5" />
        <path d="M-20 100 L 520 100" stroke="#E5E7EB" strokeWidth="1" />

        <path d="M150 -20 L 150 420" stroke="white" strokeWidth="6" />
        <path d="M150 -20 L 150 420" stroke="#E5E7EB" strokeWidth="1.5" />

        <path d="M350 -20 L 350 420" stroke="white" strokeWidth="5" />
        <path d="M350 -20 L 350 420" stroke="#E5E7EB" strokeWidth="1" />

        <path d="M-20 300 C 100 280, 250 350, 520 280" stroke="white" strokeWidth="6" />
        <path d="M-20 300 C 100 280, 250 350, 520 280" stroke="#E5E7EB" strokeWidth="1.5" />

        <path d="M50 -20 L 450 420" stroke="white" strokeWidth="4" strokeDasharray="3 3" />
      </svg>

      {/* Pins over the map */}
      {/* Pin 1: Gomti Nagar (Red Pin) */}
      <div className="absolute top-[32%] left-[62%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-white py-1 px-2.5 rounded-full shadow-md border border-[#E5E7EB] animate-fade-in z-10">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF385C]" />
        <span className="text-[10px] font-bold text-[#111827]">Gomti Nagar</span>
      </div>

      {/* Pin 2: Jankipuram (Blue Pin) */}
      <div className="absolute top-[18%] left-[28%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-white py-1 px-2.5 rounded-full shadow-md border border-[#E5E7EB] z-10">
        <span className="h-2.5 w-2.5 rounded-full bg-[#3B82F6]" />
        <span className="text-[10px] font-bold text-[#111827]">Jankipuram</span>
      </div>

      {/* Pin 3: Indira Nagar (Green Pin) */}
      <div className="absolute top-[48%] left-[78%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-white py-1 px-2.5 rounded-full shadow-md border border-[#E5E7EB] z-10">
        <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
        <span className="text-[10px] font-bold text-[#111827]">Indira Nagar</span>
      </div>

      {/* Pin 4: Shaheed Path (Orange Pin) */}
      <div className="absolute top-[72%] left-[48%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-white py-1 px-2.5 rounded-full shadow-md border border-[#E5E7EB] z-10">
        <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
        <span className="text-[10px] font-bold text-[#111827]">Shaheed Path</span>
      </div>

      {/* Pin 5: Awas Vikas (Purple Pin) */}
      <div className="absolute top-[82%] left-[16%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-white py-1 px-2.5 rounded-full shadow-md border border-[#E5E7EB] z-10">
        <span className="h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />
        <span className="text-[10px] font-bold text-[#111827]">Awas Vikas</span>
      </div>
    </div>
  );
}

function CitySkylineIllustration() {
  return (
    <svg className="w-full h-full text-[#E5E7EB]" viewBox="0 0 400 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Background towers */}
      <rect x="20" y="40" width="30" height="80" opacity="0.3" />
      <rect x="60" y="20" width="40" height="100" opacity="0.3" />
      <polygon points="60,20 80,0 100,20" opacity="0.3" />
      <rect x="110" y="50" width="25" height="70" opacity="0.3" />
      <rect x="150" y="30" width="35" height="90" opacity="0.3" />
      <rect x="200" y="10" width="45" height="110" opacity="0.3" />
      <rect x="260" y="40" width="30" height="80" opacity="0.3" />
      <rect x="300" y="30" width="35" height="90" opacity="0.3" />
      <polygon points="300,30 317.5,15 335,30" opacity="0.3" />
      <rect x="350" y="60" width="30" height="60" opacity="0.3" />

      {/* Foreground smaller buildings */}
      <rect x="10" y="70" width="20" height="50" opacity="0.6" />
      <rect x="40" y="60" width="30" height="60" opacity="0.6" />
      <rect x="80" y="55" width="25" height="65" opacity="0.6" />
      <rect x="120" y="75" width="20" height="45" opacity="0.6" />
      <rect x="145" y="65" width="30" height="55" opacity="0.6" />
      <rect x="185" y="50" width="25" height="70" opacity="0.6" />
      <polygon points="185,50 197.5,35 210,50" opacity="0.6" />
      <rect x="220" y="60" width="35" height="60" opacity="0.6" />
      <rect x="270" y="70" width="25" height="50" opacity="0.6" />
      <rect x="310" y="60" width="30" height="60" opacity="0.6" />
      <rect x="345" y="75" width="25" height="45" opacity="0.6" />
      <rect x="375" y="80" width="20" height="40" opacity="0.6" />
      
      {/* Ground Line */}
      <line x1="0" y1="119" x2="400" y2="119" stroke="#D1D5DB" strokeWidth="2" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-[#111827] overflow-x-hidden pt-16">
        
        {/* ── SECTION 1: HERO ── */}
        <section className="pt-16 pb-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h1 className="text-[2.75rem] md:text-[3.75rem] font-serif font-semibold text-[#111827] tracking-tight leading-[1.08] animate-fade-up">
                Verified Resale Plot<br />
                Intelligence for <span className="text-[#FF385C] relative inline-block">Lucknow</span>
              </h1>
              
              <p className="mt-8 text-base text-[#6B7280] leading-relaxed max-w-xl animate-fade-up-delay-1">
                Discover verified resale LDA & Awas Vikas plots across Gomti Nagar, Jankipuram, Shaheed Path and other prime residential localities.
              </p>
              <p className="mt-4 text-base text-[#6B7280] leading-relaxed max-w-xl animate-fade-up-delay-1">
                Urban Atlas is a private residential inventory network focused on verified opportunities, locality insights and serious buyers.
              </p>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap gap-4 items-center animate-fade-up-delay-2">
                <Link
                  href="/submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF385C] px-7 py-4 text-sm font-semibold text-white hover:bg-[#e0304f] transition-all shadow-md group"
                >
                  Request Verified Inventory
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </Link>
                
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-[#E5E7EB] bg-white px-7 py-4 text-sm font-semibold text-[#111827] hover:bg-[#FAFAFA] transition-all shadow-sm"
                >
                  Join WhatsApp Community
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#16a34a">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>

              {/* Five horizontal capability pills */}
              <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-3.5 animate-fade-up-delay-3">
                {[
                  { title: "Verified Resale Inventory", icon: (
                    <svg className="h-5 w-5 text-[#FF385C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )},
                  { title: "LDA & Awas Vikas Focused", icon: (
                    <svg className="h-5 w-5 text-[#FF385C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )},
                  { title: "Serious Buyers Only", icon: (
                    <svg className="h-5 w-5 text-[#FF385C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )},
                  { title: "Broker Friendly", icon: (
                    <svg className="h-5 w-5 text-[#FF385C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )},
                  { title: "Map-First Intelligence", icon: (
                    <svg className="h-5 w-5 text-[#FF385C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  )},
                ].map((pill, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#FAFAFA] border border-[#E5E7EB] hover:bg-white transition-all shadow-sm">
                    <span className="p-2 bg-white rounded-full border border-[#E5E7EB] shadow-xs mb-3">
                      {pill.icon}
                    </span>
                    <span className="text-[11px] font-bold text-[#111827] leading-snug">
                      {pill.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Map/Intelligence Card Column */}
            <div className="lg:col-span-5 animate-fade-in">
              <div className="bg-white rounded-[2rem] border border-[#E5E7EB] p-6 shadow-xl shadow-[#000000]/03 relative">
                
                {/* Header elements inside the card */}
                <div className="flex justify-between items-center mb-5">
                  <div>
                    <h3 className="text-sm font-bold text-[#111827]">Active Localities</h3>
                    <p className="text-[11px] text-[#6B7280]">Real-time plot status</p>
                  </div>
                  <span className="badge font-bold text-[#FF385C] border-[#FF385C]/20 bg-[#FF385C]/05">5 Active</span>
                </div>

                {/* Map Grid Component */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  <div className="md:col-span-8">
                    <ActiveMapIllustration />
                  </div>
                  <div className="md:col-span-4 flex flex-col justify-between py-1">
                    {/* List of 6 active localities */}
                    <div className="space-y-3.5">
                      {[
                        "Gomti Nagar",
                        "Jankipuram",
                        "Jankipuram Vistar",
                        "Indira Nagar",
                        "Awas Vikas",
                        "Shaheed Path",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <svg className="h-3.5 w-3.5 text-[#FF385C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-xs font-semibold text-[#374151] hover:text-[#FF385C] transition-colors cursor-pointer">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom section under the map in the card */}
                <div className="border-t border-[#E5E7EB] mt-6 pt-5 grid grid-cols-2 gap-6">
                  {/* Intelligence Signals Column */}
                  <div>
                    <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-3">Intelligence Signals</h4>
                    <ul className="space-y-2.5">
                      {[
                        "Distress Indicators",
                        "Fair Price Estimation",
                        "Legal Confidence Layer",
                        "Stale Inventory Detection",
                        "Duplicate Listing Mapping",
                      ].map((sig, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[11px] font-medium text-[#4B5563]">
                          <svg className="h-3.5 w-3.5 text-[#10B981] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          {sig}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Inventory Types Column */}
                  <div>
                    <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-3">Inventory Types</h4>
                    <ul className="space-y-2.5">
                      {[
                        "Resale Plots",
                        "Corner Plots",
                        "Park Facing",
                        "Vacant Inventory",
                        "Off-Market Opportunities",
                      ].map((type, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[11px] font-medium text-[#4B5563]">
                          <svg className="h-3.5 w-3.5 text-[#3B82F6] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </section>

        {/* ── SECTION 2: THE PROBLEM ── */}
        <section className="py-20 border-t border-[#E5E7EB] bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Section Title */}
              <div className="lg:col-span-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[#FF385C] mb-2">The Problem</p>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#111827] leading-tight">
                  Residential Plot Buying<br />
                  is Highly Fragmented
                </h2>
              </div>

              {/* Right Column: 6 problem cards */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {[
                  "Fake Availability",
                  "Inflated Pricing",
                  "Duplicate Listings",
                  "Hidden Inventory",
                  "Legal Uncertainty",
                  "No Pricing Transparency",
                ].map((prob, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs">
                    <div className="h-10 w-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                      <svg className="h-5 w-5 text-[#FF385C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-[#111827]">{prob}</h3>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── SECTION 3: OUR APPROACH ── */}
        <section className="py-20 border-t border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Heading and Description */}
              <div className="lg:col-span-5">
                <p className="text-xs font-bold uppercase tracking-widest text-[#FF385C] mb-2">Our Approach</p>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#111827] leading-tight">
                  A Structured Intelligence Layer for Residential Resale
                </h2>
                <p className="mt-6 text-base text-[#6B7280] leading-relaxed">
                  We organize fragmented resale inventory into a structured, verified intelligence system combining broker inventory, locality intelligence, pricing analysis and legal confidence signals.
                </p>
                
                <Link
                  href="/submit"
                  className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-[#FF385C] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#e0304f] transition-all shadow-md"
                >
                  Learn More About Our Intelligence
                </Link>
              </div>

              {/* Right Column: 3 Steps Diagram */}
              <div className="lg:col-span-7 flex flex-col md:flex-row items-center gap-6 justify-center">
                {[
                  {
                    step: "1. Inventory Aggregation",
                    desc: "We collect resale inventory from local brokers, public listings, field verification and private networks.",
                    icon: (
                      <svg className="h-6 w-6 text-[#FF385C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    ),
                  },
                  {
                    step: "2. Verification & Structuring",
                    desc: "Inventory is organized using pricing signals, locality data and legal confidence indicators.",
                    icon: (
                      <svg className="h-6 w-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                  },
                  {
                    step: "3. Serious Buyer Access",
                    desc: "Verified buyers receive curated inventory and locality-level resale intelligence.",
                    icon: (
                      <svg className="h-6 w-6 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                  },
                ].map((card, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm relative group max-w-[240px]">
                    <div className="h-16 w-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shadow-xs mb-5 group-hover:scale-105 transition-transform duration-250">
                      {card.icon}
                    </div>

                    <h3 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">{card.step}</h3>
                    <p className="text-[11px] text-[#6B7280] leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── SECTION 4: OUR FOCUS LOCALITIES ── */}
        <section className="py-20 border-t border-[#E5E7EB] bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#FF385C] mb-2">Our Focus Localities</p>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#111827]">
                  We focus only on high-activity residential<br />micro-markets across Lucknow.
                </h2>
              </div>
              <Link
                href="/submit"
                className="mt-4 md:mt-0 inline-flex items-center gap-1.5 rounded-full bg-[#FF385C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#e0304f] transition-all shadow-md shrink-0"
              >
                Explore Localities
              </Link>
            </div>

            {/* 6 Locality cards with realistic building images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
              {[
                {
                  name: "Gomti Nagar",
                  desc: "Premium resale inventory with strong long-term demand.",
                  img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&auto=format&fit=crop&q=80",
                },
                {
                  name: "Jankipuram",
                  desc: "Mature residential sectors with active resale movement.",
                  img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&auto=format&fit=crop&q=80",
                },
                {
                  name: "Jankipuram Vistar",
                  desc: "Emerging residential belt with growing inventory opportunities.",
                  img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&auto=format&fit=crop&q=80",
                },
                {
                  name: "Awas Vikas",
                  desc: "Structured residential layouts with legally safer inventory.",
                  img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&auto=format&fit=crop&q=80",
                },
                {
                  name: "Indira Nagar",
                  desc: "Established residential locality with strong liquidity.",
                  img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=400&auto=format&fit=crop&q=80",
                },
                {
                  name: "Shaheed Path",
                  desc: "High-growth corridors with improving connectivity.",
                  img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=80",
                },
              ].map((loc, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden flex flex-col shadow-sm group hover:shadow-md transition-all"
                >
                  <div className="relative h-32 w-full overflow-hidden bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={loc.img}
                      alt={loc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-xs font-bold text-[#111827] mb-1">{loc.name}</h3>
                    <p className="text-[10px] text-[#6B7280] leading-relaxed flex-1">{loc.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── SECTION 5: WE TRACK MORE THAN LISTINGS ── */}
        <section className="py-20 border-t border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-[#FF385C] mb-2">Detailed Monitoring</p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#111827]">
                We Track More Than Listings
              </h2>
            </div>

            {/* 5 horizontal structured cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
              {[
                {
                  title: "Property Signals",
                  color: "#FF385C",
                  iconBg: "#FFF1F2",
                  icon: (
                    <svg className="h-6 w-6 text-[#FF385C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  ),
                  items: ["Plot Size", "Road Width", "Facing", "Corner Status", "Vacant / Occupied", "Park Facing"],
                },
                {
                  title: "Pricing Signals",
                  color: "#10B981",
                  iconBg: "#ECFDF5",
                  icon: (
                    <svg className="h-6 w-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  items: ["Asking Price", "Expected Closing Range", "Stale Inventory", "Fair Value Estimation"],
                },
                {
                  title: "Legal Signals",
                  color: "#3B82F6",
                  iconBg: "#EFF6FF",
                  icon: (
                    <svg className="h-6 w-6 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  items: ["LDA Verification", "Awas Vikas Verification", "Freehold Status", "Ownership Confidence"],
                },
                {
                  title: "Locality Signals",
                  color: "#F59E0B",
                  iconBg: "#FFFBEB",
                  icon: (
                    <svg className="h-6 w-6 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  items: ["Connectivity", "Metro Proximity", "Nearby Infrastructure", "Future Development"],
                },
                {
                  title: "Distress Signals",
                  color: "#8B5CF6",
                  iconBg: "#F5F3FF",
                  icon: (
                    <svg className="h-6 w-6 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  ),
                  items: ["Urgency Indicators", "Inactive Inventory", "Motivated Sellers", "Long-Market Listings"],
                },
              ].map((card, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-[#E5E7EB] p-5 shadow-xs flex flex-col">
                  <div className="flex items-center gap-3.5 mb-4">
                    <span className="p-2.5 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: card.iconBg }}>
                      {card.icon}
                    </span>
                    <h3 className="text-xs font-bold text-[#111827]">{card.title}</h3>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {card.items.map((item, iidx) => (
                      <li key={iidx} className="text-[10px] text-[#6B7280] font-medium flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: card.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── SECTION 6: BOTTOM CARDS (BROKERS & WHATSAPP MOCKUP) ── */}
        <section className="py-20 border-t border-[#E5E7EB] bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Card: Brokers */}
            <div className="bg-white rounded-[2rem] border border-[#E5E7EB] p-8 shadow-sm flex flex-col justify-between overflow-hidden relative min-h-[460px]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#FF385C] mb-3">Partner Network</p>
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#111827] tracking-tight">
                  Built to Work With Brokers,<br />Not Against Them
                </h3>
                <p className="mt-3 text-xs text-[#6B7280]">
                  Urban Atlas is a trusted infrastructure layer for residential resale transactions.
                </p>

                <ul className="mt-6 space-y-2.5">
                  {[
                    "Organize inventory efficiently",
                    "Access serious buyers",
                    "Reduce duplicate inquiries",
                    "Improve listing visibility",
                    "Manage opportunities better",
                  ].map((chk, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-[#4B5563]">
                      <svg className="h-4 w-4 text-[#FF385C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {chk}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <Link
                  href="/submit"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#FF385C] px-6 py-3 text-xs font-bold text-white hover:bg-[#e0304f] transition-all shadow-md shrink-0 self-start sm:self-auto z-10"
                >
                  Join Broker Network →
                </Link>
                {/* Outline illustration of cityscape */}
                <div className="w-full sm:w-[220px] h-[90px] opacity-80 pointer-events-none sm:absolute sm:bottom-0 sm:right-6">
                  <CitySkylineIllustration />
                </div>
              </div>
            </div>

            {/* Right Card: WhatsApp & Custom Mockup */}
            <div className="bg-white rounded-[2rem] border border-[#E5E7EB] p-8 shadow-sm flex flex-col justify-between overflow-hidden relative min-h-[460px]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#16a34a] mb-3">Community Access</p>
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#111827] tracking-tight">
                  Join the Verified<br />Resale Network
                </h3>
                <p className="mt-3 text-xs text-[#6B7280]">
                  Be part of our WhatsApp community to get:
                </p>

                <ul className="mt-6 space-y-2.5">
                  {[
                    "Verified inventory drops",
                    "Off-market opportunities",
                    "Locality updates",
                    "Distress deal alerts",
                    "Serious buyer discussions",
                  ].map((chk, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-[#4B5563]">
                      <svg className="h-4 w-4 text-[#16a34a] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {chk}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#10B981] px-6 py-3 text-xs font-bold text-white hover:bg-[#059669] transition-all shadow-md shrink-0 self-start sm:self-auto z-10"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Join WhatsApp Community
                </a>

                {/* Simulated WhatsApp screen in a mobile mockup */}
                <div className="w-[190px] h-[190px] bg-[#EAE6DF] rounded-t-3xl border-t border-x border-[#E5E7EB] shadow-lg overflow-hidden flex flex-col shrink-0 sm:absolute sm:-bottom-1 sm:right-6 select-none pointer-events-none scale-90 sm:scale-100 origin-bottom-right">
                  {/* WhatsApp header */}
                  <div className="bg-[#075E54] text-white p-2.5 flex items-center gap-1.5 shrink-0">
                    <div className="h-5 w-5 rounded-full bg-[#128C7E] flex items-center justify-center text-[9px] font-bold">UA</div>
                    <div>
                      <h4 className="text-[9px] font-bold leading-none">Urban Atlas Community</h4>
                      <p className="text-[6px] opacity-75 mt-0.5 leading-none">Online</p>
                    </div>
                  </div>
                  {/* WhatsApp messages container */}
                  <div className="flex-1 p-2 flex flex-col justify-end gap-1.5 overflow-hidden">
                    <span className="text-[6px] text-center text-gray-500 bg-white/70 px-1 py-0.5 rounded self-center shadow-2xs">Today</span>
                    <div className="bg-white rounded-lg p-2 shadow-xs max-w-[85%] self-start flex flex-col border border-slate-100">
                      <div className="flex items-center gap-1 text-[7px] text-[#FF385C] font-bold mb-1">
                        <span>New Inventory Alert 🚨</span>
                      </div>
                      <p className="text-[7px] font-semibold text-[#111827] leading-tight">Corner Plot in Gomti Nagar</p>
                      <p className="text-[6px] text-[#6B7280] mt-0.5 leading-tight">Sector-7 | 2400 sqft | 12m Road</p>
                      <p className="text-[7px] font-bold text-[#111827] mt-1">Asking: ₹1.95 Cr</p>
                      <span className="text-[5px] text-[#9CA3AF] self-end mt-1">11:30 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 7: FOOTER CTA ── */}
        <section className="py-24 border-t border-[#E5E7EB] bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#111827] tracking-tight leading-tight">
              Looking for a Verified Resale Plot in Lucknow?
            </h2>
            <p className="mt-4 text-base text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
              Discover curated inventory, hidden opportunities and structured residential intelligence across Lucknow&apos;s most active resale micro-markets.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
              <Link
                href="/submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF385C] px-8 py-4 text-sm font-semibold text-white hover:bg-[#e0304f] transition-all shadow-md"
              >
                Request Inventory Access
              </Link>
              
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-[#E5E7EB] bg-white px-8 py-4 text-sm font-semibold text-[#16a34a] hover:bg-green-50 hover:border-green-200 transition-all shadow-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Talk on WhatsApp
              </a>
            </div>
          </div>

          {/* Inline Skyline Footer Art */}
          <div className="absolute bottom-0 left-0 right-0 w-full h-[60px] opacity-15 pointer-events-none">
            <CitySkylineIllustration />
          </div>
        </section>

        {/* ── SECTION 8: DETAILED FOOTER ── */}
        <footer className="bg-[#FAFAFA] border-t border-[#E5E7EB] pt-16 pb-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Logo and About Column */}
            <div className="md:col-span-4 flex flex-col">
              <Link href="/" className="flex items-center gap-2.5 select-none">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FF385C]" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="2.5" fill="white" />
                    <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
                  </svg>
                </span>
                <span className="text-[#111827] font-bold text-base tracking-tight leading-none">
                  Urban Atlas
                </span>
              </Link>
              <p className="mt-4 text-xs text-[#6B7280] leading-relaxed max-w-xs">
                Verified Resale Plot Intelligence for Lucknow. Empowering buyers and sellers with structured, high-confidence real estate insights.
              </p>

              {/* Social Icons */}
              <div className="mt-6 flex items-center gap-4 text-[#6B7280]">
                {/* WhatsApp */}
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#16a34a] transition-colors" aria-label="WhatsApp">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.338 11.897-11.953 11.897-2.006-.002-3.973-.5-5.74-1.448L0 24zm6.302-1.652c1.68.997 3.52 1.523 5.699 1.524 5.765 0 10.455-4.686 10.458-10.45.002-2.79-1.082-5.415-3.053-7.387C17.49 4.062 14.863 2.977 12.07 2.977c-5.772 0-10.463 4.693-10.466 10.46a10.413 10.413 0 001.522 5.437l-.999 3.649 3.73-.978zM17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="hover:text-[#111827] transition-colors" aria-label="Instagram">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="hover:text-[#0077b5] transition-colors" aria-label="LinkedIn">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-2 flex flex-col">
              <h4 className="text-[11px] font-bold text-[#111827] uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-xs text-[#6B7280] font-semibold">
                {["Inventory", "Localities", "Intelligence", "Broker Network"].map((item) => (
                  <li key={item}><Link href="#" className="hover:text-[#111827] transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="md:col-span-2 flex flex-col">
              <h4 className="text-[11px] font-bold text-[#111827] uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2.5 text-xs text-[#6B7280] font-semibold">
                <li><a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#111827] transition-colors">WhatsApp Community</a></li>
                <li><Link href="/submit" className="hover:text-[#111827] transition-colors">Request Access</Link></li>
                <li><Link href="#" className="hover:text-[#111827] transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-[#111827] transition-colors">Contact</Link></li>
                <li><Link href="/admin" className="hover:text-[#FF385C] transition-colors font-bold">Admin Portal</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="md:col-span-2 flex flex-col">
              <h4 className="text-[11px] font-bold text-[#111827] uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2.5 text-xs text-[#6B7280] font-semibold">
                {["About Us", "How It Works", "Our Approach", "Partner With Us"].map((item) => (
                  <li key={item}><Link href="#" className="hover:text-[#111827] transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>

            {/* Get in Touch Column */}
            <div className="md:col-span-2 flex flex-col">
              <h4 className="text-[11px] font-bold text-[#111827] uppercase tracking-wider mb-4">Get in Touch</h4>
              <ul className="space-y-3 text-xs text-[#6B7280] font-semibold">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 95276 25400</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hello@urbanatlas.in</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 shrink-0 text-[#6B7280] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Lucknow, Uttar Pradesh, India</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="max-w-7xl mx-auto border-t border-[#E5E7EB] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
            <span>© {new Date().getFullYear()} Urban Atlas. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#111827] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#111827] transition-colors">Terms of Service</a>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
