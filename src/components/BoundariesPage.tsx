import React from "react";
import { useTheme } from "../contexts/ThemeProvider";
import card1ImageDark from "../assets/card1-dark.png";
import card1ImageLight from "../assets/card1-dark.png";
import card2ImageDark from "../assets/card2-dark.png";
import card2ImageLight from "../assets/card2-dark.png";
import card3ImageDark from "../assets/card3-dark.png";
import card3ImageLight from "../assets/card3-dark.png";

export default function BoundariesPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const cards = [
    {
      imageDark: card1ImageDark,
      imageLight: card1ImageLight,
      title: "Elevate Your Aerial Capabilities with power drones",
    },
    {
      imageDark: card2ImageDark,
      imageLight: card2ImageLight,
      title: "Conquer the Skies: Explore the Limitless Possibilities",
    },
    {
      imageDark: card3ImageDark,
      imageLight: card3ImageLight,
      title: "Master Your Mission: Precision and Control at Your Fingertips",
    },
  ];

  return (
    <div
      className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center
                  transition-colors duration-500
                  ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p
          className={`text-base sm:text-lg font-semibold mb-2 
                      transition-colors duration-500
                      ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          Redefine Aerial Imaging
        </p>
        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 
                      transition-colors duration-500
                      ${isDark ? "text-white" : "text-gray-900"}`}
        >
          Push the Boundaries of Aerial Technology
        </h1>
        <p
          className={`text-lg sm:text-xl max-w-2xl mx-auto 
                      transition-colors duration-500
                      ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          Unlock the Full Potential of Aerial Imaging with Our Advanced Drone
          Solutions. Capture Stunning Footage, Conduct Efficient Inspections,
          and Revolutionize Your Industry with the Power of Our Innovative Drone
          Technology.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden  p-6 flex flex-col items-start
                        transition-all duration-300 transform hover:scale-105 
                      `}
          >
            <div className="w-full h-48 md:h-60 rounded-lg overflow-hidden mb-6">
              <img
                src={isDark ? card.imageDark : card.imageLight}
                alt={`Card ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <h3
              className={`text-xl font-bold mb-6 
                          ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {card.title}
            </h3>

            <button
              className={`px-6 py-3 rounded-[12px] font-semibold mt-auto 
                          transition-all duration-300
                          ${
                            isDark
                              ? "bg-[#3F3F46] text-[#fff]"
                              : "bg-gray-900 text-white"
                          }`}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
