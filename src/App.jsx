import Navbar           from "./components/Navbar";
import Hero             from "./components/Hero";
import MarqueeStrip     from "./components/MarqueeStrip";
import Collections      from "./components/Collections";
import BridalCollection from "./components/BridalCollection";
import About            from "./components/About";
import Testimonials     from "./components/Testimonials";
import AppointmentForm  from "./components/AppointmentForm";
import Contact          from "./components/Contact";
import Footer           from "./components/Footer";
import WhatsAppFloat    from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="bg-obsidian-900 min-h-screen">
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <Collections />
      <BridalCollection />
      <About />
      <Testimonials />
      <AppointmentForm />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
