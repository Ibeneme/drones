import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFoundPage: React.FC = () => {
  // Framer Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-md w-full space-y-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <p className="text-9xl font-extrabold text-gray-200">404</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 className="text-3xl font-extrabold text-gray-900 mt-4">
            Page Not Found
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="mt-2 text-lg text-gray-600">
            Oops! It looks like you've navigated to a page that doesn't exist.
            The drone must have flown off with this URL.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
          variants={itemVariants}
        >
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white 
                       bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 transition"
          >
            <Home className="mr-2 w-5 h-5" />
            Go to Homepage
          </a>

          <a
            href="#"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 transition"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
