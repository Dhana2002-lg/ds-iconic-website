import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, CheckCircle2 } from "lucide-react";
import sandyBeach from "@/SANDY BEACH.png";
import sanEuphoria from "@/SAN EUPHORIA.png";
import saiDurga from "@/SAI DURGA1.png";
import sriSai from "@/SRI SAI.png";
import prakruthi from "@/PRAKRUTHI.png";


const projects = [
  {
    name: "San Euphoria",
    link: "/san-euphoria",
    img: sanEuphoria,
    acres: "40 Acres",
    location: "Thalapalem, Anakapalli",
    landmarks: [
      "Adjacent to NH-16",
      "10 mins from Anakapalli Town",
      "Near Railway Stations",
    ],
    tag: "Gated Community",
  },

  {
    name: "Sandy Beach",
    link: "/sandy-beach",
    img: sandyBeach,
    acres: "12 Acres",
    location: "Bhogapuram",
    landmarks: [
      "Bhogapuram Airport — 8 km",
      "Sea Beach — 2 km",
      "NH-16 — 4 km",
    ],
    tag: "Beachfront",
  },

  {
    name: "Sai Durga",
    link: "/sai-durga",
    img: saiDurga,
    acres: "18 Acres",
    location: "Narsipatnam",
    landmarks: [
      "Narsipatnam Town — 3 km",
      "Government Hospital — 4 km",
      "School Zone — 1 km",
    ],
    tag: "Premium",
  },

  {
    name: "Sri Sai",
    link: "/sri-sai",
    img: sriSai,
    acres: "9 Acres",
    location: "Pendurthi",
    landmarks: [
      "NH-16 — 2 km",
      "Pendurthi Junction — 3 km",
      "VIT Campus — 6 km",
    ],
    tag: "Hilltop",
  },

  {
    name: "Prakruthi",
    link: "/prakruthi",
    img: prakruthi,
    acres: "15 Acres",
    location: "Adduroddu",
    landmarks: [
      "Eastern Ghats View",
      "Reservoir — 2 km",
      "Highway — 5 km",
    ],
    tag: "Nature",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-40 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-accent-green">— Signature Projects</span>
            <h2 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl text-foreground leading-[1] text-balance max-w-2xl">
              Layouts built like <span className="italic gradient-luxe-text">heirlooms</span>.
            </h2>
          </div>
          <p className="md:max-w-sm text-muted-foreground">
            Five flagship developments across the Visakhapatnam – Narsipatnam corridor. Each plot, VMRDA approved and legally clean.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-luxe transition-all duration-700"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <motion.img
                  src={p.img}
                  alt={`${p.name} layout aerial view`}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />

                <div className="absolute top-5 left-5 flex gap-2">
                  <span className="rounded-full glass text-white px-3 py-1 text-[10px] uppercase tracking-[0.2em]">{p.tag}</span>
                  <span className="rounded-full bg-accent-green text-white px-3 py-1 text-[10px] uppercase tracking-[0.2em] inline-flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> VMRDA
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/70">
                        <MapPin className="h-3 w-3" /> {p.location} • {p.acres}
                      </div>
                      <h3 className="mt-2 font-display text-4xl sm:text-5xl">{p.name}</h3>
                    </div>
                    <button className="hidden sm:inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <Link
  to={p.link}
  className="hidden sm:inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
>
  <ArrowUpRight className="h-5 w-5" />
</Link>
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {p.landmarks.map((l) => (
                    <div key={l} className="text-xs text-muted-foreground border-l-2 border-primary/30 pl-3 py-1">
                      {l}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
  <Link
  to={p.link}
  className="text-sm font-medium text-primary inline-flex items-center gap-2 group/link"
>
  View Details

  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
</Link>

  <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
    Now Selling
  </span>
</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
