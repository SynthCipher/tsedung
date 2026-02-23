import React from "react";
import { Heart, Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isDarkPage = location.pathname === "/chapter-1";

  return (
    <footer className={`py-20 px-[10%] border-t border-white/10 ${isDarkPage ? 'bg-transparent text-white/40' : 'border-pink-200'}`}>
      <div className="container mx-auto flex flex-col items-center gap-12">


        <div className="flex gap-8">
          {[
            { icon: <Facebook />, link: "https://www.facebook.com/jigmatjemedorjey/" },
            { icon: <Github />, link: "https://github.com/jigmatdorjey" },
            { icon: <Instagram />, link: "https://www.instagram.com/jigm__dor___/" },
            { icon: <Linkedin />, link: "https://www.linkedin.com/in/jigmat-dorjey-19050422b/" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#ff004f" }}
              className={`${isDarkPage ? 'bg-white/5 text-white/60' : 'bg-white/50 text-[#4a0e0e]'} p-3 rounded-full shadow-lg transition-colors`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className={`flex items-center justify-center gap-2 font-bold ${isDarkPage ? 'text-white/80' : 'text-[#4a0e0e]'}`}>
            Made with <Heart size={14} className="text-[#ff004f] fill-current" /> by Jigmat Dorjey
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">2024 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
