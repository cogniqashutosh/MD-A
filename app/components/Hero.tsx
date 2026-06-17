"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { num: "40+",    label: "Years of Experience" },
  { num: "7",      label: "Service Centers"      },
  { num: "24/7",   label: "Emergency Support"    },
  { num: "1,000+", label: "Projects Completed"   },
];

function statBorder(idx: number) {
  // 2-col on mobile: col divider on idx 0,2; row divider below row 0 (idx 0,1)
  // 4-col on md+: col divider on idx 0,1,2
  if (idx === 0) return "border-r border-b md:border-b-0 border-white/[0.09]";
  if (idx === 1) return "border-b md:border-b-0 md:border-r border-white/[0.09]";
  if (idx === 2) return "border-r border-white/[0.09]";
  return "";
}

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden min-h-[calc(100vh-72px)]">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src="https://www.mdaturbines.com/wp-content/themes/mda_turbines/video/MDA-LOOP-2021-MED-BITRATE.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(8,20,55,0.45)_0%,rgba(14,37,80,0.41)_50%,rgba(20,55,100,0.34)_100%)]" />

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none h-25 bg-[linear-gradient(to_bottom,transparent,rgba(8,18,45,0.40))]" />

      <div className="relative z-10 text-center w-full max-w-200 mx-auto px-5 md:px-10 pt-15 pb-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="w-8 h-[1.5px] bg-[#c8392b] rounded-sm shrink-0" />
          <p className="font-bold uppercase tracking-[0.22em] text-white/60 text-[0.6rem]">
            Power Generation · Turbines &amp; Generators · OEM-Alternative
          </p>
          <span className="w-8 h-[1.5px] bg-[#c8392b] rounded-sm shrink-0" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-white font-black uppercase mx-auto mb-6 text-[clamp(2rem,3.8vw,3.6rem)] tracking-[-0.02em] leading-[1.08]"
        >
          Power <span className="text-[#c8392b]">Generation</span>
          <br />
          Expertise Beyond the OEM
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-white/70 text-base leading-[1.85] max-w-120 mb-9"
          style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}
        >
          Your full-service, OEM-alternative for steam &amp; gas turbines, generators,
          controls, and field services. Trusted by power generators worldwide for 40+ years.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-5"
          style={{ marginBottom: '1.25rem' }}
        >
          <Link href="/services" className="btn-red">
            EXPLORE SERVICES
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/contact#quote" className="btn-outline-white">
            REQUEST A QUOTE
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 border-t border-white/12 pt-5.5 max-w-155 mx-auto"
        >
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
              className={`flex flex-col items-center px-4 py-3 ${statBorder(idx)}`}
            >
              <p className="text-white font-black text-[clamp(1.4rem,2.2vw,2rem)] leading-none">
                {s.num}
              </p>
              <div className="w-4.5 h-0.5 bg-[#c8392b] rounded-sm mt-1.75 mb-1.5" />
              <p className="text-white/50 font-bold uppercase tracking-wider text-[0.56rem]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
