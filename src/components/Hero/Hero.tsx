import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useTheme } from "../../contexts/ThemeProvider"; // Integrated context
import herodrone from "../../assets/images/herodrone.jpeg";

// Variants using the "spring" physics and staggered patterns we learned
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Parallax Effect logic
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Elements will move slightly slower than the scroll for a parallax feel
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const handleScroll = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <div
      ref={containerRef}
      className={`relative min-h-screen flex items-center py-16 sm:py-24 pt-32 transition-colors duration-500 overflow-hidden
        ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      {/* Visual Background Element (Subtle Gradient Glow) */}
      <div
        className={`pt-[200px] absolute top-0 right-0 w-1/2 h-1/2 blur-[120px] rounded-full opacity-20 pointer-events-none
        ${isDark ? "bg-blue-900" : "bg-blue-400"}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="flex-1 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className={`text-sm font-bold uppercase tracking-widest py-1 px-4 inline-block rounded-full mb-6 border
                ${
                  isDark
                    ? "text-blue-400 border-blue-900 bg-blue-900/20"
                    : "text-blue-600 border-blue-100 bg-blue-50"
                }`}
            >
              Professional Drone Services
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6"
            >
              Elevate Your Vision from{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
                Above
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`mt-3 text-lg sm:text-xl max-w-lg mb-10 leading-relaxed
                ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              Capture stunning aerial photography and high-precision surveys
              powered by certified pilots and cutting-edge drone technology.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleScroll("quote", e)}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl shadow-xl text-white 
                           bg-gradient-to-r from-blue-600 to-indigo-700 transition-all"
              >
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ y: -2 }}
                onClick={(e) => handleScroll("services", e)}
                className={`inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl border transition-all
                  ${
                    isDark
                      ? "border-gray-800 text-white hover:bg-white/5"
                      : "border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 max-w-md">
              {[
                { label: "Safety Record", value: "100%" },
                { label: "Projects", value: "500+" },
                { label: "Operations", value: "24/7" },
              ].map((stat, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <p className="text-3xl font-black">{stat.value}</p>
                  <p
                    className={`text-xs uppercase tracking-tighter font-semibold 
                    ${isDark ? "text-gray-500" : "text-gray-400"}`}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Container with Parallax and Hover */}
          <motion.div
            style={{ y: yParallax }}
            className="flex-1 order-1 lg:order-2 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ rotate: -1, scale: 1.02 }}
              className={`relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4
                ${isDark ? "border-white/10" : "border-black/5"}`}
            >
              <img
                src={herodrone}
                alt="Professional drone"
                className="w-full h-[400px] lg:h-[550px] object-cover"
              />

              {/* Floating Certification Badge (Glassmorphism) */}
              <motion.div
                className={`absolute bottom-6 left-6 p-4 rounded-2xl backdrop-blur-md shadow-2xl flex items-center space-x-3
                  ${
                    isDark
                      ? "bg-black/60 border border-white/20"
                      : "bg-white/80 border border-black/10"
                  }`}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="bg-green-500/20 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="font-bold text-sm">C&A Certified</p>
                  <p
                    className={`text-xs font-medium ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Fully Licensed
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
