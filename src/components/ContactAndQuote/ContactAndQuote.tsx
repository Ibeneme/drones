import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Info } from "lucide-react";

// --- 1. Data Definitions ---

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

// --- 2. Framer Motion Animation Variants (Kept the same) ---

const sectionVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const cardContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

// --- 3. Custom Form Hook (Kept the same) ---

const useForm = (initialState: any) => {
  const [values, setValues] = useState(initialState);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return { values, handleChange, setValues };
};

// --- 4. Main Component Interface and Definition ---

interface ContactAndQuoteProps {
  contactRef: React.RefObject<HTMLDivElement>;
  quoteRef: React.RefObject<HTMLDivElement>;
}

const ContactAndQuote: React.FC<ContactAndQuoteProps> = ({
  contactRef,
  quoteRef,
}) => {
  const { values, handleChange } = useForm({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    serviceRequired: "",
    projectDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", values);
    // Add your actual API submission logic here
    alert("Quote request submitted! We will contact you within 24 hours.");
  };

  return (
    // The main section now only has styling, the refs are applied internally
    <section id="contact-section" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================================== */}
        {/* Section 1: Request a Quote Form (Receives 'quoteRef') */}
        {/* ================================== */}
        <motion.div
          id="quote" // Add ID here for consistency, but the ref is the main target
          ref={quoteRef} // ATTACHING THE QUOTE REF HERE (Targeted by "Get Quote" button)
          className="bg-white p-6 md:p-10 rounded-xl shadow-2xl border border-blue-100" // Elevated card styling
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <div className="text-center mb-8">
            <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
              Get Started Now
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-2">
              Get Your Custom Quote
            </h2>
            <p className="text-lg text-gray-600">
              Tell us about your project and we'll provide a detailed cost
              estimate within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="text-left">
            {/* Two-Column Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="John Smith"
                  value={values.fullName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                />
              </div>
              {/* Email Address */}
              <div className="flex flex-col">
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  placeholder="john@example.com"
                  value={values.emailAddress}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                />
              </div>
              {/* Phone Number */}
              <div className="flex flex-col">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="+44 20 1234 5678"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                />
              </div>
              {/* Service Required */}
              <div className="flex flex-col">
                <label
                  htmlFor="serviceRequired"
                  className="block text-sm font-medium text-gray-700"
                >
                  Service Required *
                </label>
                <input
                  type="text"
                  name="serviceRequired"
                  id="serviceRequired"
                  placeholder="e.g., Aerial Photography, Surveying"
                  value={values.serviceRequired}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                />
              </div>
            </div>

            {/* Project Details (Textarea) */}
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="projectDetails"
                className="block text-sm font-medium text-gray-700"
              >
                Project Details *
              </label>
              <textarea
                name="projectDetails"
                id="projectDetails"
                rows={4}
                placeholder="Please describe your project requirements, location, timeline, and any specific needs..."
                value={values.projectDetails}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-600 focus:border-blue-600 sm:text-sm resize-none"
              />
            </div>

            {/* Privacy Note */}
            <div className="flex items-center text-xs text-gray-500 mb-8">
              <Info className="w-4 h-4 mr-1.5 flex-shrink-0 text-blue-500" />
              Your data is safe. We use SSL encryption and never share your
              details with third parties.
            </div>

            {/* Submit Button (Gradient) */}
            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white 
                           bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 transition"
              >
                Submit Quote Request
                <Send className="ml-2 w-4 h-4" />
              </button>
            </div>
          </form>
        </motion.div>

        <motion.div
          className="text-center mb-10 pt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
          ref={contactRef} // ATTACHING THE CONTACT REF HERE (Targeted by "Contact" link)
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Other Ways to Connect
          </h2>
          <p className="text-md text-gray-600">
            Have questions? We're here to help.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {contactInfo.map((item) => (
            <motion.div
              key={item.title}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center flex flex-col items-center hover:shadow-lg transition duration-300"
              variants={cardItemVariants}
            >
              <div className="p-3 bg-blue-600 text-white rounded-full mb-3 shadow-md">
                {" "}
                {/* Accent color on icon background */}
                <item.icon className="w-6 h-6" />
              </div>
              <p className="text-lg font-bold text-gray-900 mb-1">
                {item.title}
              </p>
              <a
                href={item.link}
                className="text-sm text-blue-600 hover:text-blue-700 transition font-medium"
                target={item.title === "Visit Us" ? "_self" : "_blank"}
              >
                {item.detail}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactAndQuote;
