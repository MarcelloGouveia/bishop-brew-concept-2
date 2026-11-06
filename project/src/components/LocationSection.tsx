import { Clock, Laptop, MapPin, ShoppingBag, UtensilsCrossed, Wifi } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import DiagonalDivider from '@/components/DiagonalDivider';
import { MAP_EMBED_URL, OPENING_HOURS } from '@/data/cafeInfo';

const amenities: { label: string; icon: LucideIcon }[] = [
  { label: 'Free Wi-Fi', icon: Wifi },
  { label: 'Dine-in', icon: UtensilsCrossed },
  { label: 'Takeout', icon: ShoppingBag },
];

export default function LocationSection() {
  return (
    <section id="visit" className="bg-brie-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-500">Location &amp; Hours</p>
          <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">Find Your Square</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <div className="flex flex-col gap-6 rounded-3xl border-2 border-gold-500/60 bg-onyx-900 p-7 text-brie-100 shadow-xl sm:p-9 lg:col-span-2">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold-400">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Address
              </p>
              <p className="mt-3 font-serif text-2xl font-bold text-brie-50">Queen Street East</p>
              <p className="mt-1 text-base text-brie-300">Cambridge, Ontario</p>
            </div>

            <div className="border-t border-onyx-700 pt-6">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold-400">
                <Clock className="h-4 w-4" aria-hidden="true" />
                Opening Hours
              </p>
              <ul className="mt-4 space-y-3">
                {OPENING_HOURS.map((row) => (
                  <li key={row.days} className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-brie-300">{row.days}</span>
                    <span className="font-semibold text-brie-50">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-onyx-700 pt-6">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold-400">
                <Laptop className="h-4 w-4" aria-hidden="true" />
                Amenities
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {amenities.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 px-4 py-2 text-sm font-medium text-brie-100 transition-colors hover:bg-gold-500 hover:text-onyx-900"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border-2 border-onyx-900 shadow-xl lg:col-span-3">
            <iframe
              title="Map showing The Bishops Brew Cafe on Queen Street East, Cambridge"
              src={MAP_EMBED_URL}
              className="absolute inset-0 h-full w-full border-0 [filter:grayscale(1)_invert(0.92)_contrast(1.05)_sepia(0.35)]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx-900/30 to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-onyx-900 shadow-lg ring-4 ring-onyx-900/80">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
        <DiagonalDivider />
      </div>
    </section>
  );
}
