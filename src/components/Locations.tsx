import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Narsipatnam", note: "Headquarters & flagship layouts", x: 28, y: 38 },
  { name: "Thalapalem", note: "Coastal growth corridor", x: 62, y: 26 },
  { name: "Adduroddu", note: "Nature-rich plots", x: 44, y: 58 },
  { name: "Duvvada", note: "Industrial proximity", x: 72, y: 70 },
  { name: "Pendurthi", note: "Hilltop investments", x: 18, y: 72 },
  { name: "Bhogapuram", note: "Airport zone (next-gen)", x: 80, y: 44 },
];

export function Locations() {
  return (
    <section id="locations" className="relative py-28 sm:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-accent-green">— Where We Build</span>
          <h2 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl text-foreground leading-[1] text-balance">
            Six corridors. <span className="italic gradient-luxe-text">One vision.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-primary/10 via-background to-accent-green/10"
          >
            <div className="absolute inset-0 opacity-40" style={{
              backgroundImage: "radial-gradient(circle, oklch(0.36 0.13 282 / 0.3) 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }} />
            {/* connecting lines */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {locations.map((l, i) =>
                locations.slice(i + 1).map((m, j) => (
                  <motion.line
                    key={`${i}-${j}`}
                    x1={l.x} y1={l.y} x2={m.x} y2={m.y}
                    stroke="currentColor"
                    strokeWidth="0.15"
                    className="text-primary/30"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.1 * (i + j) }}
                  />
                ))
              )}
            </svg>

            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
              >
                <span className="absolute inset-0 -m-3 rounded-full bg-primary/30 animate-ping" />
                <span className="relative block h-3 w-3 rounded-full bg-primary ring-4 ring-background shadow-luxe" />
                <div className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="rounded-lg glass-light px-3 py-1.5 text-xs font-medium text-foreground shadow-soft">
                    {loc.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="lg:col-span-5 space-y-2">
            {locations.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="group flex items-center justify-between gap-4 border-b border-border py-4 hover:border-primary transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-2xl text-muted-foreground/40 tabular-nums">0{i + 1}</span>
                  <div>
                    <div className="font-display text-xl text-foreground">{l.name}</div>
                    <div className="text-xs text-muted-foreground">{l.note}</div>
                  </div>
                </div>
                <MapPin className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
