import Image from "next/image";
import { products } from "@/lib/constants/products";
import { nav } from "@/lib/constants/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-line)] bg-ink px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image src="/brand/triune-mark.png" alt="Triune" width={26} height={26} className="h-6 w-6" />
              <span className="font-display text-base tracking-[0.04em] text-paper">TRIUNE</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate">
              The house of builders. Practical technology for real operational and business
              problems.
            </p>
          </div>

          <div>
            <span className="text-[0.7rem] tracking-[0.2em] text-slate-dim">NAVIGATE</span>
            <ul className="mt-4 flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-slate transition-colors hover:text-paper">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-[0.7rem] tracking-[0.2em] text-slate-dim">PRODUCTS</span>
            <ul className="mt-4 flex flex-col gap-3">
              {products.map((p) => (
                <li key={p.id}>
                  <a href={`#${p.slug}-features`} className="text-sm text-slate transition-colors hover:text-paper">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-line)] pt-8 sm:flex-row">
          <span className="text-xs text-slate-dim">© {year} Triune. All rights reserved.</span>
          <div className="flex gap-5">
            {/* Social links configurable — add hrefs when available */}
          </div>
        </div>
      </div>
    </footer>
  );
}
