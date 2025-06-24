import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'
import FeatureCard from './components/FeatureCard'
import ExploreOfferings from './components/ExploreOfferings';
import Explore from './components/Explore'
import FactoryCard from './components/FactoryCard'
import TradeCard from './components/TradeCard'
import StreamLine from './components/StreamLine'
import BusinessStage from "./components/BusinessStage"
import CTASection from './components/CtaSection';
import CorporateSection from './components/CorporateSection'
import SupplierSection from './components/SupplierSection';
import FooterSection from './components/FooterSection'



export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureCard />
      <ExploreOfferings />
      <Explore />
      <FactoryCard />
      <TradeCard />
      <StreamLine />
      <BusinessStage />
      <CTASection />
      <CorporateSection />
      <SupplierSection />
      <FooterSection />
      {/* Rest of the homepage */}
    </>
  );
}
