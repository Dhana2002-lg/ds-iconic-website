import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // minimum loader visible time
    const timer = setTimeout(() => {
      setDone(true);
    }, 2500); // increase if you want more time

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
          }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#00883d] via-[#0aa84c] to-[#fb111f] text-white"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] tracking-[0.5em] uppercase text-white/70"
            >
              DS Iconic
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-4 font-display text-5xl sm:text-7xl italic"
            >
              Real Estate
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="mt-8 h-px bg-white/60 mx-auto max-w-xs"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}