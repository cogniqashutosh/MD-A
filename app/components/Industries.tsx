import Image from "next/image";

const industries = [
  {
    title: "Power Generation",
    description: "Combined-cycle, simple-cycle, and cogeneration plants relying on MD&A for planned outages and emergency response.",
    image: "https://www.mdaturbines.com/wp-content/uploads/2026/05/7F-Rotor-Stack-timelapse1-mc-blur-v1FLAT.jpg",
  },
  {
    title: "Electric Utilities",
    description: "Investor-owned and municipal utilities depending on MD&A for major generator overhauls and turbine service programs.",
    image: "https://www.mdaturbines.com/wp-content/uploads/2026/05/capitla-parts-shots_RE6-mc-blur-v1FLAT.jpg",
  },
  {
    title: "Industrial Facilities",
    description: "Refining, petrochemical, and manufacturing plants with captive turbine-generators utilizing MD&A for reliability and uptime.",
    image: "https://www.mdaturbines.com/wp-content/uploads/2026/05/Capital-parts-blur._RE3-mc-blur-v1FLAT.jpg",
  },
  {
    title: "Energy Infrastructure",
    description: "LNG terminals, pipelines, and distributed energy operators requiring specialized rotating equipment support.",
    image: "https://www.mdaturbines.com/wp-content/uploads/2026/05/7F-Rotor-Stack-_timelapse-comp-2-mc-blur-v1FLAT.jpg",
  },
];

export default function Industries() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[#c8392b] font-bold text-sm tracking-widest uppercase mb-3">Who We Serve</p>
          <h2 className="section-heading text-[#1a3a5c] red-accent-center">
            Industries Served
          </h2>
          <p className="section-subheading mt-6 max-w-xl mx-auto">
            MD&A supports power plant operators, utilities, and industrial facilities worldwide with OEM-alternative turbine and generator services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind) => (
            <div key={ind.title} className="group relative rounded-2xl overflow-hidden shadow-lg card-hover">
              <div className="relative h-56">
                <Image
                  src={ind.image}
                  alt={ind.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2540] via-[#1a3a5c]/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-black text-lg leading-tight mb-2">{ind.title}</h3>
                <p className="text-white/0 group-hover:text-white/80 text-xs leading-relaxed transition-all duration-300">
                  {ind.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
