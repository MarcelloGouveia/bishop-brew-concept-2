import { Coffee, Facebook, Instagram } from 'lucide-react';
import { CAFE_ADDRESS } from '@/data/cafeInfo';
import BishopIcon from '@/components/BishopIcon';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/thebishopsbrew/', icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/p/The-Bishops-Brew-Cafe-61572920840098/', icon: Facebook },
];

export default function RusticFooter() {
  return (
    <footer className="bg-espresso-900 text-cream-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#rustic-top" className="flex items-center gap-2.5 text-cream-50">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-600">
              <BishopIcon className="w-5 h-5" />
            </span>
            <span className="font-display text-lg font-semibold">The Bishops Brew Cafe</span>
          </a>
          <p className="mt-3 font-body text-sm text-cream-200/90">
            {CAFE_ADDRESS.street}, {CAFE_ADDRESS.city}
          </p>
        </div>

        <ul className="flex gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-oak-500/60 text-cream-50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-oak-400 hover:text-espresso-900"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-espresso-700">
        <p className="mx-auto max-w-6xl px-5 py-6 font-body text-xs text-cream-200/80 sm:px-8">
          &copy; {new Date().getFullYear()} The Bishops Brew Cafe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
