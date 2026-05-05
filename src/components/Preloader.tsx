import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Preloader = () => {
  const [done, setDone] = useState(false);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);

  const words = ["Destravo.", "Organizo.", "Entrego."];

  return (
    <AnimatePresence>
      {!done && !skipped && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="flex flex-wrap items-baseline justify-center gap-x-3 px-6 text-center font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            {words.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.18, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {i === 2 ? <span className="text-amber">{w}</span> : w}
              </motion.span>
            ))}
          </div>
          <button
            onClick={() => setSkipped(true)}
            className="absolute bottom-8 right-8 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Pular introdução"
          >
            Pular
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
