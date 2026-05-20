import { MARQUEE_ITEMS } from "../data/constants";

export default function MarqueeStrip() {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="border-y border-gold-500/20 bg-obsidian-800 py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap inline-block">
        {repeated.map((item, i) => (
          <span key={i} className="inline-block text-gold-500 text-[11px] font-medium tracking-[0.25em] uppercase mx-8">
            ✦ {item}
          </span>
        ))}
      </div>
    </div>
  );
}
