import { products } from "@/lib/constants/products";
import { mockupRegistry } from "@/components/products/mockups";

export default function ProductShowcaseMobile() {
  return (
    <div className="flex flex-col gap-6 px-5 py-10 md:hidden">
      {products.map((p) => {
        const Mockup = mockupRegistry[p.slug];
        return (
          <div
            key={p.id}
            className="overflow-hidden rounded-3xl border shadow-2xl"
            style={{ borderColor: `${p.accentHex}33` }}
          >
            <div className="aspect-[4/3] w-full">
              <Mockup />
            </div>
            <div className="bg-ink-soft p-5">
              <span
                className="text-[0.65rem] font-medium tracking-[0.25em]"
                style={{ color: p.accentHex }}
              >
                {p.category.toUpperCase()}
              </span>
              <h3 className="font-display mt-2 text-xl font-medium text-paper">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{p.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
