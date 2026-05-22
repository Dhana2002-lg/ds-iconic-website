import { motion } from "framer-motion";
import {
  MapPin,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { useState, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Footer } from "@/components/Footer";

import img1 from "@/SAN EUPHORIA.png";
import img2 from "@/SAN2.png";
import img3 from "@/SAN3.png";

const images = [img1, img2, img3];

const features = [
  "40 Feet Black Top Roads",
  "Grand Entrance Arch",
  "Avenue Plantation",
  "Underground Drainage System",
  "24/7 Water Facility",
  "24/7 Electricity Facility",
  "Premium Gated Community",
  "Club House",
  "Children's Parks",
  "Swimming Pool (Upcoming)",
  "VMRDA Approved Layout",
  "Clear Title & Legal Documentation",
];

const highlights = [
  "Adjacent to NH-16 National Highway",
  "Near Anakapalli Town",
  "Close to Schools & Hospitals",
  "Easy Access to Railway Stations",
  "35 Mins Drive from Vizag Steel Plant",
  "15 Mins Drive from Major Industries",
  "Near Yelamanchili Railway Connectivity",
  "Near Anakapalli Railway Connectivity",
];

const investReasons = [
  "Fast Growing Location",
  "High Appreciation Potential",
  "Ideal for Investment & Dream Home",
  "Excellent Resale Opportunity",
  "Peaceful & Pollution Free Environment",
];

export default function Euphoria() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  const next = () =>
    setIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const goToContact = () => {
    navigate({
      to: "/",
      search: {
        scroll: "contact",
      },
    });
  };

  const goBackToProjects = () => {
    navigate({
      to: "/",
      search: {
        scroll: "projects",
      },
    });
  };

  return (
    <div className="bg-[#f8faf8] text-gray-900 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#ff7b00]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ec4899]/10 blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        {/* IMAGE */}
        <motion.img
          key={index}
          src={images[index]}
           initial={{ scale: 1.12, x: 20 }}
  animate={{ scale: 1, x: 0 }}
  transition={{ duration: 6, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

        {/* TOP BAR */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={goBackToProjects}
            className="bg-white/60 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>

        {/* HERO CONTENT */}
        <div className="absolute bottom-16 left-6 md:left-16 z-20 max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="px-5 py-2 rounded-full bg-white/70 border border-white/20 text-[#ff7b00] text-xs tracking-[0.3em] uppercase shadow">
              Premium Gated Community
            </span>

            <h1 className="mt-6 text-6xl md:text-[7rem] font-display font-medium leading-[0.9] tracking-[-0.03em]">

              <span className="text-white [text-shadow:0_4px_30px_rgba(0,0,0,0.8)]">
                San
              </span>

              <br />

              <span className="bg-gradient-to-r from-[#ff7b00] to-[#ffd60a] bg-clip-text text-transparent">
                Euphoria
              </span>
            </h1>

            <p className="mt-5 flex items-center gap-2 text-white/95 text-lg [text-shadow:0_2px_20px_rgba(0,0,0,0.8)]">
              <MapPin size={18} />
              Anakapalli, Andhra Pradesh
            </p>

            <p className="mt-6 text-white/90 text-lg md:text-xl leading-9 font-light max-w-3xl [text-shadow:0_2px_20px_rgba(0,0,0,0.8)]">
              A premium gated community designed
              for modern families, future appreciation,
              peaceful lifestyle, and luxury living.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={prev}
                className="w-14 h-14 rounded-full bg-white/30 hover:bg-white/40 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg hover:scale-110 transition"
              >
                <ArrowLeft />
              </button>

              <button
                onClick={next}
                className="w-14 h-14 rounded-full bg-white/30 hover:bg-white/40 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg hover:scale-110 transition"
              >
                <ArrowRight />
              </button>

              <button
                onClick={goToContact}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#ff7b00] to-[#ffd60a] text-white font-semibold text-lg shadow-2xl hover:scale-105 transition"
              >
                Book Site Visit
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-6">

          {[
            ["VMRDA", "Approved"],
            ["24/7", "Facilities"],
            ["40 FT", "Roads"],
            ["Premium", "Community"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-white/70 backdrop-blur-xl border border-black/10 rounded-[28px] p-8 shadow-xl"
            >
              <h2 className="text-5xl font-bold bg-gradient-to-r from-[#ff7b00] to-[#ffd60a] bg-clip-text text-transparent">
                {value}
              </h2>

              <p className="mt-3 text-gray-500 uppercase tracking-[0.25em] text-xs font-medium">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="bg-white/70 backdrop-blur-xl border border-black/10 rounded-[40px] p-10 md:p-16 shadow-xl">

          <p className="text-[#ff7b00] uppercase tracking-[0.3em] text-xs">
            Luxury Living
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-display">
            Crafted For
            <span className="bg-gradient-to-r from-[#ff7b00] to-[#ffd60a] bg-clip-text text-transparent">
              {" "}Future Growth
            </span>
          </h2>

          <p className="mt-8 text-gray-600 leading-8 text-lg max-w-4xl">
            San Euphoria is a premium plotted
            development at Anakapalli offering
            modern infrastructure, strategic
            connectivity, luxury amenities,
            and high appreciation potential.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="mb-12">
          <p className="text-[#ff7b00] uppercase tracking-[0.3em] text-xs">
            Amenities
          </p>

          <h2 className="mt-3 text-5xl md:text-7xl font-display leading-[0.95] tracking-[-0.03em]">
            Premium Features
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl border border-black/10 hover:border-black/20 rounded-[30px] p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff7b00] to-[#ffd60a] flex items-center justify-center text-white mb-5 shadow-lg">
                <CheckCircle2 />
              </div>

              <h3 className="text-2xl font-display">
                {feature}
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Modern infrastructure crafted
                for premium lifestyle and investment.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LOCATION HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-12">
          <p className="text-[#ff7b00] uppercase tracking-[0.3em] text-xs">
            Connectivity
          </p>

          <h2 className="mt-3 text-5xl md:text-7xl font-display leading-[0.95] tracking-[-0.03em]">
            Location Highlights
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {highlights.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl border border-black/10 rounded-[30px] p-7 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff7b00] to-[#ffd60a] flex items-center justify-center text-white shrink-0">
                  <CheckCircle2 size={20} />
                </div>

                <div>
                  <h3 className="text-2xl font-display">
                    {item}
                  </h3>

                  <p className="mt-2 text-gray-500 leading-7">
                    Strategic location advantage
                    for future appreciation.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY INVEST */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="mb-12">
          <p className="text-[#ff7b00] uppercase tracking-[0.3em] text-xs">
            Investment
          </p>

          <h2 className="mt-3 text-5xl md:text-7xl font-display leading-[0.95] tracking-[-0.03em]">
            Why Invest?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">

          {investReasons.map((item) => (
            <div
              key={item}
              className="bg-gradient-to-br from-[#ff7b00] to-[#ffd60a] text-white rounded-[30px] p-8 shadow-xl text-center"
            >
              <h3 className="text-2xl font-display">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION MAP */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="mb-10">
          <p className="text-[#ff7b00] uppercase tracking-[0.3em] text-xs">
            Location
          </p>

          <h2 className="mt-3 text-4xl md:text-6xl font-display">
            Prime Connectivity
          </h2>
        </div>

        <div className="overflow-hidden rounded-[40px] border border-black/10 bg-white/70 backdrop-blur-xl shadow-2xl">
          <iframe
            src="https://maps.google.com/maps?q=Anakapalli&t=&z=13&output=embed"
            className="w-full h-[500px]"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="relative overflow-hidden rounded-[40px] p-12 md:p-20 bg-gradient-to-r from-[#ff7b00] to-[#ffd60a] shadow-2xl">

          <div className="absolute inset-0 bg-white/10" />

          <div className="relative z-10 text-center">

            <h2 className="text-4xl md:text-6xl font-display text-white">
              Invest Today... Live Luxury Tomorrow
            </h2>

            <p className="mt-6 text-white/90 text-lg md:text-xl leading-9 font-light max-w-3xl mx-auto">
              Premium plots crafted for future growth,
              luxury lifestyle, and secure investment.
            </p>

            <button
              onClick={goToContact}
              className="mt-10 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition shadow-xl"
            >
              Contact Now
            </button>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
}