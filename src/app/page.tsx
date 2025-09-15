import Hero from '@/components/Hero';
import FirstEvent from '@/components/FirstEvent';
import AboutSection from '@/components/AboutSection';
// import UpcomingEvents from '@/components/UpcomingEvents'; // Hidden for new community
// import LatestNews from '@/components/LatestNews'; // Hidden for new community - no news yet

export default function Home() {
  return (
    <>
      <Hero />
      <FirstEvent />
      <AboutSection />
    </>
  );
}
