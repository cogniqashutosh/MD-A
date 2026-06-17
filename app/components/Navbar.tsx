"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const LOGO = "/Screenshot_2026-06-16_161056-removebg-preview.png";

type Child = { label: string; href: string };
type NavItem = { label: string; href: string; children?: Child[] };

const NAV: NavItem[] = [
  {
    label: "Services",
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
    label: "Parts",
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
    label: "Repairs",
    href: "/repairs",
    children: [
      { label: "Gas Turbine Repairs",   href: "/repairs/gas-turbine" },
      { label: "Steam Turbine Repairs", href: "/repairs/steam-turbine" },
      { label: "Generator Repairs",     href: "/repairs/generator" },
      { label: "Rotor Repairs",         href: "/repairs/rotor" },
    ],
  },
  {
    label: "Our Company",
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
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExp,  setMobileExp]  = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(20,42,70,0.97)'
          : '#1a3a5c',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled
          ? '0 4px 32px rgba(0,0,0,0.28)'
          : '0 2px 10px rgba(0,0,0,0.15)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* ─── DESKTOP ─── */}
      <div className="hidden lg:flex items-center relative" style={{ height: '72px' }}>

        {/* Logo — white diagonal panel */}
        <Link
          href="/"
          className="shrink-0 flex items-center relative z-10"
          style={{
            background: 'white',
            height: '72px',
            paddingLeft: '2rem',
            paddingRight: '3.5rem',
            clipPath: 'polygon(0 0, 100% 0, calc(100% - 22px) 100%, 0 100%)',
            boxShadow: '4px 0 16px rgba(0,0,0,0.15)',
          }}
        >
          <Image
            src={LOGO}
            alt="MD&A Turbines"
            width={140}
            height={40}
            style={{ height: '54px', width: 'auto' }}
            unoptimized
            priority
          />
        </Link>

        {/* Nav + right actions wrapper */}
        <div className="flex items-center flex-1 px-8 relative" style={{ height: '72px' }}>

        {/* Nav links — absolutely centered */}
        <nav className="absolute flex items-center gap-1" style={{ left: '50%', transform: 'translateX(calc(-50% + 40px))' }}>
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1.5 rounded-lg font-semibold whitespace-nowrap no-underline transition-all duration-150"
                style={{
                  fontSize: '0.92rem',
                  padding: '0.45rem 0.85rem',
                  color: '#fff',
                  background: activeMenu === item.label ? 'rgba(255,255,255,0.1)' : 'transparent',
                  letterSpacing: '0.01em',
                }}
              >
                {item.label}
                {item.children && (
                  <svg
                    style={{
                      width: '11px', height: '11px', flexShrink: 0,
                      transition: 'transform 0.2s',
                      transform: activeMenu === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {item.children && activeMenu === item.label && (
                <div
                  className="absolute z-200"
                  style={{ top: 'calc(100% + 8px)', left: 0, minWidth: '230px' }}
                >
                  {/* Arrow */}
                  <div style={{
                    position: 'absolute', top: '-6px', left: '18px',
                    width: '12px', height: '12px',
                    background: '#fff', transform: 'rotate(45deg)',
                    borderTop: '1px solid rgba(0,0,0,0.07)',
                    borderLeft: '1px solid rgba(0,0,0,0.07)',
                    zIndex: 1,
                  }} />
                  <div style={{
                    position: 'relative', background: '#fff',
                    borderRadius: '12px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.07)',
                    overflow: 'hidden', zIndex: 2,
                  }}>
                    {item.children.map((child, i) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-3 no-underline transition-all duration-150 hover:bg-[#f0f4f8]"
                        style={{
                          padding: '0.7rem 1.1rem',
                          fontSize: '0.81rem',
                          fontWeight: 600,
                          color: '#334155',
                          borderBottom: i < item.children!.length - 1 ? '1px solid #f1f5f9' : 'none',
                        }}
                      >
                        <span style={{ width: '3px', height: '14px', background: '#c8392b', borderRadius: '2px', flexShrink: 0 }} />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right actions — pinned to the right edge */}
        <div className="absolute flex items-center gap-2" style={{ right: '10px' }}>
          <button
            className="flex items-center justify-center rounded-lg transition-all duration-150"
            style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }}
          >
            <svg style={{ width: '15px', height: '15px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
            </svg>
          </button>

          <Link
            href="/contact#quote"
            className="btn-red-sm"
          >
            GET A QUOTE
            <svg style={{ width: '13px', height: '13px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        </div>{/* /Nav + right actions wrapper */}
      </div>{/* /desktop row */}

      {/* ─── MOBILE ─── */}
      <div className="flex lg:hidden items-center justify-between px-5" style={{ height: '60px' }}>
        <Link href="/">
          <Image
            src={LOGO}
            alt="MD&A Turbines"
            width={110}
            height={26}
            style={{ height: '30px', width: 'auto' }}
            unoptimized
            priority
          />
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '7px', color: 'white', cursor: 'pointer', marginRight: '10px' }}
          aria-label="Toggle menu"
        >
          <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden overflow-y-auto" style={{ background: '#0e253d', borderTop: '1px solid rgba(255,255,255,0.08)', maxHeight: '80vh' }}>
          {NAV.map((item) => (
            <div key={item.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <button
                onClick={() => setMobileExp(mobileExp === item.label ? null : item.label)}
                className="w-full flex justify-between items-center"
                style={{ padding: '1rem 1.5rem', background: 'transparent', border: 0, cursor: 'pointer', color: 'white', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                {item.label}
                {item.children && (
                  <svg style={{ width: '15px', height: '15px', transition: 'transform 0.2s', transform: mobileExp === item.label ? 'rotate(180deg)' : 'none' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              {mobileExp === item.label && item.children && (
                <div style={{ background: 'rgba(255,255,255,0.03)' }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 no-underline transition-colors hover:text-white"
                      style={{ padding: '0.75rem 2rem', fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                    >
                      <span style={{ width: '3px', height: '12px', background: '#c8392b', borderRadius: '2px', flexShrink: 0 }} />
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ padding: '1.25rem 1.5rem' }}>
            <Link href="/contact#quote" className="btn-red w-full justify-center" onClick={() => setMobileOpen(false)}>
              GET A QUOTE
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
