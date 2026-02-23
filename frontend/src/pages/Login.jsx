import React from "react";
import { motion } from "framer-motion";
import { LogIn, User, Lock, ArrowRight, Heart } from "lucide-react";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card w-full max-w-md p-10 rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff004f]/10 blur-[50px]" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-200/20 blur-[50px]" />

                <div className="text-center space-y-4 mb-10 relative z-10">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="bg-[#ff004f] w-fit p-4 rounded-3xl mx-auto shadow-xl"
                    >
                        <Heart className="text-white fill-current" size={32} />
                    </motion.div>
                    <h1 className="text-4xl font-playfair font-black text-[#4a0e0e]">Memory Archive</h1>
                    <p className="text-sm text-[#4a0e0e]/50 tracking-widest uppercase">Unlocking the Past</p>
                </div>

                <form className="space-y-6 relative z-10">
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-[#4a0e0e]/40 ml-4">Email Address</label>
                        <div className="relative">
                            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-[#4a0e0e]/30" size={20} />
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className="w-full bg-white/60 p-5 pl-14 rounded-2xl border border-pink-100 outline-none focus:ring-4 focus:ring-[#ff004f]/10 font-bold transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-[#4a0e0e]/40 ml-4">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-[#4a0e0e]/30" size={20} />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-white/60 p-5 pl-14 rounded-2xl border border-pink-100 outline-none focus:ring-4 focus:ring-[#ff004f]/10 font-bold transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-center px-2 text-xs font-bold text-[#ff004f]">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="accent-[#ff004f]" /> Remember me
                        </label>
                        <a href="#" className="hover:underline">Forgot Password?</a>
                    </div>

                    <button type="submit" className="w-full bg-[#ff004f] text-white py-6 rounded-2xl text-xl font-black tracking-widest hover:bg-black transition-all shadow-xl flex items-center justify-center gap-4 group uppercase">
                        Access Vault <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </form>

                <div className="mt-8 text-center text-sm font-bold text-[#4a0e0e]/40">
                    Don't have an account? <a href="#" className="text-[#ff004f] hover:underline">Sign Up</a>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
