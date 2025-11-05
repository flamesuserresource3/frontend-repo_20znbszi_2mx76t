import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/70 dark:bg-neutral-900/70 border border-white/30 dark:border-white/10 shadow-sm rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400" />
              <span className="font-semibold text-neutral-900 dark:text-white">Flames Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-neutral-700 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="mailto:you@example.com" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/40 dark:border-white/10 px-4 py-3 sm:px-6">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-2 rounded-lg text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 px-2"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-3 flex items-center gap-2">
                <a href="mailto:you@example.com" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
