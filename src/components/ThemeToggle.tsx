import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const nextTheme = theme === 'light' ? 'dark' : 'light';
  const ariaLabel = `Switch to ${nextTheme} mode`;

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 border rounded-lg flex items-center justify-center group"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'transparent',
      }}
      aria-label={ariaLabel}
      aria-pressed={theme === 'dark'}
      title={ariaLabel}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = '2px solid currentColor';
        e.currentTarget.style.outlineOffset = '2px';
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = 'none';
      }}
    >
      <div className="relative w-5 h-5">
        <Sun
          size={20}
          style={{
            position: 'absolute',
            color: 'var(--muted)',
            opacity: theme === 'light' ? 1 : 0,
            transform: theme === 'light' ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0)',
            transition: 'opacity 350ms ease-out, transform 350ms ease-out',
          }}
        />
        <Moon
          size={20}
          style={{
            position: 'absolute',
            color: 'var(--muted)',
            opacity: theme === 'dark' ? 1 : 0,
            transform: theme === 'dark' ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0)',
            transition: 'opacity 350ms ease-out, transform 350ms ease-out',
          }}
        />
      </div>
    </button>
  );
}
