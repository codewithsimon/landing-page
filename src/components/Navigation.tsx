import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'ABOUT', href: '#about' },
  { label: 'ECOSYSTEM', href: '#ecosystem' },
  { label: 'COMMUNITY', href: '#community' },
  { label: 'PARTNERS', href: '#partners' },
  { label: 'JOIN', href: '#join' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-basix-black/80 backdrop-blur-md border-b border-basix-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">
            BASIX<span className="text-basix-400">.</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-wider text-basix-300 hover:text-basix-white transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <button className="btn-primary text-sm py-2">
              ENTER DAO
            </button>
          </div>

          <button
            className="md:hidden text-basix-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-basix-800">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium tracking-wider text-basix-300 hover:text-basix-white transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="btn-primary text-sm py-2 w-full">
                ENTER DAO
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
