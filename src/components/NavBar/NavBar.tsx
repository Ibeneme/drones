import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Camera } from "lucide-react";

interface NavBarProps {
  // scrollToSection is still used for in-page navigation (e.g., Get Quote)
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

  // Optional: Highlight active section on scroll (kept the same)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      scrollableSections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          if (
            scrollPos >= el.offsetTop &&
            scrollPos < el.offsetTop + el.offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // handleNavClick is now only used for immediate in-page scrolls (like "Get Quote")
  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false);
  };

  type LinkType = "scroll" | "link" | "route";

  interface NavLink {
    name: string;
    type: LinkType;
    target: string;
    href: string;
  }

  const desktopLinks: NavLink[] = [
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

  // Helper function to render a navigation item based on its type
  const renderNavItem = (
    link: {
      name: string;
      type: "scroll" | "link" | "route";
      target: string;
      href: string;
    },
    isMobile = false
  ) => {
    // Styling classes remain the same
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

    if (link.type === "scroll") {
      // Only for immediate action buttons (like Home or Get Quote)
      return (
        <button
          key={link.name}
          className={finalClasses}
          onClick={() => handleNavClick(link.target)}
        >
          {link.name}
        </button>
      );
    } else {
      // Use <a> tag for navigation, either to a new page (route) or to the home page with a hash (link)
      return (
        <a
          key={link.name}
          href={link.href} // Use the new href property
          className={finalClasses}
          onClick={(e) => {
            // If we are already on the home page and it's a 'link', use local scroll and prevent default route change
            if (
              link.href.startsWith("/#") &&
              window.location.pathname === "/"
            ) {
              e.preventDefault(); // Stop the browser from navigating
              handleNavClick(link.target); // Use the smooth scroll
            }
            setIsMobileMenuOpen(false); // Close mobile menu regardless
          }}
        >
          {link.name}
        </a>
      );
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo (Styled with Camera icon) */}
        <div className="flex items-center">
          <a
            href="/" // Logo always links to the home page
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {desktopLinks.map((link) => renderNavItem(link as any))}

          {/* Desktop Get Quote Button (Gradient) */}
          <button
            onClick={() => handleNavClick("quote")}
            className="text-white px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out 
                         bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-md ml-4"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-blue-600"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Full-width overlay with styling) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100 pb-2">
          {desktopLinks.map((link) => renderNavItem(link, true))}

          {/* Mobile Get Quote Button (Gradient) */}
          <div className="px-6 pt-3 pb-2">
            <button
              onClick={() => handleNavClick("quote")}
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
