"use client";

import { motion } from "framer-motion";

export function ProgressBar({ current, total }: { current: number; total: number }) {
  const progress = (current / total) * 100;
  
  return (
    <div 
      className="w-full h-1 bg-white/10 rounded-full overflow-hidden" 
      role="progressbar" 
      aria-valuenow={progress} 
      aria-valuemin={0} 
      aria-valuemax={100}
    >
      <motion.div
        className="h-full bg-indigo-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </div>
  );
}