import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { ChevronRight, Sun, Moon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeProvider";
import viteimage from "../../assets/vite.png";

interface NavBarProps {
  scrollToSection: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ scrollToSection }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const scrollableSections = [
    "home",
    "services",
    "industries",
    "portfolio",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 120;
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

  const handleNavClick = (section: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${section}`;
    } else {
      scrollToSection(section);
    }
    setIsMobileMenuOpen(false);
  };

  // Updated array with About and Pricing
  const desktopLinks = [
    // { name: "Home", target: "home", href: "/" },
    { name: "About", target: "about", href: "/about", isRoute: true }, // Added About Route
    // { name: "Services", target: "services", href: "/#services" },
    { name: "Pricing", target: "pricing", href: "/pricing", isRoute: true },
    // { name: "Industries", target: "industries", href: "/#industries" },
    { name: "Portfolio", target: "portfolio", href: "/#portfolio" },
    { name: "FAQ", target: "faq", href: "/faq", isRoute: true },
    { name: "Rate Card", target: "rate", href: "/rate-card", isRoute: true },
    { name: "Contact", target: "contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b
        ${
          scrolled
            ? isDark
              ? "bg-black/80 border-white/10 backdrop-blur-md py-3"
              : "bg-white/80 border-black/5 backdrop-blur-md py-3"
            : "bg-transparent border-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center group">
            <img
              src={viteimage}
              alt="Logo"
              className="h-8 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Links & Actions */}
        <div className="hidden md:flex items-center space-x-1">
          {desktopLinks.map((link) => {
            // Check if the current path matches the link href for visual active state on routes
            const isCurrentRoute = window.location.pathname === link.href;
            const isActive =
              isActiveSection(link, activeSection) || isCurrentRoute;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (!link.isRoute && window.location.pathname === "/") {
                    e.preventDefault();
                    handleNavClick(link.target);
                  }
                }}
                className={`relative px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300
                  ${
                    isActive
                      ? "text-blue-500"
                      : isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-500 rounded-full"
                  />
                )}
              </a>
            );
          })}

          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.9, rotate: 15 }}
            onClick={toggleTheme}
            className={`ml-4 p-2.5 rounded-xl border transition-colors
              ${
                isDark
                  ? "bg-white/5 border-white/10 text-yellow-400 hover:bg-white/10"
                  : "bg-gray-100 border-black/5 text-indigo-600 hover:bg-gray-200"
              }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isDark ? "dark" : "light"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick("contact")}
            className="ml-4 px-6 py-2.5 rounded-xl text-sm font-black text-white 
              bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg shadow-blue-500/25"
          >
            GET QUOTE
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${
              isDark ? "text-yellow-400" : "text-indigo-600"
            }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t overflow-hidden ${
              isDark ? "bg-black border-white/10" : "bg-white border-black/5"
            }`}
          >
            <div className="px-4 py-8 space-y-4">
              {desktopLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (!link.isRoute && window.location.pathname === "/") {
                      e.preventDefault();
                      handleNavClick(link.target);
                    }
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-lg font-bold
                    ${
                      activeSection === link.target ||
                      window.location.pathname === link.href
                        ? "bg-blue-600 text-white"
                        : isDark
                        ? "text-gray-400 hover:bg-white/5"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  {link.name}
                  <ChevronRight className="w-5 h-5 opacity-50" />
                </a>
              ))}
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full mt-4 py-4 rounded-2xl bg-blue-600 text-white font-black shadow-xl"
              >
                GET QUOTE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Helper to determine active state
const isActiveSection = (link: any, activeSection: string) => {
  return !link.isRoute && activeSection === link.target;
};

export default NavBar;
