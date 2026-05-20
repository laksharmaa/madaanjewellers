import { motion } from "framer-motion";
import { COLLECTIONS } from "../data/constants";

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Collections() {
  return (
    <section id="collections" className="py-24 px-5 sm:px-8 bg-obsidian-900">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-tag">Our Collections</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-5xl sm:text-6xl font-light text-white leading-tight">
              Timeless<br />
              <span className="text-gold-gradient italic">Pieces</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Each piece hand-selected for quality, purity, and lasting beauty.
              Available for in-store viewing and custom orders.
            </p>
          </div>
          <div className="gold-line mt-8 opacity-30" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COLLECTIONS.map((col, i) => (
            <motion.div
              key={col.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="card-hover group cursor-pointer rounded-xl overflow-hidden border border-white/5 bg-obsidian-800 relative"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={col.img} alt={col.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  style={{ transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/80 via-transparent to-transparent" />

                {/* Tag badge */}
                {col.tag && (
                  <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-gold-500 text-obsidian-900 font-medium px-3 py-1 rounded-full">
                    {col.tag}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium text-base mb-0.5">{col.name}</h3>
                  <p className="text-gray-500 text-xs tracking-wide">{col.count}</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-obsidian-900 group-hover:border-gold-500 transition-all text-sm">
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
