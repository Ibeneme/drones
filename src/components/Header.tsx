import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeProvider";

// Hardcoded Color Definitions based on your design
const COLORS = {
  // Primary Backgrounds
  BG_DARK: "#080808",
  BG_LIGHT: "#fff",

  // Primary Text Colors
  TEXT_DARK: "#FFFFFF",
  TEXT_LIGHT: "#080808",

  // Secondary Text Colors
  TEXT_SECONDARY_DARK: "#CCCCCC",
  TEXT_SECONDARY_LIGHT: "#444444",

  // Accent Color (Neon Green - same for both)
  ACCENT: "#006BFF",
};

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  // Determine current colors based on theme state
  const isDark = theme === "dark";
  const bgColor = isDark ? COLORS.BG_DARK : COLORS.BG_LIGHT;
  const textColor = isDark ? COLORS.TEXT_DARK : COLORS.TEXT_LIGHT;
  const secondaryTextColor = isDark
    ? COLORS.TEXT_SECONDARY_DARK
    : COLORS.TEXT_SECONDARY_LIGHT;
  const accentColor = COLORS.ACCENT;

  return (
    <div
      className="min-h-screen transition-colors duration-300" // Keep transition for smoothness
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <nav
        className="p-4 flex justify-between items-center shadow-md transition-shadow duration-300"
        // Adjust shadow color based on theme
        style={{
          boxShadow: isDark
            ? "0 2px 4px rgba(255, 255, 255, 0.1)"
            : "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 className="text-xl font-bold">Guardian Drone</h1>

        {/* Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full font-semibold shadow-md hover:opacity-80 transition duration-300"
          style={{ backgroundColor: accentColor, color: COLORS.TEXT_LIGHT }} // Accent button is always black text on neon green
        >
          {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </nav>

      {/* Hero Section using theme colors */}
      <main className="p-8">
        <h2
          className="text-4xl font-extrabold"
          style={{ color: textColor }} // Use primary text color
        >
          POWER DRONES
        </h2>
        <p
          className="mt-4 max-w-lg"
          style={{ color: secondaryTextColor }} // Use secondary text color
        >
          Unlock the Future of Aerial Exploration with Our Top-Tier Drone
          Technology.
        </p>
        <button
          className="mt-6 px-6 py-3 rounded-lg font-bold"
          style={{ backgroundColor: accentColor, color: COLORS.TEXT_LIGHT }} // Accent button
        >
          EXPLORE NOW
        </button>
      </main>
    </div>
  );
};

export default Header;
