import { motion } from "framer-motion";
import { BRIDAL } from "../data/constants";
import { WA_DIRECT } from "../utils/whatsapp";

export default function BridalCollection() {
  return (
    <section id="bridal" className="py-24 px-5 sm:px-8 bg-obsidian-800 relative overflow-hidden">

      {/* Decorative bg text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <p className="font-display text-[18vw] font-light text-gold-500/3 whitespace-nowrap tracking-widest">
          BRIDAL
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-tag">For Your Wedding Day</p>
          <h2 className="font-display text-5xl sm:text-6xl font-light text-white mb-4">
            Bridal <span className="text-gold-gradient italic">Collection</span>
          </h2>
          <div className="gold-line w-20 mx-auto opacity-40 mb-5" />
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Custom bridal jewellery sets crafted to match your lehenga, your vision, and your story.
            Book a private appointment for a personalised experience.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {BRIDAL.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card-hover group cursor-pointer rounded-xl overflow-hidden border border-gold-500/10 bg-obsidian-900"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img} alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/20 to-transparent" />
                <div className="absolute top-4 right-4 border border-gold-500/40 text-gold-400 text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
                  Bridal
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-light text-white mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">{item.desc}</p>
                <a href={WA_DIRECT} target="_blank" rel="noreferrer"
                  className="text-gold-400 text-xs tracking-widest uppercase hover:text-gold-300 transition-colors flex items-center gap-2">
                  Enquire Now
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#appointment" className="btn-outline inline-block">
            Book a Bridal Appointment
          </a>
        </motion.div>

      </div>
    </section>
  );
}
