import { ArrowRight, MapPin } from 'lucide-react';
import BishopIcon from '@/components/BishopIcon';

const HERO_IMAGE =
  'https://images.pexels.com/photos/40175053/pexels-photo-40175053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-onyx-900 bg-chess-grid bg-[length:64px_64px]">
      <div className="absolute inset-0 bg-gradient-to-b from-onyx-900/40 via-onyx-900/80 to-onyx-900" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-500/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Queen Street East, Cambridge
          </p>

          <h1 className="font-serif text-4xl font-bold leading-[1.1] text-brie-100 sm:text-5xl lg:text-6xl">
            Your Next <span className="text-gold-400">Strategic Stop</span> for Great Coffee &amp; Food.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-[1.5] text-brie-300 sm:text-lg">
            Crafted espresso, gourmet grilled cheeses, and local bites on Queen Street East.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-onyx-900 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracotta-500 hover:text-brie-50"
            >
              Explore Menu
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#visit"
              className="inline-flex items-center justify-center rounded-full border-2 border-brie-300/70 px-7 py-3 text-sm font-semibold text-brie-100 transition-all duration-300 hover:border-gold-400 hover:text-gold-400"
            >
              Find Us
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-3 rounded-[2rem] border border-gold-500/30" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl bg-onyx-800 shadow-2xl shadow-black/40">
            <img
              src={HERO_IMAGE}
              alt="Steaming espresso being poured into a black cup"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-900/80 via-transparent to-transparent" aria-hidden="true" />
          </div>

          <div className="absolute -bottom-6 -left-4 flex items-center gap-4 rounded-2xl bg-cheddar-500 px-5 py-4 text-onyx-900 shadow-xl sm:-left-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-onyx-900">
              <BishopIcon className="h-8 w-8 text-gold-400" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold leading-tight">The Bishop's Move</p>
              <p className="text-sm font-medium text-onyx-800">Espresso and a melt, every time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
