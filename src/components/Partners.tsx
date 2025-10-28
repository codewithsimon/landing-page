import { Hexagon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const partners = [
  { name: 'Cardano', position: 'top-left', isLogo: true, logoSrc: '/image.png' },
  { name: 'SingularityNET', position: 'top-center', isLogo: true, logoSrc: '/SingularityNET.png' },
  { name: 'ASI', position: 'top-right', isLogo: true, logoSrc: '/1724863913-asi-featured-removebg-preview.png' },
  { name: 'Fetch.ai', position: 'middle-left', isLogo: true, logoSrc: '/image copy.png' },
  { name: 'Filecoin', position: 'middle-center' },
  { name: 'DeepFunding', position: 'middle-right' },
  { name: 'Cudos', position: 'bottom-left', isLogo: true, logoSrc: '/image (8).png' },
  { name: 'Incantio', position: 'bottom-right' },
];

const technologies = [
  { name: 'MeTTa Language', description: 'Advanced AI reasoning' },
  { name: 'KRNL Contracts', description: 'Smart contract layer' },
  { name: 'Cardano Blockchain', description: 'Base protocol' },
];

export default function Partners() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="partners" className="section-container relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="relative w-[600px] h-[600px]">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border rounded-full animate-orbit-pulse"
              style={{
                borderColor: 'var(--heading)',
                animationDelay: `${i * 0.8}s`,
                transform: `scale(${0.4 + i * 0.3})`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-4" style={{ color: 'var(--heading)' }}>
            POWERED BY A DECENTRALIZED STACK
          </h2>
          <p className="text-lg font-light max-w-3xl mx-auto" style={{ color: 'var(--muted)' }}>
            Built on MeTTa Language, KRNL smart contracts, and partnered with leaders in AI and blockchain.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`group flex items-center justify-center p-6 border rounded-lg transition-smooth hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  borderColor: 'var(--border)',
                  transitionDelay: `${index * 0.08}s`,
                  transitionDuration: '0.6s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="text-center">
                  <div className="mb-3 flex justify-center">
                    {partner.isLogo ? (
                      <img
                        src={partner.logoSrc}
                        alt={partner.name}
                        className="w-auto h-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    ) : (
                      <Hexagon
                        size={32}
                        className="transition-colors duration-500 animate-float-slow"
                        style={{ color: 'var(--muted)', animationDelay: `${index * 0.4}s` }}
                      />
                    )}
                  </div>
                  <div className="text-sm font-medium uppercase tracking-wide" style={{ color: 'var(--muted)' }}>
                    {partner.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-12" style={{ borderColor: 'var(--border)' }}>
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold uppercase tracking-tight" style={{ color: 'var(--text)' }}>
              Core Technologies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="relative p-6 border rounded-lg group transition-all duration-300"
                style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
              >
                <div
                  className="absolute top-0 left-6 -mt-3 px-3 py-1 border rounded text-xs uppercase tracking-wider"
                  style={{
                    backgroundColor: 'var(--bg)',
                    borderColor: 'var(--border)',
                    color: 'var(--muted)'
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="text-center pt-2">
                  <h4 className="text-base font-semibold mb-2 transition-colors duration-300" style={{ color: 'var(--heading)' }}>
                    {tech.name}
                  </h4>
                  <p className="text-sm font-light" style={{ color: 'var(--muted)' }}>
                    {tech.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 border rounded-lg text-sm font-mono" style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
            <div className="flex gap-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-4 rounded-full animate-pulse"
                  style={{ backgroundColor: 'var(--muted)', animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <span className="uppercase tracking-wider">
              Interoperable Ecosystem
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
