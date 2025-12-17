import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Star } from "lucide-react";
import serv1 from "../../assets/images/serv1.jpeg";
import serv2 from "../../assets/images/serv2.jpeg";
import serv3 from "../../assets/images/serv3.jpeg";
import serv4 from "../../assets/images/serv4.jpeg";

interface Project {
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const projects: Project[] = [
  {
    tag: "Real Estate",
    title: "Luxury Villa Aerial Tour",
    description: "Stunning aerial photography for a high-end property listing.",
    imageSrc: serv1,
  },
  {
    tag: "Advertising",
    title: "Maritime Commercial Shoot",
    description:
      "Dynamic aerial videography for a shipping company promotional video.",
    imageSrc: serv2,
  },
  {
    tag: "Construction",
    title: "Urban Development Project",
    description:
      "Progress monitoring and site surveying for large scale construction.",
    imageSrc: serv3,
  },
  {
    tag: "Videography",
    title: "City Skyline Documentary",
    description: "Cinematic aerial footage for urban documentary production.",
    imageSrc: serv4,
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      '"Their service and progress monitoring services are essential to ensure we are standardized and, most critically, highly accountable."',
    name: "James Thompson",
    title: "Project Manager",
    company: "BuildTech Construction",
  },
  {
    quote:
      '"Outstanding cinematic quality for our commercial shoots. The team is professional and extremely detail-oriented."',
    name: "Emily Chen",
    title: "Creative Director",
    company: "Creative Vision Studios",
  },
  {
    quote:
      '"Their seamless integration of aerial photography transformed our drone to a key service, and we’ve seen a 30% increase in catalog inquiries since using their services."',
    name: "Sarah Mitchell",
    title: "Marketing Director",
    company: "Realtor Properties Ltd",
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
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.div
    className="bg-white rounded-xl overflow-hidden border border-gray-100"
    variants={cardVariants}
  >
    <div className="relative h-48 lg:h-56 overflow-hidden">
      <img
        src={project.imageSrc}
        alt={project.title}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 bg-gray-900 text-white rounded-full">
        {project.tag}
      </span>
    </div>
    <div className="p-4 bg-white">
      <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
      <p className="text-sm text-gray-500">{project.description}</p>
    </div>
  </motion.div>
);

const TestimonialCard: React.FC<Testimonial> = ({
  quote,
  name,
  title,
  company,
}) => (
  <motion.div
    className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col justify-between h-full"
    variants={cardVariants}
  >
    <div>
      <div className="flex text-yellow-500 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <p className="text-sm text-gray-700 italic mb-4">{quote}</p>
    </div>
    <div className="mt-auto">
      <p className="text-md font-bold text-gray-900">{name}</p>
      <p className="text-sm text-blue-600">{title}</p>
      <p className="text-xs text-gray-500">{company}</p>
    </div>
  </motion.div>
);

const PortfolioAndTestimonials: React.FC = () => (
  <section className="bg-white py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Projects */}
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-blue-600 bg-blue-100/50 py-1 px-3 inline-block rounded-full mb-3">
          Our Work
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Recent Projects
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>

      {/* Testimonials */}
      <div className="text-center mb-16 pt-10">
        <p className="text-sm font-medium text-blue-600 bg-blue-100/50 py-1 px-3 inline-block rounded-full mb-3">
          Client Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          What Our Clients Say
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default PortfolioAndTestimonials;
