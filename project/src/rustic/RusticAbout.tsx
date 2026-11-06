import { Heart, Leaf, Users } from 'lucide-react';
import Reveal from '@/rustic/Reveal';

const ABOUT_IMAGE = 'https://images.pexels.com/photos/17104305/pexels-photo-17104305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const values = [
  { icon: Heart, label: 'Handcrafted beverages' },
  { icon: Leaf, label: 'Locally sourced ingredients' },
  { icon: Users, label: 'A gathering place for all' },
];

export default function RusticAbout() {
  return (
    <section id="rustic-about" className="bg-cream-100 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <img
            src={ABOUT_IMAGE}
            alt="Guests relaxing in a warmly lit cafe"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg shadow-espresso-900/10"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={150}>
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-sage-600">About Us</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-espresso-900 sm:text-4xl">
            A neighbourhood table for locals and visitors alike.
          </h2>
          <p className="mt-6 font-body text-lg leading-[1.5] text-espresso-600">
            The Bishops Brew is an independent coffee shop on Queen Street East in Cambridge. Every cup is handcrafted
            by our baristas, and we work with local suppliers wherever we can, so what you taste has a story behind it.
          </p>
          <p className="mt-4 font-body text-lg leading-[1.5] text-espresso-600">
            Come in for a slow morning, a quick lunch, or an afternoon with friends. The door is always open to
            neighbours and visitors alike.
          </p>

          <ul className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {values.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-full bg-sage-200/60 px-5 py-2.5 font-body text-sm font-semibold text-espresso-800"
              >
                <Icon className="h-4 w-4 text-sage-700" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
