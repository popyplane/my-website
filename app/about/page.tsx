export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-lg text-slate-600 leading-relaxed">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Engineering with purpose.</h2>
      <p className="mb-6">
        I am a developer who believes that technology should be accessible to everyone—from the local 
        coffee shop to the most complex tech startup.
      </p>
      <p className="mb-6">
        With a background in [Your Background], I focus on writing clean, maintainable code 
        and building fast user interfaces.
      </p>
      <div className="bg-slate-50 p-8 rounded-2xl mt-12 border border-slate-100">
        <h4 className="text-slate-900 font-bold mb-4">Core Stack</h4>
        <p className="text-sm">TypeScript, Next.js, Tailwind CSS, Node.js, PostgreSQL.</p>
      </div>
    </main>
  );
}