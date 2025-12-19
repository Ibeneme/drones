import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Euro,
  Plane,
  Camera,
  Clock,
  Home,
  Building,
  Globe,
  Ship,
  Moon,
  Map,
  Calendar,
  Info,
  AlertTriangle,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import fallbackImage from "../assets/images/herodrone.jpeg";
import { useTheme } from "../contexts/ThemeProvider";

interface RateItem {
  title: string;
  price: string;
  description: string;
  includes: string[];
  notes?: string;
  icon: React.ElementType<any>;
}

interface RateCategory {
  title: string;
  icon: React.ElementType<any>;
  items: RateItem[];
}

const rateCategories: RateCategory[] = [
  {
    title: "Pilot Services",
    icon: Camera,
    items: [
      {
        title: "Full Day Rate",
        price: "£1,350",
        description:
          "Our full-day service provides maximum flexibility to capture your project without compromise. Ideal for complex shoots, multiple locations, or high-end productions.",
        includes: [
          "Up to 8 hours on site",
          "Advanced flight planning and coordination",
          "Professional aerial film and photography",
          "Fully insured and CAA-compliant operations",
        ],
        icon: Clock,
      },
      {
        title: "Half Day Rate",
        price: "£800",
        description:
          "Perfect for most commercial projects, offering up to four hours on site with a highly efficient workflow to maximise output and quality.",
        includes: [
          "Up to 4 hours on site",
          "Single or tightly scheduled locations",
          "Professional aerial imagery delivered to brief",
        ],
        icon: Clock,
      },
      {
        title: "Hourly Drone Rate",
        price: "£300 per hour",
        description:
          "Ideal for short captures, inspections, or supplementary footage where time on site is limited.",
        includes: [
          "2-hour minimum charge",
          "Quick setup and breakdown",
          "Rapid access to footage",
        ],
        icon: Clock,
      },
    ],
  },
  {
    title: "Specialist Filming",
    icon: Ship,
    items: [
      {
        title: "Property, Estates & Land Filming",
        price: "From £450 per property",
        description:
          "Striking aerial visuals that highlight scale, layout, and key features of residential, commercial property, estates, and land developments.",
        includes: [
          "Aerial photography and video",
          "Fully edited, high-resolution deliverables",
          "Fast turnaround available on request",
        ],
        icon: Home,
      },
      {
        title: "Yachts & Maritime Filming",
        price: "From £4,000 per project",
        description:
          "High-end aerial cinematography for vessels at sea, requiring specialist planning, marine coordination, and advanced piloting expertise. Each project is quoted individually.",
        includes: [
          "Specialist planning and marine coordination",
          "Advanced piloting expertise",
          "Detailed consultation required",
        ],
        icon: Ship,
      },
      {
        title: "Luxury Hotels, Resorts & Travel",
        price: "From £1,850",
        description:
          "Cinematic aerial imagery crafted specifically for luxury hospitality brands, resorts, and travel destinations.",
        includes: [
          "Ideal for websites and booking platforms",
          "Luxury marketing campaigns",
          "Social media and promotional content",
        ],
        icon: Globe,
      },
    ],
  },
  {
    title: "Data & Mapping",
    icon: Map,
    items: [
      {
        title: "Construction Progress Monitoring",
        price: "From £450 per visit",
        description:
          "Professional aerial documentation for construction and infrastructure projects, supporting project management and reporting.",
        includes: [
          "Progress photography and video",
          "Consistent viewpoints across visits",
          "Optional scheduled reporting packages",
        ],
        icon: Building,
      },
      {
        title: "Drone Mapping & Surveying",
        price: "From £450 per hectare",
        description:
          "High-precision drone mapping for land management, construction, and environmental analysis.",
        includes: [
          "High-resolution aerial data capture",
          "Fully processed maps and models",
          "Ready-to-use deliverables",
        ],
        icon: Map,
      },
      {
        title: "Virtual Tours & 360° Photospheres",
        price: "From £350",
        description:
          "Immersive 360° aerial tours allowing viewers to explore locations from a unique perspective.",
        includes: [
          "360° aerial imagery or video",
          "Optimised delivery for web and virtual platforms",
          "Google Street View–compatible capture available",
        ],
        icon: Camera,
      },
    ],
  },
  {
    title: "Special Conditions",
    icon: Plane,
    items: [
      {
        title: "International Projects (European)",
        price: "£1,600 per day",
        description:
          "Includes a daily travel/weather standby rate of £200. Travel, permits, fixers, and specialist logistics quoted separately.",
        includes: [
          "European operations",
          "Elite pilots and advanced systems",
          "Fully CAA/EASA compliant",
        ],
        icon: Euro,
      },
      {
        title: "International Projects (Worldwide)",
        price: "£1,850 per day",
        description:
          "Includes a daily travel/weather standby rate of £200. Travel, permits, fixers, and specialist logistics quoted separately.",
        includes: [
          "Worldwide operations",
          "Logistically challenging environments",
          "Specialist permitting included",
        ],
        icon: Globe,
      },
      {
        title: "Night Drone Filming",
        price: "From £850",
        description:
          "Certified night drone operations delivering cinematic low-light aerial footage and long-exposure photography.",
        includes: [
          "Night flight authorisation",
          "Specialist camera systems",
          "Advanced exposure and safety planning",
        ],
        icon: Moon,
      },
      {
        title: "Multi-Day Discounted Rates",
        price: "From £1,100 per day",
        description:
          "Available for extended projects requiring multiple consecutive shoot days. Pricing ensures cost efficiency without compromising quality.",
        includes: [
          "Cost efficiency for long projects",
          "Guaranteed crew availability",
          "Discount applied for 3+ consecutive days",
        ],
        icon: Calendar,
      },
    ],
  },
];

