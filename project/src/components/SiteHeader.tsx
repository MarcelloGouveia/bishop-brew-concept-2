import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import BishopIcon from '@/components/BishopIcon';

const navLinks = [
  { href: '#story', label: 'Our Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#visit', label: 'Visit' },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold-500/20 bg-onyx-900/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <BishopIcon className="h-7 w-7 text-gold-400 transition-transform duration-300 group-hover:-rotate-6" />
          <span className="font-serif text-lg font-bold tracking-tight text-brie-100">
            The Bishops Brew
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brie-200 transition-colors duration-200 hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#menu"
            className="rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-onyx-900 transition-colors duration-200 hover:bg-cheddar-500"
          >
            Explore Menu
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-brie-100 transition-colors hover:bg-onyx-700 md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-gold-500/20 bg-onyx-900 px-5 pb-6 pt-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block border-b border-onyx-700 py-4 text-base font-medium text-brie-100 hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#menu"
            onClick={() => setIsOpen(false)}
            className="mt-5 block rounded-full bg-gold-500 px-5 py-3 text-center text-sm font-semibold text-onyx-900 hover:bg-cheddar-500"
          >
            Explore Menu
          </a>
        </nav>
      )}
    </header>
  );
}
