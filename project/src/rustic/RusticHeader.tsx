import { useState } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#rustic-about', label: 'About' },
  { href: '#rustic-menu', label: 'Menu' },
  { href: '#rustic-visit', label: 'Visit' },
];

export default function RusticHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-espresso-100 bg-cream-100/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#rustic-top" className="flex items-center gap-2.5 text-espresso-800">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-600 text-cream-50">
            <Coffee className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-semibold">The Bishops Brew</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-base font-semibold text-espresso-700 transition-colors duration-200 hover:text-sage-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-espresso-800 transition-colors hover:bg-espresso-100 md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-espresso-100 bg-cream-100 px-5 pb-5 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block border-b border-espresso-100 py-4 font-body text-base font-semibold text-espresso-800"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
