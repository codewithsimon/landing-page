import { ChevronRight, FileText, Store } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <AnimatedBackground />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, transparent, var(--bg))',
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6 inline-block animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <div
            className="px-4 py-2 border rounded-full text-xs font-mono tracking-wider"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--muted)',
            }}
          >
            BENEFICIAL ARTIFICIAL SUPER INTELLIGENCE X MARKET
          </div>
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0, color: 'var(--heading)' }}
        >
          OWN THE FUTURE
          <br />
          <span className="text-gradient">OF INTELLIGENCE.</span>
        </h1>

        <p
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.6s', opacity: 0, color: 'var(--muted)' }}
        >
          The decentralized marketplace for AI, IP, and real-world innovation — powered by DAO governance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
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
          <div className="text-center animate-fade-up" style={{ animationDelay: '1s', opacity: 0 }}>
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--heading)' }}>100%</div>
            <div className="text-sm uppercase tracking-wider" style={{ color: 'var(--muted)' }}>Decentralized</div>
          </div>
          <div className="text-center animate-fade-up" style={{ animationDelay: '1.1s', opacity: 0 }}>
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--heading)' }}>DAO</div>
            <div className="text-sm uppercase tracking-wider" style={{ color: 'var(--muted)' }}>Governed</div>
          </div>
          <div className="text-center animate-fade-up" style={{ animationDelay: '1.2s', opacity: 0 }}>
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--heading)' }}>AGI</div>
            <div className="text-sm uppercase tracking-wider" style={{ color: 'var(--muted)' }}>Ready</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div
          className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
          style={{ borderColor: 'var(--border)' }}
        >
          <div
            className="w-1 h-3 rounded-full animate-pulse"
            style={{ backgroundColor: 'var(--muted)' }}
          />
        </div>
      </div>
    </section>
  );
}
