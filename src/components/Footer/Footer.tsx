import React from "react";
import { Camera } from "lucide-react";

// --- 1. Data Definitions for Navigation Columns ---

interface FooterLink {
  name: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const serviceLinks: FooterLink[] = [
  { name: "Aerial Photography", href: "#" },
  { name: "Videography", href: "#" },
  { name: "Surveying", href: "#" },
  { name: "3D Mapping", href: "#" },
];

const industriesLinks: FooterLink[] = [
  { name: "Real Estate", href: "#" },
  { name: "Construction", href: "#" },
  { name: "Events", href: "#" },
  { name: "Agriculture", href: "#" },
];

const companyLinks: FooterLink[] = [
  { name: "About Us", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const footerColumns: FooterColumn[] = [
  { title: "Services", links: serviceLinks },
  { title: "Industries", links: industriesLinks },
  { title: "Company", links: companyLinks },
];

// --- 2. Reusable Link Column Component ---

const FooterLinkColumn: React.FC<FooterColumn> = ({ title, links }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-gray-400 hover:text-white text-sm transition duration-150"
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
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 border-b border-gray-700 pb-12">
          {/* Column 1: Logo and Tagline */}
          <div className="col-span-2 lg:col-span-2 space-y-4 pr-10">
            <div className="flex items-center">
              <span className="bg-blue-600 p-2 rounded-lg text-white">
                <Camera className="w-5 h-5" />
              </span>
              <span className="ml-3 text-xl font-bold text-white">
                AeroEmeperor
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Professional drone services powered by certified pilots and
              cutting-edge technology.
            </p>
          </div>

          {/* Columns 2-4: Navigation Links */}
          {footerColumns.map((column) => (
            <FooterLinkColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>

        {/* Copyright Section */}
        <div className="pt-8 text-center md:text-left">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AeroEmeperor. All rights reserved.
            Powered by CloudVisual white label drone services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
