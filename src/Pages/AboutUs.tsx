import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Handshake,
  Award,
  Zap,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeProvider";

const AboutUs: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const values = [
    {
      title: "Precision",
      icon: Target,
      desc: "Meticulous planning and execution for exact results.",
    },
    {
      title: "Partnership",
      icon: Handshake,
      desc: "We act as an extension of your team, not just a vendor.",
    },
    {
      title: "Excellence",
      icon: Award,
      desc: "Setting industry-grade quality standards in every flight.",
    },
    {
      title: "Innovation",
      icon: Zap,
      desc: "Constantly evolving with cutting-edge UAV methodologies.",
    },
  ];

  const roadmap = [
    {
      year: "2025",
      title: "Foundation & Consulting",
      desc: "Established with a lean, consulting-first model. Built a global network of vetted elite pilots.",
    },
    {
      year: "2027",
      title: "Hybrid Operations",
      desc: "Acquisition of in-house enterprise fleet and specialized sensor payloads.",
    },
    {
      year: "2028+",
      title: "Full-Service Expansion",
      desc: "Launching the AeroEmperor Academy and proprietary data analysis software.",
    },
  ];

  return (
    <div
      className={`pt-32 pb-24 transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- SECTION 1: HERO & INTRO --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] border border-blue-500/20 px-4 py-1.5 rounded-full">
              Our Identity
            </span>
            <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8 tracking-tighter leading-[1.1]">
              Your Strategic{" "}
              <span className="text-blue-500">Drone Partner.</span>
            </h1>
            <p
              className={`text-xl leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              AeroEmperor acts as your strategic architect in the sky. We
              connect specialized enterprises with elite drone operators,
              overseeing end-to-end aerial projects with a focus on compliance,
              strategy, and cinematic excellence.
            </p>
          </motion.div>

          {/* Mission/Vision Bento */}
          <div className="grid grid-cols-1 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className={`p-8 rounded-[2.5rem] border ${
                isDark
                  ? "bg-white/5 border-white/10"
                  : "bg-gray-50 border-gray-100 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-4 mb-4 text-blue-500">
                <Target size={32} />
                <h3 className="text-2xl font-black">Our Mission</h3>
              </div>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                To simplify access to high-quality drone services by guiding
                clients through the complex UAV ecosystem and delivering
                exceptional results.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className={`p-8 rounded-[2.5rem] border ${
                isDark
                  ? "bg-blue-600 text-white shadow-xl shadow-blue-500/20"
                  : "bg-blue-600 text-white shadow-xl"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <Eye size={32} />
                <h3 className="text-2xl font-black">Our Vision</h3>
              </div>
              <p className={isDark ? "text-blue-100" : "text-blue-50"}>
                To transform how businesses leverage aerial intelligence through
                advanced UAV technology, in-house fleets, and industry-defining
                partnerships.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- SECTION 2: OUR STORY --- */}
        <div
          className={`mb-32 p-12 md:p-20 rounded-[3.5rem] relative overflow-hidden
          ${
            isDark
              ? "bg-white/5 border border-white/10"
              : "bg-gray-50 border border-gray-200"
          }`}
        >
          <div className="max-w-3xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8">
              Building the future, <br />
              <span className="text-blue-500">one project at a time.</span>
            </h2>
            <div
              className={`space-y-6 text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <p>
                AeroEmperor was founded to bridge the gap between businesses
                needing drone intelligence and the complex regulatory world of
                UAV operators. We recognized that finding the right pilot isn't
                enough—you need strategy and quality control.
              </p>
              <p>
                Our consulting-first approach sets us apart. We don't just
                connect clients with hardware; we guide them through compliance
                and execution, positioning ourselves as trusted advisors in the
                airspace.
              </p>
            </div>
          </div>
          {/* Decorative Radar Element */}
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10 pointer-events-none">
            <div className="w-full h-full border-[1px] border-blue-500 rounded-full animate-ping" />
          </div>
        </div>

        {/* --- SECTION 3: VALUES --- */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              What <span className="text-blue-500">Drives Us</span>
            </h2>
            <p className={isDark ? "text-gray-400" : "text-gray-600"}>
              Core principles that guide every decision and project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center group">
                <div
                  className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 transition-all duration-300
                  ${
                    isDark
                      ? "bg-white/5 group-hover:bg-blue-600/20"
                      : "bg-gray-50 group-hover:bg-blue-50"
                  }`}
                >
                  <v.icon className="w-10 h-10 text-blue-500" />
                </div>
                <h4 className="text-xl font-black mb-2">{v.title}</h4>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-500" : "text-gray-600"
                  }`}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 4: ROADMAP --- */}
        <div className="relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">
              Growth <span className="text-blue-500">Roadmap</span>
            </h2>
            <p className={isDark ? "text-gray-400" : "text-gray-600"}>
              Our strategic journey from consulting to global operations.
            </p>
          </div>

          <div className="relative space-y-12">
            {/* The Vertical Line */}
            <div
              className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-px ${
                isDark ? "bg-white/10" : "bg-gray-200"
              }`}
            />

            {roadmap.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Year Marker */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10" />

                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-16">
                  <div
                    className={`p-8 rounded-3xl border ${
                      isDark
                        ? "bg-white/5 border-white/10"
                        : "bg-white border-gray-100 shadow-xl"
                    }`}
                  >
                    <span className="text-3xl font-black text-blue-500 mb-2 block">
                      {item.year}
                    </span>
                    <h5 className="text-xl font-bold mb-4">{item.title}</h5>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
