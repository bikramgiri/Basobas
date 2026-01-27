import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 border-t border-zinc-900/50 px-6 py-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          {/* Left: Brand Identity */}
          <div className="flex justify-center md:justify-start">
            <Link to="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center font-black text-white italic text-xl shadow-lg shadow-emerald-900/40 group-hover:scale-110 transition-transform duration-300">
                B
              </div>
              <div className="flex flex-col">
                <span className="text-emerald-500 font-bold tracking-[0.4em] text-[10px] uppercase leading-none mb-1">Basobas</span>
                <span className="text-zinc-600 text-[10px] uppercase tracking-widest font-medium">Hostel Solutions</span>
              </div>
            </Link>
          </div>

          {/* Center: Quick Links */}
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-widest font-bold text-zinc-600 mb-3">
              Quick Links
            </p>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-zinc-400 hover:text-emerald-400 transition-colors duration-300 text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="text-zinc-400 hover:text-emerald-400 transition-colors duration-300 text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="text-zinc-400 hover:text-emerald-400 transition-colors duration-300 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Right: Contact */}
          <div className="text-center md:text-right">
            <p className="text-[11px] uppercase tracking-widest font-bold text-zinc-600 mb-3">
              Contact Us
            </p>
            <div className="space-y-2 text-sm font-medium">
              <p className="text-zinc-400">Basobas Support</p>
              <a
                href="tel:+9779800000000"
                className="block text-zinc-400 hover:text-emerald-400 transition-colors duration-300"
              >
                +977 9800000000
              </a>
              <a
                href="mailto:support@basobas.com"
                className="block text-zinc-400 hover:text-emerald-400 transition-colors duration-300"
              >
                support@basobas.com
              </a>
              <p className="text-zinc-500 text-xs">Kathmandu, Nepal</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-zinc-900/50 flex flex-col items-center gap-3 text-zinc-500 text-xs font-medium md:flex-row md:justify-between">
          <div className="text-center md:text-left">© 2026 Basobas. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-emerald-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-emerald-400 transition-colors duration-300">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;