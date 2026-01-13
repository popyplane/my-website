export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-24 pb-12">
      <section className="max-w-3xl">
        <h1 className="text-6xl font-extrabold leading-[1.1] tracking-tight mb-8">
          I build <span className="text-blue-600">modern web experiences</span> for local businesses & startups.
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed mb-10">
          Fullstack Developer specializing in high-performance websites for small shops and 
          technical code audits for growing companies.
        </p>
        <div className="flex gap-4">
          <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition">
            View My Work
          </button>
          <button className="border border-slate-200 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition">
            Book an Audit
          </button>
        </div>
      </section>
    </main>
  );
}