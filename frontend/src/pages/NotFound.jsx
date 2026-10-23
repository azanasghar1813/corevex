import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#05070e] text-white flex flex-col items-center justify-center px-6 text-center">
      <div className="w-24 h-24 mb-6 relative">
        <img src="/assets/loader.webp" alt="Corevex Orb" className="w-full h-full object-contain animate-spin-slow" />
      </div>
      <h1 className="text-6xl sm:text-8xl font-black font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 mb-4">
        404
      </h1>
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-white/60 max-w-md mb-8">
        The coordinate you requested does not exist in the Corevex ecosystem.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-[0_0_20px_rgba(43,127,255,0.4)]"
      >
        <Home className="w-4 h-4" />
        <span>Return to Headquarters</span>
      </Link>
    </div>
  );
}
