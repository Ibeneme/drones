import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Zap,
  Crown,
  Rocket,
  Map,
  Sprout,
  Film,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeProvider";

const PricingPage: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const plans = [
    {
      name: "Basic",
      tagline: "Consulting Only",
      price: "£350",
      period: "per project",
      description: "Perfect for small businesses and one-time projects.",
      features: [
        "Initial consultation",
        "Project scoping",
        "Regulation guidance",
        "Vendor shortlist",
        "Quote comparison",
        "Recommended strategy",
      ],
      bestFor: "Small businesses, real estate",
      icon: Rocket,
      popular: false,
    },
    {
      name: "Standard",
      tagline: "Consulting + Operations",
      price: "£700-1,200",
      period: "per project",
      description: "Comprehensive project delivery and pilot management.",
      features: [
        "Everything in BASIC",
        "Pilot selection & management",
        "Pricing negotiation",
        "Full project management",
        "Quality control",
        "Deliverable review",
        "Final report & analysis",
      ],
      bestFor: "Construction, marketing, agriculture",
      icon: Zap,
      popular: true,
    },
    {
      name: "Enterprise",
      tagline: "Full Management",
      price: "£2,000+",
      period: "per project / mo",
      description: "Complete solutions for large-scale operations.",
      features: [
        "Everything in STANDARD",
        "Unlimited consulting",
        "Multiple flight missions",
        "Compliance documentation",
        "Data management",
        "LiDAR access",
        "Priority turnaround",
      ],
      bestFor: "Energy, gov, large construction",
      icon: Crown,
      popular: false,
    },
  ];

  const additionalServices = [
    {
      title: "LiDAR Mapping",
      price: "Custom Pricing",
      icon: Map,
      desc: "High-precision 3D terrain mapping and modeling.",
    },
    {
      title: "NDVI Agriculture",
      price: "From £500",
      icon: Sprout,
      desc: "Advanced crop health monitoring and precision analysis.",
    },
    {
      title: "Cinematic Pro",
      price: "From £800",
      icon: Film,
      desc: "Professional aerial cinematography for high-end film.",
    },
    {
      title: "Training",
      price: "Coming 2027",
      icon: GraduationCap,
      desc: "Compliance workshops and certification support.",
    },
  ];

  return (
    <div
      className={`pt-32 pb-24 transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] border border-blue-500/20 px-4 py-1.5 rounded-full"
          >
            Service Packages
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-black mt-6 mb-6 tracking-tighter">
            Choose Your <span className="text-blue-500">Perfect Plan</span>
          </h1>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Flexible drone solutions tailored to your project needs and budget.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col
                ${
                  plan.popular
                    ? isDark
                      ? "bg-blue-600/10 border-blue-500 shadow-[0_0_40px_-15px_rgba(59,130,246,0.5)]"
                      : "bg-white border-blue-600 shadow-2xl scale-105 z-10"
                    : isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-gray-50 border-gray-100"
                }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase px-6 py-2 rounded-full tracking-widest">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <plan.icon
                  className={`w-10 h-10 mb-6 ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <h3 className="text-3xl font-black mb-1">{plan.name}</h3>
                <p className="text-sm font-bold text-blue-500 uppercase tracking-widest">
                  {plan.tagline}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span
                    className={`text-xs font-bold ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-3 text-sm font-medium"
                  >
                    <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span
                      className={isDark ? "text-gray-300" : "text-gray-700"}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className={`mb-8 p-4 rounded-2xl ${
                  isDark ? "bg-white/5" : "bg-white border border-gray-100"
                }`}
              >
                <p
                  className={`text-[10px] font-black uppercase tracking-widest mb-1 ${
                    isDark ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  Best For:
                </p>
                <p className="text-xs font-bold">{plan.bestFor}</p>
              </div>

              <button
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all
                ${
                  plan.popular
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-500/30"
                    : isDark
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 shadow-sm"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-32">
          <h2 className="text-3xl font-black mb-12 text-center">
            Additional <span className="text-blue-500">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className={`p-8 rounded-[2rem] border transition-all duration-300 hover:y-[-5px]
                ${
                  isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-white border-gray-100 shadow-lg"
                }`}
              >
                <service.icon className="w-8 h-8 text-blue-500 mb-6" />
                <h4 className="font-black text-lg mb-2">{service.title}</h4>
                <p
                  className={`text-sm mb-6 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {service.desc}
                </p>
                <p className="text-sm font-black text-blue-500 uppercase tracking-tighter">
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Not Sure Banner */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className={`p-10 md:p-16 rounded-[3rem] border flex flex-col md:flex-row items-center justify-between gap-8
          ${
            isDark
              ? "bg-blue-600/10 border-blue-500/30"
              : "bg-blue-600 text-white shadow-2xl shadow-blue-600/20"
          }`}
        >
          <div>
            <h2
              className={`text-3xl font-black mb-4 ${!isDark && "text-white"}`}
            >
              Not Sure Which Plan to Choose?
            </h2>
            <p className={isDark ? "text-gray-400" : "text-blue-100"}>
              Our team will help you find the perfect solution for your project.
            </p>
          </div>
          <button
            className={`px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center gap-3 transition-all
            ${
              isDark
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 hover:bg-gray-100"
            }`}
          >
            Schedule Consultation <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;
