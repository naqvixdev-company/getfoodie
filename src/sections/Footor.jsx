import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footor = () => {
  return (
    <footer className="relative bg-[#0d0d0d] text-white py-10 px-6 md:px-16 overflow-hidden">
      {/* Bottom Right Radiant Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 blur-[180px] opacity-30 -z-10" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Section 1 - Brand + Social */}
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-600 bg-clip-text text-transparent">
            Foodie
          </h2>
          <p className="mt-3 text-gray-400 text-sm">
            Your one-stop destination for delicious recipes, kitchen tips, and
            foodie inspiration.
          </p>
          <div className="flex gap-3 mt-5">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-110 transition-transform duration-300"
                >
                  <Icon className="text-white text-lg" />
                </a>
              )
            )}
          </div>
        </div>

        {/* Section 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {['Home', 'About', 'Why Us', 'Features'].map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3 - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>United State</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              <span>contact@foodie.io</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="mt-10 border-t border-white/10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear() }
         {"   "}Foodie Media Group, Inc. 
      </div>
    </footer>
  );
};

export default Footor;
