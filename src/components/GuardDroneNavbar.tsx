import { Menu } from "lucide-react";
import { useTheme } from "../contexts/ThemeProvider";

import navImage from "../assets/nav.png";
import navlight from "../assets/navlight.png";
import viteImage from "../assets/vite.png";

export default function HeroNavbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const currentNavImage = isDark ? navImage : navlight;

  return (
    <nav
      className={`
    fixed top-0 left-0 right-0 z-50
    h-[0px] md:h-[96px] flex items-center overflow-hidden
    transition-colors duration-300
    ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}
  `}
    >
      <div className="absolute inset-y-2 left-2 right-2 w-full md:w-2/3 md:block hidden">
        <div className="relative w-full">
          <img
            src={currentNavImage}
            alt="Drone background"
            className="w-full max-w-[1000px] h-auto object-contain mx-auto transition-all duration-300 md:ml-[48px] ml-[16px] "
          />

          {/* FLEX CONTAINER: LEFT TEXT + RIGHT LINKS */}
          <div className="absolute top-1/2 left-6 md:left-[12px] right-6 -translate-y-1/2 flex justify-center">
            <div className="w-full max-w-[700px] flex items-center justify-between gap-4 mr-[64px]">
              {/* LEFT SIDE: Logo + Text */}
              <div className="flex items-center gap-2">
                <img src={viteImage} className="w-64 h-8" />
            
              </div>

              {/* RIGHT SIDE: Nav Links */}
              <div className="hidden md:flex items-center gap-10">
                {["Drones", "Mission", "About"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className={`text-[12px] font-medium uppercase tracking-wider transition-all duration-300
            ${isDark ? "hover:text-yellow-300" : "hover:text-emerald-600"}
          `}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`ml-auto mr-8 md:mr-16 flex items-center gap-10 z-10  hidden md:block ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`
              p-2.5 rounded-lg transition-all duration-300
              ${
                isDark
                  ? "bg-white/10 hover:bg-white/20 text-yellow-400"
                  : "bg-black/10 hover:bg-black/20 text-gray-700"
              }
            `}
          >
            {isDark ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m8-9h-1M5 12H4m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m15.364.707l-.707.707M6.343 17.657l-.707.707M16.95 12a4.95 4.95 0 11-9.9 0 4.95 4.95 0 019.9 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          <button className="md:hidden p-2">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>
    </nav>
  );
}
