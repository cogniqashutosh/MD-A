"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const posts = [
  {
    title:    "Quadruple Steam Turbine-Generator Majors with Precision, Breadth, and Coordination",
    date:     "May 28, 2026",
    category: "Steam Turbines",
    catColor: "#1a3a5c",
    image:    "https://www.mdaturbines.com/wp-content/uploads/2026/05/4-HP-Rotor-1.jpg",
    href:     "https://www.mdaturbines.com/resources/quadruple-steam-turbine-generator-majors/",
    featured: true,
  },
  {
    title:    "MD&A Positions Itself as Alternative Source for 7FA & 7EA Gas Turbine Rotor Life Extensions",
    date:     "May 28, 2026",
    category: "Gas Turbines",
    catColor: "#c8392b",
    image:    "https://www.mdaturbines.com/wp-content/uploads/2026/05/3H8A9957-mc-v1-FLAT.jpg",
    href:     "https://www.mdaturbines.com/resources/mda-positions-itself-as-alternative-source-for-7fa-7ea-gas-turbine-rotor-life-extensions/",
  },
  {
    title:    "7FA Gas Turbine and 7FH2 Generator Major Inspections",
    date:     "April 7, 2026",
    category: "Gas Turbines",
    catColor: "#c8392b",
    image:    "https://www.mdaturbines.com/wp-content/uploads/2026/04/Picture1-1.jpg",
    href:     "https://www.mdaturbines.com/resources/7fa-gas-turbine-major-inspection/",
  },
];

const seminars = [
  { title: "Steam Turbine Fundamentals Seminar",   dates: "Sept 14–18, 2026", location: "River City Hotel, St. Louis, MO",  tag: "STEAM",     tagColor: "#1a3a5c" },
  { title: "Gas Turbine Fundamentals Seminar",     dates: "Sept 22–25, 2026", location: "River City Hotel, St. Louis, MO",  tag: "GAS",       tagColor: "#c8392b" },
  { title: "Turbine-Generator Vibration Analysis", dates: "Nov 10–12, 2026",  location: "Embassy Suites, Charlotte, NC",    tag: "VIBRATION", tagColor: "#2d6a4f" },
];

