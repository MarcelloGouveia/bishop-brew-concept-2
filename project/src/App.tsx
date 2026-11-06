import SiteHeader from '@/components/SiteHeader';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import MenuSection from '@/components/MenuSection';
import LocationSection from '@/components/LocationSection';
import SiteFooter from '@/components/SiteFooter';
import RusticApp from '@/rustic/RusticApp';

function App() {
  if (window.location.pathname.startsWith('/rustic')) {
    return <RusticApp />;
  }

  return (
    <div className="min-h-screen bg-brie-100">
      <SiteHeader />
      <main>
        <HeroSection />
        <StorySection />
        <MenuSection />
        <LocationSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
