import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <GallerySection />
      <ReviewsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
