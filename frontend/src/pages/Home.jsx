import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SolutionsBento from '../components/SolutionsBento';
import MultiBranchSync from '../components/MultiBranchSync';
import GlowingGlassRing from '../components/GlowingGlassRing';
import SEO from '../components/SEO';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

export default function Home() {
  const featuredProducts = [
    {
      slug: 'inventory-management',
      name: 'Corevex Stock',
      tagline: 'Track stock, manage inventory, never run out.',
      category: 'Inventory Suite',
      badge: 'Live Sync'
    },
    {
      slug: 'crm',
      name: 'Corevex CRM',
      tagline: 'Build stronger customer relationships and accelerate revenue.',
      category: 'Customer Intelligence',
      badge: 'Enterprise'
    },
    {
      slug: 'invoice-expense-management',
      name: 'Corevex Analytics & Invoicing',
      tagline: 'Turn raw operational metrics into actionable financial clarity.',
      category: 'Financial Operations',
      badge: 'Cloud Powered'
    }
  ];

  return (
    <div className="w-full bg-[#05070e] text-white overflow-hidden">
      <SEO
        title={null}
        description="Corevex builds intelligent POS systems, business software, and custom digital solutions for modern businesses."
        canonical="/"
      />
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Modern Bento Solutions Section */}
      <SolutionsBento />

      {/* 3. Real-Time Multi-Branch Cloud Sync Section */}
      <MultiBranchSync />

      {/* 4. Featured Products Section */}
      <section className="py-24 sm:py-32 relative border-t border-white/5 bg-[#060913]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-blue-400 font-['Space_Grotesk']">
                  Featured Products
                </span>
                <div className="h-[1px] w-12 bg-blue-500/40" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Our Featured{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  Products
                </span>
              </h2>
              <p className="mt-3 text-base text-white/70 max-w-xl">
                Thoughtfully built software solutions to help businesses operate, grow, and stay ahead.
              </p>
            </div>
            <Link
              to="/solutions"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors py-2"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-blue-400" />
            </Link>
          </div>

          {/* Master Product Card: Corevex POS */}
          <div className="rounded-3xl glass-panel border border-white/10 p-8 sm:p-12 mb-10 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Product Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Business Management System</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Corevex POS
                </h3>

                <p className="text-base text-white/70 leading-relaxed max-w-lg">
                  A modern point-of-sale system designed for speed, simplicity, and complete business control. High-speed barcode scanning, offline caching, and multi-branch inventory.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Fast & easy billing with receipt printer integration',
                    'Real-time multi-branch inventory management',
                    'End-of-day reconciliation and automated tax reports'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to="/products/pos-billing"
                    className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3 rounded-full text-sm transition-all shadow-[0_0_20px_rgba(43,127,255,0.4)] hover:scale-[1.02]"
                  >
                    <span>Explore Product</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Product Device Visual */}
              <div className="lg:col-span-6 relative flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-[1376/768]">
                  <img
                    src="/assets/laptop-right.png"
                    alt="Corevex POS Laptop"
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
                  />
                  <img
                    src="/assets/recipient.webp"
                    alt="Corevex POS Receipt"
                    className="absolute inset-0 w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] translate-x-30 sm:translate-x-50 lg:translate-x-50 translate-y-3 sm:translate-y-5"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3 Curated Product Cards Below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((prod) => (
              <div
                key={prod.slug}
                className="p-7 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold font-mono uppercase text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                      {prod.category}
                    </span>
                    <span className="text-xs text-white/40">{prod.badge}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {prod.name}
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">
                    {prod.tagline}
                  </p>
                </div>

                <Link
                  to={`/products/${prod.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors pt-2 border-t border-white/5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. About Us & Creative Technology Section */}
      <section className="py-24 sm:py-32 relative border-t border-white/5 bg-[#05070e]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Story & Principles */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-blue-400 font-['Space_Grotesk']">
                  ✦ About Us
                </span>
                <div className="h-[1px] w-12 bg-blue-500/40" />
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Built by Engineers.<br />
                Driven by{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  Ideas.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
                We are a technology studio focused on building modern software, intelligent systems, and digital experiences for businesses of all sizes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {[
                  { title: 'Software Engineering', desc: 'Robust architectures built with strict standards.' },
                  { title: 'Digital Solutions', desc: 'Integrated retail, POS, and cloud platforms.' },
                  { title: 'Creative Technology', desc: 'Captivating UI interactions & brand excellence.' }
                ].map((pillar, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <h4 className="text-sm font-bold text-white mb-1">{pillar.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-blue-400 text-white font-medium px-6 py-3 rounded-full text-sm transition-all hover:bg-white/5"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive 3D Glowing Glass Torus with Orbital Lines */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[460px] h-[440px] flex items-center justify-center">
                <div className="absolute w-80 h-80 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
                <GlowingGlassRing className="w-full h-full" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Direct Project Inquiry & Booking Banner */}
      <section className="py-20 relative border-t border-white/5 bg-[#080d1b]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="rounded-3xl glass-panel border border-blue-500/20 p-8 sm:p-14 relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Let's Work Together</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Have a project in mind?
                </h3>
                <p className="text-base text-white/70 max-w-xl">
                  We'd love to hear about your business challenge, discuss technical specifications, and build something exceptional together.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all shadow-[0_0_25px_rgba(43,127,255,0.4)] hover:scale-[1.02]"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Direct Reach Out Card */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#05070e]/80 border border-white/10 space-y-4">
                <h4 className="text-xs uppercase tracking-wider text-white/40 font-semibold font-mono">
                  Direct Inquiries
                </h4>
                <div className="space-y-3 text-sm">
                  <a
                    href="mailto:hello@corevex.tech"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>hello@corevex.tech</span>
                  </a>
                  <div className="flex items-center gap-3 text-white/80">
                    <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Lahore, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Mon - Sat: 9:00 AM - 7:00 PM PKT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
