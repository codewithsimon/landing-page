import { ChevronRight, FileText, Store } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-basix-black dark:bg-basix-black light:bg-basix-white transition-colors duration-400">
      <AnimatedBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-basix-black/50 to-basix-black dark:via-basix-black/50 dark:to-basix-black light:via-basix-white/50 light:to-basix-white pointer-events-none transition-colors duration-400" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6 inline-block animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <div className="px-4 py-2 border border-basix-600 dark:border-basix-600 light:border-basix-300 rounded-full text-xs font-mono tracking-wider text-basix-300 dark:text-basix-300 light:text-basix-600 animate-border-glow transition-colors duration-400">
            BENEFICIAL ARTIFICIAL SUPER INTELLIGENCE X MARKET
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight animate-fade-up text-basix-white dark:text-basix-white light:text-basix-black transition-colors duration-400" style={{ animationDelay: '0.4s', opacity: 0 }}>
          OWN THE FUTURE
          <br />
          <span className="text-gradient">OF INTELLIGENCE.</span>
        </h1>

        <p className="text-lg md:text-xl text-basix-300 dark:text-basix-300 light:text-basix-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up transition-colors duration-400" style={{ animationDelay: '0.6s', opacity: 0 }}>
          The decentralized marketplace for AI, IP, and real-world innovation — powered by DAO governance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
          <button className="btn-primary flex items-center gap-2 group transition-smooth hover-lift hover:shadow-glow-lg">
            JOIN THE DAO
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>

          <button className="btn-secondary flex items-center gap-2 group transition-smooth hover-lift">
            <Store size={18} />
            EXPLORE MARKETPLACE
          </button>

          <button className="btn-secondary flex items-center gap-2 group transition-smooth hover-lift">
            <FileText size={18} />
            READ WHITEPAPER
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-fade-up transition-colors duration-400" style={{ animationDelay: '1s', opacity: 0 }}>
            <div className="text-3xl font-bold mb-2 text-basix-white dark:text-basix-white light:text-basix-black">100%</div>
            <div className="text-sm text-basix-400 dark:text-basix-400 light:text-basix-600 uppercase tracking-wider">Decentralized</div>
          </div>
          <div className="text-center animate-fade-up transition-colors duration-400" style={{ animationDelay: '1.1s', opacity: 0 }}>
            <div className="text-3xl font-bold mb-2 text-basix-white dark:text-basix-white light:text-basix-black">DAO</div>
            <div className="text-sm text-basix-400 dark:text-basix-400 light:text-basix-600 uppercase tracking-wider">Governed</div>
          </div>
          <div className="text-center animate-fade-up transition-colors duration-400" style={{ animationDelay: '1.2s', opacity: 0 }}>
            <div className="text-3xl font-bold mb-2 text-basix-white dark:text-basix-white light:text-basix-black">AGI</div>
            <div className="text-sm text-basix-400 dark:text-basix-400 light:text-basix-600 uppercase tracking-wider">Ready</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-basix-500 dark:border-basix-500 light:border-basix-400 rounded-full flex items-start justify-center p-2 transition-colors duration-400">
          <div className="w-1 h-3 bg-basix-500 dark:bg-basix-500 light:bg-basix-400 rounded-full animate-pulse transition-colors duration-400" />
        </div>
      </div>
    </section>
  );
}
