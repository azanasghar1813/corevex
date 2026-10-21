import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Radio, Cpu, Database, CheckCircle2, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

export default function AICommandCenterPreview() {
  const [pulseKey, setPulseKey] = useState(0);
  const [activeNode, setActiveNode] = useState(0);

  // 12 Connected Multi-Branch Nodes with coordinates
  const nodes = [
    { id: 1, name: "New York Hub", x: 130, y: 110, status: "Optimal", stock: "98%" },
    { id: 2, name: "London Central", x: 260, y: 85, status: "Optimal", stock: "94%" },
    { id: 3, name: "Frankfurt Depot", x: 285, y: 105, status: "Optimal", stock: "99%" },
    { id: 4, name: "Dubai Logistics", x: 345, y: 135, status: "Auto-Restock", stock: "42%" },
    { id: 5, name: "Singapore Node", x: 425, y: 175, status: "Optimal", stock: "96%" },
    { id: 6, name: "Tokyo Terminal", x: 465, y: 115, status: "Optimal", stock: "97%" },
    { id: 7, name: "Sydney Branch", x: 475, y: 220, status: "Optimal", stock: "91%" },
    { id: 8, name: "San Francisco", x: 85, y: 125, status: "Optimal", stock: "95%" },
    { id: 9, name: "Toronto Depot", x: 140, y: 80, status: "Optimal", stock: "93%" },
    { id: 10, name: "Sao Paulo Node", x: 175, y: 205, status: "Optimal", stock: "88%" },
    { id: 11, name: "Cape Town Hub", x: 290, y: 225, status: "Optimal", stock: "90%" },
    { id: 12, name: "Hong Kong Port", x: 430, y: 140, status: "Optimal", stock: "99%" }
  ];

  // Inter-node network connections (Arcs)
  const connections = [
    [8, 1], [1, 9], [1, 2], [2, 3], [3, 4], [4, 5],
    [5, 12], [12, 6], [5, 7], [1, 10], [10, 11], [11, 4]
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
      setPulseKey((k) => k + 1);
    }, 2800);
    return () => clearInterval(timer);
  }, [nodes.length]);

  return (
    <div className="w-full h-[280px] sm:h-[320px] lg:h-[350px] relative bg-[#040711] overflow-hidden select-none font-sans">
      
      {/* 1. Cyber Grid Matrix Backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px"
        }}
      />

      {/* 2. Radial Vignette & Neon Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(6,182,212,0.14),transparent_65%)] pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* 3. Top Cyber HUD Status Header */}
      <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between text-[10px] sm:text-[11px] font-mono z-20 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#070c1e]/90 border border-cyan-500/30 text-cyan-300 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="font-semibold tracking-wider">AI ORCHESTRATION ENGINE</span>
          <span className="text-white/40">|</span>
          <span className="text-emerald-400 font-bold">12/12 ACTIVE</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#070c1e]/90 border border-white/10 text-white/70 backdrop-blur-md">
          <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
          <span>GLOBAL LATENCY: <strong className="text-white font-mono">11ms</strong></span>
        </div>
      </div>

      {/* 4. Interactive Vector Network Map (World Network Visualization) */}
      <div className="absolute inset-0 flex items-center justify-center pt-2">
        <svg 
          viewBox="0 0 560 270" 
          className="w-full h-full max-w-[580px] overflow-visible"
        >
          <defs>
            <linearGradient id="cyberBeam" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
            </linearGradient>
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Faint continent silhouette guidelines */}
          <path
            d="M 60 70 Q 120 40 180 80 Q 200 120 150 160 Q 90 140 60 70 Z"
            fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 3"
          />
          <path
            d="M 230 60 Q 300 40 370 70 Q 340 120 280 120 Z"
            fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 3"
          />
          <path
            d="M 380 90 Q 480 60 510 110 Q 460 180 400 140 Z"
            fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 3"
          />

          {/* Connecting Laser Arc Lines (Data Streams) */}
          {connections.map(([fromId, toId], idx) => {
            const from = nodes.find(n => n.id === fromId);
            const to = nodes.find(n => n.id === toId);
            if (!from || !to) return null;
            
            // Generate curved arc midpoint
            const mx = (from.x + to.x) / 2;
            const my = (from.y + to.y) / 2 - 14;

            return (
              <g key={`conn-${idx}`}>
                {/* Base dim line */}
                <path
                  d={`M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`}
                  fill="none"
                  stroke="rgba(6, 182, 212, 0.16)"
                  strokeWidth="1.2"
                />
                {/* Fast pulsing data particle laser */}
                <motion.path
                  d={`M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`}
                  fill="none"
                  stroke="url(#cyberBeam)"
                  strokeWidth="1.8"
                  strokeDasharray="25 120"
                  animate={{ strokeDashoffset: [0, -145] }}
                  transition={{
                    duration: 3 + (idx % 3) * 0.8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: idx * 0.2
                  }}
                  filter="url(#neonGlow)"
                />
              </g>
            );
          })}

          {/* Connected Warehouse Nodes */}
          {nodes.map((node, i) => {
            const isTarget = activeNode === i;
            const isWarning = node.status === "Auto-Restock";

            return (
              <g 
                key={node.id} 
                className="cursor-pointer transition-transform hover:scale-125"
                onClick={() => setActiveNode(i)}
              >
                {/* Outer Ripple on Active */}
                {isTarget && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="12"
                    fill="none"
                    stroke={isWarning ? "#F59E0B" : "#10B981"}
                    strokeWidth="1.5"
                    className="animate-ping opacity-60"
                  />
                )}

                {/* Outer Glow Disc */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="5"
                  fill={isWarning ? "rgba(245,158,11,0.25)" : "rgba(16,185,129,0.25)"}
                  stroke={isWarning ? "#F59E0B" : "#10B981"}
                  strokeWidth="1"
                />

                {/* Core Luminous Dot */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="2.5"
                  fill={isWarning ? "#FBBF24" : "#34D399"}
                  className="shadow-lg"
                />

                {/* Node Name Label (Subtle) */}
                <text
                  x={node.x}
                  y={node.y - 7}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.7)"
                  fontSize="7.5"
                  fontFamily="monospace"
                  fontWeight="600"
                  className="pointer-events-none select-none"
                >
                  {node.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* 5. Live Holographic Telemetry Cards (The "WOW" Factor for Clients) */}
      <div className="absolute bottom-3 left-3 right-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 z-20 pointer-events-auto">
        
        {/* Card A: Stock Synced Across 12 Branches */}
        <div className="flex-1 px-3 py-2 rounded-xl bg-[#060b1e]/90 border border-emerald-500/30 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-white tracking-wide">
                Stock: Synced Across 12 Branches
              </span>
            </div>
            <p className="text-[10px] text-emerald-300/80 font-mono">
              3,480 units routed &bull; Zero Stockouts
            </p>
          </div>
        </div>

        {/* Card B: AI Restock Prediction: 98.7% Accuracy */}
        <div className="flex-1 px-3 py-2 rounded-xl bg-[#060b1e]/90 border border-cyan-500/30 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
            <Zap className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-white tracking-wide">
                AI Restock Prediction: 98.7% Accuracy
              </span>
            </div>
            <p className="text-[10px] text-cyan-300/80 font-mono">
              Auto-Replenish Active &bull; Dubai Buffer Dispatched
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
