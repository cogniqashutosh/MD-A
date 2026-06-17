"use client";
import Link from "next/link";
import Image from "next/image";

const cols = {
  "MD&A": [
    { label: "About Our Company",   href: "/about" },
    { label: "Locations & Contact", href: "/contact" },
    { label: "Careers with MD&A",   href: "/careers" },
    { label: "Insight Blog",        href: "/resources" },
    { label: "Meet The Experts",    href: "/experts" },
    { label: "Resources",           href: "/brochures" },
    { label: "Seminars",            href: "/seminars" },
  ],
  "Services": [
    { label: "Gas Turbine",    href: "/gas-turbine" },
    { label: "Steam Turbine",  href: "/steam-turbine" },
    { label: "Generator",      href: "/generator-services" },
    { label: "Controls",       href: "/controls" },
    { label: "Field Services", href: "/field-services" },
  ],
  "Parts": [
    { label: "Gas Turbine",   href: "/parts/gas-turbine" },
    { label: "Steam Turbine", href: "/parts/steam-turbine" },
    { label: "Generator",     href: "/parts/generator" },
    { label: "Fuel Nozzles",  href: "/parts/fuel-nozzles" },
  ],
  "Repairs": [
    { label: "Gas Turbine",   href: "/repairs/gas-turbine" },
    { label: "Steam Turbine", href: "/repairs/steam-turbine" },
    { label: "Generator",     href: "/repairs/generator" },
    { label: "Rotor Repairs", href: "/repairs/rotor" },
  ],
};

const social: { label: string; href: string; color: string; icon: React.ReactNode }[] = [
  {
    label: "Facebook",
    color: "#1877F2",
    href:  "https://www.facebook.com/MDAturbines/",
    icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>,
  },
  {
    label: "LinkedIn",
    color: "#0A66C2",
    href:  "https://www.linkedin.com/company/mda-turbines",
    icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>,
  },
  {
    label: "YouTube",
    color: "#FF0000",
    href:  "https://www.youtube.com/channel/UC8uPhlQw-4WqHHh465k1tvw",
    icon: <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>,
  },
  {
    label: "Instagram",
    color: "#E1306C",
    href:  "https://www.instagram.com/mdaturbines/",
    icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>,
  },
];

export default function Footer() {
  return (
    <footer>
      {/* ── Emergency CTA band ── */}
      <div className="bg-white" style={{ borderTop: '1px solid #e4eaf0', borderBottom: '1px solid #e4eaf0' }}>
        <div className="section-wrap">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(200,57,43,0.10)', border: '1px solid rgba(200,57,43,0.25)' }}>
                <svg className="w-4 h-4 text-[#c8392b]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01z"/>
                </svg>
              </div>
              <div>
                <p className="text-[#1a3a5c] font-black text-[1rem]">Need emergency turbine support?</p>
                <p className="text-[#6a7a8a] text-[0.82rem] mt-0.5">Our team is available 24/7 — call now.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <a href="tel:+15183993616" className="btn-red justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01z"/>
                </svg>
                (518) 399-3616
              </a>
              <Link href="/contact#quote" style={{ border: '2px solid #1a3a5c', color: '#1a3a5c' }} className="btn-outline-white justify-center">GET A QUOTE</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="bg-white" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
        <div className="section-wrap">
          <div className="grid grid-cols-2 md:grid-cols-[220px_1fr_1fr_1fr_1fr] gap-10 pb-12">

            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <Image
                src="/Screenshot_2026-06-16_161056-removebg-preview.png"
                alt="MD&A Turbines"
                width={136}
                height={44}
                className="h-16 w-auto object-contain mb-6 mx-auto md:mx-0"
                unoptimized
              />

              <div className="flex items-center gap-3 mb-7" style={{ justifyContent: 'center' }}>
                {social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center justify-center rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:opacity-85"
                    style={{ width: '30px', height: '30px', background: s.color, flexShrink: 0 }}
                  >
                    <svg style={{ width: '13px', height: '13px', fill: 'white' }} viewBox="0 0 24 24">
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>

              <div style={{ paddingTop: '0.5rem', textAlign: 'center' }}>
                <p className="text-[#9aabbf] text-[0.62rem] uppercase tracking-[0.12em] font-bold mb-2">
                  Headquarters
                </p>
                <p className="text-[#4a5a6a] text-[0.78rem] leading-[1.65]">
                  25 British American Blvd.<br />
                  Latham, NY 12110
                </p>
                <a href="tel:+15183993616" className="text-[#c8392b] font-bold text-[0.85rem] block mt-2 hover:underline">
                  (518) 399-3616
                </a>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(cols).map(([section, links]) => (
              <div key={section}>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-4 h-[2px] bg-[#c8392b] rounded-sm shrink-0" />
                  <h4 className="font-black uppercase tracking-[0.18em] text-[#1a3a5c] text-[0.62rem]">
                    {section}
                  </h4>
                </div>
                <ul className="flex flex-col gap-3">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[#4a5a6a] text-[0.81rem] transition-colors duration-150 hover:text-[#c8392b]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3" style={{ paddingTop: '1.5rem' }}>
            <p className="text-[#9aabbf] text-[0.72rem]">
              © {new Date().getFullYear()} Mechanical Dynamics &amp; Analysis LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {["Sitemap", "Privacy Policy", "Accessibility"].map((t) => (
                <Link
                  key={t}
                  href={`/${t.toLowerCase().replace(/\s+/g, "")}`}
                  className="text-[#9aabbf] text-[0.72rem] hover:text-[#c8392b] transition-colors"
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
