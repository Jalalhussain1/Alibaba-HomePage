import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'
import FeatureCard from './components/FeatureCard'

import ExploreOfferings from './components/ExploreOfferings';


export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureCard />
     <ExploreOfferings />
      {/* Rest of the homepage */}
    </>
  );
}
