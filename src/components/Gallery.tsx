import { motion } from "framer-motion";
import sandyBeach from "@/assets/project-sandy-beach.jpg";
import saiDurga from "@/assets/project-sai-durga.jpg";
import sriSai from "@/assets/project-sri-sai.jpg";
import prakruthi from "@/assets/project-prakruthi.jpg";
import hero from "@/assets/hero.jpg";

const imgs = [sandyBeach, saiDurga, sriSai, prakruthi, hero, sandyBeach, prakruthi, sriSai];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 sm:py-40 bg-muted/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between gap-8 mb-12"
        >
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-accent-green">— Cinematic Gallery</span>
            <h2 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl text-foreground leading-[1]">
              Land, in <span className="italic gradient-luxe-text">motion</span>.
            </h2>
          </div>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 marquee-track w-max">
          {[...imgs, ...imgs].map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
              className="relative h-[420px] w-[560px] shrink-0 overflow-hidden rounded-3xl shadow-soft group"
            >
              <img src={src} alt="Project gallery" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
