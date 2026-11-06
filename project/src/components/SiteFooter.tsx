import { Facebook, Instagram, MapPin } from 'lucide-react';
import BishopIcon from '@/components/BishopIcon';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: Facebook },
];

export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-gold-500 bg-onyx-900 text-brie-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3 md:items-start">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <BishopIcon className="h-7 w-7 text-gold-400" />
            <span className="font-serif text-lg font-bold text-brie-100">The Bishops Brew Cafe</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-[1.5]">
            Great coffee and gourmet comfort food on Queen Street East, Cambridge.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Contact</p>
          <p className="mt-4 flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-gold-400" aria-hidden="true" />
            Queen Street East, Cambridge, ON
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Follow Us</p>
          <ul className="mt-4 flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/40 text-brie-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400 hover:bg-gold-500 hover:text-onyx-900"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-onyx-700">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-brie-400 sm:px-8">
          &copy; {new Date().getFullYear()} The Bishops Brew Cafe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
