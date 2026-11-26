import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlowCard({ children, className = "", delay = 0 }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative group ${className}`}
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
      
      {/* Card content */}
      <div className="relative bg-white backdrop-blur-xl border border-gray-200 rounded-2xl p-8 hover:border-cyan-300  transition-all duration-300">
        {children}
      </div>
    </motion.div>
  );
}
