"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { mcqData } from "@/lib/mcqData";

// --- Icons ---
const ArrowLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
);

const CornerDownRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 10 20 15 15 20"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/></svg>
);

// --- Component ---
export function QuizScreen() {
  const router = useRouter();
  
  // State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  
  // Refs for cleanup
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const question = mcqData[currentIndex];
  const total = mcqData.length;

  // --- Handlers ---
  const handleSelect = useCallback((option: string) => {
    if (selectedOption) return; 

    setSelectedOption(option);
    
    if (option === question.answer) {
      setScore((s) => s + 1);
    }

    timerRef.current = setTimeout(() => {
      setShowExplanation(true);
    }, 300);
  },[selectedOption, question?.answer]);

  const handleNext = useCallback(() => {
    if (!showExplanation) return;

    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setShowExplanation(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push(`/result?score=${score}&total=${total}`);
    }
  }, [currentIndex, total, showExplanation, score, router]);

  // --- Keyboard Accessibility ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "escape") {
        router.push("/dashboard");
        return;
      }

      if (!selectedOption) {
        const keyMap: Record<string, number> = { a: 0, b: 1, c: 2, d: 3 };
        const key = e.key.toLowerCase();
        if (key in keyMap && question.options[keyMap[key]]) {
          handleSelect(question.options[keyMap[key]]);
        }
      } else if (showExplanation && e.code === "Space") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  },[selectedOption, showExplanation, handleSelect, handleNext, question?.options, router]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  },[]);

  if (!question) return null;

  return (
    <div className="min-h-screen bg-[#08090a] text-slate-200 font-sans selection:bg-indigo-500/30 relative pb-32 md:pb-12">
      
      {/* 1. TOP CONTROL BAR */}
      <header className="sticky top-0 z-10 bg-[#08090a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between text-xs font-bold tracking-widest uppercase text-slate-500">
          <button
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-2 hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md py-1"
            aria-label="Return to Dashboard"
          >
            <ArrowLeftIcon /> Back
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-white">{currentIndex + 1}</span>
            <span className="opacity-40">/ {total}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="opacity-40">Score</span>
            <span className="text-white tabular-nums">{score}</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-2xl mx-auto px-6 pt-12 md:pt-16">
        
        {/* 2. CENTERED QUESTION BLOCK */}
        <motion.div
          key={`q-${currentIndex}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h1 className="text-2xl md:text-[28px] font-medium text-slate-100 mb-10 leading-[1.4] tracking-tight text-balance">
            {question.question}
          </h1>

          {/* 3. OPTIONS STACK */}
          <div className="flex flex-col gap-3" role="radiogroup" aria-label="Question options">
            {question.options.map((option, idx) => {
              const isCorrect = option === question.answer;
              const isSelected = selectedOption === option;
              
              let state: "idle" | "selected" | "correct" | "wrong" | "disabled" = "idle";
              if (selectedOption) {
                if (isCorrect) state = "correct";
                else if (isSelected) state = "wrong";
                else state = "disabled";
              }

              // Dynamic Animation Variants based on state
              // ADDED Variants type and "as const" to strictly type the animation object
              const variants: Variants = {
                idle: { scale: 1, x: 0, opacity: 1 },
                hover: { x: 4, opacity: 1, transition: { duration: 0.2 } },
                tap: { scale: 0.99 },
                correct: { scale: 1.02, x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 300, damping: 20 } },
                wrong: { x: [0, -6, 6, -6, 6, 0], scale: 1, opacity: 1, transition: { duration: 0.4 } },
                disabled: { scale: 0.98, x: 0, opacity: 0.4 }
              };

              // Dynamic Styling
              const baseStyles = "w-full flex items-center gap-4 p-5 rounded-xl border text-left transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500";
              const stateStyles = {
                idle: "bg-white/[0.01] border-white/5 text-slate-300 hover:bg-white/[0.03] hover:border-white/10",
                correct: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 z-10",
                wrong: "bg-rose-500/10 border-rose-500/30 text-rose-400 z-10",
                disabled: "bg-transparent border-white/5 text-slate-500 grayscale",
                selected: "" 
              };

              // Letter indicator (A, B, C, D)
              const letter = String.fromCharCode(65 + idx);

              return (
                <motion.button
                  key={option}
                  variants={variants}
                  initial="idle"
                  animate={state === "idle" ? "idle" : state}
                  whileHover={state === "idle" ? "hover" : ""}
                  whileTap={state === "idle" ? "tap" : ""}
                  disabled={!!selectedOption}
                  onClick={() => handleSelect(option)}
                  aria-label={`Option ${letter}: ${option}`}
                  aria-checked={isSelected}
                  role="radio"
                  className={`${baseStyles} ${stateStyles[state]}`}
                >
                  <div className={`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded border text-xs font-bold transition-colors ${
                    state === "correct" ? "bg-emerald-500 border-emerald-500 text-white" :
                    state === "wrong" ? "bg-rose-500 border-rose-500 text-white" :
                    "border-white/10 text-slate-500"
                  }`}>
                    {state === "correct" ? <CheckIcon /> : state === "wrong" ? <XIcon /> : letter}
                  </div>
                  <span className="text-[15px] font-medium leading-snug">{option}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* 4. EXPLANATION PANEL */}
        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.3, ease:[0.25, 1, 0.5, 1] }}
              className="mt-10"
              role="alert"
              aria-live="polite"
            >
              <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center gap-2 mb-4 text-indigo-400">
                  <CornerDownRightIcon />
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em]">Concept</h3>
                </div>
                
                <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed mb-6">
                  {question.explanation}
                </p>
                
                <div className="h-[1px] w-full bg-white/5 mb-6" />
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Key Insight</h4>
                    <p className="text-xs font-medium text-slate-200">
                      {/* Simulating a key insight by taking the first sentence, or a default summary */}
                      {question.explanation.split('.')[0]}.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 5. STICKY ACTION LAYER (NEXT BUTTON) */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 left-0 right-0 p-4 bg-[#08090a]/90 backdrop-blur-xl border-t border-white/5 md:bg-transparent md:backdrop-blur-none md:border-none md:bottom-8 md:right-8 md:left-auto md:w-auto z-50"
          >
            <button
              onClick={handleNext}
              className="w-full md:w-auto px-8 py-4 bg-white text-black rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-slate-200 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090a]"
            >
              {currentIndex < total - 1 ? "Next Question" : "View Results"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. PASSIVE HUD (KEYBOARD HINTS) */}
      {!selectedOption && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="fixed bottom-8 left-8 hidden lg:flex items-center gap-4 text-slate-500 pointer-events-none"
        >
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 font-sans">A-D</kbd>
            <span className="text-[10px] font-bold uppercase tracking-widest">Select</span>
          </div>
        </motion.div>
      )}

      {/* Active Spacebar Hint */}
      {showExplanation && (
         <motion.div 
         initial={{ opacity: 0 }} animate={{ opacity: 1 }}
         className="fixed bottom-8 left-8 hidden lg:flex items-center gap-4 text-slate-500 pointer-events-none"
       >
         <div className="flex items-center gap-2">
           <kbd className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 font-sans">Space</kbd>
           <span className="text-[10px] font-bold uppercase tracking-widest">Next</span>
         </div>
       </motion.div>
      )}
    </div>
  );
}