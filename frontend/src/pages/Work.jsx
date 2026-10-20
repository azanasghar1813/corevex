import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Laptop, ExternalLink, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function Work() {
  const caseStudies = [
    {
      id: 'business-management-suite',
      title: 'Business Management & Cloud Inventory Suite',
      category: 'Enterprise Web Application / Multi-Branch POS',
      image: '/assets/corevex-system-ui.jpg',
      tags: ['React', 'Node.js', 'Cloud Sync', 'Real-time Telemetry'],
      overview: 'A complete business management solution designed to streamline counter operations, track sales in real-time, and synchronize branch inventory across regional nodes.',
      features: [
        'Live branch synchronization with offline fallback buffer',
        'End-of-day revenue reconciliation & automated tax auditing',
        'Role-based multi-terminal cashier & management controls'
      ],
      slug: 'pos-billing'
    },
    {
      id: 'corevex-pos-billing',
      title: 'Corevex POS & High-Speed Retail Billing',
      category: 'Hardware Integrated POS Software',
      image: '/assets/corevex-mobile-screens.jpg',
      tags: ['ESC/POS Printing', 'Barcode Scanning', 'Cash Drawer API'],
      overview: 'Engineered specifically for high-throughput counters where latency is unacceptable. Seamlessly connects to receipt thermal printers and optical barcode scanners.',
      features: [
        'Sub-second invoice generation and receipt dispatch',
        'Zero cloud downtime dependency with local database persistence',
        'Table management, takeaway queues, and online order routing'
      ],
      slug: 'restaurant-pos'
    },
    {
      id: 'ecommerce-omnichannel',
      title: 'Omnichannel Digital Commerce Engine',
      category: 'Headless E-Commerce & SaaS Architecture',
      image: '/assets/corevex-pages-collage.jpg',
      tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Framer Motion'],
      overview: 'Custom e-commerce platforms synchronized with back-office inventory, offering real-time stock counters and high-conversion checkout funnels.',
      features: [
        'Unified inventory ledger shared between physical retail and web',
        'Instantaneous page load speed with modern edge rendering',
        'Integrated order tracking and automated customer notifications'
      ],
      slug: 'ecommerce-store'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#05070e] text-white pt-32 pb-24">
      <SEO
        title="Our Work & Portfolio"
        description="Explore production-grade software platforms, retail POS architectures, and digital systems engineered by Corevex."
        canonical="/work"
      />
      {/* Background Ambience */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-blue-400 font-['Space_Grotesk']">
              Featured Work & Systems
            </span>
            <div className="h-[1px] w-12 bg-blue-500/40" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Proven Systems.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Measurable Impact.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed">
            A selection of production-grade software platforms, retail POS architectures, and digital systems engineered by Corevex.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-16 mb-24">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="rounded-3xl glass-panel border border-white/10 p-8 sm:p-12 overflow-hidden relative shadow-2xl group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Visual Preview */}
                <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:border-blue-500/40 transition-colors">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070e] via-transparent to-transparent opacity-40" />
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold font-mono uppercase text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                      {study.category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-blue-300 transition-colors">
                    {study.title}
                  </h2>

                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    {study.overview}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {study.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-white/85">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map((t, i) => (
                      <span key={i} className="text-xs text-white/50 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      to={`/products/${study.slug}`}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all shadow-[0_0_15px_rgba(43,127,255,0.4)]"
                    >
                      <span>Explore Platform</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl glass-panel border border-blue-500/20 p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Need a custom system engineered for your business?
          </h3>
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8">
            From single-branch retail POS to distributed enterprise backends, let’s explore the ideal architecture.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all shadow-[0_0_20px_rgba(43,127,255,0.4)]"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
