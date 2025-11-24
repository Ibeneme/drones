import BoundariesPage from "./components/BoundariesPage";
import DroneProductSection from "./components/DroneProductSection";
import ExplorePage from "./components/ExplorePage";
import Footer from "./components/Footer";
import GlassNavbar from "./components/GlassNavbar";
import GuardDroneNavbar from "./components/GuardDroneNavbar";
import HeroSection from "./components/HeroSection";
import UnleashDrone from "./components/UnleashDrone";

function App() {
  return (
    <>
      <GuardDroneNavbar />
      <GlassNavbar />
      <HeroSection />
      <DroneProductSection />
      <ExplorePage />
      <BoundariesPage />
      <UnleashDrone />
      <Footer />
    </>
  );
}

export default App;
