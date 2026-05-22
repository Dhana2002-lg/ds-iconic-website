import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";

const STATS = [
  { value: "1000+", label: "Plots Sold" },
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Happy Families" },
  { value: "10+", label: "Projects Completed" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Premium aerial background */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Aerial view of premium plotted township"
          className="h-full w-full object-cover"
        />
        {/* Soft luxury overlays — bright, readable, premium */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-6 sm:px-10 lg:px-12 pt-32 pb-12">
        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-primary/70" />
            <span className="text-[10px] font-medium uppercase tracking-[0.38em] text-primary">
              DS Iconic Real Estate
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="font-display text-foreground text-[2.5rem] sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.06] tracking-[-0.025em] mt-7 font-normal text-balance"
          >
            Premium Open Plot
            <br />
            <span className="italic text-primary font-light">Communities</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="mt-7 max-w-lg text-[15px] sm:text-base text-muted-foreground leading-[1.75] font-light"
          >
            VMRDA approved layouts across Andhra Pradesh — thoughtfully
            designed for trusted investments and long-term value.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00883d] to-[#fb111f] text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-all hover:-translate-y-0.5"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00883d] to-[#fb111f] text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-all hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease }}
          className="mt-14 border-t border-primary/15 pt-7"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.85 + i * 0.08, ease }}
                className="flex flex-col"
              >
                <span className="font-display text-[1.75rem] lg:text-[2rem] text-primary tracking-tight font-medium leading-none">
                  {s.value}
                </span>
                <span className="mt-2.5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
