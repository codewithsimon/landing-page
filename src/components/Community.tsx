import { Code, TrendingUp, Palette, Briefcase } from 'lucide-react';
import Card from './Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const personas = [
  {
    icon: Code,
    title: 'Developers',
    description: 'Build, contribute, and earn from open-source and proprietary code in a decentralized ecosystem.',
  },
  {
    icon: TrendingUp,
    title: 'Investors',
    description: 'Co-own AI projects, IP portfolios, and decentralized ventures with transparent governance.',
  },
  {
    icon: Palette,
    title: 'Creators',
    description: 'Tokenize your art, content, and IP while retaining control and earning ongoing royalties.',
  },
  {
    icon: Briefcase,
    title: 'Entrepreneurs',
    description: 'Launch ventures, access capital, and scale innovation through DAO-backed infrastructure.',
  },
];

export default function Community() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="community" className="section-container relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.1"
                style={{ color: 'var(--heading)' }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-4" style={{ color: 'var(--heading)' }}>
            THE DICE NETWORK
          </h2>
          <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Empowering creators, developers, investors, and entrepreneurs to co-own the digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <Card
                key={index}
                className={`group relative transition-smooth hover-scale ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                  transitionDuration: '0.7s'
                }}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-6">
                    <div
                      className="w-16 h-16 border-2 rounded-full flex items-center justify-center transition-all duration-500"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      <Icon size={28} className="transition-colors duration-500 animate-float-slow" style={{ color: 'var(--muted)', animationDelay: `${index * 0.5}s` }} />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold uppercase tracking-tight mb-4" style={{ color: 'var(--heading)' }}>
                    {persona.title}
                  </h3>

                  <p className="text-sm leading-relaxed font-light flex-grow" style={{ color: 'var(--muted)' }}>
                    {persona.description}
                  </p>
                </div>

                {index < personas.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px">
                    <div className="w-full h-full opacity-50" style={{ background: 'linear-gradient(to right, var(--border), transparent)' }} />
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-block">
            <div className="px-8 py-4 border rounded-lg" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-center gap-3 text-sm font-mono" style={{ color: 'var(--text)' }}>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--muted)' }} />
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--muted)', animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--muted)', animationDelay: '0.4s' }} />
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--muted)', animationDelay: '0.6s' }} />
                </div>
                <span className="uppercase tracking-wider">
                  United by Decentralization
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
