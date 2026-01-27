import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close on ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-gray-950 border-b border-zinc-900/50 px-6 h-18 font-sans">
        <div className="flex items-center justify-between h-full">
          {/* Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center font-black text-white italic text-xl shadow-lg shadow-emerald-900/40 group-hover:scale-110 transition-transform duration-300">
              B
            </div>
            <div className="flex flex-col">
              <span className="text-emerald-500 font-bold tracking-[0.4em] text-[10px] uppercase leading-none mb-1">
                Basobas
              </span>
              <span className="text-zinc-600 text-[10px] uppercase tracking-widest font-medium">
                Hostel Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-zinc-300 hover:text-emerald-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
            <Link
              to="/login"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-all duration-300 shadow-lg shadow-emerald-900/20"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-zinc-300 hover:text-emerald-400 transition-colors duration-300"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <HiOutlineXMark className="text-2xl" /> : <HiOutlineBars3 className="text-2xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="presentation">
          {/* Overlay */}
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            className="absolute right-0 top-0 h-full w-[75vw] max-w-[320px] bg-[#0c1110] border-l border-zinc-900/50 shadow-2xl shadow-black/40 p-6"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.25em]">
                Menu
              </span>
              <button
                type="button"
                className="p-2 text-zinc-300 hover:text-emerald-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <HiOutlineXMark className="text-2xl" />
              </button>
            </div>

            <div className="flex flex-col gap-6 items-center">
              <Link
                to="/"
                className="text-zinc-200 hover:text-emerald-400 transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-zinc-200 hover:text-emerald-400 transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-zinc-200 hover:text-emerald-400 transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="w-full pt-4 border-t border-zinc-900/60" />

              <Link
                to="/login"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-widest px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-emerald-900/20 text-center"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
