"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Command, Flame, Target, Zap, RotateCcw, 
  Timer, ChevronRight, ChevronDown, Activity, CheckCircle2, AlertCircle 
} from "lucide-react";

// --- Data Types ---
interface Session {
  id: string;
  date: string;
  score: number;
  total: number;
  durationSeconds: number;
}

interface UserData {
  totalQuestions: number;
  correctAnswers: number;
  streak: number;
  sessions: Session[];
}

// --- Premium Motion System (Strictly Typed for Build Success) ---
const anim: { container: Variants; item: Variants } = {
  container: {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.05 } 
    }
  },
  item: {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      transition: { type: "spring", stiffness: 300, damping: 24 } 
    }
  }
};

// --- Futuristic Ambient Background ---
const AmbientBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-20 bg-indigo-600 mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
    <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-10 bg-purple-600 mix-blend-screen animate-pulse" style={{ animationDuration: '15s' }} />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
  </div>
);

export function Dashboard() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    totalQuestions: 0,
    correctAnswers: 0,
    streak: 0,
    sessions:[]
  });

  // --- Data Initialization & Hydration Safe Guard ---
  useEffect(() => {
    const stored = localStorage.getItem("nexus_user_data");
    if (stored) {
      setUserData(JSON.parse(stored));
    } else {
      const initialData: UserData = {
        totalQuestions: 45,
        correctAnswers: 32,
        streak: 4,
        sessions:[
          { id: "s1", date: new Date(Date.now() - 86400000).toISOString(), score: 8, total: 10, durationSeconds: 320 },
          { id: "s2", date: new Date(Date.now() - 172800000).toISOString(), score: 7, total: 10, durationSeconds: 290 },
          { id: "s3", date: new Date(Date.now() - 259200000).toISOString(), score: 9, total: 10, durationSeconds: 345 }
        ]
      };
      localStorage.setItem("nexus_user_data", JSON.stringify(initialData));
      setUserData(initialData);
    }
    setIsMounted(true);
  },[]);

  // --- Computed Derived Values ---
  const stats = useMemo(() => {
    const accuracy = userData.totalQuestions > 0 
      ? Math.round((userData.correctAnswers / userData.totalQuestions) * 100) 
      : 0;
    
    const totalTime = userData.sessions.reduce((acc, s) => acc + s.durationSeconds, 0);
    const avgTimePerQuestion = userData.totalQuestions > 0 
      ? Math.round(totalTime / userData.totalQuestions) 
      : 0;

    let consistency = "N/A";
    if (userData.sessions.length > 5) consistency = "High";
    else if (userData.sessions.length > 2) consistency = "Developing";

    let strength = "Data Gathering";
    let weakness = "Pending Evaluation";

    if (accuracy >= 80) {
      strength = "Concept Retention";
      weakness = "Execution Speed";
    } else if (accuracy >= 50) {
      strength = "Foundational Logic";
      weakness = "Advanced Application";
    } else if (userData.totalQuestions > 0) {
      strength = "Learning Phase";
      weakness = "Core Fundamentals";
    }

    return { accuracy, avgTimePerQuestion, consistency, strength, weakness };
  }, [userData]);

  if (!isMounted) return <div className="min-h-screen bg-[#030407]" />;

  return (
    <div className="min-h-screen bg-[#030407] text-slate-200 font-sans selection:bg-indigo-500/30 relative flex flex-col">
      <AmbientBackground />
      
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-10 md:py-16 flex flex-col w-full h-full flex-1">
        
        <motion.div variants={anim.container} initial="hidden" animate="show" className="w-full flex flex-col gap-10">
          
          {/* ================= 1. SYSTEM BAR ================= */}
          <motion.header variants={anim.item} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-white/5 to-white/10 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center backdrop-blur-md">
                <Command size={16} strokeWidth={1.5} className="text-white" />
              </div>
              <h1 className="text-xs font-bold tracking-[0.25em] uppercase text-slate-100">Nexus.ai</h1>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 to-rose-500/10 border border-orange-500/20 text-orange-400 backdrop-blur-md shadow-[0_0_15px_rgba(249,115,22,0.1)]">
              <Flame size={14} strokeWidth={2} />
              <span className="text-[10px] font-bold uppercase tracking-widest">{userData.streak} Day Streak</span>
            </div>
          </motion.header>

          {/* ================= 2. PRIMARY ACTION CARD ================= */}
          <motion.section variants={anim.item} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] pointer-events-none" />
            
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-2xl transition-all duration-500 hover:border-white/10 hover:bg-white/[0.03] shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden relative">
              
              <div className="absolute -top-24 -right-24 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none transform group-hover:scale-105 group-hover:-rotate-12">
                <Zap size={300} strokeWidth={1} />
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-12 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-indigo-500/20 bg-indigo-500/10 mb-6 shadow-[0_0_10px_rgba(99,102,241,0.1)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-[0.2em]">Active Curriculum</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-4 text-balance">
                    AI Foundations
                  </h2>
                  <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                    Master the core principles of neural architectures, transformer mechanics, and optimization algorithms.
                  </p>
                </div>

                {/* Dynamic Insights */}
                <div className="flex flex-col gap-4 min-w-[200px]">
                  <div className="flex items-start gap-3 text-sm p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <CheckCircle2 size={16} strokeWidth={1.5} className="text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Strength</p>
                      <p className="text-slate-200 font-medium text-xs mt-0.5">{stats.strength}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <AlertCircle size={16} strokeWidth={1.5} className="text-rose-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Focus Area</p>
                      <p className="text-slate-200 font-medium text-xs mt-0.5">{stats.weakness}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Computed Progress */}
              <div className="mb-10 relative z-10">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Mastery Index</span>
                  <span className="text-sm font-medium text-white">{stats.accuracy}%</span>
                </div>
                <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden shadow-inner border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${stats.accuracy}%` }}
                    transition={{ duration: 1.2, ease:[0.16, 1, 0.3, 1] }}
                    className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full relative" 
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30" />
                  </motion.div>
                </div>
              </div>

              {/* Premium Shimmer Button */}
              <button 
                onClick={() => router.push("/quiz")}
                aria-label="Resume Challenge"
                className="group relative w-full py-5 px-6 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] bg-white text-black transition-all active:scale-[0.98] flex items-center justify-center gap-2 outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/50 overflow-hidden"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-[150%] skew-x-[30deg] group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                <span className="relative z-10">Resume Challenge</span> 
                <ChevronRight size={16} strokeWidth={2} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.section>

          {/* ================= 3. PERFORMANCE STRIP ================= */}
          <motion.section variants={anim.item} className="grid grid-cols-3 gap-3 md:gap-4">
            {[
              { icon: Target, label: "Accuracy", value: `${stats.accuracy}%`, color: "text-indigo-400" },
              { icon: Zap, label: "Avg Speed", value: `${stats.avgTimePerQuestion}s`, color: "text-amber-400" },
              { icon: Activity, label: "Consistency", value: stats.consistency, color: "text-emerald-400" }
            ].map((stat, idx) => (
              <div key={idx} className="p-5 md:p-6 rounded-3xl bg-[#0a0a0c]/80 backdrop-blur-md border border-white/5 flex flex-col items-start shadow-xl">
                <stat.icon size={18} strokeWidth={1.5} className={`${stat.color} mb-4`} />
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-xl md:text-2xl font-semibold tracking-tight text-white">{stat.value}</p>
              </div>
            ))}
          </motion.section>

          {/* ================= 4. SECONDARY ACTIONS ================= */}
          <motion.section variants={anim.item} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button 
              aria-label="Practice Mistakes"
              className="group p-6 rounded-3xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 flex items-center gap-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-3.5 rounded-2xl bg-white/5 text-slate-400 group-hover:text-rose-400 group-hover:bg-rose-500/10 transition-colors z-10">
                <RotateCcw size={20} strokeWidth={1.5} />
              </div>
              <div className="z-10">
                <h4 className="text-sm font-semibold text-slate-200 mb-1 tracking-tight group-hover:text-white transition-colors">Practice Mistakes</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Targeted Review</p>
              </div>
            </button>

            <button 
              aria-label="Quick Mode"
              className="group p-6 rounded-3xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 flex items-center gap-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-3.5 rounded-2xl bg-white/5 text-slate-400 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-colors z-10">
                <Timer size={20} strokeWidth={1.5} />
              </div>
              <div className="z-10">
                <h4 className="text-sm font-semibold text-slate-200 mb-1 tracking-tight group-hover:text-white transition-colors">Quick Sprint</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">5 Min Evaluation</p>
              </div>
            </button>
          </motion.section>

          {/* ================= 5. RECENT ACTIVITY ================= */}
          <motion.section variants={anim.item} className="mt-4 mb-20">
            <button
              onClick={() => setIsActivityOpen(!isActivityOpen)}
              aria-expanded={isActivityOpen}
              className="w-full flex items-center justify-between p-5 rounded-2xl hover:bg-white/[0.02] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 group"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors">Recent Activity Logs</span>
              <motion.div animate={{ rotate: isActivityOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "backOut" }}>
                <ChevronDown size={16} strokeWidth={1.5} className="text-slate-500 group-hover:text-slate-300 transition-colors" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isActivityOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease:[0.25, 1, 0.5, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-2 pb-4 flex flex-col gap-3">
                    {userData.sessions.length === 0 ? (
                      <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] text-center">
                        <p className="text-sm text-slate-500">No activity recorded yet. Initialize a session to generate metrics.</p>
                      </div>
                    ) : (
                      userData.sessions.slice(0, 3).map((session) => (
                        <div key={session.id} className="group flex items-center justify-between p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors">
                          <div>
                            <p className="text-sm font-medium text-slate-200">Standard Evaluation</p>
                            <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1.5">
                              {new Date(session.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="inline-flex items-center gap-1.5">
                              <span className="text-sm font-bold text-white">{Math.round((session.score / session.total) * 100)}%</span>
                            </div>
                            <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1.5">{Math.round(session.durationSeconds / 60)}m elapsed</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>

        </motion.div>
      </main>

      {/* Global Style for the Button Shimmer Effect */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(200%) skewX(30deg); }
        }
      `}} />
    </div>
  );
}