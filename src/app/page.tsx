import HeroWithScrollAnimation from "@/components/HeroWithScrollAnimation";
import HomeEventCard from "@/components/HomeEventCard";
import AboutSection from "@/components/AboutSection";
import CommunityPartnerSection from "@/components/CommunityPartnerSection";

export default function Home() {
  return (
    <>
      <HeroWithScrollAnimation />
      <HomeEventCard />
      <AboutSection />
      <CommunityPartnerSection />
    </>
  );
}
