import { motion } from "framer-motion";
import { Building2, ShieldCheck, Sun, Car, Bike, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Building2, name: "Real Estate", desc: "Premium open plots, VMRDA approved layouts and trusted property investments." },
  { icon: ShieldCheck, name: "LIC Services", desc: "Life insurance planning, policy guidance and family wealth protection." },
  { icon: Sun, name: "Solar Solutions", desc: "Rooftop solar installations, on-grid systems and clean-energy consulting." },

];

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-40 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "radial-gradient(circle at 30% 20%, oklch(0.78 0.13 85), transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.55 0.18 142), transparent 50%)"
      }} />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">— Beyond Real Estate</span>
          <h2 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl leading-[1] text-balance">
            Services. <span className="italic gradient-gold-text">One trusted name.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 p-8 transition-all hover:border-white/30 ${i === 0 ? "lg:row-span-2 lg:col-span-1" : ""}`}
                style={{ background: "linear-gradient(180deg, oklch(1 0 0 / 0.04), oklch(1 0 0 / 0.01))" }}
              >
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
                  style={{ background: "var(--gradient-gold)" }} />
                <div className="relative flex flex-col h-full">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl glass">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mt-8 font-display text-3xl">{s.name}</h3>
                  <p className="mt-3 text-sm text-background/70 leading-relaxed flex-1">{s.desc}</p>
                  <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm text-background/80 hover:text-gold transition-colors">
                    Enquire <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
