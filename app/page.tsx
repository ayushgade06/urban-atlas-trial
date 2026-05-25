import Link from "next/link";
import Navbar from "@/components/Navbar";

function MapIllustration() {
  return (
    <svg
      viewBox="0 0 440 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Subtle grid */}
      {[55, 110, 165, 220, 275, 330].map((y) => (
        <line
          key={`h${y}`}
          x1="0"
          y1={y}
          x2="440"
          y2={y}
          stroke="#FF385C"
          strokeOpacity="0.07"
          strokeWidth="1"
        />
      ))}
      {[55, 110, 165, 220, 275, 330, 385].map((x) => (
        <line
          key={`v${x}`}
          x1={x}
          y1="0"
          x2={x}
          y2="380"
          stroke="#FF385C"
          strokeOpacity="0.07"
          strokeWidth="1"
        />
      ))}

      {/* City blocks */}
      <rect x="62" y="62" width="94" height="82" rx="6" fill="#FF385C" fillOpacity="0.05" stroke="#FF385C" strokeOpacity="0.13" strokeWidth="1" />
      <rect x="172" y="62" width="75" height="82" rx="6" fill="#FF385C" fillOpacity="0.05" stroke="#FF385C" strokeOpacity="0.13" strokeWidth="1" />
      <rect x="62" y="162" width="130" height="100" rx="6" fill="#FF385C" fillOpacity="0.07" stroke="#FF385C" strokeOpacity="0.16" strokeWidth="1" />
      <rect x="210" y="162" width="78" height="46" rx="6" fill="#FF385C" fillOpacity="0.04" stroke="#FF385C" strokeOpacity="0.11" strokeWidth="1" />
      <rect x="210" y="218" width="78" height="54" rx="6" fill="#FF385C" fillOpacity="0.04" stroke="#FF385C" strokeOpacity="0.11" strokeWidth="1" />
      <rect x="308" y="62" width="84" height="128" rx="6" fill="#FF385C" fillOpacity="0.05" stroke="#FF385C" strokeOpacity="0.13" strokeWidth="1" />
      <rect x="308" y="208" width="84" height="64" rx="6" fill="#FF385C" fillOpacity="0.04" stroke="#FF385C" strokeOpacity="0.11" strokeWidth="1" />
      <rect x="62" y="282" width="210" height="60" rx="6" fill="#FF385C" fillOpacity="0.04" stroke="#FF385C" strokeOpacity="0.10" strokeWidth="1" />
      <rect x="290" y="282" width="102" height="60" rx="6" fill="#FF385C" fillOpacity="0.04" stroke="#FF385C" strokeOpacity="0.10" strokeWidth="1" />

      {/* Roads (gaps between blocks already implied by grid) */}

      {/* Pin glow */}
      <circle cx="132" cy="212" r="22" fill="#FF385C" fillOpacity="0.10" />
      <circle cx="132" cy="212" r="11" fill="#FF385C" fillOpacity="0.20" />
      {/* Pin */}
      <circle cx="132" cy="212" r="7" fill="#FF385C" />
      <circle cx="132" cy="212" r="3" fill="white" />

      {/* Secondary dots */}
      <circle cx="250" cy="185" r="3.5" fill="#FF385C" fillOpacity="0.35" />
      <circle cx="360" cy="126" r="3.5" fill="#FF385C" fillOpacity="0.35" />
      <circle cx="214" cy="90" r="3.5" fill="#FF385C" fillOpacity="0.35" />
      <circle cx="350" cy="260" r="3" fill="#FF385C" fillOpacity="0.25" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── SECTION 1: Hero ── */}
        <section className="pt-32 pb-28 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <div>
                <h1 className="text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#111827] leading-[1.08]">
                  Discover better plots.<br />
                  Make better decisions.
                </h1>
                <p className="mt-6 text-[1.0625rem] text-[#6B7280] leading-relaxed max-w-[26rem]">
                  Urban Atlas helps buyers and sellers connect through a
                  lightweight real-estate intelligence workflow.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="/submit"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#FF385C] px-6 py-3 text-sm font-medium text-white hover:bg-[#e0304f] transition-colors"
                  >
                    Join Network <span aria-hidden="true">→</span>
                  </Link>
                  <Link
                    href="/admin"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-medium text-[#111827] hover:bg-[#FAFAFA] transition-colors"
                  >
                    Admin Dashboard
                  </Link>
                </div>
                <ul className="mt-10 space-y-2.5">
                  {["Buyer Requirements", "Seller Listings", "Internal Dashboard"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-[#6B7280]">
                        <span className="text-[#FF385C] font-medium">✓</span>
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Right: abstract map */}
              <div className="hidden lg:block">
                <div
                  className="w-full aspect-square rounded-3xl border border-[#E5E7EB] bg-[#FAFAFA] overflow-hidden p-8"
                  style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.04)" }}
                >
                  <MapIllustration />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: Capabilities ── */}
        <section className="py-20 px-6 bg-[#FAFAFA]">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-[#111827]">
                Capabilities
              </h2>
              <p className="mt-1.5 text-sm text-[#6B7280]">
                Everything you need, nothing you don&apos;t.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "Buyer Intake",
                  desc: "Collect buyer requirements.",
                },
                {
                  title: "Seller Intake",
                  desc: "Capture seller opportunities.",
                },
                {
                  title: "Admin Operations",
                  desc: "Manage and export submissions.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-[#E5E7EB] bg-white p-7"
                  style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
                >
                  <div
                    className="mb-5 h-8 w-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255,56,92,0.08)" }}
                  >
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: "rgba(255,56,92,0.45)" }}
                    />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#111827] mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: CTA ── */}
        <section className="py-28 px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold text-[#111827] tracking-tight mb-8">
              Ready to get started?
            </h2>
            <Link
              href="/submit"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#FF385C] px-8 py-3.5 text-sm font-medium text-white hover:bg-[#e0304f] transition-colors"
            >
              Submit Requirement
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
