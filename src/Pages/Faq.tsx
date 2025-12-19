import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { useTheme } from "../contexts/ThemeProvider";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "How High & How Far Can You Fly?",
    answer:
      "The ceiling altitude of most drones is around 14,000 - 18,000ft, with a range of a few miles. However, the CAA restricts commercial drone flights to a maximum of 400ft altitude and 500 metres from the pilot.",
  },
  {
    question: "Are you insured?",
    answer:
      "CloudVisual holds drone-specific insurance with an industry-leading cover of £10m Public Liability and Employer's Liability, which can be increased on request.",
  },
  {
    question: "How long can your drones fly for?",
    answer:
      "Depending on the payload, flight times range from 20 to 45 minutes. Larger drones carrying heavier cameras will have shorter flight times, and factors such as weather, altitude, and flight style can also impact battery life.",
  },
  {
    question: "What is an OSC?",
    answer:
      "An Operational Safety Case (OSC) is an authorisation granted by the CAA that allows certain drone companies special exemptions – in our case, enabling us to fly our entire fleet within 5 metres of uninvolved people and structures.",
  },
  {
    question: "Can you fly your drones in London?",
    answer:
      "Yes! With our OSC, careful planning, and appropriate permissions, we can operate drones in Central London. Many areas of Greater London are drone-friendly with very few restrictions.",
  },
  {
    question: "Why use CloudVisual?",
    answer:
      "Established for over thirteen years, we bring a wealth of experience to every project. Our team of filmmakers and photographers know that capturing an amazing aerial shot takes more than just flying a drone.",
  },
  {
    question: "What cameras fly on your drones?",
    answer:
      "The Inspire 2 drone carries a DJI X5s – an industry-leading camera capable of filming up to 5.2K RAW – while our smaller drones are equipped with 4K stabilised cameras.",
  },
  {
    question: "Can I apply to work at CloudVisual?",
    answer:
      "At the moment we're not currently recruiting, but please check back as this FAQ page will update when we're next recruiting for drone operators or crew.",
  },
  {
    question: "What are your Rates?",
    answer:
      "Our day rate is £1100+VAT per day, with half-day rates from £650+VAT. We also offer fixed prices for smaller projects starting from £249+VAT.",
  },
  {
    question: "What Drone Services Do You Offer?",
    answer:
      "Our extensive fleet caters for almost every task – cinematography, photography, surveying, inspections, mapping, search & rescue, thermal imaging, 3D mapping, 360 tours, FPV and custom drone builds.",
  },
  {
    question: "What Are Your Payment Methods?",
    answer:
      "BACS is our primary payment method. We unfortunately cannot accept card payments.",
  },
  {
    question: "Can You Fly Higher Than 400ft?",
    answer:
      "With the correct permissions and authorisations from the CAA and NATS, we can apply for Non-Standard Flight authorisations to fly up to 500m above ground level. Please note that these require at least 28 days’ notice.",
  },
  {
    question: "What's a Drone Camera Operator?",
    answer:
      "The larger drones require two skilled operators – one to pilot the drone and another to control the camera gimbal for smooth, stable footage.",
  },
  {
    question: "Can you fly drones indoors?",
    answer:
      "Yes! Indoor drone flights are not subject to the same airspace restrictions. Our drones use advanced obstacle detection and avoidance systems to deliver safe, steady shots indoors.",
  },
  {
    question: "What's involved before you fly?",
    answer:
      "We conduct thorough planning before every project – including risk assessments, method statements, drone maintenance, and airspace checks – to ensure the highest safety standards.",
  },
];
const AccordionItem: React.FC<
  FaqItem & {
    isOpen: boolean;
    setOpen: (index: number | null) => void;
    index: number;
    isDark: boolean;
  }
> = ({ question, answer, isOpen, setOpen, index, isDark }) => {
  return (
    <motion.div
      className={`border-b transition-colors duration-300 ${
        isDark ? "border-white/10" : "border-gray-100"
      }`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={() => setOpen(isOpen ? null : index)}
        className="flex justify-between items-center w-full py-6 text-left group"
      >
        <span
          className={`text-lg font-bold transition-colors duration-300 pr-8
          ${
            isOpen
              ? "text-blue-500"
              : isDark
              ? "text-gray-200 group-hover:text-white"
              : "text-gray-900 group-hover:text-blue-600"
          }`}
        >
          {question}
        </span>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          className={`flex-shrink-0 p-2 rounded-full transition-colors
            ${
              isOpen
                ? isDark
                  ? "bg-blue-500/20"
                  : "bg-blue-50"
                : "bg-transparent"
            }`}
        >
          <ChevronDown
            className={`w-5 h-5 ${
              isOpen
                ? "text-blue-500"
                : isDark
                ? "text-gray-500"
                : "text-gray-400"
            }`}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p
              className={`pb-6 text-base leading-relaxed max-w-3xl
              ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`py-24 sm:py-32 transition-colors duration-500 overflow-hidden
      ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative Background Blur */}
        <div
          className={`absolute -top-20 -left-20 w-64 h-64 blur-[120px] rounded-full opacity-10 pointer-events-none
          ${isDark ? "bg-blue-600" : "bg-blue-400"}`}
        />

        {/* Header Section */}
        <div className="text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border
              ${
                isDark
                  ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                  : "bg-blue-50 border-blue-100 text-blue-600"
              }`}
            >
              Knowledge Base
            </span>
            <h2
              className={`text-4xl md:text-5xl font-black mb-6 tracking-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Common <span className="text-blue-500">Questions</span>
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Understanding drone regulations and capabilities is key to a
              successful project. Find answers to our most frequently asked
              questions below.
            </p>
          </motion.div>
        </div>

        {/* Accordion Container */}
        <motion.div
          className={`rounded-[2.5rem] p-4 md:p-10 border transition-all duration-500
            ${
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-gray-50 border-gray-100 shadow-sm"
            }`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              {...item}
              index={index}
              isOpen={openIndex === index}
              setOpen={setOpenIndex}
              isDark={isDark}
            />
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-16 p-8 md:p-12 rounded-[2rem] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8
            ${
              isDark
                ? "bg-blue-600/10 border border-blue-500/20"
                : "bg-blue-600 shadow-2xl shadow-blue-600/30"
            }`}
        >
          {/* Subtle sparkle effect for light mode banner */}
          {!isDark && (
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
          )}

          <div className="relative z-10 text-center md:text-left">
            <h3
              className={`text-2xl font-black mb-2 ${
                isDark ? "text-white" : "text-white"
              }`}
            >
              Still have questions?
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-blue-100"}`}>
              Our experts are ready to discuss your specific mission
              requirements.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative z-10 inline-flex items-center px-8 py-4 text-sm font-black uppercase tracking-widest rounded-xl transition shadow-xl
              ${
                isDark
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "bg-white text-blue-600 hover:bg-gray-50"
              }`}
          >
            <Mail className="mr-3 w-5 h-5" />
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
