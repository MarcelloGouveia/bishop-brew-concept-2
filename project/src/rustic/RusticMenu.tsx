import { useState } from 'react';
import { Cake, Coffee, Sandwich } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from '@/rustic/Reveal';

type MenuItem = {
  name: string;
  description: string;
};

type MenuTab = {
  id: string;
  label: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  items: MenuItem[];
};

const tabs: MenuTab[] = [
  {
    id: 'classics',
    label: 'Espresso & Coffee Classics',
    icon: Coffee,
    image: 'https://images.pexels.com/photos/8873868/pexels-photo-8873868.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Espresso being made in a professional machine',
    items: [
      { name: 'Latte', description: 'Velvety steamed milk over a double shot of espresso.' },
      { name: 'Cappuccino', description: 'Equal parts espresso, milk and a generous cap of foam.' },
      { name: 'Cold Brew', description: 'Slow-steeped for a smooth, low-acid finish over ice.' },
      { name: 'Americano', description: 'Espresso lengthened with hot water for a clean, bold cup.' },
    ],
  },
  {
    id: 'teas',
    label: 'Specialty Teas & Signature Drinks',
    icon: Sandwich,
    image: 'https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Warm restaurant interior with hanging lamps',
    items: [
      { name: 'Loose-Leaf Teas', description: 'A rotating selection of black, green and herbal blends.' },
      { name: 'Chai Latte', description: 'Spiced and sweetened, steamed with your choice of milk.' },
      { name: 'Signature House Drink', description: 'Our seasonal creation, ask your barista what is on today.' },
    ],
  },
  {
    id: 'bakery',
    label: 'Baked Goods & Light Bites',
    icon: Cake,
    image: 'https://images.pexels.com/photos/7405059/pexels-photo-7405059.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Freshly baked pastries in a bakery display case',
    items: [
      { name: 'Fresh Pastries', description: 'Baked each morning, from buttery croissants to fruit danishes.' },
      { name: 'Light Breakfast', description: 'Savory bites to start your day, served warm.' },
      { name: 'Light Lunch', description: 'Sandwiches and bowls made for a relaxed midday break.' },
    ],
  },
];

export default function RusticMenu() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <section id="rustic-menu" className="bg-sage-200/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-sage-700">Our Menu</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-espresso-900 sm:text-4xl">
            Something warm for every craving.
          </h2>
        </Reveal>

        <div
          role="tablist"
          aria-label="Menu categories"
          className="mt-12 flex flex-col gap-2 rounded-2xl bg-cream-50 p-2 shadow-sm sm:flex-row sm:rounded-full"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveId(tab.id)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 font-body text-sm font-semibold transition-all duration-300 sm:rounded-full ${
                  isActive
                    ? 'bg-sage-600 text-cream-50 shadow-md'
                    : 'text-espresso-700 hover:bg-sage-200 hover:text-espresso-900'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          key={activeTab.id}
          role="tabpanel"
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          className="mt-10 grid animate-fade-up gap-8 md:grid-cols-5 md:items-stretch"
        >
          <img
            src={activeTab.image}
            alt={activeTab.imageAlt}
            loading="lazy"
            className="h-64 w-full rounded-2xl object-cover shadow-lg shadow-espresso-900/10 md:col-span-2 md:h-full"
          />

          <ul className="grid gap-4 sm:grid-cols-2 md:col-span-3">
            {activeTab.items.map((item) => (
              <li
                key={item.name}
                className="flex flex-col rounded-2xl border border-espresso-100 bg-cream-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-oak-300 hover:shadow-md"
              >
                <h3 className="font-display text-xl font-semibold text-espresso-900">{item.name}</h3>
                <p className="mt-2 font-body text-base leading-[1.5] text-espresso-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
