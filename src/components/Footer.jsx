import { NAV_LINKS } from "../data/constants";

export default function Footer() {
  return (
    <footer className="bg-obsidian-900 border-t border-gold-500/10 py-12 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">

          {/* Brand */}
          <div>
            <p className="font-display text-3xl font-light text-white tracking-widest mb-1">MADAAN</p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold-500 mb-3">Jewellers · Est. 1985</p>
            <p className="text-gray-600 text-xs leading-relaxed max-w-xs">
              Premium gold & diamond jewellery in Kalkaji, New Delhi.<br />
              39 years of trust, craftsmanship & certified purity.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href}
                className="text-xs tracking-widest uppercase text-gray-500 hover:text-gold-400 transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="text-right">
            <p className="text-gray-500 text-xs mb-1 tracking-wide">DDA Flats Kalkaji, New Delhi</p>
            <p className="text-gray-500 text-xs mb-1">092126 82657</p>
            <p className="text-gray-600 text-xs">Open 10 AM – 9:30 PM</p>
          </div>
        </div>

        <div className="gold-line opacity-10 mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-700 text-xs">© 2025 Madaan Jewellers. All rights reserved.</p>
          <p className="text-gray-700 text-xs">BIS Hallmarked · Certified Diamonds · Custom Designs</p>
        </div>
      </div>
    </footer>
  );
}
