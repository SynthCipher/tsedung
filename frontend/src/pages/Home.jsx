import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, ArrowRight, X, Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("reflection-popup-timestamp");
    const currentTime = new Date().getTime();
    const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;

    if (!lastShown || currentTime - parseInt(lastShown) > sevenDaysInMs) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("reflection-popup-timestamp", new Date().getTime().toString());
  };

  return (
    <div className="relative h-[100dvh] w-full flex flex-col items-center justify-between overflow-hidden bg-[#dcedc1] pt-32 pb-12">
      {/* Reflection Popup */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-card max-w-lg p-10 md:p-12 rounded-[3.5rem] shadow-2xl border-white/40 pointer-events-auto relative overflow-hidden text-center"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff004f]/10 blur-[50px] -z-10" />
              <button
                onClick={handleClose}
                className="absolute top-8 right-8 text-[#4a0e0e]/30 hover:text-[#ff004f] transition-colors"
              >
                <X size={20} />
              </button>

              <div className="space-y-6 relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="bg-[#ff004f]/5 w-fit p-5 rounded-3xl mx-auto"
                >
                  <Heart className="text-[#ff004f] fill-current" size={32} />
                </motion.div>

                <p className="text-lg md:text-xl font-playfair italic leading-relaxed text-[#4a0e0e] font-medium">
                  "After finishing the project, I briefly questioned my actions and motives. After a decade of reflection, I've now decided to share my thoughts with you."
                </p>

                <button
                  onClick={handleClose}
                  className="bg-[#ff004f] text-white px-10 py-4 rounded-full font-black tracking-[0.2em] text-[10px] hover:bg-black transition-all shadow-xl shadow-[#ff004f]/20 uppercase"
                >
                  Understand & Continue
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10 pointer-events-auto"
            />
          </div>
        )}
      </AnimatePresence>

      {/* Background Animations */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#ff004f]/10"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0
            }}
            animate={{
              y: [null, -1000],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          >
            <Heart fill="currentColor" size={Math.random() * 40 + 20} />
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-12 z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-4 text-[#ff004f] mb-4">
            <Sparkles className="animate-pulse" size={20} />
            <span className="uppercase tracking-[0.5em] text-xs font-black">The Prologue</span>
            <Sparkles className="animate-pulse" size={20} />
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-playfair font-black text-[#4a0e0e] leading-tight">
            Is it <span className="text-[#ff004f] italic">Love</span> or <br />
            just <span className="relative inline-block">Infatuation?
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-2 bg-[#ff004f]/20 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.5 }}
              />
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-black text-[#ff004f] tracking-widest mt-4">- SynthCipher</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, type: "spring" }}
        >
          <Link
            to="/chapter-1"
            className="group relative inline-flex items-center gap-4 bg-[#ff004f] text-white px-10 py-4 md:px-12 md:py-5 rounded-full text-lg md:text-xl font-bold hover:bg-black transition-all duration-300 shadow-2xl hover:shadow-[#ff004f]/40"
          >
            EXPLORE THE STORY
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />

            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff004f]"></span>
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Integrated Social Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex flex-col items-center space-y-4 z-10 w-full"
      >
        <div className="flex gap-8">
          {[
            { icon: <Facebook size={20} />, link: "https://www.facebook.com/jigmatjemedorjey/" },
            { icon: <Github size={20} />, link: "https://github.com/jigmatdorjey" },
            { icon: <Instagram size={20} />, link: "https://www.instagram.com/jigm__dor___/" },
            { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/jigmat-dorjey-19050422b/" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: "#ff004f" }}
              className="text-[#4a0e0e]/60 hover:text-[#ff004f] transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        <p className="flex items-center gap-2 text-[10px] font-bold text-[#4a0e0e]/40 tracking-[0.2em] uppercase">
          Made with <Heart size={12} className="text-[#ff004f] fill-current" /> by Jigmat Dorjey
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
