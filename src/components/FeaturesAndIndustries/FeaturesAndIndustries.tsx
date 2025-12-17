import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Clock,
  Calendar,
  Star,
  Home,
  HardHat,
  Tractor,
  Megaphone,
  Briefcase,
  FileBadge, // Used for Certified Pilots
  Cpu, // Used for Advanced Equipment
  Package, // Used for Full Compliance
} from "lucide-react";

// --- 1. Data Definitions ---

interface CardData {
  icon: React.ElementType<any>;
  title: string;
  description: string;
}

const features: CardData[] = [
  {
    icon: FileBadge,
    title: "Certified Pilots",
    description:
      "CAA-certified professionals with extensive flight experience and perfect safety records.",
  },
  {
    icon: Cpu,
    title: "Advanced Equipment",
    description:
      "Latest DJI and professional-grade drones with 4K cameras and specialized sensors.",
  },
  {
    icon: Package,
    title: "Full Compliance",
    description:
      "All operations meet UK airspace regulations with comprehensive insurance coverage.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Quick project completion with professional post-production and editing services.",
  },
  {
    icon: Calendar,
    title: "24/7 Operations",
    description:
      "Flexible scheduling including night flights and congested area permissions.",
  },
  {
    icon: Star,
    title: "Professional Results",
    description:
      "Stunning 4K footage and high-resolution imagery that exceeds expectations.",
  },
];

const industries: CardData[] = [
  {
    icon: Home,
    title: "Real Estate",
    description:
      "Showcase properties from unique angles with stunning aerial photography and videography that sells faster.",
  },
  {
    icon: HardHat,
    title: "Construction",
    description:
      "Monitor progress, conduct surveys, and document projects with precise aerial data and visual records.",
  },
  {
    icon: Briefcase, // Used for Events
    title: "Events",
    description:
      "Capture weddings, festivals, and corporate events from spectacular aerial perspectives.",
  },
  {
    icon: Tractor,
    title: "Agriculture",
    description:
      "Optimize farming operations with crop monitoring, irrigation analysis, and field mapping.",
  },
  {
    icon: Megaphone,
    title: "Advertising",
    description:
      "Create compelling marketing content with cinematic aerial shots for campaigns and commercials.",
  },
  {
    icon: ShieldCheck, // Used for Infrastructure
    title: "Infrastructure",
    description:
      "Inspect bridges, power lines, and facilities safely with detailed aerial analysis.",
  },
];

// --- 2. Framer Motion Animation Variants ---

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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

const FeatureCard: React.FC<CardData> = ({
  icon: Icon,
  title,
  description,
}) => (
  <motion.div
    className=" items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl"
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
// --- 4. Main Component ---

interface FeaturesAndIndustriesProps {
  featuresRef?: React.RefObject<HTMLDivElement>;
  industriesRef?: React.RefObject<HTMLDivElement>;
}

const FeaturesAndIndustries: React.FC<FeaturesAndIndustriesProps> = ({
  featuresRef,
  industriesRef,
}) => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Section */}
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

        {/* Industries Section */}
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
};

export default FeaturesAndIndustries;
