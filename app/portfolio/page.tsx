const projects = [
  { title: "E-commerce for Local Bakery", tech: "Next.js, Stripe", desc: "A custom ordering system increasing sales by 20%." },
  { title: "SaaS Startup Audit", tech: "Node.js, Security", desc: "Security and scalability audit for a FinTech platform." },
];

export default function PortfolioPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12">Selected Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="group border border-slate-100 p-8 rounded-2xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{p.tech}</span>
            <h3 className="text-2xl font-bold mt-2 mb-4 group-hover:text-blue-600 transition">{p.title}</h3>
            <p className="text-slate-500 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}