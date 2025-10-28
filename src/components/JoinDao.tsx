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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-basix-900 border border-basix-700 rounded-full text-xs font-mono text-basix-400 uppercase tracking-wider">
              <div className="w-2 h-2 rounded-full bg-basix-500 animate-pulse" />
              Open for Onboarding
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase mb-6 leading-tight">
            ONBOARD. CO-CREATE.
            <br />
            <span className="text-gradient">OWN YOUR FUTURE.</span>
          </h2>

          <p className="text-lg md:text-xl text-basix-400 font-light max-w-2xl mx-auto leading-relaxed">
            Join a global movement redefining how AI and IP are owned, governed, and shared.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                className={`group relative p-6 border rounded-lg transition-smooth hover-lift text-left ${
                  action.primary
                    ? 'bg-basix-white text-basix-black border-basix-white hover:shadow-glow-lg'
                    : 'bg-basix-black text-basix-white border-basix-700 hover:border-basix-white hover:shadow-glow'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  transitionDelay: `${0.3 + index * 0.1}s`,
                  transitionDuration: '0.6s'
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                      action.primary
                        ? 'bg-basix-black text-basix-white'
                        : 'bg-basix-900 border border-basix-700 text-basix-400 group-hover:border-basix-white group-hover:text-basix-white'
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <ArrowRight
                    size={20}
                    className={`transition-transform duration-500 group-hover:translate-x-1 ${
                      action.primary ? 'text-basix-black' : 'text-basix-600 group-hover:text-basix-white'
                    }`}
                  />
                </div>

                <h3 className="text-xl font-semibold uppercase tracking-tight mb-2">
                  {action.title}
                </h3>

                <p
                  className={`text-sm font-light leading-relaxed ${
                    action.primary ? 'text-basix-800' : 'text-basix-500 group-hover:text-basix-400'
                  }`}
                >
                  {action.description}
                </p>

                {action.primary && (
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-basix-white via-basix-200 to-basix-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                )}
              </button>
            );
          })}
        </div>

        <div className="border-t border-basix-800 pt-8">
          <div className="text-center space-y-6">
            <div>
              <div className="text-sm text-basix-500 uppercase tracking-wider mb-3 font-mono">
                Get in Touch
              </div>
              <a
                href="mailto:invest@basix.market"
                className="inline-flex items-center gap-3 text-lg text-basix-white hover:text-basix-400 transition-colors duration-300 group"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="font-mono">invest@basix.market</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 text-xs text-basix-600 font-mono uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-basix-600" />
                <span>Decentralized</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-basix-600" />
                <span>Community-Owned</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-basix-600" />
                <span>Transparent</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-basix-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-sm text-basix-500 uppercase tracking-wider">Community Members</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm text-basix-500 uppercase tracking-wider">Active Projects</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold mb-2">∞</div>
              <div className="text-sm text-basix-500 uppercase tracking-wider">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
