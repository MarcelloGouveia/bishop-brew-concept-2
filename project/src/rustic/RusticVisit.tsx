import { Clock, MapPin, Sofa, ShoppingBag, Wifi } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from '@/rustic/Reveal';
import { CAFE_ADDRESS, MAP_EMBED_URL, OPENING_HOURS } from '@/data/cafeInfo';

const atmosphere: { label: string; icon: LucideIcon }[] = [
  { label: 'Free Wi-Fi', icon: Wifi },
  { label: 'Cozy Seating', icon: Sofa },
  { label: 'Takeout Available', icon: ShoppingBag },
];

export default function RusticVisit() {
  return (
    <section id="rustic-visit" className="bg-espresso-800 py-20 text-cream-100 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-oak-300">Visit Us</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-cream-50 sm:text-4xl">Come pull up a chair.</h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-8 rounded-2xl bg-espresso-900/60 p-7 ring-1 ring-oak-500/30 sm:p-9">
            <div>
              <p className="flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-wider text-oak-300">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Address
              </p>
              <p className="mt-3 font-display text-2xl font-semibold text-cream-50">{CAFE_ADDRESS.street}</p>
              <p className="mt-1 font-body text-base text-cream-200">{CAFE_ADDRESS.city}</p>
            </div>

            <div>
              <p className="flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-wider text-oak-300">
                <Clock className="h-4 w-4" aria-hidden="true" />
                Opening Hours
              </p>
              <ul className="mt-4 divide-y divide-espresso-700">
                {OPENING_HOURS.map((row) => (
                  <li key={row.days} className="flex items-center justify-between gap-4 py-3 font-body text-base">
                    <span className="text-cream-200">{row.days}</span>
                    <span className="font-semibold text-cream-50">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-body text-sm font-semibold uppercase tracking-wider text-oak-300">Atmosphere</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {atmosphere.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full bg-sage-600/30 px-4 py-2 font-body text-sm font-semibold text-cream-50"
                  >
                    <Icon className="h-4 w-4 text-sage-200" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative min-h-[360px] overflow-hidden rounded-2xl ring-1 ring-oak-500/30">
            <iframe
              title="Map showing The Bishops Brew on Queen Street East, Cambridge"
              src={MAP_EMBED_URL}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
