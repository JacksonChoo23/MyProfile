import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navItems = ['About', 'Experience', 'Projects', 'Skills'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        scrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className={cn(
          'mx-auto flex items-center justify-between rounded-full border px-4 md:px-6 py-3 transition-all duration-500',
          scrolled
            ? 'max-w-4xl glass border-white/40 dark:border-white/10'
            : 'max-w-5xl bg-white/50 dark:bg-black/30 border-white/20 dark:border-white/10 backdrop-blur-xl'
        )}>
          <a href="#" className="font-semibold text-base md:text-lg tracking-tight">
            CWC<span className="text-neutral-400 dark:text-neutral-500">.dev</span>
          </a>

          <nav className="hidden md:flex items-center space-x-2 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3 py-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/10 transition-all"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden px-3 py-2 rounded-full border border-neutral-300/70 dark:border-neutral-700 text-xs font-medium"
              aria-label="Toggle Menu"
            >
              Menu
            </button>
          </div>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="md:hidden mt-3 glass rounded-2xl p-3 grid grid-cols-2 gap-2"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-xl text-sm text-center text-neutral-600 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
