import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import MembershipPlans from "@/components/MembershipPlans";
import BestSellers from "@/components/BestSellers";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProductCategories />
      <BestSellers />
      <MembershipPlans />
      <Newsletter />
    </main>
  );
}
