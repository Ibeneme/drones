import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";

// --- 1. Data Definitions ---

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

// --- 2. Reusable Accordion Item Component ---

const AccordionItem: React.FC<
  FaqItem & {
    isOpen: boolean;
    setOpen: (index: number | null) => void;
    index: number;
  }
> = ({ question, answer, isOpen, setOpen, index }) => {
  return (
    <motion.div
      className="border-b border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }} // Stagger initial load
    >
      <button
        onClick={() => setOpen(isOpen ? null : index)}
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-gray-900 hover:text-blue-600 transition"
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-blue-600" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-gray-600 text-sm leading-relaxed pr-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- 3. Main FAQ Component ---

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 sm:py-24 mt-[100px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-600 bg-blue-100/50 py-1 px-3 inline-block rounded-full mb-3">
            AeroEmperor FAQs
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Without a doubt, everyone has questions when it comes to drones.
            Here are some of the most common ones we receive – if you need
            further details, please do get in touch.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="bg-white rounded-xl  p-6 md:p-10 border border-gray-100">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              {...item}
              index={index}
              isOpen={openIndex === index}
              setOpen={setOpenIndex}
            />
          ))}
        </div>

        {/* CTA Banner/Footer */}
        <div className="mt-12 p-8 bg-blue-600 rounded-xl  flex flex-col md:flex-row items-center justify-between text-white">
          <p className="text-xl font-semibold mb-4 md:mb-0">
            Still have questions? Contact our experts directly.
          </p>
          <a
            href="#contact" // Link to your Contact section
            className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition shadow-md"
          >
            <Mail className="mr-2 w-5 h-5" />
            Get in Touch Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
