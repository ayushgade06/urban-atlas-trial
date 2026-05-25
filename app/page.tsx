import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight">Urban Atlas</h1>
        <p className="mt-4 text-lg text-neutral-600">Real Estate Intelligence</p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/submit"
            className="rounded bg-accent px-6 py-3 font-medium text-white"
          >
            Submit
          </Link>
          <Link
            href="/admin"
            className="rounded border border-accent px-6 py-3 font-medium text-accent"
          >
            Admin
          </Link>
        </div>
      </div>
    </main>
  );
}
