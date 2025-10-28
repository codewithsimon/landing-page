import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { label: 'ABOUT', href: '#about' },
  { label: 'ECOSYSTEM', href: '#ecosystem' },
  { label: 'COMMUNITY', href: '#community' },
  { label: 'PARTNERS', href: '#partners' },
  { label: 'JOIN', href: '#join' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img
              src={theme === 'dark' ? '/2407_Basix-Logo_WHT.png' : '/2407_Basix-Logo_BLK.png'}
              alt="BASIX"
              className="h-8 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-wider"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--heading)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--muted)';
                }}
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
            <button className="btn-primary text-sm py-2">
              ENTER DAO
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              style={{ color: 'var(--heading)' }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className="md:hidden mt-4 py-4 border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium tracking-wider"
                  style={{ color: 'var(--muted)' }}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--heading)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--muted)';
                  }}
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
