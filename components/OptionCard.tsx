"use client";

import { motion } from "framer-motion";

interface OptionCardProps {
  option: string;
  index: number;
  state: "idle" | "selected" | "correct" | "wrong" | "disabled";
  onClick: () => void;
}

export function OptionCard({ option, index, state, onClick }: OptionCardProps) {
  const letters =["A", "B", "C", "D"];

  let containerClass = "bg-white/[0.02] border-white/10 text-gray-300 hover:bg-white/[0.04] hover:border-white/20";
  let iconClass = "border-white/10 text-gray-400";
  
  let IconComp = () => <span>{letters[index]}</span>;

  if (state === "correct") {
    containerClass = "bg-emerald-500/10 border-emerald-500/40 text-emerald-400 z-10";
    iconClass = "bg-emerald-500 border-emerald-500 text-white";
    IconComp = () => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
    );
  } else if (state === "wrong") {
    containerClass = "bg-rose-500/10 border-rose-500/40 text-rose-400 z-10";
    iconClass = "bg-rose-500 border-rose-500 text-white";
    IconComp = () => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
    );
  } else if (state === "disabled") {
    containerClass = "bg-transparent border-white/5 text-gray-600 opacity-40 grayscale";
    iconClass = "border-white/5 text-gray-600";
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={state !== "idle"}
      whileHover={state === "idle" ? { x: 4 } : {}}
      whileTap={state === "idle" ? { scale: 0.98 } : {}}
      className={`w-full flex items-center gap-5 p-5 rounded-2xl border transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${containerClass}`}
      aria-label={`Option ${letters[index]}: ${option}`}
    >
      <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg border text-xs font-bold transition-colors ${iconClass}`}>
        <IconComp />
      </div>
      <span className="text-left font-medium leading-relaxed">{option}</span>
    </motion.button>
  );
}