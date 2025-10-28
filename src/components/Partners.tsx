import { Hexagon } from 'lucide-react';

const partners = [
  { name: 'Cardano', position: 'top-left' },
  { name: 'SingularityNET', position: 'top-center' },
  { name: 'ASI', position: 'top-right' },
  { name: 'Fetch.ai', position: 'middle-left' },
  { name: 'Filecoin', position: 'middle-center' },
  { name: 'DeepFunding', position: 'middle-right' },
  { name: 'Cudos', position: 'bottom-left' },
  { name: 'Incantio', position: 'bottom-right' },
];

const technologies = [
  { name: 'MeTTa Language', description: 'Advanced AI reasoning' },
  { name: 'KRNL Contracts', description: 'Smart contract layer' },
  { name: 'Cardano Blockchain', description: 'Base protocol' },
];

export default function Partners() {
  return (
    <section id="partners" className="section-container relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="relative w-[600px] h-[600px]">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border border-basix-white rounded-full animate-orbit-pulse"
              style={{
                animationDelay: `${i * 0.8}s`,
                transform: `scale(${0.4 + i * 0.3})`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-4">
            POWERED BY A DECENTRALIZED STACK
          </h2>
          <p className="text-lg text-basix-400 font-light max-w-3xl mx-auto">
            Built on MeTTa Language, KRNL smart contracts, and partnered with leaders in AI and blockchain.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-6 border border-basix-800 rounded-lg hover:border-basix-600 transition-all duration-300 hover:shadow-glow"
              >
                <div className="text-center">
                  <div className="mb-3 flex justify-center">
                    <Hexagon
                      size={32}
                      className="text-basix-600 group-hover:text-basix-400 transition-colors duration-300"
                    />
                  </div>
                  <div className="text-sm font-medium text-basix-400 group-hover:text-basix-white transition-colors duration-300 uppercase tracking-wide">
                    {partner.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-basix-800 pt-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold uppercase tracking-tight text-basix-300">
              Core Technologies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="relative p-6 border border-basix-800 rounded-lg group hover:border-basix-600 transition-all duration-300"
              >
                <div className="absolute top-0 left-6 -mt-3 px-3 py-1 bg-basix-black border border-basix-700 rounded text-xs text-basix-500 uppercase tracking-wider">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="text-center pt-2">
                  <h4 className="text-base font-semibold mb-2 group-hover:text-basix-white transition-colors duration-300">
                    {tech.name}
                  </h4>
                  <p className="text-sm text-basix-500 font-light">
                    {tech.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-basix-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-basix-700 rounded-lg text-sm font-mono text-basix-400">
            <div className="flex gap-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-4 bg-basix-600 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
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
