
import { useTheme } from "../contexts/ThemeProvider";
import unleashDroneImage from "../assets/unleash.png";

export default function UnleashPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`relative w-full min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden
        transition-colors duration-300
        ${isDark ? "bg-black text-white" : "bg-white text-black"}
      `}
    >
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto 
          flex flex-col lg:flex-row items-center justify-center 
          gap-8 lg:gap-0 rounded-[48px] overflow-hidden
          transition-colors duration-300
          ${isDark ? "bg-lime-500 backdrop-blur-md" : "bg-lime-500"}
        `}
      >
        {/* IMAGE SIDE */}
        <div className="relative w-full p-4 md:p-6 flex items-center justify-center">
          <img
            src={unleashDroneImage}
            alt="Drone in flight"
            className="w-full h-full object-contain"
          />
        </div>

        {/* TEXT SIDE */}
        <div
          className={`relative w-full lg:w-3/5 lg:-ml-12 flex-shrink-0 
            p-8 md:p-12 lg:p-16 rounded-3xl flex flex-col items-start justify-center 
            text-left z-20 
            transition-colors duration-300
            ${isDark ? "text-black" : " text-black"}
          `}
          style={{
            minHeight: "250px",
            height: "clamp(250px, 35vw, 450px)",
          }}
        >
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 uppercase
              transition-colors duration-300
            `}
          >
            Unleash the <br className="hidden md:block" /> Aerial Space
          </h2>

          <button
            className={`
              px-8 py-3 rounded-full text-lg font-semibold
              transition-transform duration-300 hover:scale-105
              transition-colors duration-300
              ${
                isDark
                  ? "bg-white text-lime-700 hover:bg-gray-200"
                  : "bg-black text-lime-300 hover:bg-gray-900"
              }
            `}
          >
            Go & Get It!
          </button>
        </div>
      </div>
    </div>
  );
}
