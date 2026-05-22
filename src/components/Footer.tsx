import logo from "../final logo.png";

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background pt-20 pb-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-full bg-white ring-1 ring-white/20 flex items-center justify-center overflow-hidden">
  <img
    src={logo}
    alt="DS Iconic logo"
    className="h-16 w-16 object-contain"
  />
</div>
              <div>
                <div className="font-display text-2xl">DS Iconic</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-background/60">Real Estate</div>
              </div>
            </div>
            <p className="mt-6 text-background/70 max-w-md leading-relaxed">
              We make your dream come true. Premium open plots, trusted property investments, and a decade of legacy across Andhra Pradesh.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-background/50 mb-4">Explore</div>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-gold transition-colors">Projects</a></li>
              <li><a href="#locations" className="hover:text-gold transition-colors">Locations</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-background/50 mb-4">Reach Us</div>
            <p className="text-sm text-background/80 leading-relaxed">
              Opp. Reliance Smart, Bank Colony,<br />
              Main Road, Narsipatnam – 531116
            </p>
            <a href="tel:9398634198" className="mt-4 inline-block font-display text-2xl text-shimmer">9398634198</a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-background/50">
          <div>© {new Date().getFullYear()} DS Iconic Real Estate. All rights reserved.</div>
          <div className="tracking-[0.3em] uppercase">Director — D. Satyanarayana, M.Com</div>
        </div>
      </div>
    </footer>
  );
}
