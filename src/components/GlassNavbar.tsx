import { useTheme } from "../contexts/ThemeProvider";

import quadroLogo from "../assets/vite.png";

export default function GlassNavbar() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const navItems = ["Drones", "Mission", "About"];

  const glassClasses = isDark
    ? "bg-black/20 backdrop-blur-xl border-gray-700/50 shadow-2xl"
    : "bg-white/30 backdrop-blur-md border-white/50 shadow-lg";

  const textClasses = isDark
    ? "text-white hover:text-lime-400"
    : "text-black hover:text-gray-600";

  const logoTextClasses = isDark ? "text-white" : "text-black";

  const subTitleClasses = isDark
    ? "text-sm font-semibold leading-none text-gray-300"
    : "text-sm font-semibold leading-none text-gray-700";

  return (
    <nav
      className={`
    fixed top-4 left-0 right-2 z-50
    w-[85%] max-w-7xl mx-auto 
    h-20 flex items-center justify-between px-6 lg:px-10 
    rounded-2xl 
    border 
    ${glassClasses}
    transition-all duration-300

    block lg:hidden      /* SHOW on mobile, HIDE on large screens */
  `}
    >
      <div className="flex items-center gap-2">
        <img
          src={quadroLogo}
          alt="Quadro Drone Logo"
          className={`w-10 h-10 object-contain`}
        />
        <h1
          className={`text-xl font-extrabold tracking-wider ${logoTextClasses}`}
        >
          QUADRO
          <br />
          <span className={subTitleClasses}>DRONE</span>
        </h1>
      </div>

      <div className="flex items-center gap-12">
        <div className="hidden sm:flex items-center gap-10">
          {navItems.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-lg font-bold transition-colors duration-200 ${textClasses}`}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="w-8 h-8"></div>
      </div>
    </nav>
  );
}
