import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 border border-basix-700 dark:border-basix-700 light:border-basix-200 rounded-lg flex items-center justify-center hover:border-basix-500 dark:hover:border-basix-500 light:hover:border-basix-400 transition-all duration-300 group hover:shadow-glow"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Moon
          size={20}
          className={`absolute inset-0 text-basix-400 dark:text-basix-400 light:text-basix-600 transition-all duration-300 ${
            theme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 rotate-90 scale-0'
          }`}
        />
        <Sun
          size={20}
          className={`absolute inset-0 text-basix-400 dark:text-basix-400 light:text-basix-600 transition-all duration-300 ${
            theme === 'light'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-0'
          }`}
        />
      </div>
    </button>
  );
}
