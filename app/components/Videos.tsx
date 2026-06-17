"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const videos = [
  { id: "0e6-1hZw8kg", title: "Turbine-Generator Repair Facility Tour", label: "FACILITY TOUR",  thumb: "https://img.youtube.com/vi/0e6-1hZw8kg/maxresdefault.jpg" },
  { id: "gK4rRPzlLNM", title: "Gas Turbine Component Repair",           label: "GAS TURBINE",    thumb: "https://img.youtube.com/vi/gK4rRPzlLNM/maxresdefault.jpg" },
  { id: "i0hNFV3Ac38", title: "Generator Stator Rewind",                label: "GENERATOR",      thumb: "https://img.youtube.com/vi/i0hNFV3Ac38/maxresdefault.jpg" },
];

function VideoCard({ v, index, featured = false }: { v: typeof videos[0]; index: number; featured?: boolean }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group flex flex-col rounded-[16px] overflow-hidden border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.38)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_56px_rgba(0,0,0,0.52)]" style={{ background: 'rgba(255,255,255,0.04)' }}>
      {/* Thumbnail / iframe */}
      <div className="relative w-full" style={{ paddingTop: featured ? '52%' : '58%' }}>
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              src={v.thumb}
              alt={v.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              style={{ opacity: 0.88 }}
              unoptimized
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,18,36,0.90) 0%, rgba(6,18,36,0.25) 50%, transparent 100%)' }} />

            {/* Index number */}
            <div className="absolute top-4 left-5 font-black leading-none" style={{ fontSize: featured ? '2rem' : '1.5rem', color: 'rgba(255,255,255,0.15)' }}>
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Category badge */}
            <div className="absolute top-4 right-4">
              <span className="font-bold uppercase tracking-widest rounded-full px-3 py-1 text-white" style={{ fontSize: '0.52rem', background: 'rgba(200,57,43,0.85)' }}>
                {v.label}
              </span>
            </div>

            {/* Play button */}
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center cursor-pointer border-0 bg-transparent"
              aria-label={`Play: ${v.title}`}
            >
              <div
                className="rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.15]"
                style={{
                  width: featured ? '72px' : '56px',
                  height: featured ? '72px' : '56px',
                  background: '#c8392b',
                  boxShadow: '0 6px 28px rgba(200,57,43,0.60)',
                }}
              >
                <svg style={{ width: featured ? '28px' : '22px', height: featured ? '28px' : '22px', marginLeft: '4px', fill: 'white' }} viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </button>
          </>
        )}
      </div>

      {/* Card info */}
      <div style={{ padding: featured ? '1.25rem 1.5rem' : '1rem 1.25rem' }}>
        <p className="text-white font-bold leading-snug" style={{ fontSize: featured ? '0.95rem' : '0.82rem' }}>
          {v.title}
        </p>
      </div>
    </div>
  );
}

export default function Videos() {
  return (
    <section className="relative overflow-hidden bg-[#0e253d]" style={{ paddingTop: '4.8125rem', paddingBottom: '7rem' }}>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[26px_26px]" />

      <div className="relative z-10 section-wrap">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2.5px] bg-[#c8392b] rounded-sm shrink-0" />
              <p className="font-bold uppercase tracking-[0.2em] text-white/50 text-[0.62rem]">
                Watch &amp; Learn
              </p>
            </div>
            <h2 className="text-white font-black uppercase leading-tight text-[clamp(2rem,3.2vw,2.8rem)] tracking-[-0.022em]">
              DISCOVER OUR<br />
              <span className="text-[#c8392b]">VIDEO LIBRARY</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-white/45 text-[0.88rem] leading-[1.7] max-w-xs">
              Technical videos, facility tours &amp; expert presentations.
            </p>
            <a
              href="https://www.youtube.com/channel/UC8uPhlQw-4WqHHh465k1tvw"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-3 border border-white/15 rounded-xl transition-[background,border-color] duration-200 hover:border-white/30"
              style={{ background: 'rgba(255,255,255,0.06)', padding: '0.75rem 1.25rem' }}
            >
              <svg viewBox="0 0 90 63" fill="none" style={{ width: '36px', height: '25px', flexShrink: 0 }}>
                <rect width="90" height="63" rx="14" fill="#FF0000"/>
                <polygon points="36,18 36,45 61,31.5" fill="white"/>
              </svg>
              <div>
                <p className="text-white font-black text-[0.85rem]">Visit Channel</p>
                <p className="text-white/40 text-[0.65rem]">Subscribe for updates</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Video grid: 1 featured left + 2 stacked right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-5"
        >
          {/* Featured video */}
          <VideoCard v={videos[0]} index={0} featured />

          {/* 2 smaller videos stacked */}
          <div className="flex flex-col gap-5">
            <VideoCard v={videos[1]} index={1} />
            <VideoCard v={videos[2]} index={2} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
