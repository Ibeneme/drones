import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Camera } from "lucide-react";

interface NavBarProps {
  scrollToSection: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollableSections = [
    "home",
    "services",
    "industries",
    "portfolio",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      scrollableSections.forEach((section) => {
        const el = document.getElementById(section);
        if (
          el &&
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * UPDATED: Logic to handle internal scrolls vs cross-page navigation
   */
  const handleQuoteClick = () => {
    if (window.location.pathname !== "/") {
      // If NOT on home (e.g., /faq or /rate-card), redirect to home with hash
      window.location.href = "/#quote";
    } else {
      // If ON home, perform smooth scroll
      scrollToSection("quote");
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (section: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${section}`;
    } else {
      scrollToSection(section);
    }
    setIsMobileMenuOpen(false);
  };

  const desktopLinks = [
    { name: "Home", type: "scroll", target: "home", href: "/" },
    { name: "Services", type: "link", target: "services", href: "/#services" },
    {
      name: "Industries",
      type: "link",
      target: "industries",
      href: "/#industries",
    },
    {
      name: "Portfolio",
      type: "link",
      target: "portfolio",
      href: "/#portfolio",
    },
    { name: "FAQ", type: "route", target: "/faq", href: "/faq" },
    {
      name: "Rate Cards",
      type: "route",
      target: "/rate-card",
      href: "/rate-card",
    },
    { name: "Contact", type: "link", target: "contact", href: "/#contact" },
  ];

  const renderNavItem = (link: any, isMobile = false) => {
    const baseClasses = isMobile
      ? `block w-full text-left px-6 py-3 text-base font-medium transition duration-150`
      : `text-sm font-medium transition duration-150 ease-in-out px-3 py-2`;

    const activeClasses =
      link.type !== "route" && activeSection === link.target
        ? isMobile
          ? "text-blue-600 bg-blue-50/50"
          : "text-blue-600 font-semibold"
        : isMobile
        ? "text-gray-800 hover:bg-gray-50"
        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50";

    const finalClasses = `${baseClasses} ${activeClasses}`;

    return (
      <a
        key={link.name}
        href={link.href}
        className={finalClasses}
        onClick={(e) => {
          if (link.href.startsWith("/#") || link.href === "/") {
            if (window.location.pathname === "/") {
              e.preventDefault();
              handleNavClick(link.target);
            }
          }
          setIsMobileMenuOpen(false);
        }}
      >
        {link.name}
      </a>
    );
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <a
            href="/"
            className="flex-shrink-0 flex items-center cursor-pointer"
          >
            <span className="bg-blue-600 p-2 rounded-lg text-white">
              <Camera className="w-5 h-5" />
            </span>
            <span className="ml-3 text-xl font-bold text-gray-900">
              AeroEmperor
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {desktopLinks.map((link) => renderNavItem(link))}

          {/* UPDATED: Uses handleQuoteClick */}
          <button
            onClick={handleQuoteClick}
            className="text-white px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out 
                         bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-md ml-4"
          >
            Get Quote
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-blue-600"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100 pb-2">
          {desktopLinks.map((link) => renderNavItem(link, true))}
          <div className="px-6 pt-3 pb-2">
            <button
              onClick={handleQuoteClick}
              className="block w-full text-center px-4 py-3 rounded-md text-base font-medium transition duration-150 ease-in-out text-white 
                       bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-md"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
