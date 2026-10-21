import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * CoreVex Hero - layered version, matched to the reference render (1600x899).
 *
 * Every layer is positioned in % of the STAGE, and the stage keeps the
 * reference aspect ratio (1600:899), so the composition scales exactly like
 * the reference. Tune any layer in LAYOUT below.
 *
 * Assets (public/assets/): ring-left.png, "laptop left.png",
 *                          mobile-straight.png, recipient.png
 * Font (index.html): Inter Tight 400/500/600 from Google Fonts.
 */

const EASE = [0.22, 1, 0.36, 1];
const FONT = '"Inter Tight", "Inter", ui-sans-serif, system-ui, sans-serif';

/* ---------------- TUNING (all values measured on the 1600x899 reference) ---------------- */
const LAYOUT = {
  // inside the SVG frame (viewBox 1000x700 = reference crop x440..1440, y80..780)
  ring: { x: 285, y: 112, w: 552, h: 406 },
  // % of stage
  laptop: { left: 53.6, top: 38.5, w: 58, h: 55 },
  phone: { left: 49.7, top: 21, w: 24, h: 62, rotate: 0 }, // reference phone leans ~12deg; if your PNG is upright set rotate: 12
  receipt: { left: 88.5, top: 62, w: 14.5, h: 31 },
};

const box = ({ left, top, w, h }) => ({
  left: `${left}%`,
  top: `${top}%`,
  width: `${w}%`,
  height: `${h}%`,
});

