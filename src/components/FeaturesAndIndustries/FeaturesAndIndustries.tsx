import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
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

// --- Data Definitions ---
interface CardData {
  icon: React.ElementType<any>;
  title: string;
  description: string;
}

const features: CardData[] = [
  {
    icon: FileBadge,
    title: "Certified Pilots",
    description: "CAA-certified professionals...",
  },
  {
    icon: Cpu,
    title: "Advanced Equipment",
    description: "Latest DJI and professional-grade drones...",
  },
  {
    icon: Package,
    title: "Full Compliance",
    description: "All operations meet UK airspace regulations...",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Quick project completion...",
  },
  {
    icon: Calendar,
    title: "24/7 Operations",
    description: "Flexible scheduling including night flights...",
  },
  {
    icon: Star,
    title: "Professional Results",
    description: "Stunning 4K footage and high-resolution imagery...",
  },
];

const industries: CardData[] = [
  { icon: Home, title: "Real Estate", description: "Showcase properties..." },
  { icon: HardHat, title: "Construction", description: "Monitor progress..." },
  {
    icon: Briefcase,
    title: "Events",
    description: "Capture weddings, festivals...",
  },
  {
    icon: Megaphone,
    title: "Advertising",
    description: "Create compelling marketing content...",
  },
  {
    icon: ShieldCheck,
    title: "Infrastructure",
    description: "Inspect bridges, power lines...",
  },
];

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

// --- Feature Card Component ---
const FeatureCard: React.FC<CardData> = ({
  icon: Icon,
  title,
  description,
}) => (
  <motion.div
    className="items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl"
    variants={itemVariants}
  >
    <div className="flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-lg border border-blue-100 mb-8">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </motion.div>
);

// --- Main Component ---
interface FeaturesAndIndustriesProps {
  featuresRef?: React.RefObject<HTMLDivElement | null>;
  industriesRef?: React.RefObject<HTMLDivElement | null>;
}

const FeaturesAndIndustries: React.FC<FeaturesAndIndustriesProps> = ({
  featuresRef,
  industriesRef,
}) => (
  <section className="bg-gray-50 py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Features */}
      <div ref={featuresRef} className="text-center mb-20">
        <p className="text-sm font-medium text-blue-600 bg-blue-100/50 py-1 px-3 inline-block rounded-full mb-3">
          Why Choose Us
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Excellence in Every Flight
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </motion.div>

      {/* Industries */}
      <div ref={industriesRef} className="text-center mb-16 pt-10">
        <p className="text-sm font-medium text-blue-600 bg-blue-100/50 py-1 px-3 inline-block rounded-full mb-3">
          Industries We Serve
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Versatile Solutions Across Sectors
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {industries.map((industry) => (
          <FeatureCard key={industry.title} {...industry} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturesAndIndustries;
