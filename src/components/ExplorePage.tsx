import { useTheme } from "../contexts/ThemeProvider";

import image1Dark from "../assets/grid-image-1-dark.png";

export default function ExplorePage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center
                  transition-colors duration-500
                  ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p
          className={`text-base sm:text-lg font-semibold mb-2 
                      transition-colors duration-500
                      ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          Explore the Possibilities
        </p>
        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 
                      transition-colors duration-500
                      ${isDark ? "text-white" : "text-gray-900"}`}
        >
          Soar to New Heights
        </h1>
        <p
          className={`text-lg sm:text-xl max-w-2xl mx-auto 
                      transition-colors duration-500
                      ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          Discover the Thrill of Aerial Exploration with Our Cutting-Edge Drone
          Solutions. Capture Breathtaking Footage, Conduct Efficient
          Inspections, and Revolutionize Your Industry with the Power of Our
          Innovative Drone Technology.
        </p>
      </div>

      <div className="w-full max-w-6xl gap-6 mt-8">
        <img
          src={image1Dark}
          alt={`Drone related image`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
