import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-basix-black/80 dark:bg-basix-black/80 light:bg-basix-white/80 backdrop-blur-md border-b border-basix-800 dark:border-basix-800 light:border-basix-200 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-basix-white dark:text-basix-white light:text-basix-black transition-colors duration-400">
            BASIX<span className="text-basix-400 dark:text-basix-400 light:text-basix-600">.</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-wider text-basix-300 dark:text-basix-300 light:text-basix-600 hover:text-basix-white dark:hover:text-basix-white light:hover:text-basix-black transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
            <button className="btn-primary text-sm py-2 transition-colors duration-400">
              ENTER DAO
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              className="text-basix-white dark:text-basix-white light:text-basix-black transition-colors duration-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-basix-800 dark:border-basix-800 light:border-basix-200 transition-colors duration-400">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium tracking-wider text-basix-300 dark:text-basix-300 light:text-basix-600 hover:text-basix-white dark:hover:text-basix-white light:hover:text-basix-black transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="btn-primary text-sm py-2 w-full transition-colors duration-400">
                ENTER DAO
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
