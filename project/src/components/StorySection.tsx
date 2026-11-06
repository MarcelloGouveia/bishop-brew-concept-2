import { Coffee, Sandwich, Users } from 'lucide-react';
import DiagonalDivider from '@/components/DiagonalDivider';

const STORY_IMAGE =
  'https://images.pexels.com/photos/17104305/pexels-photo-17104305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const pillars = [
  {
    icon: Coffee,
    title: 'Opening Gambit',
    body: 'Precise espresso and slow-steeped brews that set the tone for every visit.',
  },
  {
    icon: Sandwich,
    title: 'Midgame Comfort',
    body: 'Gourmet grilled cheeses and savory bites that turn a quick stop into a long conversation.',
  },
  {
    icon: Users,
    title: 'Community Match-Ups',
    body: 'A warm, unhurried room where neighbours gather, linger, and make their next move.',
  },
];

export default function StorySection() {
  return (
    <section id="story" className="bg-brie-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -right-3 -top-3 h-full w-full rounded-3xl bg-cheddar-200" aria-hidden="true" />
            <img
              src={STORY_IMAGE}
              alt="Warm, inviting cafe interior with hanging lamps and guests relaxing"
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
              loading="lazy"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-500">Our Story</p>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
              Where great coffee meets cozy comfort food.
            </h2>
            <p className="mt-5 text-base leading-[1.5] text-onyx-600 sm:text-lg">
              The Bishops Brew is a neighbourhood cafe on Queen Street East with one simple strategy: make every
              visit feel like a well-played move. Pull up a stool, order a crafted espresso, and let the grilled
              cheese do the rest.
            </p>

            <ul className="mt-10 space-y-6">
              {pillars.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-onyx-900 text-gold-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-[1.5] text-onyx-600">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
        <DiagonalDivider />
      </div>
    </section>
  );
}
