import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Heart, Home, BookHeart, User, Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Prologue", path: "/", icon: <Home size={16} /> },
    { name: "Chapter I", path: "/chapter-1", icon: <BookHeart size={16} /> },
    { name: "Chapter II", path: "/chapter-2", icon: <BookHeart size={16} /> },
    { name: "Chapter III", path: "/chapter-3", icon: <BookHeart size={16} /> },
    { name: "About Me", path: "/about-me", icon: <User size={16} /> },
    { name: "2026", path: "/2026", icon: <Calendar size={16} /> },
  ];

  return (
    <div className="fixed top-0 w-full z-50 px-4 py-6 pointer-events-none">
      <nav className={`mx-auto max-w-5xl transition-all duration-700 ease-in-out pointer-events-auto glass-card border-white/20 shadow-2xl rounded-full
                ${scrolled
          ? "px-6 py-3 translate-y-2 scale-[0.98]"
          : "px-8 py-4 translate-y-0 scale-100"}`}>

        <div className="flex justify-between items-center">
          {/* Brand */}
          <NavLink to="/" className="flex items-center gap-4 group relative">
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img src={logo} alt="Jullay Logo" className="h-10 md:h-12 w-auto brightness-0 contrast-200" />
              <div className="absolute -top-1 -right-1">
                <Heart className="text-[#ff004f] fill-current" size={14} />
              </div>
            </motion.div>
            <div className="flex flex-col border-l border-pink-100 pl-4">
              <span className="text-xl font-playfair font-black text-[#4a0e0e] tracking-tight group-hover:text-[#ff004f] transition-colors leading-none">JULLAY</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#ff004f] opacity-60 font-black leading-none mt-1">Sonam Angmo</span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1 flex-nowrap">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-500 relative group
                                        ${isActive
                      ? "text-[#ff004f] font-black"
                      : "text-[#4a0e0e]/70 hover:text-[#4a0e0e]"} whitespace-nowrap`}
                >
                  {({ isActive }) => (
                    <>
                      <span className={`transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-[#ff004f]" : "opacity-40"}`}>
                        {link.icon}
                      </span>
                      <span className="text-[11px] font-black uppercase tracking-widest">{link.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-[#ff004f]/5 rounded-full -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/40 text-[#4a0e0e] hover:bg-white/60 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 15, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="lg:hidden absolute left-4 right-4 p-4 glass-card rounded-[2.5rem] shadow-2xl border-white/40"
            >
              <ul className="grid grid-cols-2 gap-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => `flex flex-col items-center justify-center gap-2 p-6 rounded-3xl transition-all
                                                ${isActive
                          ? "bg-[#ff004f] text-white shadow-lg shadow-[#ff004f]/30"
                          : "bg-[#4a0e0e]/5 text-[#4a0e0e] hover:bg-[#4a0e0e]/10"}`}
                    >
                      {link.icon}
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">{link.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
