import { motion } from "framer-motion";
import { STATS } from "../data/constants";
import { WA_DIRECT } from "../utils/whatsapp";

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 32 },
  animate:   { opacity: 1, y: 0  },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-obsidian-900"
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="images/necklace.png"
          alt="Luxury jewellery"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900 via-obsidian-900/85 to-obsidian-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-obsidian-900/60" />
      </div>

      {/* Decorative gold circle */}
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full border border-gold-500/10 hidden lg:block" />
      <div className="absolute right-[-5%]  top-[15%] w-[440px] h-[440px] rounded-full border border-gold-500/8  hidden lg:block" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-32 pb-20 w-full">
        <div className="max-w-2xl">

          <motion.div {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 border border-gold-500/30 text-gold-400 text-[10px] tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-8">
            ✦ Kalkaji, New Delhi · Est. 1985
          </motion.div>

          <motion.h1 {...fadeUp(0.25)}
            className="font-display text-6xl sm:text-7xl lg:text-8xl font-light leading-[0.95] text-white mb-6">
            Crafted<br />
            <span className="text-gold-gradient italic">in Gold.</span><br />
            <span className="font-extralight text-gray-300">Worn Forever.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.4)}
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mb-10 font-light">
            Delhi's most trusted jeweller for 39 years. Premium gold, diamonds
            and custom bridal jewellery — crafted with love and certified purity.
          </motion.p>

          <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4">
            <a href="#collections" className="btn-gold">
              Explore Collections
            </a>
            <a href="#appointment" className="btn-outline">
              Book a Visit
            </a>
            <a href={WA_DIRECT} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold-300 transition-colors self-center ml-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-20 pt-10 border-t border-gold-500/15 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {STATS.map(s => (
            <div key={s.label}>
              <p className="font-display text-3xl sm:text-4xl font-light text-gold-gradient">{s.value}</p>
              <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase text-gray-600">Scroll</p>
        <div className="w-px h-10 bg-gradient-to-b from-gold-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
