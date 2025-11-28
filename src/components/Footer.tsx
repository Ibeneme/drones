import { useTheme } from "../contexts/ThemeProvider";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import viteImage from "../assets/vite.png";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={`relative overflow-hidden transition-colors duration-300
        ${isDark ? "bg-black text-white" : "bg-white text-black"}
      `}
    >
      {/* Glowing Green Top Curve */}
      <div className="absolute top-0 left-0 right-0 h-4">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C360,80 1080,80 1440,0 L1440,120 L0,120 Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#006BFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#006BFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#006BFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Extra glow effect */}
        <div className="absolute inset-x-0 top-0 h-px bg-[#006BFF] blur-md" />
      </div>

      <div className="relative container mx-auto px-8 py-20 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-start space-y-8">
            <div className="flex items-center gap-3">
              <img src={viteImage} className="w-64 h-8" />
            </div>
            <p
              className={`text-sm leading-relaxed ${
                isDark ? "text-gray-500" : "text-gray-700"
              }`}
            >
              2024 Aero Emperor, Inc.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#006BFF] font-bold text-sm tracking-wider mb-6">
              Company
            </h3>
            <ul
              className={`space-y-4 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {["About Us", "Our Mission", "Leadership", "Careers"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={`transition ${
                        isDark ? "hover:text-white" : "hover:text-black"
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[#006BFF] font-bold text-sm tracking-wider mb-6">
              Resources
            </h3>
            <ul
              className={`space-y-4 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {["User Guides", "FAQs", "Blog", "Support"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`transition ${
                      isDark ? "hover:text-white" : "hover:text-black"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[#006BFF] font-bold text-sm tracking-wider mb-6">
              Connect
            </h3>
            <ul
              className={`space-y-4 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <li className="flex items-center gap-3" key={label}>
                  <Icon className="w-5 h-5" />
                  <a
                    href="#"
                    className={`transition ${
                      isDark ? "hover:text-white" : "hover:text-black"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom subtle line */}
        <div
          className={`mt-20 pt-8 border-t text-center text-sm ${
            isDark
              ? "border-white/10 text-gray-600"
              : "border-black/10 text-gray-600"
          }`}
        >
          © 2024 Aero Emperor, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
