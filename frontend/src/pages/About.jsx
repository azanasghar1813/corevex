import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Shield, Cpu, Layers, Sparkles, ArrowRight, HeartHandshake, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  const principles = [
    {
      icon: Terminal,
      title: 'Precision Software Engineering',
      desc: 'We write robust, clean codebases built on scalable design patterns that endure enterprise growth.'
    },
    {
      icon: Cpu,
      title: 'Applied Intelligence',
      desc: 'Integrating business automation, automated telemetry, and real-time syncing across retail and enterprise counters.'
    },
    {
      icon: Layers,
      title: 'Design-Driven Craft',
      desc: 'Digital products should not just function — they should inspire confidence and delight every user.'
    },
    {
      icon: Shield,
      title: 'Data Integrity & Offline Resilience',
      desc: 'Systems designed to operate uninterrupted during network outages, guaranteeing business continuity.'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#05070e] text-white pt-32 pb-24">
      <SEO
        title="About Us"
        description="Corevex is a specialized software technology studio engineering modern POS systems, enterprise platforms, and digital products."
        canonical="/about"
      />
      {/* Glow Ambience */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-blue-400 font-['Space_Grotesk']">
              About Corevex
            </span>
            <div className="h-[1px] w-12 bg-blue-500/40" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Built by Engineers.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Driven by Ideas.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed">
            Corevex is a specialized software technology studio. We bridge the gap between rigorous computer science and creative human interaction, engineering systems that empower modern commerce and enterprises.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6 text-white/80 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Engineering with Purpose & Clarity
            </h2>
            <p>
              Founded with the conviction that enterprise software shouldn't feel obsolete or cumbersome, Corevex architects modern point-of-sale systems, retail operations suites, and digital platforms from the ground up.
            </p>
            <p>
              Whether it's syncing high-volume sales counters across remote branches or engineering customer-facing digital applications, our philosophy remains steadfast: <em>Precision in every pixel. Intelligence in every system.</em>
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl glass-panel border border-white/5">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-['Space_Grotesk'] block">
                  50+
                </span>
                <span className="text-xs text-white/60">Software modules & tools engineered</span>
              </div>
              <div className="p-4 rounded-xl glass-panel border border-white/5">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-['Space_Grotesk'] block">
                  100%
                </span>
                <span className="text-xs text-white/60">Offline-first local reliability</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="w-full max-w-[380px] p-8 rounded-3xl glass-panel border border-white/10 relative overflow-hidden flex flex-col items-center text-center">
              <div className="w-40 h-40 relative mb-6">
                <img
                  src="/assets/hacker-logo.png"
                  alt="Engineering Studio"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Azan Asghar</h3>
              <p className="text-xs text-blue-400 font-mono uppercase tracking-wider mb-3">Founder & Lead Engineer</p>
              <p className="text-xs text-white/60 leading-relaxed">
                Dedicated to engineering robust business systems, POS architectures, and modern web platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Engineering Principles</h3>
            <p className="mt-2 text-sm text-white/60">The core standards that guide every line of code we ship.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-8 rounded-2xl glass-panel glass-panel-hover flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{p.title}</h4>
                    <p className="text-sm text-white/65 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl glass-panel border border-blue-500/20 p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Ready to collaborate on your next digital venture?
          </h3>
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
            Tell us about your technical requirements or scheduling needs. We provide direct architectural consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all shadow-[0_0_20px_rgba(43,127,255,0.4)]"
          >
            <span>Start a Project Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
