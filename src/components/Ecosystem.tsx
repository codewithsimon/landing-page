import { Store, Users, Brain, Hexagon, GraduationCap, Leaf } from 'lucide-react';
import Card from './Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const modules = [
  {
    icon: Store,
    title: 'Decentralized Marketplace',
    description: 'Buy, sell, and co-create digital assets, code, and content.',
  },
  {
    icon: Users,
    title: 'DAO Like Governance',
    description: 'Transparent voting, proposals, and decentralized funding.',
  },
  {
    icon: Brain,
    title: 'AI + AGI Tools',
    description: 'AIgents and MeTTa-powered creation and royalty automation.',
  },
  {
    icon: Hexagon,
    title: 'NFT + Tokenization',
    description: 'Mint, fractionalize, and manage IP ownership.',
  },
  {
    icon: GraduationCap,
    title: 'Academy + Onboarding',
    description: 'On-chain education and verified credentials.',
  },
  {
    icon: Leaf,
    title: 'ESG + SDG Alignment',
    description: 'Incentives tied to environmental and social impact.',
  },
];

export default function Ecosystem() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="ecosystem" className="section-container" ref={ref as React.RefObject<HTMLElement>}>
      <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-4" style={{ color: 'var(--heading)' }}>
          ECOSYSTEM MODULES
        </h2>
        <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
          A complete infrastructure for decentralized innovation, governance, and impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => {
          const Icon = module.icon;
          return (
            <Card
              key={index}
              className={`group transition-smooth hover-scale ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                transitionDelay: `${index * 0.1}s`,
                transitionDuration: '0.7s'
              }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="w-12 h-12 border rounded-lg flex items-center justify-center transition-all duration-500" style={{ borderColor: 'var(--border)' }}>
                    <Icon size={24} className="transition-colors duration-500 animate-float-slow" style={{ color: 'var(--muted)', animationDelay: `${index * 0.3}s` }} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold uppercase tracking-tight mb-3" style={{ color: 'var(--heading)' }}>
                  {module.title}
                </h3>

                <p className="text-sm leading-relaxed font-light flex-grow" style={{ color: 'var(--muted)' }}>
                  {module.description}
                </p>

                <div className="mt-6 pt-4 border-t transition-colors duration-500" style={{ borderColor: 'var(--border)' }}>
                  <div className="text-xs uppercase tracking-wider font-medium" style={{ color: 'var(--muted)' }}>
                    Learn More →
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 border rounded-lg text-sm font-mono" style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--muted)' }} />
          All modules interoperate seamlessly
        </div>
      </div>
    </section>
  );
}
