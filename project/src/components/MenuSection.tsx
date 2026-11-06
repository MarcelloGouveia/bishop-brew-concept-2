import { Croissant, Coffee, Sandwich } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type MenuItem = {
  name: string;
  price: string;
  description: string;
};

type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  pairing: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  items: MenuItem[];
};

const categories: MenuCategory[] = [
  {
    id: 'brews',
    title: 'The Grandmaster Brews',
    subtitle: 'Espresso, Americano, Specialty Lattes, Cold Brew',
    pairing: 'Pairs with a sharp cheddar melt',
    image: 'https://images.pexels.com/photos/40175053/pexels-photo-40175053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Espresso being poured into a black cup',
    icon: Coffee,
    items: [
      { name: 'Espresso', price: '$3.50', description: 'A bold, syrupy shot with a caramel finish.' },
      { name: 'Americano', price: '$4.00', description: 'Long, clean and balanced, the quiet opening move.' },
      { name: 'Specialty Lattes', price: '$5.50', description: 'Seasonal flavours, steamed silky smooth.' },
      { name: 'Cold Brew', price: '$5.00', description: 'Smooth and slow-steeped, served over ice.' },
    ],
  },
  {
    id: 'boards',
    title: "The Bishop's Boards & Melts",
    subtitle: 'Artisanal grilled cheeses, savory pastries, cheese slaws and spreads',
    pairing: 'Pairs with a dark roast americano',
    image: 'https://images.pexels.com/photos/39798861/pexels-photo-39798861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Grilled cheese sandwich with melted cheese on a wooden plate',
    icon: Sandwich,
    items: [
      { name: 'Artisanal Grilled Cheeses', price: '$12.50', description: 'Aged cheddar, gouda and brie pressed on rustic bread.' },
      { name: 'Savory Pastries', price: '$5.50', description: 'Flaky, golden bites built for brunch or a midday break.' },
      { name: 'Gourmet Cheese Slaws & Spreads', price: '$4.50', description: 'Bright, tangy sides that make every plate sing.' },
    ],
  },
  {
    id: 'sweets',
    title: 'Sweet Endings',
    subtitle: 'Fresh bakery items and seasonal treats',
    pairing: 'Pairs with a cappuccino',
    image: 'https://images.pexels.com/photos/12660003/pexels-photo-12660003.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Freshly baked croissants in a glass display case',
    icon: Croissant,
    items: [
      { name: 'Fresh Bakery', price: '$4.00', description: 'Croissants and bakes pulled from the morning case.' },
      { name: 'Seasonal Treats', price: '$4.75', description: 'Rotating specials that follow the calendar.' },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">The Menu</p>
          <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl text-espresso-900">Featured Moves</h2>
          <p className="mt-4 text-base leading-[1.5] text-espresso-700">
            Every coffee is a pairing. Every melt has a partner. Choose your opening and build from there.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ id, title, subtitle, pairing, image, imageAlt, icon: Icon, items }) => (
            <article
              key={id}
              className="group flex flex-col overflow-hidden rounded-3xl bg-cream-50 border border-espresso-900/10 shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image}
                  alt={imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/20 to-transparent" aria-hidden="true" />
                <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-terracotta-500 text-cream-50">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-serif text-2xl font-bold text-espresso-900">{title}</h3>
                <p className="mt-2 text-sm leading-[1.5] text-espresso-700">{subtitle}</p>

                <ul className="mt-6 flex-1 space-y-4 border-t border-espresso-900/10 pt-6">
                  {items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-baseline justify-between">
                        <p className="text-sm font-semibold text-espresso-900">{item.name}</p>
                        <span className="text-sm font-bold text-terracotta-600">{item.price}</span>
                      </div>
                      <p className="mt-0.5 text-xs leading-[1.5] text-espresso-700">{item.description}</p>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 rounded-xl bg-cream-200/60 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-terracotta-700">
                  {pairing}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
