import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;

      // Hero tarvata show
      // Footer mundhu hide
      if (scrollY > 500 && scrollY < pageHeight - windowHeight - 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.a
      href="https://wa.me/919398634198"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: show ? 1 : 0,
        scale: show ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-[#00883d] shadow-2xl">

        {/* Pulse Effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-ping"></span>

        {/* WhatsApp Icon */}
        <FaWhatsapp className="relative h-6 w-6 sm:h-9 sm:w-9 text-white" />
      </div>
    </motion.a>
  );
}