import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PHONE = "5511953172779";
const DEFAULT_MSG = "Jessé, preciso de [X]. É para [data]. Meu objetivo é [resultado].";

export function getWhatsAppLink(message: string = DEFAULT_MSG) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

interface Props {
  variant?: "primary" | "ghost";
  label?: string;
  message?: string;
  className?: string;
}

export const WhatsAppButton = ({ variant = "primary", label = "Resolver agora no WhatsApp", message, className = "" }: Props) => {
  const base = "group inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-ink text-primary-foreground px-7 py-4 text-base md:text-lg cta-glow animate-amber-pulse hover:bg-foreground"
      : "border border-foreground/15 text-foreground px-6 py-3 text-sm hover:border-amber hover:text-amber";

  return (
    <motion.a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`${base} ${styles} ${className}`}
    >
      <span>{label}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
    </motion.a>
  );
};
