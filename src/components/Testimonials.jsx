import { motion } from "framer-motion";
import { TESTIMONIALS } from "../data/constants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-5 sm:px-8 bg-obsidian-800 relative overflow-hidden">

      {/* BG rating watermark — anchored to bottom-right so it never overlaps the header */}
      <div className="absolute right-8 bottom-16 font-display text-[14vw] font-light text-gold-500/4 pointer-events-none select-none leading-none">
        4.9★
      </div>

      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-tag">Customer Stories</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-5xl sm:text-6xl font-light text-white">
              1,500+ Families<br />
              <span className="text-gold-gradient italic">Trust Us</span>
            </h2>
            <div className="flex items-center gap-3 pb-1">
              <div>
                <p className="font-display text-4xl text-gold-400 font-light">4.9</p>
                <p className="text-[10px] text-gray-500 tracking-widest uppercase">Google Rating</p>
              </div>
              <div className="flex text-gold-400 text-xl">★★★★★</div>
            </div>
          </div>
          <div className="gold-line mt-8 opacity-20" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-hover bg-obsidian-900 border border-white/5 rounded-xl p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex text-gold-500 text-sm mb-4">
                {"★".repeat(t.stars)}
              </div>

              {/* Quote */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6 font-light italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-8 h-8 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 text-xs font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-gray-600 text-xs">{t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://www.google.com/maps/place/Madaan+Jewellers"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gray-500 hover:text-gold-400 transition-colors border border-white/10 hover:border-gold-500/30 px-6 py-2.5 rounded-full"
          >
            Read All Reviews on Google →
          </a>
        </motion.div>

      </div>
    </section>
  );
}