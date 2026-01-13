import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl tracking-tighter">DEV_PORTFOLIO</Link>
            <div className="flex gap-8 text-sm font-medium text-slate-600">
              <Link href="/portfolio" className="hover:text-black transition">Portfolio</Link>
              <Link href="/blog" className="hover:text-black transition">Blog</Link>
              <Link href="/about" className="hover:text-black transition">About</Link>
            </div>
          </div>
        </nav>
        
        {children}

        <footer className="border-t border-slate-100 py-12 mt-20">
          <div className="max-w-5xl mx-auto px-6 text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} — Built with Next.js & Tailwind
          </div>
        </footer>
      </body>
    </html>
  );
}
