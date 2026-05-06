"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, useMotionValue, useTransform, animate, Variants } from "framer-motion";
import { 
  ArrowRight, 
  RotateCcw, 
  LayoutGrid, 
  Zap, 
  BrainCircuit, 
  Target,
  Activity
} from "lucide-react";

// --- Types & Interfaces ---
interface PerformanceMetrics {
  label: string;
  color: string;
  strength: string;
  weakness: string;
  speed: string;
  consistency: string;
}

// --- Motion Configurations ---
// ADDED: Explicitly typed as Variants
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

// ADDED: Explicitly typed as Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } 
  }
};

// --- Reusable Button Component ---
function ActionButton({ 
  onClick, 
  children, 
  variant = "primary" 
}: { 
  onClick: () => void; 
  children: React.ReactNode; 
  variant?: "primary" | "secondary" | "tertiary" 
}) {
  const baseClass = "w-full py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090a]";
  
  const variants = {
    primary: "bg-white text-black hover:bg-slate-200 active:scale-[0.98] shadow-[0_0_0_1px_rgba(255,255,255,1)]",
    secondary: "bg-white/[0.02] text-white border border-white/10 hover:bg-white/[0.06] active:scale-[0.98]",
    tertiary: "bg-transparent text-slate-500 hover:text-slate-300 active:scale-[0.98]"
  };

  return (
    <button onClick={onClick} className={`${baseClass} ${variants[variant]}`}>
      {children}
    </button>
  );
}

// --- Animated Counter ---
function AnimatedScore({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.2,
      ease:[0.25, 1, 0.5, 1], // Custom smooth ease-out
    });
    return () => controls.stop();
  }, [count, value]);

  return (
    <motion.div 
      initial={{ scale: 0.96, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      className="flex items-baseline justify-center"
    >
      <motion.span className="text-7xl md:text-8xl font-bold tracking-tighter text-white">
        {rounded}
      </motion.span>
      <span className="text-4xl md:text-5xl font-medium text-slate-500 ml-1">%</span>
    </motion.div>
  );
}

// --- Main Content Component ---
function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Parse params safely
  const scoreParam = parseInt(searchParams.get("score") || "0", 10);
  const totalParam = parseInt(searchParams.get("total") || "5", 10);
  
  const score = isNaN(scoreParam) ? 0 : scoreParam;
  const total = isNaN(totalParam) || totalParam === 0 ? 1 : totalParam;
  const percentage = Math.round((score / total) * 100);

  // Derive Intelligent Metrics
  const getMetrics = (pct: number): PerformanceMetrics => {
    if (pct >= 80) return {
      label: "Elite Performance",
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
      strength: "Concept Synthesis & Retention",
      weakness: "Execution Speed Under Pressure",
      speed: "Fast",
      consistency: "High"
    };
    if (pct >= 50) return {
      label: "Proficient Execution",
      color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10",
      strength: "Foundational Logic",
      weakness: "Advanced Edge Cases",
      speed: "Medium",
      consistency: "Moderate"
    };
    return {
      label: "Needs Improvement",
      color: "text-rose-400 border-rose-500/20 bg-rose-500/10",
      strength: "Data Gathering",
      weakness: "Core Fundamentals",
      speed: "Varies",
      consistency: "Developing"
    };
  };

  const metrics = getMetrics(percentage);

  return (
    <div className="min-h-screen bg-[#08090a] text-slate-200 flex flex-col items-center justify-center selection:bg-indigo-500/30 relative overflow-hidden py-12">
      
      {/* 1. Subtle Background Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none" />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="w-full max-w-xl px-6 relative z-10 flex flex-col items-center"
      >
        
        {/* 2. Score Core */}
        <motion.div variants={fadeUp} className="text-center mb-8">
          <div className={`inline-flex px-4 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em] mb-8 ${metrics.color}`}>
            {metrics.label}
          </div>
          
          <AnimatedScore value={percentage} />
          
          <p className="text-sm font-medium text-slate-400 mt-4 tracking-wide">
            You answered <strong className="text-white">{score}</strong> out of <strong className="text-white">{total}</strong> correctly
          </p>
        </motion.div>

        {/* 3. Breakdown Strip */}
        <motion.div variants={fadeUp} className="w-full grid grid-cols-3 gap-3 mb-8">
          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <Target size={16} className="text-slate-500 mb-2" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Accuracy</span>
            <span className="text-sm font-semibold text-slate-200">{percentage}%</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <Zap size={16} className="text-slate-500 mb-2" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Pacing</span>
            <span className="text-sm font-semibold text-slate-200">{metrics.speed}</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <Activity size={16} className="text-slate-500 mb-2" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Consistency</span>
            <span className="text-sm font-semibold text-slate-200">{metrics.consistency}</span>
          </div>
        </motion.div>

        {/* 4. Performance Insight Block */}
        <motion.div variants={fadeUp} className="w-full bg-white/[0.02] border border-white/5 rounded-3xl p-6 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <BrainCircuit size={16} />
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Primary Strength</h4>
              <p className="text-sm font-medium text-slate-200">{metrics.strength}</p>
            </div>
          </div>
          <div className="h-[1px] w-full bg-white/5 mb-6" />
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
              <LayoutGrid size={16} />
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Focus Area</h4>
              <p className="text-sm font-medium text-slate-200">{metrics.weakness}</p>
            </div>
          </div>
        </motion.div>

        {/* 5. Action Layer */}
        <motion.div variants={fadeUp} className="w-full flex flex-col gap-3 mb-8">
          <ActionButton onClick={() => router.push("/quiz")} variant="primary">
            Retry Challenge <RotateCcw size={14} className="ml-1" />
          </ActionButton>
          
          <div className="grid grid-cols-2 gap-3">
            <ActionButton onClick={() => router.push("/review")} variant="secondary">
              Review Mistakes
            </ActionButton>
            <ActionButton onClick={() => router.push("/dashboard")} variant="secondary">
              Dashboard <ArrowRight size={14} />
            </ActionButton>
          </div>
        </motion.div>

        {/* 6. Re-engagement Hint */}
        <motion.p variants={fadeUp} className="text-[10px] font-bold uppercase tracking-widest text-slate-600 text-center">
          Consistency constructs mastery. Return tomorrow.
        </motion.p>

      </motion.div>
    </div>
  );
}

// --- Export with Suspense Boundary for useSearchParams ---
export function ResultScreen() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#08090a] animate-pulse" />}>
      <ResultContent />
    </Suspense>
  );
}