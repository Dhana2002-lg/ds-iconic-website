import { motion } from "framer-motion";
import { ShieldCheck, FileCheck2, BadgeCheck, MapPinned, Heart, TrendingUp } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Trusted Investments", desc: "A decade of unbroken trust with families across Andhra Pradesh." },
  { icon: FileCheck2, title: "Legal Clear Documentation", desc: "Every plot delivered with crystal-clear, verified paperwork." },
  { icon: BadgeCheck, title: "VMRDA Layouts", desc: "Government-approved layouts built to municipal standards." },
  { icon: MapPinned, title: "Prime Locations", desc: "Hand-picked corridors with proven appreciation potential." },
  { icon: Heart, title: "Customer Satisfaction", desc: "500+ happy families and a referral-driven business." },
  { icon: TrendingUp, title: "Long-Term Value", desc: "Plots curated for legacy, not just transactions." },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-accent-green">— Why DS Iconic</span>
            <h2 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl text-foreground leading-[1] text-balance">
              Built on <span className="italic gradient-luxe-text">trust</span>, sold on <span className="italic gradient-luxe-text">truth</span>.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Six promises we keep at every site visit, every contract, every handover.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:-translate-y-1 transition-all"
                >
                  <Icon className="h-7 w-7 text-accent-green" />
                  <h3 className="mt-6 font-display text-2xl text-foreground">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
