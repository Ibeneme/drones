import { useTheme } from "../contexts/ThemeProvider";

import card1ImageDark from "../assets/card1-dark.png";
import card1ImageLight from "../assets/card1-dark.png";
import card2ImageDark from "../assets/card2-dark.png";
import card2ImageLight from "../assets/card2-dark.png";
import card3ImageDark from "../assets/card3-dark.png";
import card3ImageLight from "../assets/card3-dark.png";


import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BoundariesPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const cards = [
    {
      imageDark: card1ImageDark,
      imageLight: card1ImageLight,
      title: "Elevate Your Aerial Capabilities with Power Drones",
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

  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      ease: [0.42, 0, 0.58, 1] // standard easeInOut
    },
  };

  const hoverVariants = {
    hover: {
      y: -20,
      ease: [0.42, 0, 0.58, 1] // standard easeInOut
    },
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.12,
      rotate: 3,
      ease: [0.42, 0, 0.58, 1] // standard easeInOut
    },
  };

  return (
    <div
      ref={containerRef}
      className={`min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden
        ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      {/* Floating Header */}
      <motion.div
        style={{ y }}
        className="max-w-5xl mx-auto text-center mb-24"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`text-base sm:text-lg font-semibold mb-4 tracking-wider
            ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          Redefine Aerial Imaging
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 
            bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
        >
          Push the Boundaries
          <br />
          of Aerial Technology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed
            ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          Unlock the Full Potential of Aerial Imaging with Our Advanced Drone
          Solutions. Capture stunning footage, conduct efficient inspections,
          and revolutionize your industry with cutting-edge drone innovation.
        </motion.p>
      </motion.div>

      {/* Cards Grid */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <motion.div
                variants={hoverVariants}
                className={`rounded-2xl overflow-hidden h-full p-8 flex flex-col
                  backdrop-blur-xl border 
                  ${
                    isDark
                      ? "bg-white/5 border-white/10"
                      : "bg-black/5 border-black/10"
                  }
                  transition-all duration-500`}
              >
                <motion.div
                  variants={imageHoverVariants}
                  className="w-full h-64 rounded-xl overflow-hidden mb-8 shadow-2xl"
                >
                  <img
                    src={isDark ? card.imageDark : card.imageLight}
                    alt={`Card ${index + 1}`}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-700"
                  />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className={`text-2xl font-bold mb-8 leading-tight
                    ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  {card.title}
                </motion.h3>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-xl font-bold mt-auto shadow-lg
                    transition-all duration-300
                    ${
                      isDark
                        ? "bg-gradient-to-r from-blue-600 to-purple-700 text-white"
                        : "bg-gray-900 text-white"
                    }`}
                >
                  Read More →
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
