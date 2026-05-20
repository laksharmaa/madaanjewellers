import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/constants";
import { WA_DIRECT } from "../utils/whatsapp";

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-obsidian-900/95 backdrop-blur-md border-b border-gold-500/20 py-3"
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">

        {/* Brand */}
        <a href="#home" className="group">
          <p className="font-display text-2xl font-light tracking-[0.12em] text-white group-hover:text-gold-300 transition-colors">
            MADAAN
          </p>
          <p className="text-[9px] tracking-[0.35em] uppercase text-gold-500 -mt-0.5">
            Jewellers · Est. 1985
          </p>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href}
              className="text-xs tracking-[0.12em] uppercase text-gray-400 hover:text-gold-300 transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={WA_DIRECT} target="_blank" rel="noreferrer"
            className="text-xs tracking-widest uppercase border border-gold-500/40 text-gold-400 hover:border-gold-400 hover:text-gold-300 px-5 py-2.5 rounded-full transition-all">
            WhatsApp
          </a>
          <a href="#appointment"
            className="text-xs tracking-widest uppercase bg-gold-500 hover:bg-gold-400 text-obsidian-900 font-medium px-5 py-2.5 rounded-full transition-all">
            Book Visit
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-gold-400 p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-obsidian-900/98 border-t border-gold-500/20 px-5 py-6 flex flex-col gap-5">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-gray-400 hover:text-gold-300 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#appointment" onClick={() => setMenuOpen(false)}
            className="btn-gold text-center mt-2">
            Book a Visit
          </a>
        </div>
      )}
    </nav>
  );
}
