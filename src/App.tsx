import { useTheme } from "./contexts/ThemeProvider";

import BoundariesPage from "./components/BoundariesPage";
import DroneProductSection from "./components/DroneProductSection";
import ExplorePage from "./components/ExplorePage";
import Footer from "./components/Footer";
import GlassNavbar from "./components/GlassNavbar";
import GuardDroneNavbar from "./components/GuardDroneNavbar";
import HeroSection from "./components/HeroSection";
import UnleashDrone from "./components/UnleashDrone";

function App() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`
        min-h-screen w-full 
        transition-colors duration-500 
        ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}
      `}
    >
      <div className="max-w-7xl mx-auto w-full overflow-x-hidden px-4">
        {/* Navbars */}
        <GuardDroneNavbar />
        <GlassNavbar />

        {/* Sections */}
        <HeroSection />
       	<DroneProductSection />
        <ExplorePage />
        <BoundariesPage />
        <UnleashDrone />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;