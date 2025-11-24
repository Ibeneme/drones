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
      {/* FULL PAGE WRAPPER to prevent overflow */}
      <div className="max-w-7xl mx-auto w-full overflow-x-hidden px-4">
        <GuardDroneNavbar />
        <GlassNavbar />

        <HeroSection />
        <DroneProductSection />
        <ExplorePage />
        <BoundariesPage />
        <UnleashDrone />

        <Footer />
      </div>
    </>
  );
}

export default App;
