import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Gem, CheckCircle, AlertTriangle } from "lucide-react";
import emailjsConfig from "../config/emailjs";
import { buildWhatsAppURL } from "../utils/whatsapp";
import { PURPOSE_OPTIONS, TIME_OPTIONS } from "../data/constants";

const EMPTY = { name: "", phone: "", date: "", time: "", purpose: "", message: "" };

export default function AppointmentForm() {
  const [form,   setForm]   = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const waURL = buildWhatsAppURL(form);

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id:      emailjsConfig.serviceId,
          template_id:     emailjsConfig.templateId,
          user_id:         emailjsConfig.publicKey,
          template_params: {
            from_name:    form.name,
            from_phone:   form.phone,
            visit_date:   form.date    || "Flexible",
            visit_time:   form.time    || "Flexible",
            purpose:      form.purpose || "—",
            message:      form.message || "—",
          },
        }),
      });

      if (!res.ok) throw new Error("EmailJS failed");
      setStatus("success");
      window.open(waURL, "_blank");

    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      window.open(waURL, "_blank"); // WhatsApp still opens even if email fails
    }
  };

  const reset = () => { setStatus("idle"); setForm(EMPTY); };

  return (
    <section id="appointment" className="py-24 px-5 sm:px-8 bg-obsidian-900 relative overflow-hidden">

      {/* Background decorative text */}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <p className="font-display text-[15vw] font-light text-gold-500/3 whitespace-nowrap tracking-widest opacity-20">
          VISIT
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-tag">Private Showroom Visit</p>
            <h2 className="font-display text-5xl sm:text-6xl font-light text-white leading-tight mb-6">
              Book an<br />
              <span className="text-gold-gradient italic">Appointment</span>
            </h2>
            <div className="gold-line w-20 mb-8 opacity-40" />
            <p className="text-gray-400 font-light leading-relaxed mb-8 text-base">
              Visit our Kalkaji showroom for a personalised experience.
              Whether it's bridal jewellery, a custom design, or just browsing —
              we'll make sure you're attended to with full care.
            </p>

            <ul className="space-y-4">
              {[
                [Clock,  "Open 10:00 AM – 9:30 PM"],
                [MapPin, "A 203, Guru Ravidas Marg, DDA Flats Kalkaji, New Delhi"],
                [Phone,  "092126 82657"],
                [Gem,    "Private sessions available for bridal consultations"],
              ].map(([Icon, text]) => (
                <li key={text} className="flex items-start gap-4 text-gray-400 text-sm font-light">
                  <span className="flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-gold-400" strokeWidth={1.5} />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-obsidian-800 border border-gold-500/15 rounded-2xl p-8"
          >
            {/* SUCCESS */}
            {status === "success" && (
              <div className="text-center py-10">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-12 h-12 text-gold-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl text-white font-light mb-3">Appointment Requested!</h3>
                <p className="text-gray-400 text-sm mb-1">WhatsApp opened with your request.</p>
                <p className="text-gray-600 text-xs">A confirmation has also been sent to Madaan Jewellers.</p>
                <button onClick={reset} className="mt-6 text-gold-400 text-xs tracking-widest uppercase hover:text-gold-300">
                  Book Another →
                </button>
              </div>
            )}

            {/* ERROR */}
            {status === "error" && (
              <div className="text-center py-10">
                <div className="flex justify-center mb-4">
                  <AlertTriangle className="w-12 h-12 text-gold-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl text-white font-light mb-3">WhatsApp Opened!</h3>
                <p className="text-gray-400 text-sm mb-1">Your request was sent via WhatsApp.</p>
                <p className="text-gray-600 text-xs">Email confirmation had an issue, but your booking is safe.</p>
                <button onClick={reset} className="mt-6 text-gold-400 text-xs tracking-widest uppercase hover:text-gold-300">
                  Go Back →
                </button>
              </div>
            )}

            {/* FORM */}
            {(status === "idle" || status === "sending") && (
              <>
                <h3 className="font-display text-2xl text-gold-300 font-light mb-6">Request a Visit</h3>
                <form onSubmit={handleSubmit} className="space-y-4">

                  {[
                    { id: "name",  label: "Your Name",          type: "text", placeholder: "Full name"          },
                    { id: "phone", label: "Phone / WhatsApp",   type: "tel",  placeholder: "+91 98765 43210"    },
                  ].map(f => (
                    <div key={f.id}>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2">{f.label}</label>
                      <input
                        type={f.type} placeholder={f.placeholder} required
                        value={form[f.id]} onChange={set(f.id)}
                        disabled={status === "sending"}
                        className="input-dark disabled:opacity-50"
                      />
                    </div>
                  ))}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2">Preferred Date</label>
                      <input
                        type="date" value={form.date} onChange={set("date")}
                        disabled={status === "sending"}
                        className="input-dark disabled:opacity-50"
                        style={{ colorScheme: "dark" }}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2">Preferred Time</label>
                      <select
                        value={form.time} onChange={set("time")}
                        disabled={status === "sending"}
                        className="input-dark disabled:opacity-50"
                        style={{ background: "rgba(255,255,255,0.05)", color: form.time ? "white" : "#4b5563" }}
                      >
                        <option value="" disabled>Select time...</option>
                        {TIME_OPTIONS.map(t => (
                          <option key={t} value={t} style={{ background: "#1a1a1a" }}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2">Purpose of Visit</label>
                    <select
                      required value={form.purpose} onChange={set("purpose")}
                      disabled={status === "sending"}
                      className="input-dark disabled:opacity-50"
                      style={{ background: "rgba(255,255,255,0.05)", color: form.purpose ? "white" : "#4b5563" }}
                    >
                      <option value="" disabled>Select purpose...</option>
                      {PURPOSE_OPTIONS.map(p => (
                        <option key={p} value={p} style={{ background: "#1a1a1a" }}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2">Message (Optional)</label>
                    <textarea
                      placeholder="Any specific designs in mind, budget range, or questions..."
                      value={form.message} onChange={set("message")}
                      disabled={status === "sending"}
                      rows={3}
                      className="input-dark resize-none disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full btn-gold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Sending...
                      </>
                    ) : "Confirm Appointment →"}
                  </button>

                  <p className="text-gray-600 text-xs text-center">
                    WhatsApp will open automatically after submitting
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}