function RevealLine({ children, delay, ready, reduce }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "108%" }}
        animate={ready ? { y: 0 } : undefined}
        transition={{ duration: 0.95, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero({ ready = true }) {
  const reduceMotion = useReducedMotion();

  const fade = (delay) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 14 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 0.8, delay, ease: EASE },
  });

  const floatTransition = (duration, delay = 0) => ({
    duration: reduceMotion ? 0 : duration,
    delay,
    repeat: reduceMotion ? 0 : Infinity,
    ease: "easeInOut",
  });

  const enter = (delay, from) => ({
    initial: reduceMotion ? false : { opacity: 0, ...from },
    animate: ready ? { opacity: 1, x: 0, y: 0 } : undefined,
    transition: { duration: 1.1, delay, ease: EASE },
  });

  return (
    <section
      aria-label="CoreVex introduction"
      className="relative isolate flex flex-col overflow-hidden bg-[#05070e] text-white xl:block xl:h-[min(100svh,56.25vw)] xl:min-h-[640px]"
      style={{ fontFamily: FONT }}
    >
      {/* ================= BACKGROUND (pure CSS, like the reference) ================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(52% 62% at 62% 44%, rgba(40,72,170,0.20), transparent 70%)," +
            "radial-gradient(38% 30% at 34% 96%, rgba(30,52,130,0.14), transparent 70%)," +
            "radial-gradient(70% 55% at 8% 0%, rgba(20,30,70,0.35), transparent 70%)," +
            "#05070e",
        }}
      />

      {/* ================= TEXT ================= */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1600px] px-[clamp(1.5rem,6.25vw,6rem)] pt-28 sm:pt-32 xl:h-full xl:items-center xl:pt-14">
        <div className="w-full max-w-[640px] xl:-translate-y-[3%]">
          {/* Eyebrow */}
          <motion.div {...fade(0.15)} className="flex items-center gap-4">
            <p className="text-[0.6875rem] font-normal uppercase tracking-[0.2em] text-[#6F7C99] sm:text-[0.8125rem]">
              Software Engineering <span className="px-1.5">/</span> Digital Solutions
            </p>
            <span
              aria-hidden="true"
              className="h-px w-10 bg-gradient-to-r from-[#6F7C99]/70 to-transparent sm:w-[4.5rem]"
            />
          </motion.div>

          {/* Headline */}
          <h1 className="mt-6 text-[clamp(2.75rem,9vw,3.75rem)] font-semibold leading-[1.03] tracking-[-0.035em] text-white sm:text-[clamp(3.25rem,8vw,5rem)] xl:mt-7 xl:text-[clamp(3.5rem,4.65vw,5.5rem)]">
            <RevealLine delay={0.25} ready={ready} reduce={reduceMotion}>
              Where Science
            </RevealLine>
            <RevealLine delay={0.37} ready={ready} reduce={reduceMotion}>
              Meets Creativity.
            </RevealLine>
          </h1>

          {/* Subtitle: one line */}
          <motion.p
            {...fade(0.6)}
            className="mt-7 max-w-[34rem] text-[1.0625rem] leading-relaxed tracking-[-0.005em] text-[#8793AB] sm:text-[1.1875rem] xl:mt-8"
          >
            Precision in every pixel. Intelligence in every system.
          </motion.p>

          {/* CTA: text link + hairline */}
          <motion.div {...fade(0.75)} className="mt-9 xl:mt-11">
            <Link
              to="/solutions"
              className="group inline-flex items-center gap-3.5 rounded-sm text-[1.0625rem] text-white outline-none focus-visible:ring-2 focus-visible:ring-[#4169FF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#05070e] sm:text-[1.125rem]"
            >
              <span>Explore our solutions</span>
              <ArrowUpRight
                className="h-4 w-4 text-white/80 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.6}
              />
              <span
                aria-hidden="true"
                className="h-px w-16 bg-white/30 transition-all duration-500 group-hover:w-28 group-hover:bg-[#4169FF]"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ================= STAGE (keeps the 1600:899 reference ratio) ================= */}
      {/* Below xl: square/4:3 window cropped around the phone.  xl+: full-bleed, right-aligned. */}
      <div className="relative z-10 mx-auto mt-4 aspect-square w-full max-w-[720px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_10%,#000_88%,transparent)] sm:aspect-[4/3] xl:absolute xl:right-0 xl:top-0 xl:mx-0 xl:mt-0 xl:aspect-[1600/899] xl:h-full xl:w-auto xl:max-w-none xl:overflow-visible xl:[mask-image:none]">
        <div className="pointer-events-none absolute left-1/2 top-0 aspect-[1600/899] h-full -translate-x-[61.7%] xl:left-0 xl:translate-x-0">
          {/* Ambient light behind the ring */}
          <div
            aria-hidden="true"
            className="absolute left-[46%] top-[14%] h-[66%] w-[34%] rounded-full bg-blue-500/[0.13] blur-[100px]"
          />

          {/* ---------- LAYER 1: GLASS RING + ORBITAL TRAILS ---------- */}
          <motion.svg
            viewBox="0 0 1000 700"
            preserveAspectRatio="xMidYMid meet"
            className="absolute left-[17.5%] top-[8.9%] z-[8] h-[87.9%] w-[82.5%] overflow-visible"
            animate={reduceMotion ? {} : { rotate: [0, 1.2, 0, -1.2, 0] }}
            transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="orbitA" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8FB4FF" stopOpacity="0.55" />
                <stop offset="45%" stopColor="#4F8BFF" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#A9C2FF" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="orbitB" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6F7BFF" stopOpacity="0.35" />
                <stop offset="40%" stopColor="#5FA2FF" stopOpacity="1" />
                <stop offset="100%" stopColor="#7FD8FF" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="lightRun" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="60%" stopColor="#CFE3FF" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
              </linearGradient>
              <radialGradient id="bubble" cx="35%" cy="30%" r="75%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
                <stop offset="45%" stopColor="#8FB4FF" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#1B2C6B" stopOpacity="0.35" />
              </radialGradient>
              <radialGradient id="flare" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#9CC4FF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#4169FF" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* ORBIT A: large tilted ellipse around the ring */}
            <g transform="rotate(7 598 236)">
              <ellipse cx="598" cy="236" rx="306" ry="146" fill="none" stroke="#4F8BFF" strokeOpacity="0.14" strokeWidth="5" />
              <ellipse cx="598" cy="236" rx="306" ry="146" fill="none" stroke="url(#orbitA)" strokeWidth="1.15" vectorEffect="non-scaling-stroke" />
              {!reduceMotion && (
                <motion.ellipse
                  cx="598" cy="236" rx="306" ry="146" fill="none"
                  stroke="url(#lightRun)" strokeWidth="1.8" strokeLinecap="round"
                  vectorEffect="non-scaling-stroke" pathLength="1000" strokeDasharray="70 930"
                  animate={{ strokeDashoffset: [0, -1000] }}
                  transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
                />
              )}
            </g>
            {[
              [815, 118, 2.6, "#D6E4FF"],
              [897, 240, 2.6, "#BFD3FF"],
              [422, 52, 2.0, "#8FD8FF"],
            ].map(([cx, cy, r, c], i) => (
              <motion.circle
                key={`a${i}`} cx={cx} cy={cy} r={r} fill={c}
                animate={reduceMotion ? {} : { opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}

            {/* ORBIT B: long sweep, bottom-left to behind the phone */}
            <g transform="rotate(-20 410 522)">
              <ellipse cx="410" cy="522" rx="340" ry="86" fill="none" stroke="#5FA2FF" strokeOpacity="0.16" strokeWidth="5" />
              <ellipse cx="410" cy="522" rx="340" ry="86" fill="none" stroke="url(#orbitB)" strokeWidth="1.1" vectorEffect="non-scaling-stroke" />
              {!reduceMotion && (
                <motion.ellipse
                  cx="410" cy="522" rx="340" ry="86" fill="none"
                  stroke="url(#lightRun)" strokeWidth="1.8" strokeLinecap="round"
                  vectorEffect="non-scaling-stroke" pathLength="1000" strokeDasharray="90 910"
                  animate={{ strokeDashoffset: [0, -1000] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1.2 }}
                />
              )}
            </g>
            <ellipse cx="375" cy="610" rx="46" ry="14" fill="url(#flare)" />
            {[
              [92, 628, 2.6, "#A6E8FF"],
              [160, 650, 2.0, "#78BFFF"],
            ].map(([cx, cy, r, c], i) => (
              <motion.circle
                key={`b${i}`} cx={cx} cy={cy} r={r} fill={c}
                animate={reduceMotion ? {} : { opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 3.4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}

            {/* GLASS RING (above the orbit lines) */}
            <motion.g
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              animate={reduceMotion ? {} : { rotate: [0, 1.5, 0, -1.5, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            >
              <image
                href="/assets/ring-left.webp"
                x={200} y={100}
                width={750} height={550}
                preserveAspectRatio="xMidYMid meet"
                style={{ filter: "drop-shadow(0 0 42px rgba(59,130,246,0.3))" }}
                draggable="false"
              />
            </motion.g>

            {/* Glass bubbles (reference positions) */}
            <circle cx="854" cy="177" r="19" fill="url(#bubble)" stroke="#BFD3FF" strokeOpacity="0.45" strokeWidth="1" />
            <circle cx="216" cy="517" r="19" fill="url(#bubble)" stroke="#BFD3FF" strokeOpacity="0.45" strokeWidth="1" />
            <circle cx="480" cy="587" r="19" fill="url(#bubble)" stroke="#BFD3FF" strokeOpacity="0.45" strokeWidth="1" />

          </motion.svg>

          {/* ---------- LAYER 2: LAPTOP (bleeds off the right edge) ---------- */}
          <motion.div
            {...enter(0.35, { x: 35, y: 18 })}
            className="absolute z-20"
            style={box(LAYOUT.laptop)}
          >
            <motion.img
              src="/assets/laptop-left.webp"
              alt="Laptop displaying CoreVex POS billing software"
              draggable={false}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              animate={reduceMotion ? {} : { y: [0, -4, 0] }}
              transition={floatTransition(7)}
              className="h-full w-full select-none object-contain drop-shadow-[0_24px_25px_rgba(0,0,0,0.4)]"
            />
          </motion.div>

          {/* ---------- LAYER 3: FLOATING PHONE ---------- */}
          <motion.div
            {...enter(0.2, { y: 35 })}
            className="absolute z-30"
            style={{
              ...box(LAYOUT.phone),
              rotate: LAYOUT.phone.rotate,
              translateZ: 100,
              scale: 1.0,
            }}>
            <motion.img
              src="/assets/mobile-straight.webp"
              alt="CoreVex mobile business overview app"
              draggable={false}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              animate={reduceMotion ? {} : { y: [0, -8, 0], rotate: [0, 0.4, 0] }}
              transition={floatTransition(5.8)}
              className="h-full w-full select-none object-contain drop-shadow-[0_22px_28px_rgba(0,0,0,0.58)]"
            />
          </motion.div>

          {/* ---------- LAYER 4: RECEIPT (in front of the laptop) ---------- */}
          <motion.div
            {...enter(0.55, { x: 18, y: 22 })}
            className="absolute z-40"
            style={box(LAYOUT.receipt)}
          >
            <motion.img
              src="/assets/recipient.webp"
              alt="Printed CoreVex POS receipt"
              draggable={false}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              animate={reduceMotion ? {} : { y: [0, -5, 0] }}
              transition={floatTransition(6.4, 0.3)}
              className="h-full w-full select-none object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,0.48)]"
            />
          </motion.div>
        </div>
      </div>

      {/* Laser connection stream linking down to Solutions section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-30">
        <div className="w-[1px] h-14 bg-gradient-to-b from-transparent via-blue-500/60 to-blue-400" />
      </div>
    </section>
  );
}
