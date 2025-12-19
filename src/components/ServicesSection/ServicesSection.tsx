import React from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Video,
  FileText,
  Map,
  Search,
  Leaf,
  ArrowUpRight,
} from "lucide-react";
import { useTheme } from "../../contexts/ThemeProvider"; // Integrated context
import type { Variants } from "framer-motion";

// Asset imports remain the same
import serv1 from "../../assets/images/serv1.jpeg";
import serv2 from "../../assets/images/serv2.jpeg";
import serv3 from "../../assets/images/serv3.jpeg";
import serv4 from "../../assets/images/serv4.jpeg";
import serv5 from "../../assets/images/serv5.jpeg";
import serv6 from "../../assets/images/serv6.jpeg";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  imageSrc: string;
}

const services: Service[] = [
  {
    icon: Camera,
    title: "Aerial Photography",
    description:
      "Stunning high-resolution aerial photographs for real estate and marketing.",
    imageSrc: serv1,
  },
  {
    icon: Video,
    title: "Aerial Videography",
    description:
      "Cinematic 4K aerial video production for commercials and documentaries.",
    imageSrc: serv2,
  },
  {
    icon: FileText,
    title: "Construction Surveying",
    description:
      "Accurate site surveys and 3D mapping for construction projects.",
    imageSrc: serv3,
  },
  {
    icon: Map,
    title: "3D Mapping & Modeling",
    description:
      "Detailed 3D models and topographic maps for planning and analysis.",
    imageSrc: serv4,
  },
  {
    icon: Search,
    title: "Infrastructure Inspection",
    description:
      "Safe inspections of buildings, bridges, and industrial facilities.",
    imageSrc: serv5,
  },
  {
    icon: Leaf,
    title: "Agricultural Analysis",
    description: "Crop health monitoring and precision agriculture solutions.",
    imageSrc: serv6,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 70, damping: 15 },
  },
};

const ServiceCard: React.FC<{ service: Service; isDark: boolean }> = ({
  service,
  isDark,
}) => {
  const IconComponent = service.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -12 }}
      className={`relative group rounded-3xl overflow-hidden border transition-all duration-500
        ${
          isDark
            ? "bg-white/5 border-white/10 hover:bg-white/10"
            : "bg-black/5 border-black/5 hover:bg-white hover:shadow-2xl"
        }`}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1, rotate: 1 }}
          transition={{ duration: 0.6 }}
          src={service.imageSrc}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        {/* Glass Overlay on Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

        <div
          className={`absolute bottom-4 left-4 p-3 rounded-2xl backdrop-blur-md border
          ${
            isDark
              ? "bg-blue-500/20 border-white/20"
              : "bg-blue-600/90 border-blue-400"
          }`}
        >
          <IconComponent className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3
            className={`text-2xl font-bold leading-tight transition-colors duration-300
            ${
              isDark ? "text-white" : "text-gray-900"
            } group-hover:text-blue-500`}
          >
            {service.title}
          </h3>
          <ArrowUpRight
            className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0
            ${isDark ? "text-blue-400" : "text-blue-600"}`}
          />
        </div>

        <p
          className={`text-base leading-relaxed mb-6 transition-colors duration-300
          ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          {service.description}
        </p>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`text-sm font-bold tracking-wider uppercase flex items-center gap-2
            ${isDark ? "text-blue-400" : "text-blue-600"}`}
        >
          View Details
          <div className="h-px w-8 bg-current opacity-30 group-hover:w-12 transition-all duration-300" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`relative py-24 sm:py-32 transition-colors duration-500
      ${isDark ? "bg-[#050505]" : "bg-gray-50"}`}
    >
      {/* Decorative Blur Background */}
      <div
        className={`absolute left-0 top-1/4 w-72 h-72 blur-[120px] rounded-full opacity-10 pointer-events-none
        ${isDark ? "bg-blue-600" : "bg-blue-300"}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border
              ${
                isDark
                  ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                  : "bg-blue-50 border-blue-100 text-blue-600"
              }`}
            >
              Our Expertise
            </span>
            <h2
              className={`text-4xl md:text-6xl font-black mb-6 tracking-tight
              ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Advanced Drone <span className="text-blue-500">Solutions</span>
            </h2>
            <div
              className={`h-1.5 w-24 mx-auto rounded-full mb-8 bg-gradient-to-r from-blue-500 to-indigo-600`}
            />
            <p
              className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed
              ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              Leveraging aerospace technology to provide professional insights
              and unmatched visual storytelling.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} isDark={isDark} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
