import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

const quotes = [
  { img: t1, name: "Ramesh & Family", role: "Plot Owner — Sai Durga", text: "From the first site visit to the registration day, DS Iconic handled every step with absolute clarity. Our plot in Narsipatnam already feels like a family heirloom." },
  { img: t2, name: "Suresh Babu", role: "Investor — Sandy Beach", text: "I've worked with several developers across Vizag. None match DS Iconic on legal cleanliness and follow-through. The Bhogapuram corridor is the right bet, and they made it effortless." },
  { img: t3, name: "Lakshmi Priya", role: "Plot Owner — Prakruthi", text: "Director Satyanarana garu personally walked us through every approval. Buying land has never felt this transparent. Our family is already planning the second purchase." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % quotes.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 text-center">
        <span className="text-xs tracking-[0.4em] uppercase text-accent-green">— What Families Say</span>
        <h2 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl text-foreground leading-[1]">
          Voices of <span className="italic gradient-luxe-text">trust</span>.
        </h2>

        <div className="relative mt-16 min-h-[340px] sm:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <Quote className="h-10 w-10 text-primary/30" />
              <p className="mt-6 font-display text-2xl sm:text-3xl lg:text-4xl text-foreground leading-[1.3] max-w-3xl text-balance">
                "{quotes[i].text}"
              </p>
              <div className="mt-10 flex items-center gap-4">
                <img src={quotes[i].img} alt={quotes[i].name} className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20" />
                <div className="text-left">
                  <div className="font-medium text-foreground">{quotes[i].name}</div>
                  <div className="text-xs text-muted-foreground tracking-wider uppercase">{quotes[i].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {quotes.map((_, j) => (
            <button
              key={j}
              onClick={() => setI(j)}
              aria-label={`Testimonial ${j + 1}`}
              className={`h-1.5 rounded-full transition-all ${j === i ? "w-10 bg-primary" : "w-4 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
