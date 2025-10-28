import { Leaf, Users, Heart, Globe, Play, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const impactAreas = [
  {
    icon: Leaf,
    title: 'Environmental',
    description: 'Carbon-neutral infrastructure and green incentives',
  },
  {
    icon: Users,
    title: 'Social Equity',
    description: 'Fair access to tools and ownership for all creators',
  },
  {
    icon: Heart,
    title: 'Community First',
    description: 'Governance built on transparency and inclusion',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Aligned with UN Sustainable Development Goals',
  },
];

export default function Impact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="impact" className="section-container" ref={ref as React.RefObject<HTMLElement>}>
      <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-4">
          IMPACT BEYOND CODE
        </h2>
        <p className="text-lg text-basix-400 font-light max-w-3xl mx-auto">
          Every innovation on BASIX contributes to global sustainability, creativity, and inclusion.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
        <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-basix-700 rounded-full text-sm font-mono text-basix-400 uppercase tracking-wider">
              <Sparkles size={16} />
              ESG + SDG Alignment
            </div>
          </div>

          <div className="space-y-4">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 p-5 border border-basix-800 rounded-lg hover:border-basix-600 transition-smooth group hover-lift"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border border-basix-700 rounded-lg flex items-center justify-center group-hover:border-basix-500 group-hover:shadow-glow transition-all duration-500">
                      <Icon size={20} className="text-basix-500 group-hover:text-basix-white transition-colors duration-500" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-base font-semibold mb-1 group-hover:text-basix-white transition-colors duration-500">
                      {area.title}
                    </h3>
                    <p className="text-sm text-basix-500 font-light leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4">
            <div className="flex items-center gap-2 text-xs text-basix-500 font-mono uppercase tracking-wider">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-basix-600"
                  />
                ))}
              </div>
              Verified Impact Metrics
            </div>
          </div>
        </div>

        <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '0.2s' }}>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-basix-700 rounded-full text-sm font-mono text-basix-400 uppercase tracking-wider">
              <Play size={16} />
              BeyondTheCode Series
            </div>
          </div>

          <div className="relative group cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-basix-900 to-basix-black border border-basix-700 rounded-lg overflow-hidden group-hover:border-basix-500 transition-smooth hover-lift">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-basix-white opacity-10 rounded-full blur-xl animate-glow-pulse" />
                  <div className="relative w-20 h-20 border-2 border-basix-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Play size={32} className="text-basix-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-basix-black via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="px-2 py-1 bg-basix-black/80 border border-basix-700 rounded text-xs text-basix-400 uppercase tracking-wider">
                    Coming Soon
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Stories of Innovation & Impact
                </h3>
                <p className="text-sm text-basix-400 font-light">
                  A docuseries exploring the creators, builders, and visionaries transforming the digital landscape.
                </p>
              </div>
            </div>

            <div className="absolute -inset-1 bg-gradient-to-r from-basix-700 via-basix-600 to-basix-700 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur" />
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3 text-sm">
              <div className="w-6 h-6 rounded-full bg-basix-900 border border-basix-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-basix-500" />
              </div>
              <div>
                <span className="text-basix-white font-medium">Real Stories, Real People</span>
                <p className="text-basix-500 font-light mt-1">
                  Documenting the human side of decentralized innovation
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <div className="w-6 h-6 rounded-full bg-basix-900 border border-basix-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-basix-500" />
              </div>
              <div>
                <span className="text-basix-white font-medium">Global Reach</span>
                <p className="text-basix-500 font-light mt-1">
                  Amplifying voices from every corner of the ecosystem
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-basix-800">
            <div className="flex items-center gap-2 text-xs text-basix-500 font-light">
              <span>Stories powered by</span>
              <span className="font-mono text-basix-400 tracking-wider">beyondthecode.ai</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-basix-800">
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-basix-900/50 border border-basix-700 rounded-lg">
          <div className="flex gap-2">
            <Leaf size={18} className="text-basix-500" />
            <Users size={18} className="text-basix-500" />
            <Heart size={18} className="text-basix-500" />
            <Globe size={18} className="text-basix-500" />
          </div>
          <span className="text-sm font-mono text-basix-400 uppercase tracking-wider">
            Building Tomorrow, Responsibly
          </span>
        </div>
      </div>
    </section>
  );
}
