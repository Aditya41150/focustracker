import React from 'react';
import { 
  Github, Zap, Shield, Layout, ArrowRight, 
  Download, Database, CheckCircle2, XCircle 
} from 'lucide-react';

// 1. Import local image correctly for Vite bundling
import dashboardImg from './assets/image.png'; 

export default function App() {
  const GITHUB_RELEASE_URL = "https://github.com/Aditya41150/Focus-Tracker/releases/latest";

  return (
    <div className="min-h-screen bg-dark-bg text-neutral-100 selection:bg-purple-500/30">
      {/* Background Glow Effect */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-white/5 bg-dark-bg/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-brand to-indigo-600 rounded-xl shadow-lg shadow-purple-500/20 flex items-center justify-center font-black text-white text-xl">F</div>
            <span className="text-xl font-black tracking-tight uppercase">Focus Tracker</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-neutral-400 uppercase tracking-widest">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#comparison" className="hover:text-white transition">Method</a>
            <a href={GITHUB_RELEASE_URL} target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-purple-400 text-xs font-black mb-8 tracking-widest uppercase animate-pulse">
          <Zap className="w-3 h-3" /> Built with Tauri v2 + Rust
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.05] bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
          Master Your <br /> Deep Work.
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
          Zero overhead. 100% Privacy. The high-performance productivity engine for developers.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Download Button with Link */}
          <a 
            href={GITHUB_RELEASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 bg-brand hover:bg-purple-500 text-white rounded-2xl font-black transition-all flex items-center gap-3 shadow-2xl shadow-purple-600/30"
          >
            <Download className="w-5 h-5" /> Get Focus Tracker Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Windows & macOS</span>
        </div>
      </header>

      {/* Product Showcase */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="relative rounded-[2.5rem] p-3 bg-neutral-800/20 border border-white/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10" />
          <img 
            src={dashboardImg} 
            alt="Focus Tracker Dashboard" 
            className="rounded-[2rem] w-full grayscale-[0.1] opacity-90 shadow-2xl"
          />
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5">
        <h2 className="text-3xl font-black text-center mb-16 tracking-tight">The Modern Standard.</h2>
        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden">
          <div className="bg-dark-bg p-12">
            <h3 className="text-neutral-500 font-black mb-8 flex items-center gap-3 uppercase tracking-widest text-sm">
              <XCircle className="w-5 h-5" /> Manual Trackers
            </h3>
            <ul className="space-y-6 text-neutral-500 font-medium">
              <li>• Manual start/stop triggers</li>
              <li>• Memory-heavy Electron apps</li>
              <li>• Privacy concerns with cloud storage</li>
            </ul>
          </div>
          <div className="bg-[#16171D] p-12">
            <h3 className="text-brand font-black mb-8 flex items-center gap-3 uppercase tracking-widest text-sm">
              <CheckCircle2 className="w-5 h-5" /> Focus Tracker
            </h3>
            <ul className="space-y-6 text-neutral-100 font-bold">
              <li><span className="text-brand">✓</span> Fully automated Rust engine</li>
              <li><span className="text-brand">✓</span> &lt; 20MB Memory footprint</li>
              <li><span className="text-brand">✓</span> 100% Local SQLite storage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-32 text-center border-t border-white/5">
        <h2 className="text-4xl font-black mb-12 tracking-tighter">Start tracking better today.</h2>
        <a 
          href={GITHUB_RELEASE_URL}
          className="inline-block px-12 py-6 bg-white text-black rounded-2xl font-black hover:bg-neutral-200 transition-all hover:scale-105"
        >
          Download Now
        </a>
      </footer>
    </div>
  );
}