// components/HeroSection.tsx
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeProvider";

import lightHeroBg from "../assets/hero-light-bg.png";
import darkHeroBg from "../assets/hero-dark-bg.png";
import lightRightImage from "../assets/hero-right-light.png";
import darkRightImage from "../assets/hero-right-dark.png";

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const currentHeroBg = isDark ? darkHeroBg : lightHeroBg;
  const currentRightImage = isDark ? darkRightImage : lightRightImage;

  return (
    <section
      className={`
    relative w-full  flex items-center justify-center
    overflow-visible 
    transition-colors duration-500
    ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}
  `}
    >
      {/* Animated Background with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${currentHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0" />
      </motion.div>

      {/* Main Content */}
      <div className="relative w-full pt-[120px] md:pt-[0px]  overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 md:bg-transparent bg-black/40  z-0"></div>
        <img
          src={currentHeroBg}
          alt="Drone background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="relative z-10 h-full container mx-auto px-6 flex items-center md:py-[200px]  py-[100px]">
          <div className="flex flex-col md:flex-row items-start justify-between w-full gap-12">
            {/* Left: Text Content with Staggered Animation */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start text-left md:w-1/2 w-full"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`
    text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight mb-6
    ${isDark ? "text-white" : "text-white sm:text-[#000]"}
  `}
              >
                POWER DRONES
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`
    text-lg sm:text-xl md:text-2xl mb-10 max-w-lg leading-relaxed
    ${isDark ? "text-gray-300" : "text-white  sm:text-[#000]"}
  `}
              >
                Unlock the Future of Aerial Exploration with Our Top-Notch Drone
                Technology. Elevate Your Perspective and Capture Breathtaking
                Moments From Above.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-2xl text-lg font-bold tracking-wider bg-black text-white transition-all duration-300"
                >
                  EXPLORE NOW
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-2xl text-lg font-bold tracking-wider bg-gray-300 border-2 border-gray-300 text-black hover:bg-white/10 hover:border-emerald-500 transition-all duration-300"
                >
                  SHOP DRONES
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right: Floating Drone Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="md:w-1/2 flex justify-center md:justify-end w-full"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -3, 0],
                }}
                transition={{
                  duration: 12,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="relative"
              >
                <img
                  src={currentRightImage}
                  alt="Drone"
                  className="max-w-sm lg:max-w-lg h-auto object-contain"
                />
                <motion.div
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -inset-4 bg-emerald-500 rounded-full blur-3xl opacity-40 -z-10"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
