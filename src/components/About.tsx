import AboutVisual from './AboutVisual';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-container" ref={ref as React.RefObject<HTMLElement>}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
              ABOUT BASIX
            </h2>
            <p className="text-lg text-basix-400 font-light">
              Redefining ownership in the age of intelligence.
            </p>
          </div>

          <div className="h-px w-16 bg-gradient-to-r from-basix-white to-transparent" />

          <p className="text-basix-300 leading-relaxed text-lg font-light">
            BASIX Market DAO empowers Developers, Creators, Investors, and Entrepreneurs (DICE) to co-own, govern, and monetize AI, IP, and innovation. By merging advanced AI, blockchain, and decentralized governance, BASIX builds the infrastructure for borderless, fair, and sustainable digital economies.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-8">
            <div>
              <div className="text-2xl font-bold mb-1">DICE</div>
              <div className="text-sm text-basix-400 uppercase tracking-wide">Community Model</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">WEB3</div>
              <div className="text-sm text-basix-400 uppercase tracking-wide">Native Platform</div>
            </div>
          </div>
        </div>

        <div className={`order-first lg:order-last transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '0.2s' }}>
          <AboutVisual />
        </div>
      </div>
    </section>
  );
}
