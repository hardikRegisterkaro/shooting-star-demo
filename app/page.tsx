import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import OurServices from "./components/OurServices";
import DigitalGrowth from "./components/DigitalGrowth";
import OurStory from "./components/OurStory";
import TrustedBy from "./components/TrustedBy";
import Testimonials from "./components/Testimonials";
import WorkTogether from "./components/WorkTogether";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <Services />
      <OurServices />
      <DigitalGrowth />
      <OurStory />
      <TrustedBy />
      <Testimonials />
      <WorkTogether />
    </main>
  );
}
