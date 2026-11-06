import RusticHeader from '@/rustic/RusticHeader';
import RusticHero from '@/rustic/RusticHero';
import RusticAbout from '@/rustic/RusticAbout';
import MenuSection from '@/components/MenuSection';
import RusticVisit from '@/rustic/RusticVisit';
import RusticFooter from '@/rustic/RusticFooter';

export default function RusticApp() {
  return (
    <div className="min-h-screen bg-cream-100 font-body text-espresso-800">
      <RusticHeader />
      <main>
        <RusticHero />
        <RusticAbout />
        <MenuSection />
        <RusticVisit />
      </main>
      <RusticFooter />
    </div>
  );
}
