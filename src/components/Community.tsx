import { Code, TrendingUp, Palette, Briefcase } from 'lucide-react';
import Card from './Card';

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
  return (
    <section id="community" className="section-container relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                opacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-4">
            THE DICE NETWORK
          </h2>
          <p className="text-lg text-basix-400 font-light max-w-2xl mx-auto">
            Empowering creators, developers, investors, and entrepreneurs to co-own the digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <Card key={index} className="group relative">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-6">
                    <div className="w-16 h-16 border-2 border-basix-600 rounded-full flex items-center justify-center group-hover:border-basix-400 group-hover:shadow-glow transition-all duration-300">
                      <Icon size={28} className="text-basix-400 group-hover:text-basix-white transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold uppercase tracking-tight mb-4">
                    {persona.title}
                  </h3>

                  <p className="text-basix-400 text-sm leading-relaxed font-light flex-grow">
                    {persona.description}
                  </p>
                </div>

                {index < personas.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px">
                    <div className="w-full h-full bg-gradient-to-r from-basix-600 via-basix-500 to-transparent opacity-50" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-block">
            <div className="px-8 py-4 border border-basix-700 rounded-lg">
              <div className="flex items-center gap-3 text-sm font-mono text-basix-300">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-basix-500 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-basix-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 rounded-full bg-basix-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <div className="w-2 h-2 rounded-full bg-basix-500 animate-pulse" style={{ animationDelay: '0.6s' }} />
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
