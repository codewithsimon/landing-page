import { ArrowRight, Users, Palette, TrendingUp, Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const actions = [
  {
    icon: Users,
    title: 'Enter DAO',
    description: 'Join governance and shape the future',
    primary: true,
  },
  {
    icon: Palette,
    title: 'Become a Creator',
    description: 'Build, tokenize, and earn from your work',
    primary: false,
  },
  {
    icon: TrendingUp,
    title: 'Invest',
    description: 'Co-own the decentralized AI economy',
    primary: false,
  },
];

export default function JoinDao() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="join" className="section-container relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 grid-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 border rounded-full text-xs font-mono uppercase tracking-wider"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--muted)'
              }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--muted)' }} />
              Open for Onboarding
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase mb-6 leading-tight" style={{ color: 'var(--heading)' }}>
            ONBOARD. CO-CREATE.
            <br />
            <span className="text-gradient">OWN YOUR FUTURE.</span>
          </h2>

          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted)' }}>
            Join a global movement redefining how AI and IP are owned, governed, and shared.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                className={`btn-${action.primary ? 'primary' : 'secondary'} group relative p-6 rounded-lg text-left ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  transitionDelay: `${0.3 + index * 0.1}s`,
                  transitionDuration: '0.6s'
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  />
                </div>

                <h3 className="text-xl font-semibold uppercase tracking-tight mb-2">
                  {action.title}
                </h3>

                <p className="text-sm font-light leading-relaxed" style={{ opacity: 0.8 }}>
                  {action.description}
                </p>
              </button>
            );
          })}
        </div>

        <div className="border-t pt-8" style={{ borderColor: 'var(--border)' }}>
          <div className="text-center space-y-6">
            <div>
              <div className="text-sm uppercase tracking-wider mb-3 font-mono" style={{ color: 'var(--muted)' }}>
                Get in Touch
              </div>
              <a
                href="mailto:investor@basix.market"
                className="inline-flex items-center gap-3 text-lg transition-colors duration-300 group font-mono"
                style={{ color: 'var(--heading)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--muted)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--heading)';
                }}
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>investor@basix.market</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--muted)' }} />
                <span>Decentralized</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--muted)' }} />
                <span>Community-Owned</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--muted)' }} />
                <span>Transparent</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--heading)' }}>1000+</div>
              <div className="text-sm uppercase tracking-wider" style={{ color: 'var(--muted)' }}>Community Members</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--heading)' }}>50+</div>
              <div className="text-sm uppercase tracking-wider" style={{ color: 'var(--muted)' }}>Active Projects</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--heading)' }}>∞</div>
              <div className="text-sm uppercase tracking-wider" style={{ color: 'var(--muted)' }}>Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
