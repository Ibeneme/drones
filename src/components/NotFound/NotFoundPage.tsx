import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Home, ArrowLeft, PlaneLanding } from "lucide-react";
import { useTheme } from "../../contexts/ThemeProvider";

const NotFoundPage: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-500 px-6 overflow-hidden relative
      ${isDark ? "bg-[#080808]" : "bg-gray-50"}`}
    >
      {/* --- BACKGROUND DECOR --- */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[120px] rounded-full opacity-10
        ${isDark ? "bg-blue-600" : "bg-blue-400"}`}
      />

      <motion.div
        className="max-w-2xl w-full relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Icon */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mb-8"
        >
          <div
            className={`p-6 rounded-3xl border shadow-2xl
            ${
              isDark
                ? "bg-white/5 border-white/10 text-blue-500"
                : "bg-white border-gray-200 text-blue-600"
            }`}
          >
            <PlaneLanding size={64} strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* 404 Text */}
        <motion.div variants={itemVariants} className="relative">
          <p
            className={`text-[12rem] md:text-[16rem] font-black leading-none select-none tracking-tighter
            ${isDark ? "text-white/[0.03]" : "text-gray-200/50"}`}
          >
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className={`text-4xl md:text-6xl font-black tracking-tight
               ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Signal <span className="text-blue-500">Lost</span>
            </h1>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
          <p
            className={`text-lg md:text-xl font-medium max-w-lg mx-auto leading-relaxed
            ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            The coordinates you requested are outside our current flight path.
            The drone has safely returned to base.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
          variants={itemVariants}
        >
          <a
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm text-white 
                       bg-gradient-to-r from-blue-600 to-indigo-700 shadow-xl shadow-blue-500/25 hover:scale-105 transition-transform"
          >
            <Home className="mr-3 w-5 h-5" />
            Return to Base
          </a>

          <button
            onClick={() => window.history.back()}
            className={`inline-flex items-center justify-center px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm border transition-all
              ${
                isDark
                  ? "border-white/10 text-white hover:bg-white/5"
                  : "border-gray-200 text-gray-700 bg-white hover:bg-gray-50 shadow-sm"
              }`}
          >
            <ArrowLeft className="mr-3 w-5 h-5" />
            Previous Sector
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
