"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}

export function Button({ 
  onClick, 
  children, 
  variant = "primary", 
  disabled = false, 
  ariaLabel,
  className = ""
}: ButtonProps) {
  
  const isPrimary = variant === "primary";

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      // Define animation states for Framer Motion
      initial="initial"
      whileHover={!disabled ? "hover" : ""}
      whileTap={!disabled ? "tap" : ""}
      variants={{
        initial: { scale: 1, y: 0 },
        hover: { scale: 1.02, y: -2, transition: { type: "spring", stiffness: 400, damping: 25 } },
        tap: { scale: 0.98, y: 0, transition: { type: "spring", stiffness: 400, damping: 25 } }
      }}
      className={`
        relative w-full py-4 px-6 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] 
        transition-colors duration-300 flex items-center justify-center gap-3 overflow-hidden group
        outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090a]
        ${disabled ? "opacity-40 cursor-not-allowed grayscale" : "cursor-pointer"}
        ${isPrimary 
          ? "bg-white text-black shadow-[0_0_0_1px_rgba(255,255,255,1)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)]" 
          : "bg-white/[0.02] text-white border border-white/10 hover:bg-white/[0.06] hover:border-indigo-500/30 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.2)]"}
        ${className}
      `}
    >
      {/* ================= PRIMARY BUTTON EFFECTS ================= */}
      {!disabled && isPrimary && (
        <>
          {/* Framer Motion Sweeping Shine Effect */}
          <motion.div 
            variants={{
              initial: { x: "-150%", skewX: "-30deg" },
              hover: { x: "200%", skewX: "-30deg" }
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 pointer-events-none mix-blend-overlay" 
          />
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none opacity-50" />
        </>
      )}

      {/* ================= SECONDARY BUTTON EFFECTS ================= */}
      {!disabled && !isPrimary && (
        <>
          {/* Futuristic Background Aurora Glow on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 blur-xl" />
          {/* Top Edge Highlight for 3D depth */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </>
      )}

      {/* ================= BUTTON CONTENT ================= */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}