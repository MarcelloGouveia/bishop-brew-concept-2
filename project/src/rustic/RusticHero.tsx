import { ArrowRight } from 'lucide-react';
import Reveal from '@/rustic/Reveal';

const HERO_IMAGE = 'https://images.pexels.com/photos/2067640/pexels-photo-2067640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function RusticHero() {
  return (
    <section id="rustic-top" className="relative isolate flex min-h-[88vh] items-end overflow-hidden">
      <img
        src={HERO_IMAGE}
        alt="Espresso being brewed into a cup with warm light"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-espresso-900 via-espresso-900/70 to-espresso-900/20" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8 md:pb-24">
        <Reveal>
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-oak-300">
            Queen Street East, Cambridge
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.15] text-cream-50 sm:text-5xl lg:text-6xl">
            Crafted Coffee, Community Spirit.
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg leading-[1.5] text-cream-200 sm:text-xl">
            Your cozy neighborhood spot on Queen Street East for artisan coffee, fresh pastries, and light bites.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#rustic-menu"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-oak-400 px-8 py-3.5 font-body text-base font-semibold text-espresso-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream-100"
            >
              View Menu
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#rustic-visit"
              className="inline-flex items-center justify-center rounded-full border-2 border-cream-200/80 px-8 py-3 font-body text-base font-semibold text-cream-50 transition-all duration-300 hover:bg-cream-50 hover:text-espresso-900"
            >
              Visit Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
