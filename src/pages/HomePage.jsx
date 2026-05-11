import HeroBanner from "../components/home/HeroBanner";
import QuickAccess from "../components/home/QuickAccess";
import MainCategories from "../components/home/MainCategories";
import FeaturedSections from "../components/home/FeaturedSections";
import NewsSection from "../components/home/NewsSection";

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <QuickAccess />
      <MainCategories />
      <FeaturedSections />
      <NewsSection />
    </main>
  );
}
