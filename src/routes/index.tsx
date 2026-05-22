import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useEffect } from "react";

import { LoadingGate } from "@/components/LoadingGate";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Locations } from "@/components/Locations";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";

function Index() {
  const search = useSearch({ from: "/" }) as {
  scroll?: string;
};

  // ✅ SAFE SCROLL HANDLER
  useEffect(() => {
  if (!search.scroll) return;

  const el = document.getElementById(search.scroll);

  if (el) {
    setTimeout(() => {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }
}, [search.scroll]);

  return (
    <LoadingGate>
      <SmoothScroll />
      <Toaster position="top-center" />

      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Locations />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </LoadingGate>
  );
}

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      scroll: search.scroll as string | undefined,
    };
  },

  component: Index,
});