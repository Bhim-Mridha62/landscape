import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Compass,
} from "lucide-react";

interface FooterProps {
  onNavigate: (section: string) => void;
  onOpenConsultation?: () => void;
  onOpenMonograph?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full text-white bg-[#1a231c] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Logo & About Description */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/logo.png"
                  alt="HSS7 Landscaping"
                  className="h-24 w-auto object-contain"
                />
              </div>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
                HSS7 Landscaping is a Dubai-based contractor specializing in
                landscaping, swimming pool design, interior design, custom
                joinery, and interior fit-out services across Palm Jumeirah,
                Dubai Hills Estate, Arabian Ranches, and other prime UAE
                communities.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 text-white/90">
              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                className="hover:text-white transition-colors p-1"
              >
                <Facebook size={22} />
              </a>
              <a
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
                className="hover:text-white transition-colors p-1"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="hover:text-white transition-colors p-1"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#youtube"
                onClick={(e) => e.preventDefault()}
                className="hover:text-white transition-colors p-1"
              >
                <Youtube size={22} />
              </a>
              <a
                href="#pinterest"
                onClick={(e) => e.preventDefault()}
                className="hover:text-white transition-colors p-1"
              >
                <Compass size={22} />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Links
            </h4>
            <ul className="space-y-3.5 text-sm tracking-wide text-white/80 font-light">
              <li>
                <button
                  onClick={() => onNavigate("terms")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("privacy")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("blog")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Services
            </h4>
            <ul className="space-y-3.5 text-sm tracking-wide text-white/80 font-light">
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Landscaping Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Interior Design Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Pool Design Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Joinery Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Interior Fit-out
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Contact Us
            </h4>

            {/* Office Address */}
            <div className="flex items-start gap-3.5 text-sm text-white/80 font-light">
              <MapPin size={20} className="text-white shrink-0 mt-1" />
              <div>
                <strong className="text-white font-medium block mb-1">
                  Office Address
                </strong>
                Ras Al Khor Industrial Area 1, Omar Ahmed
                <br />
                Al Tayer Warehouse No. 9, Dubai, UAE
              </div>
            </div>

            {/* Call for Inquiry */}
            <div className="flex items-start gap-3.5 text-sm text-white/80 font-light">
              <Phone size={20} className="text-white shrink-0 mt-1" />
              <div>
                <strong className="text-white font-medium block mb-1">
                  Call for Inquiry
                </strong>
                <a href="tel:+971525259513" className="hover:text-white block">
                  +971 52 525 9513
                </a>
                <a href="tel:+971043530877" className="hover:text-white block">
                  +971 043530877
                </a>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-start gap-3.5 text-sm text-white/80 font-light">
              <Mail size={20} className="text-white shrink-0 mt-1" />
              <div>
                <strong className="text-white font-medium block mb-1">
                  Email Us
                </strong>
                <a
                  href="mailto:info@hss7architects.ae"
                  className="hover:text-white"
                >
                  info@hss7architects.ae
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 text-center text-sm text-white/60 tracking-wider">
          © 2015 – 2026 HSS7 Landscaping Works L.L.C. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
