import { HeroSection } from './components/heroSection/page';
import { Carousel } from './components/carousel/page';
import { Services } from './components/services/page';
import { Contact } from './components/contact/page';
import { Footer } from './components/footer/page';
import { LocationMap } from './components/locationMap/page';

export default function Home() {
  return (
    <>
      <Carousel />
      <main>
        <HeroSection />
        <Services />
        <Contact />
        <LocationMap />
      </main>
      <Footer />
    </>
  );
}
