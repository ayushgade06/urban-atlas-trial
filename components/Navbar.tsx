import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB]">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[#111827] font-semibold text-sm tracking-tight"
        >
          Urban Atlas
        </Link>

        {/* Center links */}
        <div className="hidden sm:flex items-center gap-8">
          <Link
            href="/submit"
            className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors"
          >
            {/* Submit */}
          </Link>
          <Link
            href="/admin"
            className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors"
          >
            {/* Admin */}
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/submit"
          className="rounded-full bg-[#FF385C] px-4 py-2 text-xs font-medium text-white hover:bg-[#e0304f] transition-colors"
        >
          Join Network →
        </Link>
      </div>
    </nav>
  );
}
