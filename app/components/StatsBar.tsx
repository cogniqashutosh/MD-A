export default function StatsBar() {
  const stats = [
    { value: "1982", label: "Founded", icon: "🏭" },
    { value: "40+", label: "Years of Expertise", icon: "⚙️" },
    { value: "7", label: "Service Centers", icon: "📍" },
    { value: "24/7", label: "Emergency Support", icon: "🔧" },
    { value: "Global", label: "Service Reach", icon: "🌍" },
  ];

  return (
    <section className="bg-[#1a3a5c] py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/10 rounded-xl overflow-hidden">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="bg-[#1a3a5c] flex flex-col items-center justify-center py-5 px-4 text-center group hover:bg-[#c8392b] transition-colors duration-300"
            >
              <span className="text-2xl mb-1">{stat.icon}</span>
              <span className="text-white font-black text-2xl md:text-3xl leading-tight">{stat.value}</span>
              <span className="text-white/70 group-hover:text-white/90 text-xs font-medium mt-0.5 tracking-wide uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
