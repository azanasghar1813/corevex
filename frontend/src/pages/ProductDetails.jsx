import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/products';
import { ArrowLeft, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function ProductDetails() {
  const { slug } = useParams();
  const product = productsData[slug];

  if (!product) {
    return (
      <div className="min-h-screen bg-[#05070e] text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-white/60 mb-8">The requested software solution could not be located.</p>
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Solutions</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#05070e] text-white pt-32 pb-24">
      <SEO
        title={product.name}
        description={product.description}
        canonical={`/products/${slug}`}
      />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Solutions</span>
        </Link>

        {/* Product Hero */}
        <div className="rounded-3xl glass-panel border border-white/10 p-8 sm:p-12 mb-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{product.category}</span>
              <span className="text-white/30">•</span>
              <span>{product.status || 'Live Production'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {product.name}
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              {product.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to={`/contact?product=${encodeURIComponent(product.name)}`}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all shadow-[0_0_20px_rgba(43,127,255,0.4)] hover:scale-[1.02]"
              >
                <span>Request Demo / Custom Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Deep Dive & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Details */}
          <div className="lg:col-span-8 space-y-10">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Laptop className="w-5 h-5 text-blue-400" />
                <span>System Overview & Architecture</span>
              </h2>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                {product.longDescription || product.description}
              </p>
            </div>

            {product.features && product.features.length > 0 && (
              <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6">
                <h3 className="text-lg font-bold text-white">
                  Included Features & Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/80">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Implementation & Integration */}
          <div className="lg:col-span-4 space-y-6">
            {product.highlights && product.highlights.length > 0 && (
              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-5">
                <h4 className="text-xs uppercase tracking-wider text-blue-400 font-semibold font-mono">
                  Technical Highlights
                </h4>
                
                <div className="space-y-4 text-xs text-white/70">
                  {product.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">{h.title}</strong>
                        {h.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-wider text-white/40 font-semibold font-mono block">Pricing Model</span>
              <span className="text-sm font-semibold text-white block">{product.price || 'Tailored to project scope and requirements'}</span>
            </div>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 space-y-3">
              <h4 className="text-sm font-bold text-white">Need a specialized build?</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                We customize this core platform to match your exact business rules, hardware setup, and regional compliance.
              </p>
              <Link
                to={`/contact?inquiry=custom_${slug}`}
                className="inline-block text-xs font-semibold text-blue-400 hover:text-blue-300 pt-1"
              >
                Discuss Custom Requirements →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
