import { motion } from "framer-motion";
import { TRUST_POINTS } from "../data/constants";

export default function About() {
  return (
    <section id="about" className="py-24 px-5 sm:px-8 bg-obsidian-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — image stack */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[480px]"
          >
            <img
              src="images/store.png"
              alt="Madaan Jewellers store"
              className="absolute top-0 left-0 w-4/5 h-80 object-cover rounded-xl border border-gold-500/10"
            />
            <img
              src="images/store2.png"
              alt="Gold jewellery craftsmanship"
              // className="absolute bottom-0 right-0 w-3/5 h-56 object-cover rounded-xl border border-gold-500/10"
              className="absolute top-52 right-0 h-58 object-cover rounded-xl "
            />
            {/* Year badge */}
            <div className="absolute bottom-12 left-4 bg-gold-500 text-obsidian-900 rounded-xl px-5 py-4 shadow-2xl">
              <p className="font-display text-4xl font-semibold leading-none">39</p>
              <p className="text-[10px] tracking-widest uppercase font-medium mt-1">Years of Trust</p>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="section-tag">Our Story</p>
            <h2 className="font-display text-5xl sm:text-6xl font-light text-white leading-tight mb-6">
              A Legacy<br />
              <span className="text-gold-gradient italic">Built on Trust</span>
            </h2>
            <div className="gold-line w-20 mb-8 opacity-40" />

            <p className="text-gray-400 leading-relaxed mb-4 font-light text-base">
              Founded in 1985 by Pankaj Madaan, Madaan Jewellers has spent nearly four decades
              serving Delhi's finest families with gold, diamond and bridal jewellery of unmatched purity.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10 font-light text-sm">
              Located in the heart of Kalkaji, our showroom is a destination for those who value
              craftsmanship, transparency, and personalised service. Every piece we create carries
              the Madaan promise — hallmarked gold, certified diamonds, and zero compromise.
            </p>

            {/* Trust grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TRUST_POINTS.map(t => (
                <div key={t.title}
                  className="border border-gold-500/15 rounded-xl p-4 bg-obsidian-800 hover:border-gold-500/30 transition-colors">
                  <p className="text-gold-500 text-xs mb-2">{t.icon}</p>
                  <p className="text-white text-sm font-medium mb-1">{t.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
