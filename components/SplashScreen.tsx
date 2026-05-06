"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-[#08090a] flex flex-col items-center justify-center selection:bg-indigo-500/30">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 22h20L12 2z" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-white tracking-widest uppercase mb-2">Nexus.ai</h1>
        <p className="text-[10px] font-bold text-gray-500 tracking-[0.3em] uppercase">Learning Protocol</p>
      </motion.div>
    </div>
  );
}