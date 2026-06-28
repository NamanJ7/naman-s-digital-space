import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-start gap-4 py-10">
      <h1 className="text-4xl font-bold">404</h1>
      <div className="accent-rule" />
      <p className="text-muted">This page wandered off somewhere.</p>
      <Link
        href="/"
        className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
      >
        Back home
      </Link>
    </div>
  );
}
