"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    label: "SERVICES",
    href: "/services",
    children: [
      { label: "Gas Turbine Services",   href: "/gas-turbine" },
      { label: "Steam Turbine Services", href: "/steam-turbine" },
      { label: "Generator Services",     href: "/generator-services" },
      { label: "Controls & Excitation",  href: "/controls" },
      { label: "Field Services",         href: "/field-services" },
      { label: "Outage Services",        href: "/outage-services" },
    ],
  },
  {
    label: "PARTS",
    href: "/parts",
    children: [
      { label: "Gas Turbine Parts",   href: "/parts/gas-turbine" },
      { label: "Steam Turbine Parts", href: "/parts/steam-turbine" },
      { label: "Generator Parts",     href: "/parts/generator" },
      { label: "Auxiliary Parts",     href: "/parts/auxiliary" },
      { label: "Fuel Nozzles",        href: "/parts/fuel-nozzles" },
      { label: "Spare Assets",        href: "/parts/spare-assets" },
    ],
  },
  {
    label: "REPAIRS",
    href: "/repairs",
    children: [
      { label: "Gas Turbine Repairs",   href: "/repairs/gas-turbine" },
      { label: "Steam Turbine Repairs", href: "/repairs/steam-turbine" },
      { label: "Generator Repairs",     href: "/repairs/generator" },
      { label: "Rotor Repairs",         href: "/repairs/rotor" },
    ],
  },
  {
    label: "OUR COMPANY",
    href: "/about",
    children: [
      { label: "About MD&A",       href: "/about" },
      { label: "Meet The Experts", href: "/experts" },
      { label: "Locations",        href: "/contact" },
      { label: "Careers",          href: "/careers" },
      { label: "Seminars",         href: "/seminars" },
      { label: "Insight Blog",     href: "/resources" },
      { label: "Brochures",        href: "/brochures" },
    ],
  },
  { label: "CAREERS",  href: "/careers", children: [] },
  { label: "CONTACT",  href: "/contact", children: [] },
];

export default function Header() {
  const [openMenu,   setOpenMenu]   = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExp,  setMobileExp]  = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50" style={{ background: "#1a3a5c", boxShadow: "0 2px 24px rgba(0,0,0,0.22)" }}>
      <div
        className="flex items-center"
        style={{ maxWidth: 1240, margin: "0 auto", height: 72, padding: "0 32px" }}
      >

        {/* ── Logo ── */}
        <Link href="/" className="shrink-0 mr-10 flex items-center">
          <div
            style={{
              background: "#fff",
              borderRadius: 8,
              padding: "7px 18px",
              display: "flex",
              alignItems: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            }}
          >
            <Image
              src="https://www.mdaturbines.com/wp-content/uploads/2014/10/MDA-logo-new.png"
              alt="MD&A Turbines"
              width={130}
              height={42}
              className="h-9 w-auto object-contain"
              priority
              unoptimized
            />
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children.length > 0 && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3.5 py-2 rounded-md transition-all duration-150"
                style={{
                  color: openMenu === item.label ? "#fff" : "rgba(255,255,255,0.78)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  background: openMenu === item.label ? "rgba(255,255,255,0.12)" : "transparent",
                }}
              >
                {item.label}
                {item.children.length > 0 && (
                  <svg
                    className="w-2.5 h-2.5 shrink-0"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    style={{ transition: "transform 0.2s", transform: openMenu === item.label ? "rotate(180deg)" : "rotate(0)" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {item.children.length > 0 && openMenu === item.label && (
                <div className="absolute top-full left-0 pt-2 z-50" style={{ minWidth: 220 }}>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: 10,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.16)",
                      border: "1px solid rgba(0,0,0,0.06)",
                      overflow: "hidden",
                    }}
                  >
                    {item.children.map((c, i) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="flex items-center gap-3 px-5 py-3 transition-all duration-150 group"
                        style={{
                          fontSize: "0.8rem",
                          color: "#334155",
                          fontWeight: 600,
                          borderBottom: i < item.children.length - 1 ? "1px solid #f1f5f9" : "none",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = "#f0f4f8")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                      >
                        <span
                          style={{ width: 3, height: 14, background: "#c8392b", borderRadius: 2, flexShrink: 0, opacity: 0 }}
                          className="group-hover:opacity-100 transition-opacity"
                        />
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Search */}
          <Link
            href="/search"
            className="flex items-center justify-center w-9 h-9 rounded-md ml-1 transition-all duration-150"
            style={{ color: "rgba(255,255,255,0.65)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"; }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
            </svg>
          </Link>
        </nav>

        {/* ── GET A QUOTE ── */}
        <Link
          href="/contact#quote"
          className="hidden lg:flex btn-red shrink-0"
          style={{ fontSize: "0.72rem", padding: "10px 20px" }}
        >
          GET A QUOTE
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        {/* ── Mobile hamburger ── */}
        <button
          className="lg:hidden text-white ml-auto p-2 rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div
          className="lg:hidden overflow-y-auto"
          style={{ background: "#0e253d", borderTop: "1px solid rgba(255,255,255,0.1)", maxHeight: "80vh" }}
        >
          {navItems.map((item) => (
            <div key={item.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-white font-bold tracking-widest text-xs"
                onClick={() => setMobileExp(mobileExp === item.label ? null : item.label)}
              >
                {item.label}
                {item.children.length > 0 && (
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${mobileExp === item.label ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              {mobileExp === item.label && item.children.length > 0 && (
                <div style={{ background: "#1a3a5c" }}>
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-8 py-3 text-xs font-semibold text-white/70 hover:text-white transition-colors"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-5">
            <Link href="/contact#quote" className="btn-red w-full justify-center" onClick={() => setMobileOpen(false)}>
              GET A QUOTE
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
