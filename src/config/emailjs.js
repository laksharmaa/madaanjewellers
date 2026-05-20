// EmailJS config — values loaded from .env
// Vite requires VITE_ prefix (not REACT_APP_ like CRA)

const emailjsConfig = {
  serviceId:  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey:  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export default emailjsConfig;
