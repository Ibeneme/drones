import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { useTheme } from "../../contexts/ThemeProvider";

// Asset imports
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
    description: "High-end property listing.",
    imageSrc: serv1,
  },
  {
    tag: "Advertising",
    title: "Maritime Commercial",
    description: "Dynamic shipping promotional video.",
    imageSrc: serv2,
  },
  {
    tag: "Construction",
    title: "Urban Development",
    description: "Progress monitoring and surveying.",
    imageSrc: serv3,
  },
  {
    tag: "Videography",
    title: "City Skyline Documentary",
    description: "Cinematic urban footage.",
    imageSrc: serv4,
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      '"Their service and progress monitoring services are essential to ensure we are standardized and highly accountable."',
    name: "James Thompson",
    title: "Project Manager",
    company: "BuildTech Construction",
  },
  {
    quote:
      '"Outstanding cinematic quality for our commercial shoots. The team is professional and detail-oriented."',
    name: "Emily Chen",
    title: "Creative Director",
    company: "Creative Vision Studios",
  },
  {
    quote:
      '"Their seamless integration of aerial photography transformed our drone to a key service."',
    name: "Sarah Mitchell",
    title: "Marketing Director",
    company: "Realtor Properties Ltd",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const PortfolioAndTestimonials: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="portfolio"
      className={`py-24 sm:py-32 transition-colors duration-500 overflow-hidden
      ${isDark ? "bg-[#080808]" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- PORTFOLIO HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p
              className={`text-xs font-black uppercase tracking-[0.3em] mb-4 
              ${isDark ? "text-blue-500" : "text-blue-600"}`}
            >
              Our Work
            </p>
            <h2
              className={`text-4xl md:text-5xl font-black tracking-tight 
              ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Featured <span className="text-blue-500">Projects</span>
            </h2>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-xl font-bold text-sm border flex items-center gap-2 transition-all
              ${
                isDark
                  ? "border-white/10 text-white hover:bg-white/5"
                  : "border-black/10 text-gray-900 hover:bg-gray-50"
              }`}
          >
            View All Work <ExternalLink className="w-4 h-4" />
          </motion.button>
        </div>

        {/* --- PROJECTS GRID --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <motion.img
                  variants={{ hover: { scale: 1.1 } }}
                  transition={{ duration: 0.6 }}
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-600 text-white mb-4">
                  {project.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- TESTIMONIALS HEADER --- */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p
              className={`text-xs font-black uppercase tracking-[0.3em] mb-4 
              ${isDark ? "text-blue-500" : "text-blue-600"}`}
            >
              Feedback
            </p>
            <h2
              className={`text-4xl md:text-5xl font-black mb-4 tracking-tight 
              ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Client <span className="text-blue-500">Testimonials</span>
            </h2>
          </motion.div>
        </div>

        {/* --- TESTIMONIALS GRID --- */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`p-10 rounded-3xl border flex flex-col justify-between transition-all duration-500
                ${
                  isDark
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-gray-50 border-gray-100 hover:bg-white hover:shadow-2xl"
                }`}
            >
              <div>
                <Quote
                  className={`w-10 h-10 mb-6 ${
                    isDark ? "text-white/10" : "text-black/5"
                  }`}
                />
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p
                  className={`text-lg leading-relaxed italic mb-8 
                  ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white bg-gradient-to-br from-blue-600 to-indigo-700`}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p
                    className={`font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs text-blue-500 font-bold uppercase tracking-wider">
                    {t.title}
                  </p>
                  <p
                    className={`text-[10px] ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioAndTestimonials;