export default function BlogSeminars() {
  return (
    <section style={{ background: '#fff', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="section-wrap">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '2.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '22px', height: '2.5px', background: '#c8392b', borderRadius: '2px', display: 'inline-block', flexShrink: 0 }} />
            <p style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#c8392b', fontSize: '0.6rem' }}>MD&amp;A Insight Blog</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            <h2 style={{ fontWeight: 900, color: '#0e253d', fontSize: 'clamp(2rem,3.2vw,2.8rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Latest Insights &amp; News
            </h2>
            <Link href="/resources" className="btn-red-sm shrink-0">
              EXPLORE ALL
              <svg style={{ width: '12px', height: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* ── Blog Grid: 1 tall left + 3 stacked right ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '16px', marginBottom: '16px' }}
        >
          {/* Featured — tall left card */}
          <a
            href={posts[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden block"
            style={{ borderRadius: '18px', gridRow: 'span 2', minHeight: 'clamp(260px,40vw,460px)', boxShadow: '0 4px 28px rgba(14,37,61,0.14)' }}
          >
            <Image src={posts[0].image} alt={posts[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" unoptimized />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,14,36,0.95) 0%, rgba(6,14,36,0.5) 50%, transparent 100%)' }} />
            <div style={{ position: 'absolute', top: '1.1rem', left: '1.1rem' }}>
              <span style={{ fontSize: '0.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', background: posts[0].catColor, color: 'white', padding: '3px 10px', borderRadius: '999px' }}>
                {posts[0].category}
              </span>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.75rem' }}>
              <div style={{ width: '28px', height: '2.5px', background: '#c8392b', borderRadius: '2px', marginBottom: '0.85rem' }} />
              <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.5rem' }}>{posts[0].date}</p>
              <h3 style={{ fontWeight: 900, color: 'white', fontSize: '1.15rem', lineHeight: 1.35, marginBottom: '1rem' }}>
                {posts[0].title}
              </h3>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontWeight: 700, color: '#c8392b', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(200,57,43,0.12)', padding: '6px 14px', borderRadius: '999px', border: '1px solid rgba(200,57,43,0.25)' }}>
                READ MORE
                <svg style={{ width: '11px', height: '11px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </a>

          {/* 3 smaller cards stacked right */}
          {posts.slice(1).map((post) => (
            <a
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden block"
              style={{ borderRadius: '14px', height: '148px', boxShadow: '0 2px 14px rgba(14,37,61,0.10)' }}
            >
              <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.07]" unoptimized />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,14,36,0.92) 0%, rgba(6,14,36,0.3) 55%, transparent 100%)' }} />
              <div style={{ position: 'absolute', top: '0.7rem', left: '0.7rem' }}>
                <span style={{ fontSize: '0.46rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', background: post.catColor, color: 'white', padding: '2px 8px', borderRadius: '999px' }}>
                  {post.category}
                </span>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.85rem 1rem' }}>
                <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.25rem' }}>{post.date}</p>
                <h3 style={{ fontWeight: 800, color: 'white', fontSize: '0.78rem', lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </motion.div>

        {/* ── Seminars full-width navy band ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{ background: '#0e253d', borderRadius: '18px', overflow: 'hidden', marginBottom: '16px', boxShadow: '0 4px 24px rgba(14,37,61,0.18)' }}
        >
          {/* Band header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.75rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '18px', height: '2px', background: '#c8392b', borderRadius: '2px', display: 'inline-block', flexShrink: 0 }} />
              <p style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'white', fontSize: '0.58rem' }}>Upcoming Seminars</p>
            </div>
            <Link href="/seminars" className="btn-red-sm">
              VIEW ALL
              <svg style={{ width: '11px', height: '11px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* 3 seminars horizontal */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {seminars.map((s, i) => (
              <Link
                key={s.title}
                href="/seminars"
                className={i < seminars.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/[0.07]' : ''}
                style={{
                  padding: '1.25rem 1.75rem',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <span style={{ fontSize: '0.46rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', background: s.tagColor, color: 'white', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', marginBottom: '0.6rem' }}>
                  {s.tag}
                </span>
                <h4 style={{ fontWeight: 800, color: 'white', fontSize: '0.82rem', lineHeight: 1.4, marginBottom: '0.65rem' }}>
                  {s.title}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.4)', marginBottom: '0.3rem' }}>
                  <svg style={{ width: '11px', height: '11px', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span style={{ fontSize: '0.7rem' }}>{s.dates}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.4)', marginBottom: '0.85rem' }}>
                  <svg style={{ width: '11px', height: '11px', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span style={{ fontSize: '0.7rem' }}>{s.location}</span>
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 700, color: '#c8392b', fontSize: '0.65rem', textTransform: 'uppercase' }}>
                  Register →
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ── Expert horizontal strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ background: '#f8fafc', border: '1px solid #e4eaf0', borderRadius: '14px', padding: '1.25rem 1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative', width: '54px', height: '54px', borderRadius: '10px', overflow: 'hidden', border: '2px solid #e4eaf0', flexShrink: 0 }}>
                <Image
                  src="https://www.mdaturbines.com/wp-content/uploads/2026/04/Mike-Walsh-Headshot.jpg"
                  alt="Featured Expert"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div>
                <p style={{ fontSize: '0.52rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#9aabbf', marginBottom: '2px' }}>Featured Expert</p>
                <h4 style={{ fontWeight: 900, color: '#0e253d', fontSize: '0.88rem', lineHeight: 1.2 }}>Timothy Zdrojeski</h4>
                <p style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#c8392b', fontSize: '0.5rem', marginTop: '3px' }}>EHS Compliance &amp; Systems Support</p>
              </div>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#6a7a8a', lineHeight: 1.7, maxWidth: '480px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              Timothy began his career as a non-ferrous laborer, then moved into environmental health and safety roles within the power generation industry.
            </p>
          </div>
          <Link href="/experts" className="btn-red-sm shrink-0">
            MEET ALL EXPERTS
            <svg style={{ width: '12px', height: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
