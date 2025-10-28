import { Store, Users, Brain, Hexagon, GraduationCap, Leaf } from 'lucide-react';
import Card from './Card';

const modules = [
  {
    icon: Store,
    title: 'Decentralized Marketplace',
    description: 'Buy, sell, and co-create digital assets, code, and content.',
  },
  {
    icon: Users,
    title: 'DAO Governance',
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
  return (
    <section id="ecosystem" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-4">
          ECOSYSTEM MODULES
        </h2>
        <p className="text-lg text-basix-400 font-light max-w-2xl mx-auto">
          A complete infrastructure for decentralized innovation, governance, and impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => {
          const Icon = module.icon;
          return (
            <Card key={index} className="group">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="w-12 h-12 border border-basix-600 rounded-lg flex items-center justify-center group-hover:border-basix-400 transition-colors duration-300">
                    <Icon size={24} className="text-basix-400 group-hover:text-basix-white transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold uppercase tracking-tight mb-3">
                  {module.title}
                </h3>

                <p className="text-basix-400 text-sm leading-relaxed font-light flex-grow">
                  {module.description}
                </p>

                <div className="mt-6 pt-4 border-t border-basix-800 group-hover:border-basix-600 transition-colors duration-300">
                  <div className="text-xs text-basix-500 uppercase tracking-wider font-medium">
                    Learn More →
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 border border-basix-700 rounded-lg text-sm font-mono text-basix-400">
          <div className="w-2 h-2 rounded-full bg-basix-500 animate-pulse" />
          All modules interoperate seamlessly
        </div>
      </div>
    </section>
  );
}