const RateCard: React.FC<{ serv1?: string }> = ({ serv1 }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeTab, setActiveTab] = useState(rateCategories[0].title);

  const currentCategory = rateCategories.find((cat) => cat.title === activeTab);

  return (
    <section
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      {/* --- PREMIUM HERO HEADER --- */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src={serv1 || fallbackImage}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 flex items-center justify-center
          ${
            isDark
              ? "bg-black/70 backdrop-blur-[2px]"
              : "bg-blue-900/40 backdrop-blur-[2px]"
          }`}
        >
          <div className="max-w-4xl text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] bg-blue-600 text-white mb-6">
                Investment Guide 2025
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                Transparent <span className="text-blue-500">Pricing.</span>
              </h1>
              <p className="text-xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed">
                World-class aerial intelligence and cinematography powered by
                elite pilots and enterprise-grade hardware.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-24">
        {/* --- TAB NAVIGATION (Glassmorphism) --- */}
        <div
          className={`p-2 rounded-2xl flex flex-wrap justify-center gap-2 mb-16 backdrop-blur-xl border
          ${
            isDark
              ? "bg-white/5 border-white/10"
              : "bg-white/80 border-gray-200 shadow-xl"
          }`}
        >
          {rateCategories.map((category) => {
            const isActive = activeTab === category.title;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(category.title)}
                className={`flex items-center px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/40"
                      : isDark
                      ? "text-gray-400 hover:text-white hover:bg-white/5"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                <category.icon
                  className={`w-4 h-4 mr-2 ${
                    isActive ? "text-white" : "text-blue-500"
                  }`}
                />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* --- RATE CONTENT GRID --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {currentCategory?.items.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`relative group p-8 rounded-[2rem] border transition-all duration-500 flex flex-col
                  ${
                    isDark
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-white border-gray-100 shadow-xl hover:shadow-2xl"
                  }`}
              >
                <div className="flex justify-between items-start mb-8">
                  <div
                    className={`p-3 rounded-2xl ${
                      isDark
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    Standard Tier
                  </span>
                </div>

                <h3
                  className={`text-2xl font-black mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-black text-blue-500">
                    {item.price}
                  </span>
                  <span
                    className={`text-xs font-bold ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    +VAT
                  </span>
                </div>

                <p
                  className={`text-sm leading-relaxed mb-8 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>

                <div
                  className={`mt-auto space-y-4 pt-8 border-t ${
                    isDark ? "border-white/5" : "border-gray-50"
                  }`}
                >
                  <p
                    className={`text-[10px] font-black uppercase tracking-tighter ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    Service Includes:
                  </p>
                  <ul className="space-y-3">
                    {item.includes.map((inc, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span
                          className={isDark ? "text-gray-300" : "text-gray-700"}
                        >
                          {inc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {item.notes && (
                  <div
                    className={`mt-6 p-4 rounded-xl flex gap-3 items-start border
                    ${
                      isDark
                        ? "bg-yellow-500/5 border-yellow-500/20 text-yellow-200"
                        : "bg-yellow-50 border-yellow-100 text-yellow-800"
                    }`}
                  >
                    <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p className="text-[11px] font-medium italic leading-snug">
                      {item.notes}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* --- TERMS & POLICY BOX --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`mt-20 p-10 md:p-14 rounded-[3rem] border relative overflow-hidden
            ${
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-gray-50 border-gray-200 shadow-inner"
            }`}
        >
          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="flex-1">
              <h3
                className={`text-3xl font-black mb-6 flex items-center gap-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                <AlertTriangle className="w-8 h-8 text-blue-500" />
                Terms of Engagement
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "All rates exclude VAT at 20%",
                  "Travel quoted at £0.55 per mile",
                  "Weather delays may incur standby fees",
                  "Specialist permits quoted upon request",
                  "50% Deposit required for new clients",
                  "Cancellation within 48h incurs 50% fee",
                ].map((policy, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span
                      className={`text-sm font-bold ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {policy}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-blue-500/40 flex items-center gap-2"
              >
                Download PDF Full Rates <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RateCard;
