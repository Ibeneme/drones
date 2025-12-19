import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import NotFoundPage from "./components/NotFound/NotFoundPage";
import FAQSection from "./Pages/Faq";
import RateCard from "./Pages/RateCard";
import PricingPage from "./Pages/PricingPage";
import AboutUs from "./Pages/AboutUs";

function App() {
  // Scroll to a section by id
  const scrollToSection = (section: string) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar scrollToSection={scrollToSection} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQSection />} />
            <Route path="/rate-card" element={<RateCard />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
