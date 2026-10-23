import React, { useState, useEffect, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import { Cloud, ShieldCheck, Zap, Share2, RefreshCw } from 'lucide-react';

export default function MultiBranchSync() {
  // Live simulated metrics with subtle ticker
  const [sales1, setSales1] = useState(0);
  const [sales2, setSales2] = useState(0);
  const [sales3, setSales3] = useState(0);
  const [orders1, setOrders1] = useState(0);
  const [now, setNow] = useState(new Date());

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  // POLISH 5: Count-up animation when the section scrolls into view
  useEffect(() => {
    if (!inView) return;
    const controls = [
      animate(0, 2486, { duration: 1.6, ease: 'easeOut', onUpdate: v => setSales1(Math.round(v)) }),
      animate(0, 1892, { duration: 1.6, ease: 'easeOut', onUpdate: v => setSales2(Math.round(v)) }),
      animate(0, 3124, { duration: 1.6, ease: 'easeOut', onUpdate: v => setSales3(Math.round(v)) }),
      animate(0, 48,   { duration: 1.6, ease: 'easeOut', onUpdate: v => setOrders1(Math.round(v)) }),
    ];
    return () => controls.forEach(c => c.stop());
  }, [inView]);

  // BUG FIX 1 & 3: Ticker interval with Branch 2 active and live clock
  useEffect(() => {
    const interval = setInterval(() => {
      setSales1(prev => prev + Math.floor(Math.random() * 12));
      setSales2(prev => prev + Math.floor(Math.random() * 15));
      setSales3(prev => prev + Math.floor(Math.random() * 18));
      if (Math.random() > 0.5) setOrders1(o => o + 1);
    }, 4500);

    const clock = setInterval(() => setNow(new Date()), 30000);

    return () => {
      clearInterval(interval);
      clearInterval(clock);
    };
  }, []);

  const features = [
    {
      icon: Cloud,
      title: "Real-Time Cloud Sync",
      desc: "Instant updates across all branches and devices."
    },
    {
      icon: ShieldCheck,
      title: "Secure & Encrypted",
      desc: "Your data is always protected with enterprise-grade security."
    },
    {
      icon: Zap,
      title: "Offline First",
      desc: "Works even without internet, syncs automatically when online."
    },
    {
      icon: Share2,
      title: "Multi-Branch Ready",
      desc: "Manage all your locations from one powerful system."
    }
  ];

  return (
    <section ref={sectionRef} className="relative pt-8 sm:pt-12 pb-20 sm:pb-24 bg-[#05070e] text-white overflow-hidden isolate" id="multi-branch-sync">
      
      {/* Laser receiver stream connecting continuously from Solutions above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
        <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-400 via-cyan-500/60 to-transparent" />
      </div>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* =========================================================================
              LEFT COLUMN: Pure crisp HTML/React Typography & Feature List
             ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-cyan-400 font-['Space_Grotesk']">
                REAL-TIME SYNC
              </span>
              <div className="h-[1px] w-12 bg-cyan-500/40" />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.12]">
              Sync Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                All Branches
              </span>
            </h2>

            {/* Subtitle Paragraph */}
            <p className="mt-5 text-sm sm:text-base text-white/65 leading-relaxed max-w-xl">
              One system. Every location. Keep your data, inventory and operations perfectly
              in sync — across all branches, all the time.
            </p>

            {/* 4 Feature Points with High-Tech Glass Icon Boxes */}
            <div className="mt-8 space-y-5">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {feat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed mt-0.5">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Kicker Bar */}
            <div className="mt-10 pt-6 border-t border-white/5 flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-mono text-white/40">
              <span>SAME DATA. EVERY BRANCH. ALWAYS.</span>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>
          </motion.div>

          {/* =========================================================================
              RIGHT COLUMN: 3D Isometric Network Visual & Live Telemetry Bar
             ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col gap-4"
          >
            {/* The 3D Isometric Network Showcase Frame */}
            <div className="relative rounded-[28px] overflow-hidden border border-cyan-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.12)] bg-[#040814] group">
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <img
                  src="/assets/branch-sync-network.webp"
                  alt="Corevex Multi-Branch Real-Time Cloud Sync Network"
                  className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Ambient vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/30 via-transparent to-transparent pointer-events-none" />

                {/* Floating Live Cloud Badge */}
                <div className="absolute top-3.5 right-3.5 px-3 py-1.5 rounded-full bg-[#070f22]/90 border border-cyan-400/40 backdrop-blur-md shadow-lg flex items-center gap-2 pointer-events-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-[10px] font-mono font-bold text-white tracking-wide">
                    LIVE CLOUD &bull; {now.toLocaleTimeString('en-PK', { hour: 'numeric', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>

            {/* Live Synchronized Branch Telemetry Kicker Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3 rounded-2xl bg-[#070b16]/80 border border-white/10 hover:border-cyan-500/30 transition-colors backdrop-blur-md">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10.5px] font-bold text-white/70">Main Store</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <motion.span
                    key={sales1}
                    initial={{ opacity: 0.35 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-xs font-bold text-white font-mono"
                  >
                    Rs {sales1.toLocaleString()}
                  </motion.span>
                  <span className="text-[9.5px] text-emerald-400 font-mono">&uarr; 12.5%</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#070b16]/80 border border-white/10 hover:border-cyan-500/30 transition-colors backdrop-blur-md">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10.5px] font-bold text-white/70">Mall Outlet</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <motion.span
                    key={sales2}
                    initial={{ opacity: 0.35 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-xs font-bold text-white font-mono"
                  >
                    Rs {sales2.toLocaleString()}
                  </motion.span>
                  <span className="text-[9.5px] text-emerald-400 font-mono">&uarr; 10.3%</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#070b16]/80 border border-white/10 hover:border-cyan-500/30 transition-colors backdrop-blur-md">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10.5px] font-bold text-white/70">City Center</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <motion.span
                    key={sales3}
                    initial={{ opacity: 0.35 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-xs font-bold text-white font-mono"
                  >
                    Rs {sales3.toLocaleString()}
                  </motion.span>
                  <span className="text-[9.5px] text-emerald-400 font-mono">&uarr; 15.2%</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#070b16]/80 border border-white/10 hover:border-cyan-500/30 transition-colors backdrop-blur-md">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10.5px] font-bold text-white/70">Warehouse</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-bold text-white font-mono">98% Stock</span>
                  <span className="text-[9.5px] text-cyan-400 font-mono">{orders1} Orders</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
