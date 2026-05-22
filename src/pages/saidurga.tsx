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

import img1 from "@/SAI DURGA1.png";
import img2 from "@/2.png";
import img3 from "@/3.jpg";

const images = [img1, img2, img3];

const features = [
  "50 Acres Premium Layout",
  "VMRDA Approved Project",
  "RERA Approved",
  "Gated Community",
  "40 Feet Wide Roads",
  "24/7 Water Supply",
  "24/7 Electricity Supply",
  "Drainage System",
  "Compound Wall",
  "Bank Loan Facility",
];

export default function SaiDurga() {
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
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00883d]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#fb111f]/10 blur-[120px]" />
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

        
        {/* BETTER OVERLAY */}
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

        {/* TOP BAR */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={goBackToProjects}
            className="bg-white/60 backdrop-blur-xl border border-[#1e3a5f]/20 px-5 py-3 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>

        {/* HERO CONTENT */}
        <div className="absolute bottom-16 left-6 md:left-16 z-20 max-w-3xl">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="px-5 py-2 rounded-full bg-white/70 border border-[#1e3a5f]/20 text-[#00883d] text-xs tracking-[0.3em] uppercase shadow">
              Premium VMRDA Venture
            </span>

            <h1 className="mt-6 text-6xl md:text-[7rem] font-display font-medium leading-[0.9] tracking-[-0.03em]">

              <span className="text-white [text-shadow:0_4px_30px_rgba(0,0,0,0.8)]">
                Sai Durga
              </span>

              <br />

              <span className="bg-gradient-to-r from-[#00883d] to-[#fb111f] bg-clip-text text-transparent">
                Venture
              </span>
            </h1>

            <p className="mt-5 flex items-center gap-2 text-white/95 text-lg [text-shadow:0_2px_20px_rgba(0,0,0,0.8)]">
              <MapPin size={18} />
              Narsipatnam, Andhra Pradesh
            </p>

            <p className="mt-6 text-white/90 text-lg md:text-xl leading-9 font-light max-w-2xl [text-shadow:0_2px_20px_rgba(0,0,0,0.8)]">
              Premium gated community crafted for
              future appreciation, luxury living,
              and secure investment.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={prev}
                className="w-14 h-14 rounded-full bg-white/30 hover:bg-white/40 backdrop-blur-xl border border-[#1e3a5f]/20 flex items-center justify-center shadow-lg hover:scale-110 transition"
              >
                <ArrowLeft />
              </button>

              <button
                onClick={next}
                className="w-14 h-14 rounded-full bg-white/30 hover:bg-white/40 backdrop-blur-xl border border-[#16324f]/25 flex items-center justify-center shadow-lg hover:scale-110 transition"
              >
                <ArrowRight />
              </button>

              <button
                onClick={goToContact}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00883d] to-[#fb111f] text-white font-semibold text-lg shadow-2xl hover:scale-105 transition"
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
            ["50+", "Acres"],
            ["1000+", "Premium Plots"],
            ["VMRDA", "Approved"],
            ["70%", "Bank Loan"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-white/70 backdrop-blur-xl border border-[#16324f]/25 rounded-[28px] p-8 shadow-xl"
            >
              <h2 className="text-5xl font-bold bg-gradient-to-r from-[#00883d] to-[#fb111f] bg-clip-text text-transparent">
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

        <div className="bg-white/70 backdrop-blur-xl border border-[#16324f]/15 rounded-[40px] p-10 md:p-16 shadow-xl">

          <p className="text-[#00883d] uppercase tracking-[0.3em] text-xs">
            Premium Living
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-display">
            Crafted For
            <span className="bg-gradient-to-r from-[#00883d] to-[#fb111f] bg-clip-text text-transparent">
              {" "}Future Growth
            </span>
          </h2>

          <p className="mt-8 text-gray-600 leading-8 text-lg max-w-4xl">
            Sai Durga Ventures is a premium plotted
            development project designed for modern
            investors and families looking for
            luxury lifestyle and strong appreciation.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="mb-12">
          <p className="text-[#00883d] uppercase tracking-[0.3em] text-xs">
            Features
          </p>

          <h2 className="mt-3 text-5xl md:text-7xl font-display leading-[0.95] tracking-[-0.03em]">
            Premium Amenities
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
              className="bg-white/70 backdrop-blur-xl border border-[#16324f]/15 hover:border-[#16324f]/35 rounded-[30px] p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00883d] to-[#fb111f] flex items-center justify-center text-white mb-5 shadow-lg">
                <CheckCircle2 />
              </div>

              <h3 className="text-2xl font-display font-medium tracking-[-0.02em]">
                {feature}
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Modern infrastructure crafted
                for luxury living and premium investment.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="mb-10">
          <p className="text-[#00883d] uppercase tracking-[0.3em] text-xs">
            Location
          </p>

          <h2 className="mt-3 text-4xl md:text-6xl font-display">
            Prime Connectivity
          </h2>
        </div>

        <div className="overflow-hidden rounded-[40px] border border-[#16324f]/25 bg-white/70 backdrop-blur-xl shadow-2xl">
          <iframe
            src="https://maps.google.com/maps?q=St.%20Anne's%20School%2C%20Narsipatnam&t=&z=15&output=embed"
            className="w-full h-[500px]"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="relative overflow-hidden rounded-[40px] p-12 md:p-20 bg-gradient-to-r from-[#00883d] to-[#fb111f] shadow-2xl">

          <div className="absolute inset-0 bg-white/10" />

          <div className="relative z-10 text-center">

            <h2 className="text-4xl md:text-6xl font-display text-white">
              Book Your Dream Plot Today
            </h2>

           <p className="mt-6 text-white/90 text-lg md:text-xl leading-9 font-light max-w-2xl [text-shadow:0_2px_20px_rgba(0,0,0,0.8)]">
            </p>

            <button
              onClick={goToContact}
              className="mt-10 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition shadow-xl"
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