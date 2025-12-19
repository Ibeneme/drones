import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Mail, Phone, MapPin, Send, ShieldCheck } from "lucide-react";
import { useTheme } from "../../contexts/ThemeProvider";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@aeroemeperor.com",
    link: "mailto:info@aeroemeperor.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+44 20 1234 5678",
    link: "tel:+442012345678",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "London, United Kingdom",
    link: "#",
  },
];

const sectionVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const useForm = (initialState: any) => {
  const [values, setValues] = useState(initialState);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return { values, handleChange };
};

interface ContactAndQuoteProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
  quoteRef: React.RefObject<HTMLDivElement | null>;
}

const ContactAndQuote: React.FC<ContactAndQuoteProps> = ({
  contactRef,
  quoteRef,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { values, handleChange } = useForm({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    serviceRequired: "",
    projectDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Quote request submitted! Check your email for confirmation.");
  };

  const inputClasses = `mt-1 block w-full rounded-xl py-3 px-4 transition-all duration-300 outline-none border 
    ${
      isDark
        ? "bg-white/5 border-white/10 text-white focus:border-blue-500 focus:bg-white/10 placeholder-gray-500"
        : "bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-600 focus:bg-white placeholder-gray-400"
    }`;

  const labelClasses = `block text-xs font-black uppercase tracking-widest mb-1 ${
    isDark ? "text-gray-400" : "text-gray-500"
  }`;

  return (
    <section
      className={`py-24 sm:py-32 transition-colors duration-500 overflow-hidden relative
      ${isDark ? "bg-black" : "bg-gray-50"}`}
    >
      {/* Background Decor */}
      <div
        className={`absolute bottom-0 right-0 w-96 h-96 blur-[150px] rounded-full opacity-10 pointer-events-none
        ${isDark ? "bg-blue-600" : "bg-blue-400"}`}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote Form Container */}
        <motion.div
          id="quote"
          ref={quoteRef}
          className={`relative p-8 md:p-14 rounded-[2.5rem] border transition-all duration-500 scroll-mt-32
            ${
              isDark
                ? "bg-white/5 border-white/10 shadow-[0_0_50px_-12px_rgba(59,130,246,0.2)]"
                : "bg-white border-gray-100 shadow-2xl"
            }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <div className="text-center mb-12">
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6
              ${
                isDark
                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  : "bg-blue-50 text-blue-600 border border-blue-100"
              }`}
            >
              Project Inquiry
            </span>
            <h2
              className={`text-4xl md:text-5xl font-black mb-4 tracking-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Get Your Custom <span className="text-blue-500">Quote</span>
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Submit your project details below. Our aviation experts will
              analyze your requirements and reach out within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="fullName" className={labelClasses}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Elon Musk"
                  value={values.fullName}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="emailAddress" className={labelClasses}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  placeholder="elon@spacex.com"
                  value={values.emailAddress}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className={labelClasses}>
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="+44 20 1234 5678"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="serviceRequired" className={labelClasses}>
                  Service Type
                </label>
                <input
                  type="text"
                  name="serviceRequired"
                  id="serviceRequired"
                  placeholder="e.g. 3D Mapping"
                  value={values.serviceRequired}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label htmlFor="projectDetails" className={labelClasses}>
                Project Scope
              </label>
              <textarea
                name="projectDetails"
                id="projectDetails"
                rows={4}
                placeholder="Tell us about the location, scale, and specific outputs needed..."
                value={values.projectDetails}
                onChange={handleChange}
                required
                className={`${inputClasses} resize-none`}
              />
            </div>

            <div
              className={`flex items-center gap-3 p-4 rounded-2xl text-xs font-medium border
              ${
                isDark
                  ? "bg-blue-500/5 border-blue-500/20 text-blue-400"
                  : "bg-blue-50 border-blue-100 text-blue-700"
              }`}
            >
              <ShieldCheck className="w-5 h-5 flex-shrink-0" />
              Your project data is handled with strict confidentiality and
              stored on encrypted UK-based servers.
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-5 rounded-2xl text-base font-black uppercase tracking-widest text-white 
                bg-gradient-to-r from-blue-600 to-indigo-700 shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-3"
            >
              Initialize Request
              <Send className="w-5 h-5" />
            </motion.button>
          </form>
        </motion.div>

        {/* Support Grid */}
        <div ref={contactRef} className="mt-32 scroll-mt-32">
          <div className="text-center mb-16">
            <h3
              className={`text-2xl font-black uppercase tracking-tighter ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Direct Communication Channels
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item) => (
              <motion.a
                key={item.title}
                href={item.link}
                variants={cardItemVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                className={`p-10 rounded-3xl border text-center flex flex-col items-center transition-all
                  ${
                    isDark
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-white border-gray-100 shadow-lg hover:shadow-2xl"
                  }`}
              >
                <div
                  className={`p-4 rounded-2xl mb-6 shadow-lg ${
                    isDark
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  <item.icon className="w-7 h-7" />
                </div>
                <p
                  className={`text-sm font-black uppercase tracking-widest mb-2 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {item.title}
                </p>
                <span
                  className={`text-lg font-bold ${
                    isDark ? "text-white" : "text-blue-600"
                  }`}
                >
                  {item.detail}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAndQuote;
