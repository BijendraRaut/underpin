import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductCategories from './components/ProductCategories';
import MembershipPlans from './components/MembershipPlans';
import Products from './components/Products';
import SpiritualItems from './components/SpiritualItems';
import VideoGallery from './components/VideoGallery';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div>
       <HeroSection />
      <ProductCategories />
      <MembershipPlans />
      <Products />
      <SpiritualItems />
      <VideoGallery />
    </div>
  );
}
