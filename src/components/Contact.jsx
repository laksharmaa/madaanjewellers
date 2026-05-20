import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Star, ShoppingBag, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-5 sm:px-8 bg-obsidian-800">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="section-tag">Find Us</p>
          <h2 className="font-display text-5xl sm:text-6xl font-light text-white">
            Visit Our <span className="text-gold-gradient italic">Showroom</span>
          </h2>
          <div className="gold-line w-20 mt-6 opacity-30" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-obsidian-900 border border-gold-500/15 rounded-2xl p-8"
          >
            <h3 className="font-display text-2xl text-white font-light mb-8">Madaan Jewellers</h3>

            {[
              [MapPin,      "Address",  "A 203, Guru Ravidas Marg, near Mother Dairy, DDA Flats Kalkaji, New Delhi – 110019"],
              [Phone,       "Phone",    "092126 82657"],
              [Clock,       "Hours",    "10:00 AM – 9:30 PM (All Days)"],
              [Star,        "Rating",   "4.9 / 5 · 1,500+ Google Reviews"],
              [ShoppingBag, "Services", "In-store shopping · In-store pick-up · Delivery"],
            ].map(([Icon, label, val]) => (
              <div key={label} className="flex gap-4 mb-6">
                <span className="flex-shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-gold-400" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gray-600 mb-0.5">{label}</p>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">{val}</p>
                </div>
              </div>
            ))}

            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5 mt-2">
              <a href="tel:09212682657"
                className="btn-gold text-xs px-5 py-2.5 flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5" strokeWidth={2} />
                Call Now
              </a>
              <a href="https://wa.me/919212682657" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-medium px-5 py-2.5 rounded-full transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-2xl overflow-hidden border border-gold-500/15 min-h-[380px]"
          >
            <iframe
              title="Madaan Jewellers Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3505.266555503999!2d77.2589611!3d28.5317067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMxJzU0LjEiTiA3N8KwMTUnMzIuMyJF!5e0!3m2!1sen!2sin!4v1779280271821!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0, minHeight: "380px", filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}