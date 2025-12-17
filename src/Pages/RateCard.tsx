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
} from "lucide-react";
import fallbackImage from "../assets/images/herodrone.jpeg";

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

// --- 2. Main Component ---

interface RateCardProps {
  serv1?: string; // Optional prop for the header image
}

const RateCard: React.FC<RateCardProps> = ({ serv1 }) => {
  const [activeTab, setActiveTab] = useState(rateCategories[0].title);

  // Framer Motion variants
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const currentCategory = rateCategories.find((cat) => cat.title === activeTab);

  return (
    <section className="bg-white pt-0 pb-16 sm:pb-24">
      {/* Header Image and Text */}
      <div className="relative h-120 overflow-hidden mb-16">
        <img
          src={serv1 || fallbackImage}
          alt="Drone flying over scenic landscape"
          className="w-full h-full object-cover brightness-[.65]"
        />
        <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center">
          <div className="max-w-4xl text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
              AeroEmperor Rate Card
            </h1>
            <p className="text-xl text-gray-200">
              World-class aerial film, photography, and data capture using elite
              pilots, advanced drone systems, and proven workflows.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-12">
          {rateCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveTab(category.title)}
              className={`flex items-center px-4 py-2 rounded-full font-medium text-sm transition-colors duration-300 ${
                activeTab === category.title
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.title}
            </button>
          ))}
        </div>

        {/* Rate Content */}
        <AnimatePresence mode="wait">
          {currentCategory && (
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={contentVariants}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {currentCategory.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col hover:shadow-md transition duration-300"
                >
                  <div className="flex mb-8 items-start justify-between">
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mb-8">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>

                  <p className="text-3xl font-extrabold text-blue-600 mb-3 border-b pb-3 border-blue-100">
                    {item.price}
                    <span className="text-sm font-medium text-gray-500 ml-1">
                      +VAT
                    </span>
                  </p>

                  <p className="text-sm text-gray-700 mb-4">
                    {item.description}
                  </p>

                  <ul className="space-y-2 mt-auto">
                    {item.includes.map((inc, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {inc}
                      </li>
                    ))}
                  </ul>

                  {item.notes && (
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-xs text-yellow-800 flex items-start">
                        <Info className="w-4 h-4 mr-1 flex-shrink-0 mt-0.5" />
                        {item.notes}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-16 pt-8 ">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center">
            <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
            Important Notes & Policy
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <span className="font-medium">Excludes VAT:</span> All listed
              rates are exclusive of Value Added Tax.
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <span className="font-medium">Scope Changes:</span> Weather
              delays, additional locations, extended flight time, or scope
              changes may incur additional charges.
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <span className="font-medium">Additional Costs:</span>{" "}
              Permissions, specialist permits, travel, and accommodation are
              quoted separately where applicable.
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <span className="font-medium">Final Pricing:</span> Pricing is
              confirmed only after a comprehensive project briefing.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RateCard;
