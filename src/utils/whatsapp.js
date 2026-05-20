// Vite uses import.meta.env instead of process.env
const WA_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

/**
 * Builds a WhatsApp URL with a pre-filled appointment request message
 * @param {Object} form - { name, phone, date, time, purpose, message }
 */
export function buildWhatsAppURL(form) {
  const text = encodeURIComponent(
    `📅 *Appointment Request — Madaan Jewellers*\n\n` +
    `*Name:* ${form.name}\n` +
    `*Phone:* ${form.phone}\n` +
    `*Preferred Date:* ${form.date || "Flexible"}\n` +
    `*Preferred Time:* ${form.time || "Flexible"}\n` +
    `*Purpose:* ${form.purpose || "—"}\n` +
    `*Message:* ${form.message || "—"}\n\n` +
    `_Sent from madaanjewellers.in_`
  );
  return `https://wa.me/${WA_NUMBER}?text=${text}`;
}

// Plain direct chat link — used in float button & nav CTA
export const WA_DIRECT = `https://wa.me/${WA_NUMBER}`;
