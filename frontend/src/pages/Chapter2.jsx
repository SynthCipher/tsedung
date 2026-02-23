import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { Music, Calendar, Send, Heart, ArrowRight, Quote, Sparkles, Wind, Ship } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import MusBackImg from "../assets/images/MusBack.jpeg";
import BackMusic1 from "../assets/audio/BackMusic1.mp3";

const Chapter2 = () => {
    const navigate = useNavigate();
    const { backendUrl } = useContext(AppContext);
    const [formData, setFormData] = useState({
        name: "",
        contactInfo: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus("Archiving your thoughts...");

        try {
            const { data } = await axios.post(
                `${backendUrl}/api/send`,
                {
                    name: formData.name,
                    contactInfo: formData.contactInfo,
                    message: formData.message,
                    chapter: 2,
                },
                {
                    withCredentials: true,
                }
            );

            if (data.success) {
                toast.success(data.message || "Thanks for reaching out! We'll get back to you soon.");
                setStatus(data.message || "Thank you! Your message has been sent successfully.");
                setFormData({
                    name: "",
                    contactInfo: "",
                    message: "",
                });

                setTimeout(() => setStatus(""), 2000);
                window.scrollTo(0, 0);

                // Redirect after a delay
                setTimeout(() => {
                    navigate("/chapter-3");
                }, 1500);
            } else {
                toast.error(data.message);
                setStatus(data.message);
            }
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message || "Failed to send message";
            toast.error(errorMsg);
            setStatus(errorMsg);
        } finally {
            setIsSending(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
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
            {/* Ambient Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff004f]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />

                {[...Array(15)].map((_, i) => (
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
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="space-y-32"
                >
                    {/* Header Section */}
                    <div className="text-center space-y-10 relative">
                        <motion.div variants={sectionVariants} className="space-y-4">
                            <p className="text-[#ff004f]/60 text-xs md:text-sm uppercase tracking-[0.8em] font-black">Memory Archive: Vol II</p>
                            <h1 className="text-6xl md:text-9xl font-playfair font-black text-white leading-none tracking-tighter italic">
                                HAPPY <span className="text-[#ff004f] not-italic">LOSAR</span> Jigmat LAY
                            </h1>
                        </motion.div>
                        <motion.p
                            variants={sectionVariants}
                            className="text-2xl md:text-3xl font-playfair italic text-[#ff004f]/80 max-w-2xl mx-auto leading-relaxed"
                        >
                            "I am jealous of people who get to see you every day..."
                        </motion.p>
                    </div>

                    {/* Music Player Romantic */}
                    <motion.div variants={sectionVariants} className="flex justify-center">
                        <div className="relative group w-full max-w-md aspect-square rounded-[4rem] overflow-hidden shadow-2xl p-1 bg-gradient-to-br from-[#ff004f]/20 to-transparent">
                            <div className="w-full h-full bg-[#1a0b0d] rounded-[3.9rem] overflow-hidden relative">
                                <img src={MusBackImg} alt="Melodies" className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-[4s] grayscale" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center space-y-8 bg-gradient-to-t from-[#1a0b0d] via-transparent to-transparent">
                                    <div className="bg-[#ff004f]/20 p-8 rounded-full backdrop-blur-md border border-[#ff004f]/20 group-hover:scale-110 transition-transform duration-500">
                                        <Music size={48} className="text-[#ff004f] animate-pulse" />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-4xl font-black font-playfair text-white italic">Melodies of the Heart</h2>
                                        <p className="text-[10px] uppercase font-black tracking-[0.4em] text-[#ff004f]/60">Captured: 10-12-2023</p>
                                    </div>
                                    <audio src={BackMusic1} className="w-full h-10 opacity-30 hover:opacity-100 transition-all duration-500 saturate-150 rotate-3 group-hover:rotate-0" controls autoPlay loop />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Story Block 1: Detailed Nomad Story */}
                    <div className="space-y-24">
                        <motion.div variants={sectionVariants} className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#ff004f]/5 to-transparent rounded-[3rem] -z-10" />
                            <div className="p-12 md:p-16 space-y-10 border-l-2 border-[#ff004f]/20">
                                <Quote size={80} className="text-[#ff004f]/5 absolute -top-8 left-8" />
                                <p className="text-2xl md:text-3xl font-playfair italic leading-relaxed text-white/90">
                                    In the big, wild mountains, where the air is fresh and the land is tough,
                                    there was this wanderer guy called Synth. He spent his days walking around
                                    the rough landscapes, finding peace in nature's hug.
                                    One time, all the nomad folks gathered by campfire,
                                    telling tales of their journeys. There was this bold and free-spirited
                                    woman named Mystic who grabbed Synth's attention. Mystic,
                                    full of adventure and the wind messing up her wild hair,
                                    had something about her that pulled Synth in.  </p>
                                <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                                    He spent his days walking around the rough landscapes, finding peace in nature's hug. One time, all the nomad folks gathered by campfire, telling tales of their journeys. There was this bold and free-spirited woman named <span className="text-[#ff004f] font-bold">Mystic</span> who grabbed Synth's attention. Mystic, full of adventure and the wind messing up her wild hair, had something about her that pulled Synth in.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={sectionVariants} className="space-y-10 relative">
                            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                                As Synth and Mystic travelled through the big, beautiful mountains,
                                they often ran into each other. They swapped stories about wild storms,
                                run-ins with tricky animals, and the amazing views they saw. Synth really
                                liked how brave and passionate Mystic was about the mountains. It felt
                                like they had a connection that went beyond just being fellow wanderers.

                                As time went on, Synth couldn't ignore that he was starting to really
                                like Mystic. His heart felt heavy with unsaid feelings, like a quiet
                                stream flowing in the mountains. Synth often daydreamed about the times
                                they spent together under the wide mountain sky.  </p>
                            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                                In a quiet valley, surrounded by tall peaks, Synth decided to tell
                                Mystic how he felt. He wrote a sweet message, talking about how
                                much he admired her adventurous spirit and how much joy she added
                                to his wandering. With a bit of nervousness, he handed the note to
                                Mystic as the wind whispered through the rocky peaks.  </p>
                            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                                Mystic was moved by Synth's honesty and the rugged beauty of his feelings.
                                She really valued their friendship but didn't feel the same romantic way.
                                Synth, although feeling a bit let down, took it in stride, tough like the
                                mountains. They kept on with their nomadic adventures, with Synth quietly
                                holding onto his one-sided love. Even though he found comfort in the vast
                                mountain scenes, deep down, he wished for a connection with Mystic that went
                                beyond just being friends.

                                As they roamed through the high mountains, Synth stuck by Mystic's side,
                                sharing all the ups and downs of their mountain life. Mystic, not knowing
                                about Synth's hidden feelings, continued to cherish their friendship amid the
                                peaks and valleys. And so, in the big, open sky of the mountain realm,
                                their nomadic story unfolded, a mix of friendship and love that was felt but unsaid   </p>
                        </motion.div>

                        {/* Reflection Section */}
                        <motion.div variants={sectionVariants} className="relative p-1 bg-gradient-to-t from-[#ff004f]/30 to-transparent rounded-[4rem]">
                            <div className="bg-[#1a0b0d] p-16 rounded-[3.9rem] text-center space-y-8 relative overflow-hidden">
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#ff004f]/10 blur-[80px] rounded-full" />
                                <Quote className="mx-auto text-[#ff004f] opacity-20" size={60} />
                                <h3 className="text-3xl md:text-4xl font-playfair italic text-white leading-relaxed max-w-2xl mx-auto">
                                    “Why do I still chase after you? I think the first dream of you is a sign that we are not going to be together."
                                </h3>
                                <p className="text-white/60 font-light leading-relaxed max-w-xl mx-auto">
                                    In the dream, you came for a moment, and from that moment, I had to understand that you are only in my life for a short duration, but still, I chase you.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Life & Exams */}
                    <div className="space-y-12 py-20 border-y border-white/5 relative">
                        <motion.div variants={sectionVariants} className="space-y-8 text-xl md:text-2xl font-light leading-relaxed text-white/80">
                            <p>
                                Life is so unpredictable, isn't it? It's strange to think that just
                                four years ago, we didn't even know each other. Back in school,
                                we spent two years together, but we never really talked much.
                                I remember asking you for notes, and that was about it.  </p>
                            <p>
                                But now, things have taken a different turn. These days,
                                not hearing from you for just a week feels like a real struggle
                                to find happiness. I've read those posts that talk about how
                                one-sided expectations can really mess with your head, and
                                I think I might be going through that right now. I wish
                                I could stop thinking about you, but the more I try,
                                the harder it becomes.
                                I know deep down that you're not going to be mine, but
                                this heart of mine keeps holding on, hoping against all odds.
                                As there is no hope but in no hope I can see hope.
                            </p>
                            <div className="bg-white/5 p-12 rounded-[3rem] italic text-white/70 border border-white/5 text-center">
                                My exams are coming up, and I really want to focus on
                                my studies, but my mind keeps drifting back to thoughts
                                of you. It's tough, and I don't even know why.  </div>
                        </motion.div>

                        {/* Pain Quote */}
                        <motion.div variants={sectionVariants} className="pt-20 text-center">
                            <div className="inline-block relative">
                                <Quote className="text-[#ff004f]/10 absolute -top-10 -left-10" size={100} />
                                <p className="text-2xl md:text-4xl font-playfair italic text-white leading-relaxed relative z-10 max-w-3xl mx-auto">
                                    "Some say it's painful to wait for someone. Some say it's more painful to forget someone. But, the worst pain comes when you don't know whether to wait or forget"
                                </p>
                                <div className="mt-10 flex justify-center gap-2">
                                    {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-1 bg-[#ff004f]/40 rounded-full" />)}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Connection Reflection */}
                    <div className="space-y-20">
                        <motion.div variants={sectionVariants} className="text-xl md:text-2xl font-light leading-relaxed text-white/80 space-y-10">
                            <p>
                                Looking back at our story, it's evident that you were the one consistently maintaining our connection by initiating messages and calls. There was a time when I messaged you without hesitation, but over time, I started to feel like you were always busy, and I anxiously awaited your messages every day.
                            </p>
                            <div className="p-12 bg-[#ff004f]/5 rounded-[3.5rem] border border-[#ff004f]/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 text-[#ff004f]/10 group-hover:rotate-12 transition-transform duration-1000">
                                    <Wind size={60} />
                                </div>
                                <p>
                                    I want to express my gratitude for your messages, as they mean a lot to me. If you had never messaged me, I would have carried on with life as usual, but I always hoped to hear from you. We used to exchange messages spontaneously, without any set day or time, but as time passed, I found myself creating a mental schedule, mainly expecting messages from you during the weekends or to message you on Saturday.
                                </p>
                            </div>
                            <p className="border-l-2 border-[#ff004f]/40 pl-10 italic">
                                I wish jigmatI could message you more often, especially during the weekends, but a lack of courage holds me back. Please, continue to send messages as you always have; it's bring emotional comfort and joy to my life.
                            </p>
                        </motion.div>
                    </div>

                    {/* Journal Entry Detailed */}
                    <div className="space-y-20 py-20 border-t border-white/5">
                        <motion.div variants={sectionVariants} className="space-y-12">
                            <div className="text-center space-y-4">
                                <h3 className="text-4xl md:text-6xl font-playfair font-black text-white italic">Diary Entry <span className="text-[#ff004f] not-italic">30-10-2023</span></h3>
                                <div className="flex justify-center items-center gap-4 text-[#ff004f]/40">
                                    <Calendar size={16} />
                                    <p className="uppercase tracking-[0.3em] text-[10px] font-black">Archive Entry #2023-10</p>
                                </div>
                            </div>

                            <div className="relative p-12 md:p-20 bg-gradient-to-br from-white/5 to-transparent rounded-[4rem] border border-white/10">
                                <Quote className="absolute top-10 left-10 text-[#ff004f]/20" size={60} />
                                <div className="space-y-8 text-xl md:text-2xl font-light italic text-white/80 leading-relaxed">
                                    <p>
                                        My life is consumed by stress and depression. I worry about the future, feel lonely despite being surrounded by beautiful and supportive people. Stress is taking a toll on my health and time. I've never experienced the level of stress and pain on the brain before college. The pain in my brain is unbearable, and it feels like my mind is about to explode. When I'm with people, the pain lessens, but as soon as the conversation ends, my suffering intensifies.
                                    </p>
                                    <p>
                                        And yesterday, unexpectedly, I received a message from Jigmat asking, 'Are you free? Do you want to chat?' It made me happy, but simultaneously, it hurt me deeply due to this kind of nonsense question. Maybe she thought I was busy, but in reality, I am free 24 hours a day and I want and wish to chat with her all the time.
                                    </p>
                                    <p>
                                        Day before yesterday, my WhatsApp was mistakenly deleted, erasing all the chat history with everyone. However, I felt a moment of sadness and cried because it deleted my conversation with Jigmat, the only one that made me laugh and brought me joy every time. Today, we chatted for about 3 hours, which is the best time I've spent this week.
                                    </p>
                                </div>
                                <div className=" pt-10 border-t border-white/10 text-center opacity-30">
                                    <p className="text-[10px] font-mono tracking-widest uppercase">53 74 61 79 20 73 74 72 6F 6E 67 20 6A 69 67 6D 61 74</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Priorities & Forever Friends */}
                    <div className="space-y-12">
                        <motion.div variants={sectionVariants} className="text-xl md:text-2xl font-light leading-relaxed text-white/90 space-y-10">
                            <p>
                                Relationships are a beautiful journey, but they can bring changes in our priorities. As life goes on, you’ll meet new people, and your world might slowly start to revolve around them. It’s amazing how life can change so drastically. There was a time when we didn’t even know each other, and now you’re at the top of my priority list. I would go to great lengths, even sacrificing my sleep and study time, just to be there for you. </p>
                            <p>
                                But as life goes on, relationships change. Conversations become shorter, the time we spend chatting gets replaced by other commitments, and so on. From being close friends who talked all the time, we might evolve into only exchanging messages once a year, usually on birthdays. Yet, one thing remains certain: we will be friends forever. I'll always cherish those days when we were so close, and I'll miss them dearly.
                            </p>

                            <div className="flex flex-col items-center gap-6 py-12">
                                <div className="h-[1px] w-24 bg-white/10" />
                                <span className="text-4xl md:text-5xl font-tibetan text-[#ff004f] font-black tracking-widest animate-pulse">བུ་ཚའི་རྨི་ལམ་</span>
                                <div className="h-[1px] w-24 bg-white/10" />
                            </div>

                            <p className="italic text-center text-white/70 max-w-3xl mx-auto leading-relaxed">
                                After that first dream with you, you keep showing up in my
                                dreams, and oddly, each one ends the same: I simply wake up.
                                Every time, my dreams explore colorful tales, filled with joy
                                and beauty. Just as the story gets enchanting, you suddenly
                                appear, bringing surprise and wonder. Sadly, the dream always
                                ends there, leaving me wishing for more time in that magical
                                moment with you.
                            </p>
                        </motion.div>
                    </div>

                    {/* Poem Centerpiece */}
                    <motion.div variants={sectionVariants} className="relative py-12 group">
                        <div className="absolute inset-0 bg-[#ff004f] rounded-[5rem] blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000" />
                        <div className="relative bg-white/5 backdrop-blur-3xl p-16 md:p-24 rounded-[5rem] border border-white/10 text-center space-y-12">
                            {/* <Sparkles className="mx-auto text-[#ff004f]/40 animate-pulse" size={60} /> */}
                            <p className="text-xl md:text-2xl font-playfair italic leading-[1.4] text-white">
                                My heart beats around the clock for you,<br />
                                My eyes long to gaze upon your beauty,<br />
                                My ears crave the melody of your voice,<br />
                                My nose yearns for the fragrance of your essence,<br />
                                My tongue wrestles to express my feelings,<br />
                                My entire being desires to be with you... <span className="text-[#ff004f]">forever</span>.
                            </p>
                        </div>
                    </motion.div>

                    {/* Final Word & Journey Summary */}
                    <div className="space-y-20">
                        <motion.div variants={sectionVariants} className="text-xl md:text-2xl font-light leading-relaxed text-white/80 space-y-12 text-center">
                            <p className="max-w-3xl mx-auto">
                                Once upon a time, I used to be someone who only cared about
                                sports and never really noticed girls. But now whenever,
                                I think about a girl, or maybe I'm just looking for a partner,
                                everything feels different. I don't really understand how my
                                mind changed so much. Maybe it's like how animal, after some
                                time, start looking for partner. Even though animal don't think
                                like we do, they still search for a partner. I think I'm at
                                that stage of being a human where I need a special someone
                                to share my love and make our new journey.  </p>
                            <p className="italic opacity-60 max-w-3xl mx-auto">
                                As in past chapter, my aim isn't to seek your pity or sympathy.
                                Writing brings me joy, and with each passing day, I find
                                myself growing and refining my story to share with you.
                                As I navigate this journey of learning and improvement,
                                there's a genuine desire to leave an impression. I sincerely
                                hope you enjoy the unfolding narrative.
                                Having erased all memories from my notes of last time, hoping to avoid
                                such situations, here is the unexpected 2nd part of
                            </p>

                            <div className="space-y-6 pt-10">
                                <h3 className="text-4xl md:text-6xl font-playfair font-black text-white">"Is It Love or <span className="text-[#ff004f]">Just Infatuation</span>?"</h3>
                                <p className="text-xs uppercase tracking-[0.5em] text-[#ff004f]/40 font-black italic">The Unfolding Narrative: Part II</p>
                            </div>

                            <p className="text-white/40 uppercase tracking-widest text-sm max-w-2xl mx-auto font-black leading-relaxed">
                                Here it ends for now. I hope that one day, if you happen to read this, filling the form would bring peace to my heart. Happy New Year. Best wishes for a Joyful New Year 202 _, unsure if you'll come across this message.
                            </p>

                            <div className="flex flex-col items-center gap-6 pt-10">
                                <span className="text-6xl font-playfair font-black text-white tracking-tighter">JULLAY</span>
                                <div className="flex items-center gap-4 text-[#ff004f]/60 font-black uppercase tracking-widest text-[10px]">
                                    <span className="h-[1px] w-8 bg-current" />
                                    <span>Part II Complete</span>
                                    <span className="h-[1px] w-8 bg-current" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Premium Form Section */}
                    <motion.div variants={sectionVariants} className="relative ">
                        <div className="absolute inset-0 bg-blue-900/10 blur-[100px] rounded-full" />
                        <div className="relative bg-white/5 backdrop-blur-3xl p-12 md:p-20 rounded-[4rem] border border-white/10 shadow-2xl">
                            <div className="text-center space-y-4 mb-16">
                                <h2 className="text-4xl md:text-5xl font-playfair font-black text-white italic">Share Your Thoughts</h2>
                                <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-black">Archive Response Vault</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="group relative">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            required
                                            className="w-full bg-white/5 p-6 rounded-2xl border border-white/10 outline-none focus:border-[#ff004f]/50 focus:ring-4 focus:ring-[#ff004f]/5 transition-all text-white placeholder:text-white/20 font-light"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="group relative">
                                        <input
                                            type="text"
                                            name="contactInfo"
                                            placeholder="Email or Phone Number (Optional)"
                                            className="w-full bg-white/5 p-6 rounded-2xl border border-white/10 outline-none focus:border-[#ff004f]/50 focus:ring-4 focus:ring-[#ff004f]/5 transition-all text-white placeholder:text-white/20 font-light"
                                            value={formData.contactInfo}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <textarea
                                    name="message"
                                    rows="6"
                                    placeholder="Appreciate your full-read! Send me a message..."
                                    className="w-full bg-white/5 p-8 rounded-3xl border border-white/10 outline-none focus:border-[#ff004f]/50 focus:ring-4 focus:ring-[#ff004f]/5 transition-all text-white placeholder:text-white/20 font-light resize-none"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>

                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className={`w-full ${isSending ? 'bg-white/10 text-white/20 cursor-not-allowed' : 'bg-[#ff004f] text-white hover:bg-white hover:text-black'} py-8 rounded-3xl text-2xl font-black tracking-widest transition-all duration-500 shadow-2xl shadow-pink-900/40 flex items-center justify-center gap-6 group overflow-hidden relative`}
                                >
                                    <span className="relative z-10 uppercase tracking-[0.2em]">
                                        {isSending ? 'Archiving...' : 'Send Response'}
                                    </span>
                                    {!isSending && <Send size={24} className="relative z-10 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />}
                                </button>
                            </form>
                            {status && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`mt-8 p-6 ${status.toLowerCase().includes('success') ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-[#ff004f]/10 border-[#ff004f]/20 text-[#ff004f]'} rounded-2xl border text-center transition-colors duration-500`}>
                                    <p className="font-black italic tracking-wide">{status}</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                    {/* Navigation to Next Chapter */}
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
                                to="/chapter-3"
                                className="relative flex items-center gap-6 bg-white text-black px-12 py-8 rounded-[2.5rem] font-black tracking-[0.4em] hover:bg-[#ff004f] hover:text-white transition-all duration-500 shadow-2xl group overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                                    whileHover={{ y: 0 }}
                                />

                                <div className="flex flex-col items-start relative z-10 text-left">
                                    <span className="text-[10px] uppercase tracking-[0.6em] opacity-40 mb-1 text-black group-hover:text-white transition-colors">Vol: III Waiting</span>
                                    <span className="text-2xl md:text-3xl font-playfair italic underline decoration-[#ff004f]/20 underline-offset-8">Proceed to Chapter III</span>
                                </div>

                                <div className="relative z-10 flex items-center justify-center bg-black/5 group-hover:bg-white/20 p-4 rounded-2xl transition-colors">
                                    <Ship size={32} className="group-hover:-translate-y-1 transition-transform duration-500" />
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
                                Keep Exploring
                            </motion.div>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default Chapter2;
