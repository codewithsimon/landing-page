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
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-4" style={{ color: 'var(--heading)' }}>
          IMPACT BEYOND CODE
        </h2>
        <p className="text-lg font-light max-w-3xl mx-auto" style={{ color: 'var(--muted)' }}>
          Every innovation on BASIX contributes to global sustainability, creativity, and inclusion.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
        <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="mb-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-mono uppercase tracking-wider"
              style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
            >
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
                  className="flex gap-4 p-5 border rounded-lg transition-smooth group hover-lift"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 border rounded-lg flex items-center justify-center transition-all duration-500"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      <Icon size={20} className="transition-colors duration-500" style={{ color: 'var(--muted)' }} />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-base font-semibold mb-1 transition-colors duration-500" style={{ color: 'var(--heading)' }}>
                      {area.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {area.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--muted)' }}
                  />
                ))}
              </div>
              Verified Impact Metrics
            </div>
          </div>
        </div>

        <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '0.2s' }}>
          <div className="mb-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-mono uppercase tracking-wider"
              style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
            >
              <Play size={16} />
              BeyondTheCode Series
            </div>
          </div>

          <div className="relative group cursor-pointer">
            <div
              className="aspect-video border rounded-lg overflow-hidden transition-smooth hover-lift"
              style={{
                background: 'linear-gradient(to bottom right, var(--elevated), var(--surface))',
                borderColor: 'var(--border)'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 opacity-10 rounded-full blur-xl animate-glow-pulse" style={{ backgroundColor: 'var(--heading)' }} />
                  <div
                    className="relative w-20 h-20 border-2 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                    style={{ borderColor: 'var(--heading)', color: 'var(--heading)' }}
                  >
                    <Play size={32} className="ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg), transparent, transparent)' }} />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="px-2 py-1 border rounded text-xs uppercase tracking-wider"
                    style={{
                      backgroundColor: 'var(--surface)',
                      borderColor: 'var(--border)',
                      color: 'var(--muted)'
                    }}
                  >
                    Coming Soon
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--heading)' }}>
                  Stories of Innovation & Impact
                </h3>
                <p className="text-sm font-light" style={{ color: 'var(--muted)' }}>
                  A docuseries exploring the creators, builders, and visionaries transforming the digital landscape.
                </p>
              </div>
            </div>

            <div className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur" style={{ background: 'linear-gradient(to right, var(--border), var(--muted), var(--border))' }} />
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3 text-sm">
              <div
                className="w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'var(--elevated)', borderColor: 'var(--border)' }}
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--muted)' }} />
              </div>
              <div>
                <span className="font-medium" style={{ color: 'var(--heading)' }}>Real Stories, Real People</span>
                <p className="font-light mt-1" style={{ color: 'var(--muted)' }}>
                  Documenting the human side of decentralized innovation
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <div
                className="w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'var(--elevated)', borderColor: 'var(--border)' }}
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--muted)' }} />
              </div>
              <div>
                <span className="font-medium" style={{ color: 'var(--heading)' }}>Global Reach</span>
                <p className="font-light mt-1" style={{ color: 'var(--muted)' }}>
                  Amplifying voices from every corner of the ecosystem
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
            <div className="flex items-center gap-2 text-xs font-light" style={{ color: 'var(--muted)' }}>
              <span>Stories powered by</span>
              <span className="font-mono tracking-wider" style={{ color: 'var(--text)' }}>beyondthecode.ai</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
        <div
          className="inline-flex items-center gap-4 px-6 py-3 border rounded-lg"
          style={{
            backgroundColor: 'var(--surface)',
            borderColor: 'var(--border)'
          }}
        >
          <div className="flex gap-2">
            <Leaf size={18} style={{ color: 'var(--muted)' }} />
            <Users size={18} style={{ color: 'var(--muted)' }} />
            <Heart size={18} style={{ color: 'var(--muted)' }} />
            <Globe size={18} style={{ color: 'var(--muted)' }} />
          </div>
          <span className="text-sm font-mono uppercase tracking-wider" style={{ color: 'var(--text)' }}>
            Building Tomorrow, Responsibly
          </span>
        </div>
      </div>
    </section>
  );
}
