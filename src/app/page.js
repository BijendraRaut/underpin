import HeroSection from './components/HeroSection';
import ProductCategories from './components/ProductCategories';
import MembershipPlans from './components/MembershipPlans';
import Products from './components/Products';
import SpiritualItems from './components/SpiritualItems';
import VideoGallery from './components/VideoGallery';
import BestSellers from './components/BestSellers';
import Newsletter from './components/Newsletter';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ProductCategories />
      <BestSellers />
      <MembershipPlans />
      <Newsletter />
    </div>
  );
}
