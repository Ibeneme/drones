import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  ChevronUp,
} from "lucide-react";
import viteImage from "../../assets/vite.png";
import { useTheme } from "../../contexts/ThemeProvider";

// --- 1. Data Definitions ---

interface FooterLink {
  name: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const serviceLinks: FooterLink[] = [
  { name: "Aerial Photography", href: "#services" },
  { name: "Videography", href: "#services" },
  { name: "Surveying", href: "#services" },
  { name: "3D Mapping", href: "#services" },
];

const companyLinks: FooterLink[] = [
  { name: "About Us", href: "#home" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
  { name: "Privacy Policy", href: "#" },
];

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
];

// --- 2. Reusable Link Column Component ---

const FooterLinkColumn: React.FC<FooterColumn & { isDark: boolean }> = ({
  title,
  links,
  isDark,
}) => (
  <div className="space-y-6">
    <h3
      className={`text-xs font-black uppercase tracking-[0.2em] ${
        isDark ? "text-white" : "text-gray-900"
      }`}
    >
      {title}
    </h3>
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className={`text-sm font-medium transition-all duration-300 hover:translate-x-1 inline-block
              ${
                isDark
                  ? "text-gray-500 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// --- 3. Main Footer Component ---

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`relative border-t transition-colors duration-500 overflow-hidden
      ${isDark ? "bg-[#050505] border-white/5" : "bg-white border-gray-100"}`}
    >
      {/* Decorative Gradient Line (Aero-Horizon) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-20">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center cursor-pointer"
              onClick={scrollToTop}
            >
              <img
                src={viteImage}
                alt="AeroEmperor"
                className="h-8 w-auto object-contain"
              />
            </motion.div>

            <p
              className={`text-base leading-relaxed max-w-sm ${
                isDark ? "text-gray-500" : "text-gray-600"
              }`}
            >
              The global standard in precision aerial intelligence. Providing
              cinematic excellence and technical data capture for industry
              leaders.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={`p-3 rounded-xl border transition-all duration-300
                    ${
                      isDark
                        ? "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                        : "bg-gray-50 border-gray-100 text-gray-600 hover:text-blue-600 hover:bg-white hover:shadow-lg"
                    }`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-2">
            <FooterLinkColumn
              title="Services"
              links={serviceLinks}
              isDark={isDark}
            />
          </div>
          <div className="lg:col-span-2">
            <FooterLinkColumn
              title="Company"
              links={companyLinks}
              isDark={isDark}
            />
          </div>

          {/* Newsletter/Contact Mini Column */}
          <div className="lg:col-span-3 space-y-6">
            <h3
              className={`text-xs font-black uppercase tracking-[0.2em] ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div
                  className={`p-2 rounded-lg ${
                    isDark ? "bg-white/5" : "bg-gray-100"
                  }`}
                >
                  <Mail size={16} className="text-blue-500" />
                </div>
                <span
                  className={`text-sm font-medium ${
                    isDark
                      ? "text-gray-400 group-hover:text-white"
                      : "text-gray-600"
                  }`}
                >
                  ops@aeroemperor.com
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div
                  className={`p-2 rounded-lg ${
                    isDark ? "bg-white/5" : "bg-gray-100"
                  }`}
                >
                  <Phone size={16} className="text-blue-500" />
                </div>
                <span
                  className={`text-sm font-medium ${
                    isDark
                      ? "text-gray-400 group-hover:text-white"
                      : "text-gray-600"
                  }`}
                >
                  +44 20 8123 4567
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6
          ${isDark ? "border-white/5" : "border-gray-100"}`}
        >
          <p
            className={`text-[11px] font-black uppercase tracking-widest ${
              isDark ? "text-gray-600" : "text-gray-400"
            }`}
          >
            &copy; {new Date().getFullYear()} AeroEmperor. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className={`group flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors
              ${
                isDark
                  ? "text-gray-500 hover:text-white"
                  : "text-gray-400 hover:text-blue-600"
              }`}
          >
            Back to Top
            <div
              className={`p-2 rounded-lg transition-transform group-hover:-translate-y-1 
              ${isDark ? "bg-white/5" : "bg-gray-100"}`}
            >
              <ChevronUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
