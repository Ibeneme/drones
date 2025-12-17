import React, { useEffect, useRef } from "react";
import HeroSection from "../components/Hero/Hero";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import FeaturesAndIndustries from "../components/FeaturesAndIndustries/FeaturesAndIndustries";
import PortfolioAndTestimonials from "../components/Portfolio/PortfolioAndTestimonials";
import ContactAndQuote from "../components/ContactAndQuote/ContactAndQuote";
import NavBar from "../components/NavBar/NavBar";
// Assuming you have imported all necessary assets for other components

const Home: React.FC = () => {
  // Create refs for all sections

  useEffect(() => {
    // Check if the URL has a hash (e.g., #services)
    const hash = window.location.hash.substring(1);
    if (hash) {
      // Use a small delay to ensure the page has fully rendered
      // before attempting to scroll to a ref
      const timer = setTimeout(() => {
        scrollToSection(hash);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  // All useRefs are already correctly typed as RefObject<HTMLDivElement | null>
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const featuresRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  const portfolioRef = useRef<HTMLDivElement>(null);

  const quoteRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Scroll function
  const scrollToSection = (section: string) => {
    // FIX: Change the local 'ref' variable type to explicitly match the useRef types.
    let ref: React.RefObject<HTMLDivElement | null> | null = null;

    switch (section) {
      case "home":
        ref = homeRef;
        break;
      case "services":
        ref = servicesRef;
        break;
      case "features":
        ref = featuresRef;
        break;
      case "industries":
        ref = industriesRef;
        break;
      case "portfolio":
        ref = portfolioRef;
        break;
      case "contact":
        ref = contactRef; // Scrolls to the general contact info area
        break;
      case "quote":
        ref = quoteRef; // Scrolls specifically to the quote form
        break;
      default:
        return;
    }

    // Scroll with an offset to account for the fixed NavBar
    // The check ref?.current already handles the HTMLDivElement | null type
    if (ref?.current) {
      const offset = -70; // Adjust based on your NavBar height
      const top =
        ref.current.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div>
      <NavBar scrollToSection={scrollToSection} />

      <div id="home" ref={homeRef}>
        <HeroSection scrollToSection={scrollToSection} />
      </div>

      <div id="services" ref={servicesRef}>
        <ServicesSection />
      </div>

      <FeaturesAndIndustries
        featuresRef={featuresRef}
        industriesRef={industriesRef}
      />

      <div id="portfolio" ref={portfolioRef}>
        <PortfolioAndTestimonials />
      </div>

      {/* The NavBar's active section logic relies on the ID="contact" 
          to be attached to the parent div containing both contact/quote.
          We use quoteRef here to cover the top of the combined section. */}
      <div id="contact" ref={quoteRef}>
        <ContactAndQuote contactRef={contactRef} quoteRef={quoteRef} />
      </div>
    </div>
  );
};

export default Home;
