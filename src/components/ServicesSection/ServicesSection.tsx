import React from "react";
import { motion } from "framer-motion";
import { Camera, Video, FileText, Map, Search, Leaf } from "lucide-react";
import serv1 from "../../assets/images/serv1.jpeg";
import serv2 from "../../assets/images/serv2.jpeg";
import serv3 from "../../assets/images/serv3.jpeg";
import serv4 from "../../assets/images/serv4.jpeg";
import serv5 from "../../assets/images/serv5.jpeg";
import serv6 from "../../assets/images/serv6.jpeg";
import type { Variants } from "framer-motion";

interface Service {
  icon: React.ElementType<any>;
  title: string;
  description: string;
  imageSrc: string;
}

const services: Service[] = [
  {
    icon: Camera,
    title: "Aerial Photography",
    description:
      "Stunning high-resolution aerial photographs for real estate, events, and marketing campaigns. Capture breathtaking perspectives that elevate your brand.",
    imageSrc: serv1,
  },
  {
    icon: Video,
    title: "Aerial Videography",
    description:
      "Cinematic 4K aerial video production for commercials, documentaries, and promotional content. Professional-grade footage with smooth, dynamic movements.",
    imageSrc: serv2,
  },
  {
    icon: FileText,
    title: "Construction Surveying",
    description:
      "Accurate site surveys, progress monitoring, and 3D mapping for construction projects. Track development with precision aerial data collection.",
    imageSrc: serv3,
  },
  {
    icon: Map,
    title: "3D Mapping & Modeling",
    description:
      "Advanced photogrammetry services creating detailed 3D models and topographic maps. Perfect for planning, analysis, and visualization.",
    imageSrc: serv4,
  },
  {
    icon: Search,
    title: "Infrastructure Inspection",
    description:
      "Safe, efficient inspections of buildings, bridges, towers, and industrial facilities. Access hard-to-reach areas without scaffolding or climbers.",
    imageSrc: serv5,
  },
  {
    icon: Leaf,
    title: "Agricultural Analysis",
    description:
      "Crop health monitoring, field mapping, and precision agriculture solutions. Optimize yields with thermal imaging and multispectral analysis.",
    imageSrc: serv6,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 80 },
  },
};
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <motion.div
      className="bg-white rounded-xl transition duration-300 overflow-hidden group border border-gray-100"
      variants={cardVariants}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.imageSrc}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500"
        />
        <div className="absolute bottom-4 left-4 p-2 bg-blue-600/90 text-white rounded-md">
          <IconComponent className="w-5 h-5" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm">{service.description}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-blue-600 bg-blue-100/50 py-1 px-3 inline-block rounded-full mb-3">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Comprehensive Drone Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            From aerial photography to complex surveying, we deliver
            professional results for every project.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
