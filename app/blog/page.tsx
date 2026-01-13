const posts = [
  { title: "Optimizing React Performance for Small Businesses", date: "Oct 12, 2023" },
  { title: "Why your Startup needs a Code Audit", date: "Sep 28, 2023" },
];

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12">Writeups & Lessons</h2>
      <div className="space-y-12">
        {posts.map((post, i) => (
          <article key={i} className="group cursor-pointer">
            <p className="text-sm text-slate-400 mb-2">{post.date}</p>
            <h3 className="text-xl font-bold group-hover:text-blue-600 transition">{post.title}</h3>
          </article>
        ))}
      </div>
    </main>
  );
}