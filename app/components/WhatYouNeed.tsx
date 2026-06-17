"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 40,   suffix: "+",  label: "Years Experience"   },
  { value: 7,    suffix: "",   label: "Service Centers"    },
  { value: 500,  suffix: "+",  label: "Expert Technicians" },
  { value: 1000, suffix: "+",  label: "Projects Worldwide" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {value >= 1000 ? count.toLocaleString() : count}{suffix}
    </span>
  );
}

const locations = [
  { city: "Latham",       state: "NY" },
  { city: "St. Louis",    state: "MO" },
  { city: "Houston",      state: "TX" },
  { city: "San Antonio",  state: "TX" },
  { city: "Fort Collins", state: "CO" },
  { city: "Euclid",       state: "OH" },
];

const PinIcon = () => (
  <svg className="w-[13px] h-[13px] fill-[#c8392b] shrink-0" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

export default function WhatYouNeed() {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* ── NAVY HEADER BAND ── */}
      <div className="relative overflow-hidden bg-[#1a3a5c]" style={{ paddingTop: '4.9375rem', paddingBottom: '5rem' }}>
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute right-[-20px] top-1/2 pointer-events-none select-none -translate-y-1/2 text-[clamp(120px,18vw,220px)] font-black text-white/[0.04] leading-none whitespace-nowrap">
          GLOBAL
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none h-8 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.04))]" />

        <div className="relative z-10 section-wrap">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="py-4 min-w-0"
            >
              <div className="flex items-center gap-3 mb-7">
                <span className="w-9 h-[2.5px] bg-[#c8392b] rounded-sm shrink-0" />
                <p className="font-bold uppercase tracking-[0.22em] text-white/60 text-[0.63rem]">
                  Global Reach · Local Expertise
                </p>
              </div>
              <h2 className="text-white font-black uppercase leading-none text-[clamp(2.4rem,4.5vw,4rem)] tracking-[-0.025em]">
                WHAT YOU<br />
                NEED,<br />
                <span className="text-[#c8392b]">WHERE YOU</span><br />
                NEED IT.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="py-4 min-w-0"
            >
              <p className="text-white/80 leading-[1.9] mb-6 text-base">
                <strong className="text-white">Mechanical Dynamics &amp; Analysis (MD&amp;A)</strong> provides
                power generators around the globe with a full-service, OEM-alternative for services,
                parts, and repairs for utility and industrial gas and steam turbines and generators.
              </p>
              <p className="text-white/60 leading-[1.9] mb-10 text-[0.93rem]">
                We deliver consistent quality with fast response, superior communications, and innovative
                solutions — from scheduled outages to emergency field support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/brochures" className="btn-outline-white justify-center">
                  DISCOVER OUR BROCHURES
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
                <Link href="/contact" className="btn-red justify-center">
                  CONTACT US
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div className="bg-white shadow-[0_4px_24px_rgba(26,58,92,0.06)]">
        <div className="h-[3px] bg-[linear-gradient(to_right,#c8392b_0%,#e05040_50%,#c8392b_100%)]" />
        <div className="section-wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#e8edf2]">
            {stats.map((s, i) => (
              <div key={s.label} className={`flex flex-col items-center justify-center text-center${i < 2 ? ' border-b md:border-b-0 border-[#e8edf2]' : ''}`} style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', paddingLeft: '2rem', paddingRight: '2rem' }}>
                <p className="font-black text-[#1a3a5c] leading-none" style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)' }}>
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <div className="w-7 h-[2.5px] bg-[#c8392b] rounded-sm mx-auto" style={{ marginTop: '0.85rem', marginBottom: '0.85rem' }} />
                <p className="font-bold uppercase tracking-[0.14em] text-[#9aabbf] text-[0.63rem]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LOCATIONS STRIP ── */}
      <div className="bg-[#f0f4f8] border-t border-[#e2e8f0]" style={{ paddingTop: '1.75rem', paddingBottom: '1.75rem' }}>
        <div className="section-wrap">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">

            <div className="shrink-0 flex items-center gap-3">
              <span className="w-7 h-[2.5px] bg-[#c8392b] rounded-sm shrink-0" />
              <p className="font-black uppercase tracking-[0.2em] text-[#1a3a5c] text-[0.65rem] whitespace-nowrap">
                Our Locations
              </p>
            </div>

            <div className="hidden lg:block w-px h-7 bg-[#d4dce6] shrink-0" />

            <div className="flex flex-wrap gap-3">
              {locations.map((loc) => (
                <div
                  key={loc.city}
                  className="flex items-center gap-1.5 bg-white border border-[#dbe4ec] rounded-md transition-all duration-200"
                  style={{ padding: '0.3rem 0.75rem', boxShadow: '0 1px 4px rgba(26,58,92,0.06)' }}
                >
                  <PinIcon />
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#334155', whiteSpace: 'nowrap' }}>
                    {loc.city},{" "}
                    <span style={{ color: '#1a3a5c', fontWeight: 800 }}>{loc.state}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
