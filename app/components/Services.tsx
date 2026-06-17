"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  { title: "Steam Turbines", image: "https://www.mdaturbines.com/wp-content/uploads/2026/05/4-HP-Rotor-1.jpg", href: "/steam-turbine" },
  { title: "Gas Turbines", image: "https://www.mdaturbines.com/wp-content/uploads/2026/05/3H8A9957-mc-v1-FLAT.jpg", href: "/gas-turbine" },
  { title: "Generators", image: "https://www.mdaturbines.com/wp-content/uploads/2026/02/Stator-Views-of-unit-with-final-paint-applied1.jpg", href: "/generator-services" },
  { title: "Controls", image: "https://www.mdaturbines.com/wp-content/uploads/2026/04/2T3A4435.jpg", href: "/controls" },
];

const stats = [
  { num: "40+", label: "Years of Experience", cls: "border-r border-b border-[#e4eaf2] bg-white rounded-tl-2xl" },
  { num: "7", label: "Service Centers", cls: "border-b border-[#e4eaf2] bg-[#fafbfd] rounded-tr-2xl" },
  { num: "24/7", label: "Emergency Support", cls: "border-r border-[#e4eaf2] bg-white rounded-bl-2xl" },
  { num: "1,000+", label: "Projects Completed", cls: "bg-[#fafbfd] rounded-br-2xl" },
];

const features = [
  {
    icon: "shield",
    text: "OEM-Alternative for GE, Siemens, Westinghouse & Alstom",
    accent: "#1a3a5c",
  },
  {
    icon: "pin",
    text: "6 US locations: NY · MO · TX (×2) · CO · OH",
    accent: "#1a3a5c",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-28 md:pt-40 md:pb-40">

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(26,58,92,0.025)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 section-wrap">
        <div className="grid lg:grid-cols-[1fr_1.1fr] items-start" style={{ gap: 'clamp(2rem,5vw,5rem)' }}>

          {/* ══ LEFT ══ */}
          <div className="pt-2">

            {/* eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-8 bg-[rgba(200,57,43,0.07)] border border-[rgba(200,57,43,0.18)] rounded-full px-4 py-1.5">
              <span className="w-5 h-[2px] bg-[#c8392b] rounded-sm" />
              <p className="font-bold uppercase tracking-[0.2em] text-[#c8392b] text-[0.6rem]">
                About MD&amp;A
              </p>
            </div>

            {/* heading */}
            <h2 className="font-black leading-[1.05] mb-8 text-[#0e253d] text-[clamp(2rem,3.2vw,2.8rem)] tracking-tight">
              Four Decades of<br />
              Power Generation<br />
              <span className="text-[#c8392b]">Excellence.</span>
            </h2>

            {/* body */}
            <p className="text-[#5a6a7a] text-[0.97rem] leading-[1.95] mb-14">
              Mechanical Dynamics &amp; Analysis delivers high-quality, on-schedule, and
              cost-effective repair, services, and parts for steam, gas, and industrial
              turbines and generators — the OEM-alternative trusted by power generators worldwide.
            </p>

            {/* ── Stats 2×2 grid ── */}
            <div className="grid grid-cols-2 mb-10" style={{ gap: '1px', background: '#e4eaf2', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(26,58,92,0.08)' }}>
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center bg-white" style={{ padding: '2rem 1.5rem' }}>
                  <p className="font-black text-[#1a3a5c] leading-none tracking-tight" style={{ fontSize: 'clamp(2rem,2.8vw,2.8rem)' }}>
                    {s.num}
                  </p>
                  <div className="w-6 bg-[#c8392b] rounded-sm" style={{ height: '2.5px', margin: '0.65rem 0' }} />
                  <p className="font-bold uppercase tracking-[0.13em] text-[#9aabbf]" style={{ fontSize: '0.58rem' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* ── Feature rows ── */}
            <div className="flex flex-col" style={{ gap: '0.6rem', marginBottom: '0.5rem' }}>
              {features.map((f) => (
                <div
                  key={f.text}
                  className="flex items-center gap-4 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: '12px',
                    background: '#f8fafc',
                    border: '1px solid #e4eaf2',
                    borderLeft: `3px solid ${f.accent}`,
                    boxShadow: '0 2px 8px rgba(26,58,92,0.05)',
                  }}
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: '38px', height: '38px', borderRadius: '10px', background: f.accent }}
                  >
                    {f.icon === "shield" && (
                      <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {f.icon === "pin" && (
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    )}
                    {f.icon === "phone" && (
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01z" />
                      </svg>
                    )}
                  </div>
                  <div className="min-w-0">
                    {f.href ? (
                      <a href={f.href} className="no-underline">
                        <p className="font-black text-[#c8392b] leading-snug" style={{ fontSize: '1rem' }}>{f.text}</p>
                        <p className="font-medium tracking-wide" style={{ fontSize: '0.75rem', color: '#9aabbf', marginTop: '2px' }}>{f.sub}</p>
                      </a>
                    ) : (
                      <p className="font-semibold text-[#1e3048] leading-snug" style={{ fontSize: '0.88rem' }}>{f.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ══ RIGHT: image grid + buttons below ══ */}
          <div className="flex flex-col gap-5">

            {/* 2×2 grid */}
            <div className="grid grid-cols-2 gap-4">
              {services.map((s, i) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group relative overflow-hidden rounded-2xl block aspect-square shadow-[0_10px_40px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.26)]"
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,12,35,0.96)_0%,rgba(5,12,35,0.35)_50%,transparent_100%)]" />

                  {/* ghost number */}
                  <div className="absolute top-4 left-5 font-black select-none text-[2.2rem] leading-none text-white/10 tracking-[-0.04em]">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* badge */}
                  <div className="absolute top-4 right-4 font-bold uppercase tracking-widest text-[0.52rem] bg-[#c8392b] text-white px-3 py-1 rounded-full">
                    Services
                  </div>

                  {/* bottom label */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="h-[2.5px] w-8 bg-[#c8392b] rounded-sm mb-3 transition-all duration-500 group-hover:w-full" />
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-white font-black uppercase text-[0.8rem] tracking-[0.08em] leading-snug">
                        {s.title}
                      </p>
                      <div className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#c8392b] group-hover:border-[#c8392b]">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="white" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* ── Buttons below image grid ── */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2">
              <Link
                href="/about"
                className="btn-red flex-1 justify-center"
              >
                ABOUT MD&amp;A
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/contact#quote"
                className="flex-1 inline-flex items-center justify-center gap-2 font-black text-[0.78rem] tracking-[0.1em] uppercase transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  border: '2px solid #1a3a5c',
                  color: '#1a3a5c',
                  background: 'white',
                  boxShadow: '0 2px 12px rgba(26,58,92,0.10)',
                }}
              >
                GET A QUOTE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* ── Emergency call button ── */}
            <a
              href="tel:+15183993616"
              className="flex items-center gap-4 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                padding: '1rem 1.25rem',
                borderRadius: '12px',
                background: '#f8fafc',
                border: '1px solid #e4eaf2',
                borderLeft: '3px solid #c8392b',
                boxShadow: '0 2px 8px rgba(26,58,92,0.05)',
                textDecoration: 'none',
              }}
            >
              <div className="flex items-center justify-center shrink-0" style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#c8392b' }}>
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01z" />
                </svg>
              </div>
              <div>
                <p className="font-black text-[#c8392b]" style={{ fontSize: '1rem' }}>(518) 399-3616</p>
                <p className="font-medium" style={{ fontSize: '0.75rem', color: '#9aabbf', marginTop: '2px' }}>24/7 Emergency Hotline</p>
              </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
