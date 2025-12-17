import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
// Assuming you have this image import path set up correctly
import herodrone from "../../assets/images/herodrone.jpeg";

// Framer Motion Animation Variants (kept the same)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const imageCardVariants = {
  hidden: { x: 50, opacity: 0, rotate: 1 },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      delay: 0.4,
    },
  },
};

// Component Definition
interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  const handleScroll = (id: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default link behavior
    scrollToSection(id);
  };

  return (
    <div className="bg-white py-16 sm:py-24 pt-32 sm:pt-40">
      {" "}
      {/* Added padding top to account for fixed Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Content Column */}
          <motion.div
            className="order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tagline */}
            <motion.p
              className="text-sm font-medium text-blue-600 bg-blue-50 py-1 px-3 inline-block rounded-full mb-3"
              variants={itemVariants}
            >
              Professional Drone Services
            </motion.p>

            {/* Headline with Gradient Text */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4"
              variants={itemVariants}
            >
              Elevate Your Vision from
              <br />
              {/* Gradient Text Applied Here */}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text">
                Above
              </span>
            </motion.h1>

            {/* Subtitle/Description */}
            <motion.p
              className="mt-3 text-lg text-gray-600 max-w-lg mb-8"
              variants={itemVariants}
            >
              Professional aerial photography, videography, and surveying
              services powered by certified pilots and cutting-edge drone
              technology.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
              variants={itemVariants}
            >
              <a
                href="#contact"
                onClick={(e) => handleScroll("quote", e)}
                // Button with Gradient Applied Here
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white 
                           bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 transition"
              >
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#services"
                onClick={(e) => handleScroll("services", e)}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Statistics Section */}
            <div className="flex justify-between max-w-sm">
              <motion.div
                variants={itemVariants}
                className="text-center sm:text-left"
              >
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="mt-1 text-sm text-gray-500">Safety Record</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-center sm:text-left"
              >
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="mt-1 text-sm text-gray-500">Projects</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-center sm:text-left"
              >
                <p className="text-3xl font-bold text-gray-900">24/7</p>
                <p className="mt-1 text-sm text-gray-500">Operations</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            className="order-2 lg:order-2 relative"
            variants={imageCardVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Container for the image with dark background, rounded corners, and shadow */}
            <div className="w-full h-80 lg:h-[450px] bg-gray-900 rounded-xl shadow-2xl overflow-hidden relative">
              <img
                src={herodrone}
                alt="Professional drone sitting on its carrying case"
                className="w-full h-full object-cover object-center"
              />

              {/* Certification Badge (Bottom Right Overlay) */}
              <motion.div
                className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 1,
                }}
              >
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div className="text-sm leading-none">
                  <p className="font-bold text-gray-800">C&A Certified</p>
                  <p className="text-gray-500">Fully Licensed</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
