import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/final logo.png";
const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#locations", label: "Locations" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-light shadow-soft" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full ring-1 ring-border bg-white flex items-center justify-center overflow-hidden">
  <img
    src={logo}
    alt="DS Iconic Real Estate logo"
    className="h-10 w-10 object-contain"
  />
</div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-base font-semibold text-primary">DS Iconic</span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Real Estate</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm text-foreground/80 hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00883d] to-[#fb111f] text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-all hover:-translate-y-0.5"
          >
            Book Site Visit
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-full glass-light"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mx-4 mt-2 rounded-2xl glass-light p-6 shadow-soft"
          >
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full gradient-luxe text-primary-foreground px-5 py-3 text-sm font-medium"
              >
                Book Site Visit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
