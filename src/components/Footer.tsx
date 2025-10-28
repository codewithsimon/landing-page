import { Github, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-basix-800 bg-basix-900/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold tracking-tighter mb-4">
              BASIX<span className="text-basix-400">.</span>
            </div>
            <p className="text-basix-400 text-sm leading-relaxed max-w-md">
              Beneficial Artificial Super Intelligence X Market. A decentralized platform where creators, developers, investors, and entrepreneurs co-own and monetize AI, IP, and innovation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">ECOSYSTEM</h4>
            <ul className="space-y-2 text-sm text-basix-400">
              <li><a href="#marketplace" className="hover:text-basix-white transition-colors">Marketplace</a></li>
              <li><a href="#governance" className="hover:text-basix-white transition-colors">Governance</a></li>
              <li><a href="#academy" className="hover:text-basix-white transition-colors">Academy</a></li>
              <li><a href="#tokenization" className="hover:text-basix-white transition-colors">Tokenization</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">CONNECT</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-basix-400 hover:text-basix-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-basix-400 hover:text-basix-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-basix-400 hover:text-basix-white transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-basix-800 flex flex-col md:flex-row justify-between items-center text-sm text-basix-500">
          <p>© 2025 BASIX Market DAO. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-basix-white transition-colors">Terms</a>
            <a href="#" className="hover:text-basix-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-basix-white transition-colors">Documentation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
