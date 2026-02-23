import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
import Feb14 from "./pages/Feb14";
import About from "./pages/About";
import AboutMe from "./pages/AboutMe";
import Year2026 from "./pages/Year2026";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const location = useLocation();

    return (
        <div className={`min-h-screen ${location.pathname === '/chapter-1' ? 'bg-[#1a0b0d]' : 'bg-[#dcedc1]'} text-[#571930] font-sans transition-colors duration-500`}>
            <ToastContainer position="bottom-right" theme="dark" />
            <ScrollToTop />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chapter-1" element={<Chapter1 />} />
                    <Route path="/chapter-2" element={<Chapter2 />} />
                    <Route path="/chapter-3" element={<Feb14 />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/2026" element={<Year2026 />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
            {/* {location.pathname !== "/" && <Footer />} */}
        </div>
    );
};

export default App;
