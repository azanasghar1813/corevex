import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Store,
  Cloud,
  Zap,
  ShieldCheck,
  RefreshCw,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  Laptop,
  CheckCircle2,
  Eye,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export default function SolutionsBento() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 4 Corevex Interactive Solutions matching user's design reference
  const solutionsData = [
    {
      id: "pos-billing",
      slug: "pos-billing",
      tabName: "POS Billing Software",
      thumbImg: "/assets/thumb-pos.webp",
      dotColor: "bg-blue-400",
      accentBorder: "border-blue-500",
      glowColor: "rgba(59, 130, 246, 0.25)",
      eyebrow: "01 / OUR SOLUTIONS",
      pillBadge: "POS Billing Software",
      title: (
        <>
          Powerful Solutions for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
            Modern Businesses.
          </span>
        </>
      ),
      description: "We build software, systems and digital experiences that help businesses work smarter, move faster, and grow with confidence.",
      stats: [
        { icon: Zap, label: "4+ Live Solutions" },
        { icon: ShieldCheck, label: "99.99% Uptime" },
        { icon: Cloud, label: "Global Deployment" }
      ],
      stageType: "pos",
      stageImg: "/assets/showcase-pos-stage.webp",
      stageDesc: "Complete point-of-sale system with barcode scanning, real-time billing and inventory tracking.",
      demoLink: "/products/pos-billing"
    },
    {
      id: "web-apps",
      slug: "restaurant-pos",
      tabName: "Web Applications",
      thumbImg: "/assets/thumb-food.webp",
      dotColor: "bg-cyan-400",
      accentBorder: "border-cyan-500",
      glowColor: "rgba(6, 182, 212, 0.25)",
      eyebrow: "01 / OUR SOLUTIONS",
      pillBadge: "Web Applications",
      title: (
        <>
          Modern Web Applications for a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400">
            Smarter Tomorrow.
          </span>
        </>
      ),
      description: "We build fast, secure and scalable web applications that help businesses work smarter, serve better and grow faster.",
      featuresList: [
        { icon: Zap, title: "Lightning Fast Performance", desc: "Optimized for speed, built for scale." },
        { icon: ShieldCheck, title: "Secure & Reliable", desc: "Enterprise-grade security and data protection." },
        { icon: Laptop, title: "Responsive Design", desc: "Perfect experience on every device." },
        { icon: Code2, title: "Custom Solutions", desc: "Built around your unique business needs." }
      ],
      stageType: "web",
      stageImg: "/assets/showcase-web-stage.webp",
      stageWidgetsImg: "/assets/showcase-web-widgets.webp",
      stageDesc: "Modern reactive web apps with Next.js/React, Lighthouse 98 score, and ultra-low latency.",
      demoLink: "/solutions"
    },
    {
      id: "inventory",
      slug: "inventory-management",
      tabName: "Inventory Management",
      thumbImg: "/assets/thumb-inventory.webp",
      dotColor: "bg-emerald-400",
      accentBorder: "border-emerald-500",
      glowColor: "rgba(16, 185, 129, 0.25)",
      eyebrow: "01 / OUR SOLUTIONS",
      pillBadge: "Cloud Inventory Suite",
      title: (
        <>
          Multi-Warehouse Inventory &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            Real-Time Logistics.
          </span>
        </>
      ),
      description: "Eliminate stockouts and overstocking. Track stock levels, purchase orders, and sales across every branch from a single dashboard.",
      stats: [
        { icon: Zap, label: "12+ Warehouses Synced" },
        { icon: ShieldCheck, label: "Zero Stockout Guarantee" },
        { icon: Cloud, label: "Auto-PO Generation" }
      ],
      stageType: "inventory",
      stageImg: "/assets/bento-pos-terminal.webp",
      stageDesc: "Centralized stock ledger with automatic reorder triggers and warehouse transfer logs.",
      demoLink: "/products/inventory-management"
    },
    {
      id: "barcode-scanner",
      slug: "pharmacy-management",
      tabName: "Barcode Scanner System",
      thumbImg: "/assets/thumb-scanner.webp",
      dotColor: "bg-purple-400",
      accentBorder: "border-purple-500",
      glowColor: "rgba(168, 85, 247, 0.25)",
      eyebrow: "01 / OUR SOLUTIONS",
      pillBadge: "High-Speed Hardware Sync",
      title: (
        <>
          Hardware Integration &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400">
            Barcode Telemetry.
          </span>
        </>
      ),
      description: "Plug-and-play USB & Bluetooth barcode scanners, ESC/POS thermal receipt printers, and cash drawers with instant 0.1s response.",
      stats: [
        { icon: Zap, label: "<0.1s Scan Latency" },
        { icon: ShieldCheck, label: "ESC/POS Plug & Play" },
        { icon: Cloud, label: "Offline Cache Engine" }
      ],
      stageType: "scanner",
      stageImg: "/assets/showcase-pos-stage.webp",
      stageDesc: "Mission-critical hardware drivers engineered for retail rushes and pharmacy batch audits.",
      demoLink: "/products/pharmacy-management"
    }
  ];

  const current = solutionsData[activeTab];

  // Auto slide rotation every 7 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % solutionsData.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, solutionsData.length]);

  const handleNext = () => setActiveTab((prev) => (prev + 1) % solutionsData.length);
  const handlePrev = () => setActiveTab((prev) => (prev - 1 + solutionsData.length) % solutionsData.length);

  return (
    <section 
      className="relative py-20 sm:py-28 bg-[#05070e] text-white overflow-hidden isolate" 
      id="solutions"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Laser connecting flow from Hero above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
        <div className="w-[1px] h-14 bg-gradient-to-b from-blue-400 via-blue-500/80 to-transparent relative">
          <motion.div
            className="absolute top-0 left-[-2px] w-[5px] h-[10px] rounded-full bg-blue-300 shadow-[0_0_15px_#60A5FA]"
            animate={{ y: [0, 56], opacity: [0, 1, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_#3B82F6]" />
      </div>

      {/* Top subtle ambient wave */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-0 right-0 h-44 -z-10"
        style={{
          background: "radial-gradient(50% 100% at 50% 0%, rgba(59, 130, 246, 0.22) 0%, transparent 75%)"
        }}
      />

      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 relative z-10">

        {/* =========================================================================
            ROW 1: DYNAMIC SHOWCASE STAGE (Left Content + Center Stage + Right Thumbs)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-10">

          {/* -----------------------------------------------------------------------
              LEFT COLUMN (~35% width, lg:col-span-4): Dynamic Text & Metrics
             ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 flex flex-col justify-between py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-5"
              >
                {/* Eyebrow / Tag */}
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-blue-400 font-['Space_Grotesk']">
                    {current.eyebrow}
                  </span>
                  <div className="h-[1px] w-10 bg-blue-500/30" />
                </div>

                {/* Main Dynamic Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-white leading-[1.14]">
                  {current.title}
                </h2>

                {/* Subtitle Paragraph */}
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                  {current.description}
                </p>

                {/* If Web Apps has 4 bullet features, show them; otherwise show 3 Stat Badges */}
                {current.featuresList ? (
                  <div className="pt-2 space-y-3.5">
                    {current.featuresList.map((f, i) => {
                      const Icon = f.icon;
                      return (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-white block">{f.title}</span>
                            <span className="text-[11px] text-white/55 block leading-tight">{f.desc}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="pt-4 grid grid-cols-3 gap-2.5">
                    {current.stats.map((st, i) => {
                      const Icon = st.icon;
                      return (
                        <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col items-start gap-2">
                          <Icon className="w-4 h-4 text-blue-400" />
                          <span className="text-[11px] font-semibold text-white/80 leading-tight">
                            {st.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Direct CTA to Product Details / Demo */}
            <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between">
              <Link
                to={current.demoLink}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-full text-xs shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:scale-105 transition-all"
              >
                <span>Request Demo & Pricing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-[11px] text-white/40 font-mono">
                {activeTab + 1} / {solutionsData.length}
              </span>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              CENTER & RIGHT: Main Showcase Screen (lg:col-span-8)
             ----------------------------------------------------------------------- */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
            
            {/* Big Main Showcase Stage (sm:col-span-9) */}
            <div className="sm:col-span-9 rounded-[26px] bg-[#070b16]/90 backdrop-blur-2xl border border-blue-500/30 p-5 sm:p-6 shadow-[0_0_50px_rgba(30,100,255,0.16)] flex flex-col justify-between relative overflow-hidden group">
              
              {/* Stage Top Bar (Pill Badge + Live Demo Button) */}
              <div className="flex items-center justify-between gap-3 mb-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a1228]/90 border border-blue-500/30 text-xs text-blue-200">
                  <span className={`h-2 w-2 rounded-full ${current.dotColor} animate-pulse`} />
                  <span className="font-medium text-[11px]">{current.pillBadge}</span>
                </div>

                <Link
                  to={current.demoLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/25 text-xs text-blue-300 hover:text-white hover:border-blue-400 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-[11px] font-semibold">Live Demo & Pricing</span>
                  <ArrowUpRight className="w-3 h-3 text-blue-400" />
                </Link>
              </div>

              {/* Stage Main Image / Visual with Smooth Fade */}
              <div className="relative my-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#040812]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className="relative w-full h-[240px] sm:h-[300px] lg:h-[330px]"
                  >
                    <img
                      src={current.stageImg}
                      alt={current.tabName}
                      className="w-full h-full object-cover object-center select-none"
                    />

                    {/* Luminous soft overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b16] via-transparent to-transparent opacity-30 pointer-events-none" />

                    {/* Order Placed Floating Badge (POS Mode) */}
                    {current.stageType === "pos" && (
                      <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-[#070e24]/85 border border-emerald-500/40 backdrop-blur-md shadow-xl flex items-center gap-2.5 pointer-events-none">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] text-white/50 block font-mono">Order Placed</span>
                          <span className="text-xs font-bold text-white block">#1025 &bull; $24.50</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Stage Bottom Bar (Description + Controls) */}
              <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between gap-4 relative z-10 text-xs">
                <p className="text-white/60 text-[11px] sm:text-xs truncate max-w-[280px] sm:max-w-[340px]">
                  {current.stageDesc}
                </p>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="font-mono text-blue-400 text-[11px]">
                    0{activeTab + 1} / 0{solutionsData.length}
                  </span>
                  <button
                    onClick={handlePrev}
                    aria-label="Previous solution"
                    className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-blue-400 hover:bg-blue-600/20 transition-all"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next solution"
                    className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-blue-400 hover:bg-blue-600/20 transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right-Hand Stacked Vertical Thumbnails (sm:col-span-3) */}
            <div className="sm:col-span-3 flex sm:flex-col gap-3 justify-between">
              {solutionsData.map((item, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`flex-1 sm:flex-initial text-left p-2 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                      isActive 
                        ? 'bg-blue-600/15 border-blue-400/80 shadow-[0_0_25px_rgba(59,130,246,0.25)] scale-[1.02]' 
                        : 'bg-[#070b16]/70 border-white/10 hover:border-white/20 hover:bg-[#070b16]'
                    }`}
                  >
                    {/* Small Thumbnail Preview */}
                    <div className="w-full h-14 sm:h-16 rounded-xl overflow-hidden mb-2 bg-[#05070e] relative border border-white/5">
                      <img
                        src={item.thumbImg}
                        alt={item.tabName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                      />
                    </div>

                    {/* Title with Dot */}
                    <div className="flex items-center gap-1.5 px-1 pb-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} flex-shrink-0 ${isActive ? 'animate-ping' : ''}`} />
                      <span className={`text-[10.5px] sm:text-[11px] font-bold truncate leading-tight ${
                        isActive ? 'text-white' : 'text-white/60 group-hover:text-white'
                      }`}>
                        {item.tabName}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

        </div>

        {/* =========================================================================
            ROW 2: 4 HORIZONTAL CAPABILITY CARDS (Matching user's Image 1 bottom row)
           ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Custom Software Engineering */}
          <div className="rounded-[22px] bg-[#070b16]/80 backdrop-blur-xl border border-blue-500/20 p-5 flex flex-col justify-between hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)] transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-all">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-950/60 border border-blue-500/20 text-[10px] text-blue-300 font-mono">
                  &lt;15ms
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Custom Software Engineering</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Scalable, high-throughput architectures engineered specifically for your enterprise workflows.
              </p>
            </div>
            <div className="pt-4 flex justify-end">
              <Link
                to="/solutions"
                aria-label="Custom Software Engineering"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 group-hover:border-blue-400 group-hover:text-white group-hover:bg-blue-600/20 transition-all"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Web & Mobile Applications */}
          <div className="rounded-[22px] bg-[#070b16]/80 backdrop-blur-xl border border-purple-500/20 p-5 flex flex-col justify-between hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)] transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-all">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/20 text-[10px] text-purple-300 font-mono">
                  End-to-End Encrypted
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Web & Mobile Applications</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Lightning-fast, user-centric mobile apps and reactive web dashboards crafted with precision.
              </p>
            </div>
            <div className="pt-4 flex justify-end">
              <Link
                to="/solutions"
                aria-label="Web & Mobile Applications"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 group-hover:border-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-all"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: AI & Workflow Automation */}
          <div className="rounded-[22px] bg-[#070b16]/80 backdrop-blur-xl border border-cyan-500/20 p-5 flex flex-col justify-between hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.18)] transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-all">
                  <Cloud className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-[10px] text-cyan-300 font-mono">
                  Offline-First Sync
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">AI & Workflow Automation</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Intelligent decision models, automated sync pipelines, and operational telemetry for smarter businesses.
              </p>
            </div>
            <div className="pt-4 flex justify-end">
              <Link
                to="/solutions"
                aria-label="AI & Workflow Automation"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 group-hover:border-cyan-400 group-hover:text-white group-hover:bg-cyan-600/20 transition-all"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 4: POS & Business Management Systems */}
          <div className="rounded-[22px] bg-[#070b16]/80 backdrop-blur-xl border border-blue-500/20 p-5 flex flex-col justify-between hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)] transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-all">
                  <Store className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-950/60 border border-blue-500/20 text-[10px] text-blue-300 font-mono">
                  99.99% Availability
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">POS & Business Systems</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Comprehensive retail point-of-sale, offline sync, multi-branch control, and barcode billing.
              </p>
            </div>
            <div className="pt-4 flex justify-end">
              <Link
                to="/products/pos-billing"
                aria-label="POS & Business Systems"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 group-hover:border-blue-400 group-hover:text-white group-hover:bg-blue-600/20 transition-all"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
