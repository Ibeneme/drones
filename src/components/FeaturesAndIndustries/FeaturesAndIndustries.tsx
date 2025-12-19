import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { useTheme } from "../../contexts/ThemeProvider";
import {
  ShieldCheck,
  Zap,
  Calendar,
  Star,
  Home,
  HardHat,
  Megaphone,
  Briefcase,
  FileBadge,
  Cpu,
  Package,
} from "lucide-react";

interface FeaturesAndIndustriesProps {
  featuresRef?: React.RefObject<HTMLDivElement | null>;
  industriesRef?: React.RefObject<HTMLDivElement | null>;
}

const features = [
  {
    icon: FileBadge,
    title: "Certified Pilots",
    description:
      "CAA-certified professionals with extensive flight experience.",
  },
  {
    icon: Cpu,
    title: "Advanced Equipment",
    description:
      "Utilizing the latest DJI and professional-grade drone fleets.",
  },
  {
    icon: Package,
    title: "Full Compliance",
    description: "All operations meet strict UK airspace regulations.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Rapid data processing and project delivery within 48 hours.",
  },
  {
    icon: Calendar,
    title: "24/7 Operations",
    description:
      "Flexible scheduling including night flights and emergency response.",
  },
  {
    icon: Star,
    title: "Professional Results",
    description: "Stunning 4K footage and sub-centimeter accuracy in imagery.",
  },
];

const industries = [
  { icon: Home, title: "Real Estate" },
  { icon: HardHat, title: "Construction" },
  { icon: Briefcase, title: "Events" },
  { icon: Megaphone, title: "Advertising" },
  { icon: ShieldCheck, title: "Infrastructure" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const FeaturesAndIndustries: React.FC<FeaturesAndIndustriesProps> = ({
  featuresRef,
  industriesRef,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headerY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={sectionRef}
      className={`py-24 sm:py-32 transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={featuresRef} className="text-center mb-16 scroll-mt-32">
          <motion.div style={{ y: headerY }}>
            <p
              className={`text-xs font-black uppercase tracking-[0.3em] mb-4 ${
                isDark ? "text-blue-500" : "text-blue-600"
              }`}
            >
              Why Choose Us
            </p>
            <h2
              className={`text-4xl md:text-5xl font-black mb-12 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Excellence in Every <span className="text-blue-500">Flight</span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-2xl border ${
                isDark
                  ? "bg-white/5 border-white/10 text-white"
                  : "bg-white border-gray-100 shadow-md"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center ${
                  isDark
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                <f.icon />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div ref={industriesRef} className="relative scroll-mt-32">
          <div className="text-center mb-16 relative z-10">
            <motion.div style={{ y: headerY }}>
              <p
                className={`text-xs font-black uppercase tracking-[0.3em] mb-4 ${
                  isDark ? "text-blue-500" : "text-blue-600"
                }`}
              >
                Industries We Serve
              </p>
              <h2
                className={`text-4xl md:text-5xl font-black ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Versatile Solutions
              </h2>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {industries.map((ind) => (
              <motion.div
                key={ind.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`p-6 rounded-2xl text-center border ${
                  isDark
                    ? "bg-white/5 border-white/5 text-white"
                    : "bg-gray-50 border-gray-100 shadow-sm"
                }`}
              >
                <ind.icon
                  className={`w-8 h-8 mx-auto mb-4 ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <h3 className="text-xs font-bold uppercase tracking-widest">
                  {ind.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndIndustries;
