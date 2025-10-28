import { ChevronRight, FileText, Store } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-basix-black/50 to-basix-black pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6 inline-block">
          <div className="px-4 py-2 border border-basix-600 rounded-full text-xs font-mono tracking-wider text-basix-300 animate-glow-pulse">
            BENEFICIAL ARTIFICIAL SUPER INTELLIGENCE X MARKET
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight">
          OWN THE FUTURE
          <br />
          <span className="text-gradient">OF INTELLIGENCE.</span>
        </h1>

        <p className="text-lg md:text-xl text-basix-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          The decentralized marketplace for AI, IP, and real-world innovation — powered by DAO governance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="btn-primary flex items-center gap-2 group">
            JOIN THE DAO
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>

          <button className="btn-secondary flex items-center gap-2 group">
            <Store size={18} />
            EXPLORE MARKETPLACE
          </button>

          <button className="btn-secondary flex items-center gap-2 group">
            <FileText size={18} />
            READ WHITEPAPER
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-sm text-basix-400 uppercase tracking-wider">Decentralized</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">DAO</div>
            <div className="text-sm text-basix-400 uppercase tracking-wider">Governed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">AGI</div>
            <div className="text-sm text-basix-400 uppercase tracking-wider">Ready</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-basix-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-basix-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
