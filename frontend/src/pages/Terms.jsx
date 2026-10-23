import React from 'react';
import { FileText, CheckCircle2, ShieldAlert, Cpu, Award, Mail } from 'lucide-react';
import SEO from '../components/SEO';

export default function Terms() {
  const lastUpdated = "October 2026";

  const sections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content: "By accessing or utilizing the Corevex website, software products, custom development services, or cloud infrastructure, you acknowledge and agree to be bound by these Terms of Service. If you disagree with any segment of these provisions, you must discontinue use immediately."
    },
    {
      icon: Cpu,
      title: "2. Software Licensing & Deployment",
      content: "Corevex licenses custom solutions, POS applications, and digital systems pursuant to individual Service Level Agreements (SLAs) or commercial licenses. Clients obtain non-exclusive, non-transferable rights to operate the deployed software within their agreed enterprise scope without permission to reverse engineer or illegally distribute source modules."
    },
    {
      icon: Award,
      title: "3. Intellectual Property Rights",
      content: "All trademarks, proprietary software architectures, UI components, code repositories, brand assets, and algorithmic methodologies authored by Corevex Technologies remain the exclusive intellectual property of Corevex, unless explicitly assigned to the client under formal contractual deliverables."
    },
    {
      icon: ShieldAlert,
      title: "4. Limitations of Liability",
      content: "Corevex engineers all digital solutions to the highest industrial and algorithmic standards. However, Corevex is not liable for indirect, incidental, or consequential damages arising from hardware failures, localized connectivity blackouts, third-party API interruptions, or improper system utilization outside specified operational manuals."
    },
    {
      icon: CheckCircle2,
      title: "5. Modifications & Updates",
      content: "Corevex reserves the authority to revise these Terms of Service periodically to reflect changes in regulatory compliance, technological infrastructure, or service offerings. Continued utilization of our platforms following updates indicates full acceptance."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#05070e] text-white pt-32 pb-24 relative overflow-hidden">
      <SEO
        title="Terms of Service"
        description="Review the Corevex Terms of Service. Understand software licensing, client rights, intellectual property, and service agreements."
        canonical="/terms"
      />

      {/* Ambient Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-blue-400 font-['Space_Grotesk']">
              ✦ Legal Agreement
            </span>
            <div className="h-[1px] w-12 bg-blue-500/40" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-white/50 font-mono">
            Last Updated: {lastUpdated} &bull; Corevex Technologies
          </p>
          <p className="mt-4 text-base text-white/70 leading-relaxed">
            Please read these terms carefully before accessing our website or engaging Corevex for digital engineering, POS software, or technical consulting.
          </p>
        </div>

        {/* Terms Sections */}
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
            <h3 className="text-lg font-bold text-white mb-1">Commercial or licensing questions?</h3>
            <p className="text-sm text-white/60">Our legal and commercial operations team is ready to assist you.</p>
          </div>
          <a
            href="mailto:legal@corevex.tech"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-[0_0_20px_rgba(43,127,255,0.4)] hover:scale-[1.02]"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Legal Team</span>
          </a>
        </div>

      </div>
    </div>
  );
}
