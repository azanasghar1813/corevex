import React from 'react';
import { ShieldCheck, Lock, Eye, Server, RefreshCw, Mail } from 'lucide-react';
import SEO from '../components/SEO';

export default function Privacy() {
  const lastUpdated = "October 2026";

  const sections = [
    {
      icon: ShieldCheck,
      title: "1. Information We Collect",
      content: "When you interact with Corevex — including submitting inquiries via our website, requesting software demonstrations, or contracting digital engineering services — we may collect your name, business name, email address, phone number, and project requirements. For clients deploying our Point of Sale (POS) and inventory systems, operational data processed within your offline or cloud database remains exclusively your property."
    },
    {
      icon: Lock,
      title: "2. How We Use Your Data",
      content: "We utilize collected information strictly to deliver, maintain, and support our software applications, process lead inquiries, communicate project timelines, and deliver ongoing maintenance. We never sell, rent, or lease your proprietary corporate or personal information to third parties."
    },
    {
      icon: Server,
      title: "3. POS & Cloud Synchronization Security",
      content: "Corevex POS and business management systems implement zero-knowledge offline caching and encrypted cloud synchronization. All telemetry and transactional sync transfers utilize modern TLS encryption protocols to protect your inventory, sales figures, and branch operations from unauthorized access."
    },
    {
      icon: Eye,
      title: "4. Cookies and Analytical Tools",
      content: "Our website utilizes minimal analytics tools (such as Google Tag Manager) to evaluate user experience and optimize site speed. These cookies collect anonymized telemetry such as browser version, screen dimensions, and page visit duration without extracting personal identity."
    },
    {
      icon: RefreshCw,
      title: "5. Data Retention & Your Rights",
      content: "You retain full authority to request access to, amendment of, or deletion of any contact information stored in our communications database. You may exercise these rights at any time by contacting our engineering and data compliance team."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#05070e] text-white pt-32 pb-24 relative overflow-hidden">
      <SEO
        title="Privacy Policy"
        description="Review the Corevex Privacy Policy. Learn how we safeguard your corporate data, inquiries, and POS cloud synchronizations."
        canonical="/privacy"
      />

      {/* Ambient Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-blue-400 font-['Space_Grotesk']">
              ✦ Transparency & Governance
            </span>
            <div className="h-[1px] w-12 bg-blue-500/40" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-white/50 font-mono">
            Last Updated: {lastUpdated} &bull; Corevex Technologies
          </p>
          <p className="mt-4 text-base text-white/70 leading-relaxed">
            At Corevex, we are committed to building reliable, secure software systems. We respect your confidentiality and ensure complete transparency regarding how your data is collected, handled, and secured.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    {sec.title}
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed pl-0 sm:pl-11">
                  {sec.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contact Support */}
        <div className="mt-12 p-8 rounded-2xl glass-panel border border-blue-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Have questions about your data?</h3>
            <p className="text-sm text-white/60">Our compliance and engineering team is available to assist you.</p>
          </div>
          <a
            href="mailto:privacy@corevex.tech"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-[0_0_20px_rgba(43,127,255,0.4)] hover:scale-[1.02]"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Privacy Team</span>
          </a>
        </div>

      </div>
    </div>
  );
}
