import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, ShieldCheck, Zap, Share2, RefreshCw } from 'lucide-react';

export default function MultiBranchSync() {
  // Live simulated metrics with subtle ticker
  const [sales1, setSales1] = useState(2486);
  const [sales2, setSales2] = useState(1892);
  const [sales3, setSales3] = useState(3124);
  const [orders1, setOrders1] = useState(48);
  const [currentTime, setCurrentTime] = useState(() =>
    new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSales1(prev => prev + Math.floor(Math.random() * 12));
      setSales2(prev => prev + Math.floor(Math.random() * 9));
      setSales3(prev => prev + Math.floor(Math.random() * 18));
      if (Math.random() > 0.5) setOrders1(o => o + 1);
    }, 4500);

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }));
    }, 30000);

    return () => {
      clearInterval(interval);
      clearInterval(timeInterval);
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
    <section className="relative py-24 sm:py-32 bg-[#05070e] text-white overflow-hidden isolate border-t border-white/5" id="multi-branch-sync">
      
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
              RIGHT COLUMN: 3D Isometric City Scene with Live Glass Telemetry Overlays
             ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative rounded-[28px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-[#040814]"
          >
            {/* The 3D Isometric Night City Base Visual */}
            <div className="relative w-full aspect-[1024/682]">
              <img
                src="/assets/branch-sync-city-clean.webp"
                alt="Corevex Multi-Branch Real-Time Cloud Sync 3D Network"
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
              />

              {/* Luminous Overlay gradient to blend borders */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/40 via-transparent to-transparent pointer-events-none" />

              {/* -------------------------------------------------------------------
                  LIVE GLASS TELEMETRY CARD 1: Branch 1 - Main Store (Top-Left)
                 ------------------------------------------------------------------- */}
              <motion.div 
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
                className="absolute left-[36%] top-[15.5%] -translate-x-1/2 -translate-y-1/2 w-[160px] sm:w-[172px] p-2.5 sm:p-3 rounded-xl bg-[#070f22]/90 border border-cyan-400/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.8)] z-20 cursor-default"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="text-[11px] font-bold text-white tracking-tight">Branch 1 - Main Store</span>
                  </div>
                </div>
                <div className="text-[9.5px] font-mono text-white/50 mb-2 pl-3.5">
                  Live &bull; {currentTime}
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/10 text-center">
                  <div>
                    <span className="text-[9px] text-white/50 uppercase block font-mono">Sales</span>
                    <span className="text-xs font-bold text-white font-mono">Rs {sales1.toLocaleString()}</span>
                    <span className="text-[9px] text-emerald-400 font-mono block">&uarr; 12.5%</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-white/50 uppercase block font-mono">Orders</span>
                    <span className="text-xs font-bold text-white font-mono">{orders1}</span>
                    <span className="text-[9px] text-emerald-400 font-mono block">&uarr; 8.2%</span>
                  </div>
                </div>
              </motion.div>

              {/* -------------------------------------------------------------------
                  LIVE GLASS TELEMETRY CARD 2: Branch 2 - Mall Outlet (Top-Right)
                 ------------------------------------------------------------------- */}
              <motion.div 
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
                className="absolute left-[86.5%] top-[17%] -translate-x-1/2 -translate-y-1/2 w-[160px] sm:w-[172px] p-2.5 sm:p-3 rounded-xl bg-[#070f22]/90 border border-cyan-400/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.8)] z-20 cursor-default"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="text-[11px] font-bold text-white tracking-tight">Branch 2 - Mall Outlet</span>
                  </div>
                </div>
                <div className="text-[9.5px] font-mono text-white/50 mb-2 pl-3.5">
                  Live &bull; {currentTime}
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/10 text-center">
                  <div>
                    <span className="text-[9px] text-white/50 uppercase block font-mono">Sales</span>
                    <span className="text-xs font-bold text-white font-mono">Rs {sales2.toLocaleString()}</span>
                    <span className="text-[9px] text-emerald-400 font-mono block">&uarr; 10.3%</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-white/50 uppercase block font-mono">Orders</span>
                    <span className="text-xs font-bold text-white font-mono">32</span>
                    <span className="text-[9px] text-emerald-400 font-mono block">&uarr; 6.7%</span>
                  </div>
                </div>
              </motion.div>

              {/* -------------------------------------------------------------------
                  LIVE GLASS TELEMETRY CARD 3: Branch 3 - City Center (Bottom-Left)
                 ------------------------------------------------------------------- */}
              <motion.div 
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
                className="absolute left-[40.5%] top-[91%] -translate-x-1/2 -translate-y-1/2 w-[160px] sm:w-[172px] p-2.5 sm:p-3 rounded-xl bg-[#070f22]/90 border border-cyan-400/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.8)] z-20 cursor-default"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="text-[11px] font-bold text-white tracking-tight">Branch 3 - City Center</span>
                  </div>
                </div>
                <div className="text-[9.5px] font-mono text-white/50 mb-2 pl-3.5">
                  Live &bull; {currentTime}
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/10 text-center">
                  <div>
                    <span className="text-[9px] text-white/50 uppercase block font-mono">Sales</span>
                    <span className="text-xs font-bold text-white font-mono">Rs {sales3.toLocaleString()}</span>
                    <span className="text-[9px] text-emerald-400 font-mono block">&uarr; 15.2%</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-white/50 uppercase block font-mono">Orders</span>
                    <span className="text-xs font-bold text-white font-mono">56</span>
                    <span className="text-[9px] text-emerald-400 font-mono block">&uarr; 9.1%</span>
                  </div>
                </div>
              </motion.div>

              {/* -------------------------------------------------------------------
                  LIVE GLASS TELEMETRY CARD 4: Branch 4 - Warehouse (Bottom-Right)
                 ------------------------------------------------------------------- */}
              <motion.div 
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
                className="absolute left-[87.5%] top-[92.5%] -translate-x-1/2 -translate-y-1/2 w-[160px] sm:w-[172px] p-2.5 sm:p-3 rounded-xl bg-[#070f22]/90 border border-cyan-400/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.8)] z-20 cursor-default"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="text-[11px] font-bold text-white tracking-tight">Branch 4 - Warehouse</span>
                  </div>
                </div>
                <div className="text-[9.5px] font-mono text-white/50 mb-2 pl-3.5">
                  Live &bull; {currentTime}
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/10 text-center">
                  <div>
                    <span className="text-[9px] text-white/50 uppercase block font-mono">Stock</span>
                    <span className="text-xs font-bold text-white font-mono">98%</span>
                    <span className="text-[9px] text-emerald-400 font-mono block">&uarr; 2.4%</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-white/50 uppercase block font-mono">Orders</span>
                    <span className="text-xs font-bold text-white font-mono">18</span>
                    <span className="text-[9px] text-emerald-400 font-mono block">&uarr; 4.8%</span>
                  </div>
                </div>
              </motion.div>

              {/* -------------------------------------------------------------------
                  LIVE CENTRAL SYNC PILL (Under Glowing Cloud)
                 ------------------------------------------------------------------- */}
              <div className="absolute left-[63%] top-[80%] -translate-x-1/2 -translate-y-1/2 px-3 sm:px-4 py-2 rounded-xl bg-[#060e22]/95 border border-cyan-400/50 backdrop-blur-md shadow-[0_10px_30px_rgba(6,182,212,0.3)] z-20 flex items-center gap-2.5">
                <RefreshCw className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
                <div>
                  <span className="text-[11px] font-bold text-white block leading-tight">
                    Syncing...
                  </span>
                  <span className="text-[9px] font-mono text-cyan-300/80 block leading-tight">
                    Inventory &bull; Orders &bull; Sales &bull; Reports
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
