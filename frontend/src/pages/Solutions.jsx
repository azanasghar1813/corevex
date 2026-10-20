import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/products';
import { Search, ArrowRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function Solutions() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all categories
  const allProducts = useMemo(() => Object.values(productsData), []);
  
  const categories = useMemo(() => {
    const cats = new Set(allProducts.map((p) => p.category));
    return ['All', ...Array.from(cats)];
  }, [allProducts]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allProducts, selectedCategory, searchQuery]);

  return (
    <div className="w-full min-h-screen bg-[#05070e] text-white pt-32 pb-24">
      <SEO
        title="Software Products & Platforms"
        description="Browse the Corevex suite of software products: POS billing systems, inventory managers, school systems, booking engines, and mobile applications."
        canonical="/solutions"
      />
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-blue-400 font-['Space_Grotesk']">
              Solutions & Software Suite
            </span>
            <div className="h-[1px] w-12 bg-blue-500/40" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Engineered for High Performance &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Operational Scale.
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            Explore our curated catalog of production-ready business software, enterprise retail POS, and custom application platforms.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-8 border-b border-white/5">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(43,127,255,0.4)]'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a0f1d] border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.slug}
              className="p-7 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold font-mono uppercase text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                    {prod.category}
                  </span>
                  <span className="text-xs text-white/40">{prod.status}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {prod.name}
                </h3>

                <p className="text-sm text-white/60 leading-relaxed line-clamp-3 mb-6">
                  {prod.description}
                </p>

                {/* Key Features Preview */}
                {prod.features && prod.features.length > 0 && (
                  <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                    {prod.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white/75">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-white/40">Custom Deployment</span>
                <Link
                  to={`/products/${prod.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors"
                >
                  <span>Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24 glass-panel rounded-2xl border border-white/5">
            <p className="text-white/60 text-base">No solutions match your search query.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
