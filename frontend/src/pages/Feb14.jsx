import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Calendar, Send, Heart, HeartOff, Quote, Sparkles, ChevronDown, Trophy, GraduationCap, MapPin, Coffee, Wind, Stars } from "lucide-react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import musicThumbnail from "../assets/images/musicThumbnaIL.jpg";
import Feb14Music from "../assets/audio/Feb14.mp3";
import anamikaImg from "../assets/images/anamika.jpg";

const Feb14 = () => {
    const { backendUrl } = useContext(AppContext);
    const [formData, setFormData] = useState({ name: "", contactInfo: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const [showChecking, setShowChecking] = useState(false);
    const [showAnamika, setShowAnamika] = useState(false);
    const [showDisclaimer, setShowDisclaimer] = useState(true);

    const handleSkip = () => {
        setShowChecking(true);
        setTimeout(() => {
            window.scrollTo({ top: window.scrollY + 600, behavior: 'smooth' });
        }, 100);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                `${backendUrl}/api/send`,
                {
                    name: formData.name,
                    contactInfo: formData.contactInfo,
                    message: formData.message,
                    chapter: "Feb14"
                },
                {
                    withCredentials: true,
                }
            );

            if (data.success) {
                setStatus("Thank you for sharing your heart. Redirecting...");
                setFormData({ name: "", contactInfo: "", message: "" });
                setShowChecking(true);
            } else {
                setStatus(data.message || "Failed to deliver.");
            }
            setTimeout(() => {
                setStatus("");
                window.scrollTo({ top: window.scrollY + 600, behavior: 'smooth' });
            }, 800);
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message || "Something went wrong.";
            setStatus(errorMsg);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const sectionVariants = {
        hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 1.2, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen bg-[#1a0b0d] text-[#f8f1f1] selection:bg-[#ff004f] selection:text-white pt-32 pb-32 overflow-hidden">
            {/* Disclaimer Modal */}
            <AnimatePresence>
                {showDisclaimer && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#1a0b0d]/80 backdrop-blur-xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-[#1a0b0d] p-8 md:p-12 rounded-[3.5rem] border border-[#ff004f]/30 max-w-lg w-full text-center space-y-8 shadow-2xl shadow-[#ff004f]/10"
                        >
                            <div className="bg-[#ff004f]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto border border-[#ff004f]/20">
                                <Sparkles className="text-[#ff004f]" size={32} />
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-3xl font-playfair font-black italic text-white">Memory Archive</h2>
                                <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed italic">
                                    "This chapter is a collection of my thoughts and imagination; it is not a factual reflection of real events."
                                </p>
                            </div>

                            <button
                                onClick={() => setShowDisclaimer(false)}
                                className="w-full bg-[#ff004f] text-white py-6 rounded-2xl font-black tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-xl uppercase text-sm"
                            >
                                Enter Archive
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Ambient Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff004f]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />

                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#ff004f]/20 rounded-full"
                        initial={{
                            x: Math.random() * 100 + "vw",
                            y: Math.random() * 100 + "vh",
                            opacity: 0
                        }}
                        animate={{
                            y: [null, "-20vh"],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Story Disclaimer */}
                <div className="mb-8 p-4 bg-white/5 border-l-4 border-[#ff004f] rounded-r-2xl italic text-white/40 text-sm tracking-wide">
                    Disclaimer: This story is a reflection of my personal thoughts and feelings; it is not meant to be a factual or real representation of events.
                </div>

                <div className="space-y-32">
                    {/* Intro Header */}
                    <div className="text-center space-y-10 relative">
                        <div className="space-y-6">
                            <p className="text-[#ff004f]/60 text-xs md:text-sm uppercase tracking-[0.8em] font-black italic">Memory Archive: Vol III</p>
                            <h1 className="text-7xl md:text-9xl font-playfair font-black text-white leading-none tracking-tighter italic">
                                MY FIRST <span className="text-[#ff004f] not-italic">LOVE</span>
                            </h1>
                        </div>
                        <p
                            className="text-2xl md:text-3xl font-playfair italic text-[#ff004f]/80 max-w-2xl mx-auto leading-relaxed"
                        >
                            "I will keep you as my favorite incomplete wish..."
                        </p>
                    </div>

                    {/* Music Player Romantic */}
                    <motion.div variants={sectionVariants} className="flex justify-center">
                        <div className="relative group w-full max-w-md aspect-square rounded-[4rem] overflow-hidden shadow-2xl p-1 bg-gradient-to-br from-[#ff004f]/20 to-transparent">
                            <div className="w-full h-full bg-[#1a0b0d] rounded-[3.9rem] overflow-hidden relative">
                                <img src={musicThumbnail} alt="Feb14" className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-[4s] grayscale" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center space-y-8 bg-gradient-to-t from-[#1a0b0d] via-transparent to-transparent">
                                    <div className="bg-[#ff004f]/20 p-8 rounded-full backdrop-blur-md border border-[#ff004f]/20 group-hover:scale-110 transition-transform duration-500">
                                        <Music size={48} className="text-[#ff004f] animate-pulse" />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-4xl font-black font-playfair text-white italic">Echoes of Kinnaur</h2>
                                        <p className="text-[10px] uppercase font-black tracking-[0.4em] text-[#ff004f]/60">Captured: 12-02-2024</p>
                                    </div>
                                    <audio src={Feb14Music} className="w-full h-10 opacity-30 hover:opacity-100 transition-all duration-500 saturate-150 rotate-3 group-hover:rotate-0" controls autoPlay loop />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Score Board Redesign */}
                    <div className="relative p-1 bg-gradient-to-tr from-[#ff004f]/30 to-transparent rounded-[4rem] group">
                        <div className="bg-[#1a0b0d] p-12 md:p-16 rounded-[3.9rem] space-y-12">
                            <h2 className="text-4xl font-playfair font-black text-center text-white italic tracking-tighter">LOVE <span className="text-[#ff004f] not-italic">LEDGER</span></h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                                <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 flex justify-between items-center shadow-inner group-hover:border-[#ff004f]/30 transition-all duration-700">
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-black tracking-tight">dorjey</h3>
                                        <p className="text-[10px] uppercase font-black opacity-30 tracking-[0.2em] text-[#ff004f]">Proposal: 0 | Confession: 0</p>
                                    </div>
                                    <span className="text-6xl font-playfair font-black text-white/20 group-hover:text-[#ff004f] transition-colors duration-1000">0</span>
                                </div>
                                <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 flex justify-between items-center shadow-inner group-hover:border-[#ff004f]/30 transition-all duration-700">
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-black tracking-tight">Jigmat*</h3>
                                        <p className="text-[10px] uppercase font-black opacity-30 tracking-[0.2em] text-[#ff004f]">Proposal: 0 | Confession: 0</p>
                                    </div>
                                    <span className="text-6xl font-playfair font-black text-white/20 group-hover:text-[#ff004f] transition-colors duration-1000">0</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Story Chapters */}
                    <div className="space-y-32">
                        <div className="space-y-12 text-xl md:text-2xl leading-relaxed text-white/80 font-light px-4">
                            <p className="border-l-2 border-[#ff004f]/20 pl-8">
                                This is the story of me and <span className="font-bold text-[#ff004f]">Pema Yangzin (Ranjeeta)</span>, my first love. Although we had known each other since 4th grade, our story didn’t begin till we were in the freshman year of high-school. <span className="italic">Yangzin</span>, a girl from Kinnaur, Himachal Pradesh, used to sit in front of me during prayer, as our roll numbers were next to each other.
                            </p>

                            <p>
                                As Yangzin is from Kinnaur, she knew some old Ladakhi song. So, sometimes we used to sing some of those songs together, songs like <span className="text-[#ff004f] italic">"Ama Lay Julay"</span> and <span className="text-[#ff004f] italic">"Urpay Shokpa Yodna”</span> were our favourites. She's very talented in singing and good in languages. Her voice is still ringing in my ears as I am writing this. Contrary to her I was very weak in language so Pema being the kind girl that she is, used to help me with English.
                            </p>
                        </div>

                        <div className="relative p-1 bg-gradient-to-br from-blue-900/30 to-transparent rounded-[4rem]">
                            <div className="bg-[#1a0b0d] p-12 md:p-16 rounded-[3.9rem] border border-white/5 relative overflow-hidden">
                                <Coffee className="absolute -top-10 -right-10 text-[#ff004f]/5 rotate-12" size={200} />
                                <div className="relative z-10 space-y-10">
                                    <div className="flex items-center gap-4 text-[#ff004f]/60">
                                        <Wind size={20} />
                                        <p className="text-[10px] font-black uppercase tracking-[0.4em]">Memory Fragment: The Messenger</p>
                                    </div>
                                    <p className="text-xl md:text-2xl text-white/70 italic leading-[1.8]">
                                        Talking about this story reminded me of another story, around 5th grade a friend of mine used to be in a relationship with a senior girl and since they didn’t want their relationship to be known publicly, I used to be a messenger for them. My job was to take letters back and forth without looking, but I always betrayed them by reading their letters before passing them on to the right person.
                                    </p>
                                    <p className="text-xl md:text-2xl text-white/70 font-light leading-[1.8]">
                                        Through those letters, I could feel the beauty of the relationship that they shared. Sometimes, I even acted as a watchman for them. This went on for about three years and then they broke up, but I never knew how or why they broke up. I witnessed the beginning of their relationship, but I wasn’t able to witness the end. I didn't have the courage to ask. Later, that girl became like a sister to me, and she used to help me by washing my clothes. It was a very sad moment for me, for two reasons only:
                                    </p>
                                    <ul className="grid md:grid-cols-2 gap-6 text-[#ff004f] font-black text-sm uppercase tracking-widest">
                                        <li className="p-6 bg-[#ff004f]/10 rounded-2xl flex items-center gap-4 border border-[#ff004f]/20">
                                            <span className="p-2 bg-[#ff004f] text-white rounded-lg">01</span>
                                            I would not be able to read the love letters anymore
                                        </li>
                                        <li className="p-6 bg-[#ff004f]/10 rounded-2xl flex items-center gap-4 border border-[#ff004f]/20">
                                            <span className="p-2 bg-[#ff004f] text-white rounded-lg">02</span>
                                            I was no longer their watchman.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative p-1 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-[3rem]">
                        <div className="bg-[#1a0b0d] p-12 md:p-16 rounded-[2.9rem] border border-white/5 relative overflow-hidden text-center">
                            <Trophy className="text-[#ff004f]/40 mb-8 mx-auto" size={64} />
                            <div className="space-y-6">
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff004f]/60">Academic Record: 8th Grade</p>
                                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                                    Since we have already taken a detour from our original story let me take this time to tell you a little bit more about my school life. I completed my 8th class by achieving the highest marks in math, scoring a perfect <span className="text-[#ff004f] font-black text-3xl">100 / 100</span>.
                                </p>
                                <p className="text-white/60 italic">
                                    This was a record in my school's history, and I believe my achievement still stands in the school records. Everyone used to call me "100/100", including the staff members and the villagers.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12 text-xl md:text-2xl leading-relaxed text-white/70 font-light px-4">
                        <p>
                            During my time, Ladakhi students used to go home during summer holidays only (I used to live in a dorm, if it wasn’t apparent before). So during the 50 day winter holidays all Ladakhi students, mostly from Zanskar, studying in different Tibetan schools stayed to my school.
                        </p>
                        <p className="bg-white/5 p-8 rounded-2xl border-l-2 border-[#ff004f]/20">
                            Because I was the only Ladakhi student, I faced a lot of discrimination in school and hostel as 99% of the students were from Arunachal Pradesh. For the first few years I used to be happy to hear that Ladakhi people would be joining me during the winter holidays, but I faced discrimination even from them because I am not from Zanskar. It was the same every year and this year was no different. I used to struggle every day to cope with the discrimination from them. Finally the winter holidays came to an end.
                        </p>
                    </div>

                    <div className="space-y-12 px-4">
                        <div className="flex items-center gap-6 text-[#ff004f]/40">
                            <hr className="flex-1 border-[#ff004f]/10" />
                            <Stars size={24} />
                            <hr className="flex-1 border-[#ff004f]/10" />
                        </div>

                        <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-white/80 font-light">
                            <p>
                                We had maths, my favorite subject, as our first class of 9th grade (probably a sign of good luck?). Time passed and we moved from one chapter to another. I remember many of my classmates struggled with <span className="text-[#ff004f] italic">"Polynomials”</span>.
                            </p>
                            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 font-mono text-sm relative group overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <p className="text-6xl font-black">X+Y</p>
                                </div>
                                <p className="italic text-[#ff004f]/60 mb-4 uppercase tracking-widest text-xs">Mathematical Proof: Example 6</p>
                                <p className="font-black text-2xl text-white tracking-tight">Divide p(x) by g(x), where p(x) = x + 3x² – 1 and g(x) = 1 + x.</p>
                            </div>
                            <p>
                                Interestingly, I found it pretty easy. In the Tibetan community, there is a common belief that Tibetans are weak in maths while Indians were considered good at it. My skill in math were often credited to my Indian heritage, with many simply stating, <span className="italic text-[#ff004f]">"I'm good at math because I'm Indian,"</span> a notion that was widely accepted as its easier to believe.
                            </p>
                            <p>
                                As the class went on, the teachers did their best to explain the concepts to everyone. However, many students still found it difficult to grasp. Yangzin, too struggled in maths, she had passed 8th grade maths by a small margin. One day she approached me for help in this example. I did my best to explain the concepts to her, and to my surprise, she soon exclaimed, <span className="text-[#ff004f] font-bold">"This is so easy! Why couldn't I understand it before?"</span>. Over time, she started solving problems with me, but she still lacked basic math skills. So, I began teaching Yangzin and some of my other classmates after school. As a result, everyone started enjoying math a bit more.
                            </p>
                        </div>
                    </div>


                    <div className="space-y-6 px-4">

                        <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-white/80 font-light">

                            <p>
                                I've liked her since childhood, but if you were to ask me whether she's beautiful or not, I wouldn't have an answer. To this day, I don't have a specific definition of what makes someone beautiful or any standards in my mind. Unlike many who compare individuals to some ideal type in their minds, I find myself drawn to people who are friendly and helpful by nature. Despite harboring feelings for her since seventh grade, I never had the courage to directly confess. </p>
                        </div>
                    </div>



                    <div className="text-center py-32 px-12 relative overflow-hidden rounded-[4rem] bg-gradient-to-b from-[#ff004f]/10 to-transparent border border-[#ff004f]/5">
                        <Heart size={80} className="mx-auto text-[#ff004f] fill-current mb-12 opacity-80" />
                        <div className="space-y-12 relative z-10">
                            <div className="space-y-4">
                                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ff004f]/60">The Temporal Shift</p>
                                <h3 className="text-5xl md:text-7xl font-playfair font-black text-white italic">The Confession</h3>
                            </div>
                            <p className="text-2xl md:text-3xl font-light text-white/70 max-w-2xl mx-auto leading-relaxed">
                                One day, while we were solving math questions in the corner of the class, I finally mustered the courage to whisper those three long-awaited words to her:
                            </p>
                            <div className="py-12">
                                <span className="block text-7xl md:text-9xl font-playfair font-black text-[#ff004f] tracking-tighter italic decoration-white/20 underline-offset-8">"I LIKE YOU"</span>
                            </div>
                            <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed italic">
                                In an instant, she hastily left her desk and sat at the front seat with a shy, red face (I found myself blushing too). After the class, I was overwhelmed with shyness and regret, wondering why I said those words to her, especially during class. Later that night, I couldn't shake off the feeling of regret. I was worried that our strong friendship might have been broken because of my confession.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-12 text-xl -mt-12 md:text-2xl leading-relaxed text-white/70 font-light px-4">
                        <p>
                            For a couple of days, she didn't speak to me, and whenever we found ourselves together, there was an awkward tension, especially during our prayers in the hall where I sat behind her. The feeling persisted for many days, making me increasingly uncomfortable.
                        </p>
                        <p className="border-l-2 border-[#ff004f]/20 pl-8 italic">
                            Then, one day during self-study time in the Common Hall, a junior approached me and handed me a letter <span className="text-[#ff004f] font-black tracking-widest">(déjà-vu)</span>. I had no idea what it was about until I opened it. Although it wasn’t directly written but based on the content of the letter, I figured out that she was saying yes indirectly.
                        </p>
                        <p>
                            Our relationship began with that letter. After 10th grade, I laminated the letter, and to this day it rests in a file in my bedroom. Whenever I read it, I'm filled with nostalgia. The next day, she approached me with math questions like she used to. While I was explaining the questions to her, she mentioned that she had trouble understanding math for the past couple of days because I wasn't there to help her <span className="text-[#ff004f]">(silently blushing inside)</span>.
                        </p>
                    </div>

                    <div className="relative p-1 bg-gradient-to-tr from-[#ff004f]/20 to-transparent rounded-[4rem]">
                        <div className="bg-[#1a0b0d] p-12 md:p-16 rounded-[4rem] space-y-12 border border-[#ff004f]/10">
                            <h2 className="text-3xl font-playfair font-black text-center text-white/40 uppercase tracking-[0.5em]">LOVE <span className="text-white">LEDGER</span></h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                                <div className="bg-[#ff004f] p-10 rounded-[2.5rem] flex justify-between items-center shadow-2xl shadow-[#ff004f]/20">
                                    <div className="space-y-1 text-white">
                                        <h3 className="text-2xl font-black">dorjey</h3>
                                        <p className="text-[10px] uppercase font-black opacity-60 tracking-[0.2em]">Proposal: 1 | Confession: 0</p>
                                    </div>
                                    <span className="text-6xl font-playfair font-black text-white/40">1</span>
                                </div>
                                <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 flex justify-between items-center">
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-black">Jigmat*</h3>
                                        <p className="text-[10px] uppercase font-black opacity-30 tracking-[0.2em] text-[#ff004f]">Proposal: 0 | Confession: 0</p>
                                    </div>
                                    <span className="text-6xl font-playfair font-black text-[#ff004f]">0</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12 text-xl md:text-2xl leading-relaxed text-white/70 font-light px-4">
                        <p>
                            Our relationship followed a pattern similar to that of my friends', secretly exchanging letters during class making sure that none of our classmates take a notice. We opted not to involve a third party like I was for my friends due to my lack of trust in them. So, we continued our exchanges during class sessions.
                        </p>
                        <p className="italic">
                            We didn't need to a watchman as we never moved from letters. We both tried to meet alone after class and during holidays a couple of times, but we lacked the courage and feared what others would say if they caught us together.
                        </p>
                    </div>

                    {/* Tibetan Letters Section */}
                    <div className="space-y-16">
                        <div className="bg-[#4a0e0e] text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff004f]/10 blur-[100px]" />
                            <p className="text-xs font-black opacity-40 uppercase tracking-[0.4em] mb-10 text-center">My first letter to Yangzin</p>
                            <div className="text-3xl font-tibetan text-center leading-[1.8] text-pink-100">
                                འཇིག་རྟེན་དེ་ཡ་མཚན་ལ། <br />
                                རང་འཕྲད་དགོས་རྒྱུ་མཚན་གང་།<br />
                                ལྷད་མེད་དྭངས་གཙང་སེམས་པ་དེ།<br />
                                ཡོད་ཚད་རང་གིས་འཁྱེར།<br /><br />
                                ཆུང་ཆུང་འཚོ་བ་འདི།<br />
                                ཁྱེད་དང་བསྐྱལ་ན་བསམ།<br />
                                ཁུ་སིམ་མཚན་མོའི་རྨི་ལམ་ནང་ནས།<br />
                                ཁྱེད་རང་གཅིག་པུ་བཏང་།<br />
                                ཡོད་ཚད་རང་གིས་འཁྱེར།<br /><br />
                                ཧུའུ་་་ག་རེ་བྱས་པ་རེད།<br />
                                སྐད་ཆ་བཤད་དགོས་བསམ་ནའི་ང་ལ་བློ་ཁོག་མིན་འདུག<br />
                                ཧུའུ་་ག་རེ་བྱས་པ་རེད།<br />
                                སེམས་ནང་སྐད་ཆ་རང་ལ་གང་འདྲ་བཤད་དགོས་རེད།
                            </div>
                        </div>

                        <div className="text-center opacity-20 tracking-[1em]">............................</div>

                        <div className="bg-white/80 p-12 rounded-[3.5rem] shadow-xl border-4 border-[#ff004f]/10 relative">
                            <Quote size={80} className="absolute -top-10 left-10 text-[#ff004f]/10" />
                            <p className="text-xs font-black opacity-40 uppercase tracking-[0.4em] mb-10 text-center text-[#4a0e0e]">Last letter from Yangzin</p>
                            <div className="text-3xl font-tibetan text-center leading-[1.8] text-[#4a0e0e]">
                                ངའི་སེམས་ནང་ཁྱེད་རང་མ་གཏོགས་གཞན་པ་སུ་གང་མེད།<br />
                                ངས་རང་ལ་བཅངས་པའི་བརྩེ་དུང་རྫུན་མ་སྤུ་ཙམ་མེད།<br />
                                ངའི་སེམས་ནང་ཁྱེད་རང་མ་གཏོགས་གཞན་པ་སུ་གང་མེད།<br />
                                ངས་རང་ལ་བཅངས་པའི་བརྩེ་དུང་བར་ཆད་མེད་པ་ཤོག<br /><br />
                                རང་དྲན་དུས་ངའི་སེམས་ལ་མེ་ཏོག་བཞད་ཀྱི་འདུག།<br />
                                མཚམས་རེ་བསམ་བློ་ཆོབ་ཚ་པོ་དེ་འདྲས་འཁོར་གྱི་འདུག།<br />
                                གངས་རི་དཀར་པོའི་འོག་མཆོད་རྟེན་དཀར་པོའི་འོག།<br />
                                ཁ་བཏགས་དཀར་པོ་སྐེ་ལ་གོན་ནས་མཉམ་དུ་འགྲོ་གི་འདུག།<br /><br />
                                རང་གིས་ང་ལ་བལྟས་ནས་གད་མོ་དགོད་ཀྱི་འདུག།<br />
                                མི་ཚེ་མཉམ་དུ་བསྐྱལ་དུ་ཟེར་ང་ལ་ལབ་ཀྱི་འདུག།<br />
                                ངོ་ཚ་བྱེད་ཀྱི་འདུག་ལག་པ་འཆང་གི་འདུག།<br />
                                ད་དུང་ནོར་བུ་ནང་བཞིན་བྱམས་པོ་བྱེད་ཆོག་རང་ལ་བཤད་ཀྱི་འདུག།
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12 text-xl md:text-2xl leading-relaxed text-white/70 font-light px-4">
                        <hr className="border-[#ff004f]/5" />
                        <p>
                            The story continued like this till 10th-grade board exams, and nobody suspected our relationship. That's how well we were at keeping it a secret from others. After the board exams, it was time to bid farewell to the school that nurtured me and molded me into a resilient young man prepared to navigate the realms of competition and technology.
                        </p>
                        <p className="bg-[#ff004f]/5 p-10 rounded-3xl border-l-2 border-[#ff004f]/20 italic">
                            On the last day of school, graduation day, and all my classmates were in tears as we bid farewell to the memories, the beautiful campus, and our teachers and friends. I tried my best to hold back my tears, being a boy. However, when I saw Yangzin crying, my tears flowed uncontrollably, and I rushed to the washroom, where I cried like a baby for a minutes.
                        </p>
                        <p>
                            As each classmate took their turn leaving for their own destinations, it was finally my turn to depart for Ladakh. In our last hours together at school, she held my bag along with some remaining classmates. Everyone came to drop me off at the bus stop. I really wanted to hug her tightly, but with my classmates around, I had to hug everyone in the class so that they don’t get suspicious about us.
                        </p>
                        <p>
                            The moment arrived when the bus to Delhi pulled up. I hugged all my classmates, saving Yangzin for last. I hugged her so tightly that tears began to well up, both for me and for her. As I boarded the bus, they all waved goodbye, except Yangzin, who was wiping away her tears. I was also teary-eyed, and my entire journey was spent crying. When I reached Delhi, my sister asked, "What happened to your eye? It's so swollen." My response was simply, "Nothing, I just couldn't sleep on the bus."
                        </p>
                    </div>
                </div>

                {/* Form Section */}
                <div className="relative p-1 bg-gradient-to-tr from-[#ff004f]/20 to-transparent rounded-[4rem] group">
                    <div className="bg-[#1a0b0d] p-12 md:p-16 rounded-[4rem] border border-white/10 space-y-12 backdrop-blur-3xl">
                        <div className="text-center space-y-4">
                            <Sparkles className="mx-auto text-[#ff004f] mb-4 group-hover:rotate-180 transition-transform duration-1000" />
                            <h2 className="text-4xl font-playfair font-black text-white italic">Share Your <span className="text-[#ff004f] not-italic">Heart</span></h2>
                            <p className="text-white/40 text-xs uppercase tracking-widest font-black">A letter to the archive</p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="group relative">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Nickname..."
                                        required
                                        className="w-full bg-white/5 p-6 rounded-2xl border border-white/10 outline-none focus:border-[#ff004f]/40 font-bold transition-all text-white placeholder:text-white/20"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="group relative">
                                    <input
                                        type="text"
                                        name="contactInfo"
                                        placeholder="Email or Phone Number (Optional)"
                                        className="w-full bg-white/5 p-6 rounded-2xl border border-white/10 outline-none focus:border-[#ff004f]/40 font-bold transition-all text-white placeholder:text-white/20"
                                        value={formData.contactInfo}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="What does your heart feel?"
                                className="w-full bg-white/5 p-6 rounded-[2rem] border border-white/10 outline-none focus:border-[#ff004f]/40 font-bold transition-all text-white placeholder:text-white/20 resize-none"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <div className="flex flex-col gap-4">
                                <button type="submit" className="w-full bg-[#ff004f] text-white py-8 rounded-[2rem] text-xl font-black tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-2xl flex items-center justify-center gap-4 group">
                                    SUBMIT TO MEMORY <Send size={20} className="group-hover:translate-x-2 transition-transform" />
                                </button>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="relative pt-6"
                                >
                                    <button
                                        type="button"
                                        onClick={handleSkip}
                                        className="w-full py-8 group relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-500 hover:border-[#ff004f]/50 bg-black/40"
                                    >
                                        {/* Color Motion Background */}
                                        <motion.div
                                            animate={{
                                                background: [
                                                    "linear-gradient(45deg, rgba(255,0,79,0) 0%, rgba(255,0,79,0.05) 50%, rgba(255,0,79,0) 100%)",
                                                    "linear-gradient(135deg, rgba(255,0,79,0) 0%, rgba(255,0,79,0.1) 50%, rgba(255,0,79,0) 100%)",
                                                    "linear-gradient(225deg, rgba(255,0,79,0) 0%, rgba(255,0,79,0.05) 50%, rgba(255,0,79,0) 100%)",
                                                    "linear-gradient(315deg, rgba(255,0,79,0) 0%, rgba(255,0,79,0.1) 50%, rgba(255,0,79,0) 100%)",
                                                    "linear-gradient(45deg, rgba(255,0,79,0) 0%, rgba(255,0,79,0.05) 50%, rgba(255,0,79,0) 100%)"
                                                ]
                                            }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 opacity-100"
                                        />

                                        <div className="relative z-10 flex flex-col items-center gap-4">
                                           
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm font-black uppercase tracking-[0.4em] text-white/60 group-hover:text-white transition-colors">
                                                    Skip and Reveal Story
                                                </span>
                                                <motion.div
                                                    animate={{
                                                        y: [0, 4, 0],
                                                        color: ["#ff004f66", "#ff004fff", "#ff004f66"]
                                                    }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    <ChevronDown size={18} />
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* Corner Accents with Color Motion */}
                                        <motion.div
                                            animate={{ opacity: [0.2, 1, 0.2] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#ff004f]/40"
                                        />
                                        <motion.div
                                            animate={{ opacity: [0.2, 1, 0.2] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                            className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#ff004f]/40"
                                        />
                                    </button>
                                </motion.div>
                            </div>
                            {status && (
                                <p className="text-center font-black text-[#ff004f] italic tracking-widest text-sm">
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                {/* Reveal Sections */}
                {showChecking && (
                    <div className="space-y-16 pt-12">
                        <div className="space-y-12 text-xl md:text-2xl leading-relaxed text-white/70 font-light px-4">
                            <p>
                                Through our stream of conversation via letters, we decided to enrol in Bengaluru for 11th grade, in a branch of my school, opting for the non-medical stream. On last day, we got our first ever phones and exchanged numbers.
                            </p>
                            <p className="border-l-2 border-[#ff004f]/20 pl-8">
                                We exchanged messages and talked on the phone every day for more than a month, and then unexpectedly, the results came out while I was playing football in the boys' school. I checked her results first, then mine, and we were both delighted to see that we had passed. I was surprised by her math mark, which was 83%. She had not only passed but also achieved the second-highest marks in math, with me being the first. That night, during a video call, I congratulated her, and together we imagined our future at the school in Bengaluru.
                            </p>
                            <hr className="border-[#ff004f]/5" />
                            <p>
                                After 2 days, I received an unexpected message from her stating that her father was insisting her to pursue medical studies, in Shimla. We talked for hours about trying to convince her father to let her study in Bangalore, but his decision was final. At that moment, I felt the downward shift in our relationship. Despite our plans to study together, I decided to join Bengaluru, feeling incredibly sad about the situation.
                            </p>
                            <p>
                                The following day, similar to her father's approach, my own father came to me and asked whether I wanted to join Lamdon or not. His proposal caught me off guard, as I had never considered studying in Ladakh. However, I accepted the offer because she wasn't coming to Bengaluru either. So, I took admission in Lamdon while she pursued her studies in Shimla.
                            </p>
                            <p>
                                We continued exchanging messages as usual, but I couldn't envision a future for us. Time passed, and we both passed our 12th grade exams with high marks. She joined a nursing college in Delhi.
                            </p>
                            <hr className="border-[#ff004f]/5" />
                            <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 flex flex-col md:flex-row gap-12 items-center">
                                <div className="p-8 bg-[#ff004f]/20 rounded-full">
                                    <MapPin className="text-[#ff004f]" size={48} />
                                </div>
                                <p className="italic leading-relaxed">
                                    During the lockdown, I suffered from severe back pain and went to <span className="text-white font-bold underline decoration-[#ff004f]">AIIMS Delhi</span> for a checkup. It was during this time that I met Yangzin after two years at <span className="text-white font-bold underline decoration-[#ff004f]">Majnu Ka Tilla</span>, and we had our first dinner date. Both of us had changed considerably as puberty had taken its course; she had become even more beautiful, while I had grown taller. We reflected on our shared memories and experiences.
                                </p>
                            </div>
                            <p>
                                During our conversation, we discussed our relationship and came to the conclusion that there was no future for us. So, we made the difficult decision to end our relationship, and we did so during the dinner. It was a very sad moment for both of us, but ultimately, we felt it was the right decision for us to separate. We realized that we were different in every sense, from our communities to our cultures, and even geographically and linguistically.
                            </p>
                            <p>
                                We continued to exchange messages and calls, though not as frequently as before. During the last summer holidays, on my way back to Leh, we found ourselves dining at the same restaurant, seated at the same table, reminiscent of old times. I asked her about her current relationship status, and she shared that she was now with a boy from kinnaur community, expressing her happiness. Curiously, she inquired about my relationship status, to which I replied with a bittersweet smile, reminiscing about the courage I had mustered during the time I confessed my feelings to her with a simple "I like you." Since then, I had never found that courage to approach another girl or engage in such conversations. However, I was fortunate to have a
                                <Link to="/" className="text-[#ff004f] underline mx-2 decoration-dashed font-black hover:text-white transition-colors">
                                    good old classmate named ...
                                </Link>
                            </p>
                        </div>

                        <div className="flex justify-center pb-32 pt-16">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative group/reveal"
                            >
                                {/* Hyper-glow with Color Motion */}
                                <motion.div
                                    animate={{
                                        opacity: [0.2, 0.5, 0.2],
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 180, 360]
                                    }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-16 bg-[conic-gradient(from_0deg,#ff004f,#4a0e0e,#ff004f)] blur-[80px] z-0"
                                />

                                <motion.button
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowAnamika(true)}
                                    className="relative flex items-center gap-8 bg-[#1a0b0d] hover:bg-white text-white hover:text-black px-12 md:px-16 py-10 md:py-12 rounded-[3.5rem] font-black border-2 border-white/10 hover:border-[#ff004f] transition-all duration-700 shadow-[0_0_50px_rgba(255,0,79,0.3)] overflow-hidden"
                                >
                                    {/* Liquid Background with Dynamic Colors */}
                                    <motion.div
                                        animate={{
                                            background: [
                                                "linear-gradient(45deg, #ff004f, #9b111e)",
                                                "linear-gradient(45deg, #9b111e, #ff004f)",
                                                "linear-gradient(45deg, #ff004f, #9b111e)"
                                            ]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="absolute inset-0 translate-y-full group-hover/reveal:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                                    />

                                    <div className="flex flex-col items-start relative z-10 text-left">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="w-8 h-[2px] bg-[#ff004f] group-hover/reveal:bg-white transition-colors" />
                                            <span className="text-[10px] uppercase tracking-[0.8em] opacity-40 group-hover/reveal:opacity-100 group-hover/reveal:text-white transition-all">Deep Dive</span>
                                        </div>
                                        <span className="text-3xl md:text-5xl font-playfair italic leading-none">Reveal Next<br />Chapter</span>
                                    </div>

                                    <div className="relative z-10 flex items-center justify-center bg-[#ff004f] group-hover/reveal:bg-white p-6 md:p-8 rounded-[2.5rem] transition-all duration-500 shadow-2xl">
                                        <Sparkles size={40} className="text-white group-hover/reveal:text-[#ff004f] group-hover/reveal:rotate-180 transition-transform duration-1000" />
                                    </div>

                                    {/* Magic Particles with Color Shift */}
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                opacity: [0, 1, 0],
                                                scale: [0.5, 1.2, 0.5],
                                                x: [Math.random() * 40, Math.random() * -40, Math.random() * 40],
                                                y: [Math.random() * 40, Math.random() * -40, Math.random() * 40],
                                                color: ["#ff004f", "#f8f1f1", "#ff004f"]
                                            }}
                                            transition={{ duration: 3 + i, repeat: Infinity }}
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                                        >
                                            <Sparkles size={20 - i * 4} />
                                        </motion.div>
                                    ))}
                                </motion.button>

                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        boxShadow: ["0 0 20px rgba(255,0,79,0.2)", "0 0 50px rgba(255,0,79,0.5)", "0 0 20px rgba(255,0,79,0.2)"]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-6 -right-6 px-6 py-3 bg-[#ff004f] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full z-20 border-2 border-white/20"
                                >
                                    Story Archive
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                )}

                {
                    showAnamika && (
                        <div className="space-y-20 pt-10">
                            {/* Score Board Final */}
                            <div className="relative p-1 bg-gradient-to-tr from-[#ff004f]/40 to-transparent rounded-[4rem]">
                                <div className="bg-[#1a0b0d] p-12 md:p-16 rounded-[4rem] space-y-12 border border-[#ff004f]/20">
                                    <h2 className="text-3xl font-playfair font-black text-center text-white italic uppercase tracking-[0.5em]">LOVE <span className="text-[#ff004f] not-italic">LEDGER</span></h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                                        <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 flex justify-between items-center">
                                            <div className="space-y-1">
                                                <h3 className="text-2xl font-black">dorjey</h3>
                                                <p className="text-[10px] uppercase font-black opacity-40 tracking-[0.2em]">Proposal: 1 | Confession: 0</p>
                                            </div>
                                            <span className="text-6xl font-playfair font-black text-[#ff004f]">1</span>
                                        </div>
                                        <div className="bg-[#ff004f] p-10 rounded-[2.5rem] flex justify-between items-center shadow-2xl shadow-[#ff004f]/20">
                                            <div className="space-y-1">
                                                <h3 className="text-2xl font-black">Jigmat*</h3>
                                                <p className="text-[10px] uppercase font-black opacity-60 tracking-[0.2em]">Proposal: 0 | Confession: 1</p>
                                            </div>
                                            <span className="text-6xl font-playfair font-black text-white/40">1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group mx-auto w-80 h-96">
                                <div className="absolute inset-0 bg-[#ff004f] rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
                                <img src={anamikaImg} alt="Anamika" className="w-full h-full object-cover rounded-[3rem] shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-1000" />
                                <div className="absolute -top-6 -right-6 bg-white text-black p-5 rounded-full shadow-2xl group-hover:bg-[#ff004f] group-hover:text-white transition-colors duration-500">
                                    <HeartOff size={24} />
                                </div>
                                <h4 className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-10 py-3 rounded-full shadow-2xl font-playfair font-black text-black tracking-[0.5em] whitespace-nowrap text-sm group-hover:bg-[#ff004f] group-hover:text-white transition-all">ANAMIKA</h4>
                            </div>

                            <div className="space-y-16 text-xl md:text-2xl leading-relaxed text-white/70 font-light px-4">
                                <p>
                                    I am trying to move on and my life is slowly getting back on track, but still sometimes I encounter diversions involving you, but I try my best to stay on my own path. Occasionally, for a couple of days, I find myself wavering and moving on your tack again, but I know your path will never accept me running on it. So, I try to redirect myself back onto my own track, reassuring myself that I will encounter better diversions, but still, I waver.
                                </p>
                                <hr className="border-[#ff004f]/5" />
                                <p>
                                    This cycle repeats again and again for a couple of months. Then, on Valentine's Day while I was in class I received a message on WhatsApp from an unknown number. When I checked it, I wasn’t expecting a proposal. At first, I thought it might be a prank by one of my friends. The number claimed to be a girl who was my good friend since the first year. I replied back, <span className="italic">"Stop kidding around."</span> Then, the unknown number responded, stating that she is <span className="font-bold underline decoration-[#ff004f] text-white">Anamika</span>, whom I know—a girl from Bangladesh studying in Geo Engineering, 3rd year.
                                </p>
                                <p>
                                    I still thought it was like a prank and my head was running these random thoughts-“why would she like me”, “it was probably part of a game” and this kind of thing only happens in movies where boys propose to girls on specific dates, like Valentine's Day. I didn't take it too seriously, but later that day i found her waiting in front of my department. I thought she was waiting for her other friends from Bangladesh who were studying in my department. I just waved my hand to her, and she came to me and said, <span className="text-[#ff004f] font-bold">"I like you."</span> I was like, "What is this?" with a red face. I replied with okay, as I didn't know what to say at that time since I had never encountered this situation before.
                                </p>
                                <p>
                                    Later that night, she messaged me, asking if I was single and expressing her desire to be in a relationship. I just viewed the message from the notification bar, pretending not to have seen it for two days. I spent that time revisiting my past and contemplating what to do. Despite my efforts to move my focus on her, your face kept coming into my mind, giving me hope <span className="text-[#ff004f]">(I still waver)</span>. I tried my best to forget about you, but it was not possible. Her offer seemed like a good way to move on from you, so I finally said yes by asking her, "Why do you like me?".
                                </p>

                                <div className="bg-[#ff004f]/5 p-12 md:p-16 rounded-[4rem] border border-[#ff004f]/10 italic space-y-10 relative">
                                    <Quote size={100} className="absolute -top-10 -left-10 text-[#ff004f]/5" />
                                    <p className="leading-relaxed text-white/60">
                                        She looked me in the eye and replied - "I like you because you're genuine and kind-hearted. You have a warmth about you that draws people in, and I've always admired your ability to make others feel valued and appreciated. You're also incredibly thoughtful and considerate, always going out of your way to make those around you feel special. Your sense of humor never fails to brighten my day, and I love how we can share laughter together. Beyond that, I admire your ambition and drive to pursue your passions and goals in life. You have a unique perspective on the world, and I find our conversations both stimulating and enriching. Overall, there's something about you that just clicks with me, and I feel a genuine connection that I haven't felt with anyone else. That's why I like you”.
                                    </p>
                                    <p className="text-right font-black text-[#ff004f] text-xs uppercase tracking-[0.5em]">
                                        - The Version in My Head
                                    </p>
                                </div>

                                <p className="text-center italic text-white/40">
                                    However, her actual response caught me off guard.
                                    <br />
                                    She said, <span className="font-bold text-[#ff004f] block text-3xl mt-4">"Don't know, I just started liking you from the department's day basketball tournament"</span>.
                                </p>

                                <p>
                                    Now I don’t know how this relationship will end, whether we would date for the next two years and grow apart after I graduate or whether I would not be able to handle the guilt of not being committed to her and still harbouring feelings for you and end the relationship.
                                </p>

                                {/* Final Score Board */}
                                <div className="relative p-1 bg-gradient-to-tr from-[#ff004f] to-transparent rounded-[4rem]">
                                    <div className="bg-[#1a0b0d] p-12 md:p-16 rounded-[4rem] space-y-12">
                                        <h2 className="text-3xl font-playfair font-black text-center text-white/40 uppercase tracking-[0.5em]">LOVE <span className="text-white">LEDGER</span></h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                                            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 flex justify-between items-center">
                                                <div className="space-y-1">
                                                    <h3 className="text-2xl font-black text-[#ff004f]">dorjey</h3>
                                                    <p className="text-[10px] uppercase font-black opacity-40 tracking-[0.2em]">Proposal: 2 | Confession: 0</p>
                                                </div>
                                                <span className="text-6xl font-playfair font-black text-white/20">2</span>
                                            </div>
                                            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 flex justify-between items-center">
                                                <div className="space-y-1">
                                                    <h3 className="text-2xl font-black text-[#ff004f]">Jigmat*</h3>
                                                    <p className="text-[10px] uppercase font-black opacity-40 tracking-[0.2em]">Proposal: 0 | Confession: 1</p>
                                                </div>
                                                <span className="text-6xl font-playfair font-black text-white/20">1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 p-16 rounded-[4rem] border border-white/10 italic text-center space-y-8 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                    <p className="text-3xl font-playfair font-black text-[#ff004f] italic">Final Reflection</p>
                                    <p className="text-2xl md:text-3xl leading-relaxed text-white/80">
                                        "Now that we are at the end of my journey and as I am writing these lines, I feel a little empty inside.
                                        This story is how I wish my life would’ve been…"
                                    </p>
                                    <div className="flex justify-center gap-4 text-[#ff004f]/20">
                                        {[...Array(5)].map((_, i) => <Heart key={i} size={16} fill="currentColor" className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
                                    </div>
                                </div>

                                <p className="text-2xl md:text-4xl font-playfair italic text-center pt-20 leading-relaxed text-white">
                                    But I want to give this a chance, because I think I am finally ready to let you go and walk confidently on my own path. Although I can no longer see a destination ahead of me and at each diversion that I take all I see is an endless road but I am hopeful, hopeful that one day the right diversion would find my way and until that day comes I will keep making turns in the hope that one of these turns would lead to my destiny.
                                </p>

                                {/* About Me Button */}
                                <div className="flex justify-center pt-24 pb-12">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="relative group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#ff004f] to-blue-600 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />

                                        <Link
                                            to="/about-me"
                                            className="relative flex items-center gap-6 bg-white text-black px-12 py-8 rounded-[2.5rem] font-black tracking-[0.4em] hover:bg-[#ff004f] hover:text-white transition-all duration-500 shadow-2xl group overflow-hidden"
                                        >
                                            <motion.div
                                                className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                                                whileHover={{ y: 0 }}
                                            />

                                            <div className="flex flex-col items-start relative z-10">
                                                <span className="text-[10px] uppercase tracking-[0.6em] opacity-40 mb-1">Vol: IV</span>
                                                <span className="text-2xl md:text-3xl font-playfair italic underline decoration-[#ff004f]/20 underline-offset-8">About Me</span>
                                            </div>

                                            <div className="relative z-10 flex items-center justify-center bg-black/5 group-hover:bg-white/20 p-4 rounded-2xl transition-colors">
                                                <Heart size={32} className="group-hover:scale-125 transition-transform duration-500 fill-current" />
                                            </div>

                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                                className="absolute -top-4 -right-4 text-[#ff004f]/10 group-hover:text-white/20 transition-colors"
                                            >
                                                <Sparkles size={80} />
                                            </motion.div>
                                        </Link>

                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#ff004f] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl pointer-events-none"
                                        >
                                            Continue Journey
                                        </motion.div>
                                    </motion.div>
                                </div>

                                <div className="text-center pt-32 space-y-12">
                                    <p className="text-[10px] font-black opacity-20 uppercase tracking-[1em] italic text-white">* Data provided as-is | Memory fragment complete</p>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Feb14;
