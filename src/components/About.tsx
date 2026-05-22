import { motion } from "framer-motion";
import { Counter } from "./Counter";

const stats = [
  { v: 10, s: "+", label: "Years Experience" },
  { v: 1000, s: "+", label: "Plots Sold" },
  { v: 500, s: "+", label: "Happy Families" },
  { v: 5, s: "+", label: "Projects Completed" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-accent-green">— About DS Iconic</span>
            <h2 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl leading-[1] text-foreground text-balance">
              A decade of <span className="italic gradient-luxe-text">trusted</span> land craftsmanship.
            </h2>
            <p className="mt-8 text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Under the directorship of <span className="text-foreground font-medium">D. Satyanarayana, M.Com</span>,
              DS Iconic Real Estate has helped hundreds of families turn open land into long-term legacy.
              Every layout we deliver is VMRDA approved, legally clear, and located on Andhra Pradesh's
              most promising growth corridors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 * i }}
                className="group relative rounded-2xl border border-border bg-card p-6 hover:shadow-luxe transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="font-display text-5xl font-light text-primary">
                    <Counter value={s.v} suffix={s.s} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
