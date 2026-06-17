const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: "Trusted OEM Alternative",
    description:
      "Since 1982, MD&A has delivered OEM-equivalent quality at competitive cost — giving power plant operators a reliable alternative without sacrificing performance or safety.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "24/7 Emergency Response",
    description:
      "Round-the-clock access to MD&A's engineering team and spare parts inventory. When your turbine goes down, we're ready — day or night.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "7 Nationwide Locations",
    description:
      "Service centers in NY, MO, TX (Houston & San Antonio), CO, and OH ensure fast field response and regional parts availability across North America.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    title: "Deep Engineering Expertise",
    description:
      "Our engineers hold decades of OEM backgrounds across GE, Siemens, Westinghouse, and Alstom equipment — bringing first-hand platform knowledge to every project.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
      </svg>
    ),
    title: "Single-Source Provider",
    description:
      "Services, parts, repairs, and engineering from one company means seamless coordination, clearer accountability, and faster project completion.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    ),
    title: "Industry Training Programs",
    description:
      "MD&A operates its own turbine-generator seminars (Steam, Gas, Vibration Analysis) — a testament to the depth of technical knowledge we bring to every engagement.",
  },
];

export default function WhyMDA() {
  return (
    <section className="py-20 bg-[#f4f7fa]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-[#c8392b] font-bold text-sm tracking-widest uppercase mb-3">Why MD&A</p>
            <h2 className="section-heading text-[#1a3a5c] red-accent mb-8">
              What You Need;<br/>Where You Need It.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Mechanical Dynamics & Analysis provides power generators around the globe with a full-service, OEM-alternative for services, parts, and repairs. We deliver consistent quality and value with fast response, superior communications, and innovative solutions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We're not a middleman — we're a hands-on engineering company with OEM-experienced staff, state-of-the-art repair facilities, and a 40-year track record that our clients count on year after year.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact#quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c8392b] hover:bg-[#a82f23] text-white font-bold rounded transition-colors shadow-lg"
              >
                Contact Engineering Team
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1a3a5c] text-[#1a3a5c] hover:bg-[#1a3a5c] hover:text-white font-bold rounded transition-colors"
              >
                About MD&A
              </a>
            </div>
          </div>

          {/* Right: reasons grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1a3a5c]/10 group-hover:bg-[#c8392b]/10 flex items-center justify-center text-[#1a3a5c] group-hover:text-[#c8392b] mb-4 transition-colors">
                  {r.icon}
                </div>
                <h3 className="font-bold text-[#1a3a5c] text-base mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
