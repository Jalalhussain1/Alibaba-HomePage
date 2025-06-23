import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'
import FeatureCard from './components/FeatureCard'
import ExploreOfferings from './components/ExploreOfferings';
import Explore from './components/Explore'
import FactoryCard from './components/FactoryCard'
import TradeCard from './components/TradeCard'
import StreamLine from './components/StreamLine'


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
      {/* Rest of the homepage */}
    </>
  );
}
