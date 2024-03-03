import Opening from "@/components/opening";
import LocationSection from "@/components/location";
import Navbar from "@/components/nav-bar";
import Services from "@/components/services";
import WelcomeSection from "@/components/welcome";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Opening />
      <WelcomeSection />
      <Services />
      <LocationSection />
      <Footer />
    </div>
  );
}
