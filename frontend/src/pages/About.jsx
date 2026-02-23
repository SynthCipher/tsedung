import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, HeartOff, Sparkles, MapPin, Mail, Phone, ExternalLink, Quote, Stars, Wind, Camera, Clock, Calendar, Gift, MessageCircle, Music, ChevronDown } from "lucide-react";
import AboutMeImg from "../assets/images/AboutMe.jpg";

const About = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const sectionVariants = {
        hidden: { y: 30, opacity: 0, filter: "blur(10px)" },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 1.2, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen bg-[#1a0b0d] text-[#f8f1f1] selection:bg-[#ff004f] pb-40 overflow-hidden font-sans">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#ff004f]/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10 pt-40">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="space-y-40"
                >
                    {/* Cinematic Header */}
                    <motion.div variants={sectionVariants} className="text-center space-y-12">
                        <div className="space-y-4">
                            <div className="flex items-center justify-center gap-4 text-[#ff004f]/40 uppercase tracking-[0.6em] text-[10px] font-black">
                                <hr className="w-12 border-[#ff004f]/20" />
                                <span>logoCOVER</span>
                                <hr className="w-12 border-[#ff004f]/20" />
                            </div>
                            <h1 className="text-7xl md:text-9xl font-playfair font-black text-white tracking-tighter leading-none italic">
                                ALBUM <br />
                                <span className="text-[#ff004f] not-italic">JIGMAT</span>
                            </h1>
                        </div>
                        <p className="text-2xl md:text-3xl font-playfair italic text-white/40 tracking-widest uppercase">
                            " I WISH THAT I NEVER MET YOU "
                        </p>
                        <div className="flex flex-col items-center gap-2 pt-8">
                            <p className="text-[#ff004f] font-black tracking-[0.4em] text-xs">JULLAY Rhea LAY</p>
                            <div className="flex items-center gap-4 text-white/20">
                                <Camera size={14} />
                                <span className="text-[10px] uppercase font-bold tracking-widest">SnapPhoto Archive</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Play and Continue Trigger */}
                    <motion.div variants={sectionVariants} className="flex flex-col items-center justify-center space-y-8">
                        <div className="p-1 bg-[#ff004f]/20 rounded-full animate-pulse">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-[#ff004f] text-white px-12 py-5 rounded-full font-black tracking-[0.4em] shadow-2xl flex items-center gap-4 group"
                            >
                                PLAY AND CONTINUE <Wind size={20} className="group-hover:translate-x-2 transition-transform" />
                            </motion.button>
                        </div>
                        <ChevronDown className="text-white/20 animate-bounce" size={32} />
                    </motion.div>

                    {/* Parable: Mr. J */}
                    <motion.div variants={sectionVariants} className="relative p-1 bg-gradient-to-br from-[#ff004f]/20 to-transparent rounded-[4rem]">
                        <div className="bg-[#1a0b0d] p-12 md:p-16 rounded-[4rem] space-y-12 border border-white/5 relative overflow-hidden">
                            <Quote size={80} className="absolute -top-10 -left-10 text-[#ff004f]/5" />
                            <div className="flex items-center gap-6 text-[#ff004f]/60 mb-8">
                                <Stars size={20} />
                                <p className="text-[10px] uppercase font-black tracking-[0.5em]">Parable of the Bluebird</p>
                            </div>
                            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                                Once upon a time, there was a kind old man named <span className="text-white font-bold underline decoration-[#ff004f]">Mr. J</span> who lived alone in a cozy cottage by the river. Every day, he fed the birds that visited his garden. One winter, a rare bluebird with a bright red feather on its wing started coming to his window. Mr. J and the bluebird became friends. They'd share stories, and the bird even sang beautiful songs.
                            </p>
                            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                                But one day, Mr. J fell seriously ill. Worried for his friend, the bluebird flew away. As the days passed, Mr. J's health improved, but he missed his feathered friend. Then, one sunny morning, the bluebird returned, perched on his windowsill. It had brought a sprig of wildflowers as a get-well gift. Their friendship remained a heartwarming true story for years to come.
                            </p>
                            <p className="text-[#ff004f] italic font-black text-center pt-8 tracking-widest uppercase text-xs">
                                E wo chon matla yin 😂
                            </p>
                        </div>
                    </motion.div>

                    {/* Parable: Synth */}
                    <motion.div variants={sectionVariants} className="relative p-1 bg-gradient-to-tr from-[#ff004f]/10 to-transparent rounded-[4rem]">
                        <div className="bg-[#1a0b0d] p-12 md:p-16 rounded-[4rem] space-y-12 border border-white/5">
                            <div className="flex items-center gap-6 text-[#ff004f]/60 mb-8">
                                <Wind size={20} />
                                <p className="text-[10px] uppercase font-black tracking-[0.5em]">The Lighthouse Connection</p>
                            </div>
                            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                                Once upon a time, there was an old man named <span className="text-white font-bold underline decoration-[#ff004f]">Synth</span> who looked after a tall lighthouse near the sea. His job was to make sure ships didn't crash into rocks during storms. One stormy night, a ship was in trouble, and Synth used the lighthouse to guide it to safety.
                            </p>
                            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed italic border-l-2 border-[#ff004f]/20 pl-8">
                                Among the people on the ship was a young woman named <span className="text-white">Mystique</span>. She was very brave. As the storms went away, Synth and Mystique became friends. Even though he was old and she was young, they liked each other a lot.
                            </p>
                            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed text-center">
                                Their friendship showed that sometimes, even in tough times, we can find special connections that make our lives brighter.
                            </p>
                            <p className="text-[#ff004f] italic font-black text-center pt-8 tracking-widest uppercase text-xs">
                                This one too chonla yin.
                            </p>
                        </div>
                    </motion.div>

                    {/* Anniversary & Project Context */}
                    <motion.div variants={sectionVariants} className="space-y-16 px-4">
                        <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 space-y-10 relative group">
                            <Clock className="absolute -top-6 -right-6 text-[#ff004f]/30 group-hover:rotate-180 transition-transform duration-1000" size={48} />
                            <p className="text-xl md:text-2xl leading-relaxed text-white/80 font-light">
                                I've been working on this Project for many days and plan to complete it on <span className="text-[#ff004f] font-black">September 30th</span>, which marks our 2nd anniversary on WhatsApp using this current number. I'll send you this letter on <span className="text-[#ff004f] font-black">October 7th</span> which marks our 3rd anniversary on Instagram instead of your 21st birthday since that's the day we started chatting, and I understand you'll be busy on your special day.
                            </p>
                            <div className="bg-white/10 p-8 rounded-3xl text-center space-y-4">
                                <p className="text-[#ff004f] font-playfair font-black text-xl italic leading-relaxed">
                                    "HaHa lo suum zerna zche zerna lo wo bhut tsartok. Duspo gazuk ga buth pata khorang cha merak."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Birthday Story */}
                    <motion.div variants={sectionVariants} className="space-y-20 relative">
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-gradient-to-b from-[#ff004f]/20 via-transparent to-transparent hidden md:block" />

                        <div className="space-y-12">
                            <div className="flex flex-col items-center gap-6">
                                <span className="bg-[#ff004f]/10 text-[#ff004f] px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase">Memory Fragment: The Wrong Date</span>
                                <h3 className="text-3xl md:text-5xl font-playfair font-black text-center italic">"The Aadhaar Moment"</h3>
                            </div>

                            <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 space-y-8 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#ff004f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                                    I remember last year I wished you on the wrong date because it was mentioned on your Aadhaar card. At that time, it was an extremely embarrassing moment for me. From that moment, I pledged to myself that I would wish you first on this birthday, but .........
                                </p>
                                <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed italic border-l-2 border-[#ff004f]/20 pl-8">
                                    I also remember my birthday when you were the only one who wished me. I'm happy that at least one person remembered me on my birthday, whether it was just for formality 🙏😅 or genuinely 🙏🥰. Thank you for that day. That small message made my day.
                                </p>
                            </div>

                            <div className="bg-[#ff004f]/5 p-12 rounded-[4rem] border border-[#ff004f]/10 space-y-8">
                                <div className="flex items-center gap-4 text-[#ff004f]">
                                    <Gift size={24} />
                                    <h4 className="font-black uppercase tracking-widest text-xs">Hostel Days & One-Rupee Candies</h4>
                                </div>
                                <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
                                    Since childhood, birthday celebrations were a rarity to me, an experience that fellow hostellers can empathize with. I didn't even know my own birthdate until class 9th. I used to despise my birthday, but I had a fondness for others', particularly those of day scholars. Just like those <span className="text-[#ff004f] font-bold italic">one-rupee candies</span> that brought so much joy during my hostel days, you bring happiness to my life now.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* ChatGPT Birthday Message */}
                    <motion.div variants={sectionVariants} className="text-center space-y-12 bg-white/5 py-24 rounded-[5rem] px-8 border border-white/5 group">
                        <div className="flex justify-center gap-2 mb-8">
                            {[...Array(3)].map((_, i) => <Sparkles key={i} size={20} className="text-[#ff004f] animate-pulse" />)}
                        </div>
                        <p className="text-3xl md:text-5xl font-playfair font-black text-white italic leading-tight max-w-3xl mx-auto">
                            "May your day be as radiant as your heart, and may your inner beauty continue to light up the lives of those around you."
                        </p>
                        <p className="text-[#ff004f]/40 font-black text-[10px] tracking-[0.5em] uppercase">Ezuk ChatGPT zerduk when I give the command</p>
                    </motion.div>

                    {/* Evolution Timeline */}
                    <motion.div variants={sectionVariants} className="space-y-32">
                        <div className="text-center space-y-6">
                            <Calendar className="mx-auto text-[#ff004f]/20" size={64} />
                            <h2 className="text-4xl md:text-6xl font-playfair font-black italic">The Timeline</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/5 space-y-6">
                                <span className="text-[#ff004f] font-black text-3xl font-playfair cursor-default">2019</span>
                                <p className="text-white/60 leading-relaxed font-light text-lg">
                                    You entered my life on <span className="text-white font-bold">May 9</span> as a classmate. We survived the 11th and 12th grades through offline and online shifts.
                                </p>
                            </div>
                            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/5 space-y-6">
                                <span className="text-[#ff004f] font-black text-3xl font-playfair cursor-default">2023</span>
                                <p className="text-white/60 leading-relaxed font-light text-lg">
                                    Now in our 3rd year. I'm still confused about words like like, love, and crush... but one thing is certain: <span className="text-white italic">time and tide wait for none.</span>
                                </p>
                            </div>
                            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/5 space-y-6">
                                <span className="text-[#ff004f] font-black text-3xl font-playfair cursor-default">∞</span>
                                <p className="text-white/60 leading-relaxed font-light text-lg">
                                    I got addicted to you. It's more captivating than drugs; consumed by your smile, there is absolutely <span className="text-white underline decoration-[#ff004f]">no regret</span>.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-transparent via-[#ff004f]/5 to-transparent p-12 text-center rounded-[4rem] border border-white/5">
                            <p className="text-2xl md:text-3xl font-light text-white/50 leading-relaxed italic">
                                "While I'm chatting with you, my face is always in smile mode; I don't know why."
                            </p>
                            <div className="mt-8 flex justify-center gap-6">
                                <div className="w-12 h-1 bg-[#ff004f]/20 rounded-full" />
                                <MessageCircle className="text-[#ff004f]/40" size={24} />
                                <div className="w-12 h-1 bg-[#ff004f]/20 rounded-full" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Dream Sequence */}
                    <motion.div variants={sectionVariants} className="space-y-16">
                        <div className="text-center space-y-4">
                            <span className="text-[#ff004f]/40 uppercase tracking-[0.4em] text-[10px] font-black">August 1, 2023</span>
                            <h2 className="text-4xl md:text-6xl font-playfair font-black italic">"FIRST TIME IN MY DREAM"</h2>
                        </div>

                        <div className="bg-white/5 p-12 md:p-16 rounded-[4rem] border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-20 h-20 bg-[#ff004f]/10 blur-3xl rounded-full" />
                            <p className="text-xl md:text-3xl font-playfair leading-relaxed text-white/80 italic text-center">
                                "Today, for the first time in my life, Rhea appeared in my dream alongside her sister, Yangdol, for a brief moment. It seemed like we were at a gathering... With all my heart, I shouted your name, but you vanished from my dream."
                            </p>
                            <div className="mt-12 flex justify-center gap-4 text-[#ff004f]/20">
                                {[...Array(3)].map((_, i) => <Stars key={i} size={48} className="animate-spin-slow" />)}
                            </div>
                        </div>
                    </motion.div>

                    {/* Video Call Memory */}
                    <motion.div variants={sectionVariants} className="bg-[#ff004f]/5 p-12 md:p-20 rounded-[5rem] space-y-12 border border-[#ff004f]/10 relative group">
                        <div className="absolute -top-10 -left-10 bg-[#1a0b0d] p-6 rounded-full border border-[#ff004f]/20 text-[#ff004f]">
                            <Music size={40} className="animate-pulse" />
                        </div>
                        <h3 className="text-2xl font-black text-[#ff004f] uppercase tracking-[0.3em] flex items-center gap-4">
                            YANG CHIG FROM བུ་ཚའི་སྙིང་གཏམ་ <span className="opacity-20 text-xs">17-09-2023</span>
                        </h3>
                        <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed text-white/70">
                            <p>
                                Yesterday, I had a conversation with Rhea for one hour and a couple of minutes. It's like magic; the stress I have, the pain I'm suffering, everything is gone. It was our second video call of a duration of more than 1 hour.
                            </p>
                            <p className="italic">
                                "Thank God I have someone I can trust 🤔😁 and share my feelings with... My mood is on the next level—pure happiness. I'm just waiting for Rhea's message so that I can chat continuously without disturbance 😂."
                            </p>
                        </div>
                    </motion.div>

                    {/* The Poem */}
                    <motion.div variants={sectionVariants} className="text-center space-y-16 py-32 relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff004f]/5 to-transparent blur-3xl h-full -z-10" />
                        <div className="space-y-8 relative">
                            {[
                                { t: "My heart beats around the clock for you,", i: <Heart className="text-[#ff004f]" /> },
                                { t: "My eyes long to gaze upon your beauty always,", i: <Stars className="text-white/20" /> },
                                { t: "My ears crave the melody of your voice,", i: <Music className="text-[#ff004f]/40" /> },
                                { t: "My nose yearns for the fragrance of your essence,", i: <Wind className="text-white/20" /> },
                                { t: "My tongue wrestles to express my feelings for you,", i: <Quote className="text-[#ff004f]/40" /> },
                                { t: "My entire being desires to be with you forever.", i: <HeartOff className="text-white/10" /> }
                            ].map((line, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center justify-center gap-6"
                                >
                                    <span className="hidden md:block opacity-20">{line.i}</span>
                                    <p className="text-2xl md:text-4xl font-playfair font-black text-white italic tracking-tight">{line.t}</p>
                                    <span className="hidden md:block opacity-20">{line.i}</span>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-[#ff004f]/40 text-[10px] font-black uppercase tracking-[0.5em] pt-12">
                            - Friends Nyon Nyampo Dispen Took more than half an hour During class Time
                        </p>
                    </motion.div>

                    {/* Final Sign-off */}
                    <motion.div variants={sectionVariants} className="space-y-12 text-center">
                        <div className="max-w-2xl mx-auto space-y-8 text-xl md:text-2xl font-light text-white/50 leading-relaxed">
                            <p>
                                This is not a love/propose letter nor an attempt to seek sympathy. It's just my feelings toward you and the memories we share. Thanks for these memories 😇.
                            </p>
                            <p className="text-white font-playfair text-3xl italic">
                                "Now, on the occasion of your birthday, my wish is for you to have a bright career and a healthy life. That's it."
                            </p>
                        </div>

                        <div className="pt-20 space-y-4">
                            <p className="text-[10px] uppercase font-black tracking-[0.8em] opacity-20 italic">If you ever feel lonely... remember me.</p>
                            <h2 className="text-4xl md:text-6xl font-playfair font-black text-[#ff004f]">CONNECT WITH ME</h2>
                        </div>
                    </motion.div>

                    {/* Contact Minimal */}
                    <motion.div variants={sectionVariants} className="text-center space-y-12 bg-[#ff004f]/5 border border-white/5 text-white p-20 rounded-[5rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff004f]/10 blur-[100px] animate-pulse" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff004f]/5 blur-[100px]" />
                        <div className="flex flex-wrap justify-center gap-12 relative z-10">
                            <a href="mailto:jigmatdorjey255@gmail.com" className="flex items-center gap-3 hover:text-[#ff004f] transition-all hover:scale-110 font-bold uppercase tracking-widest text-sm"><Mail size={18} /> Email</a>
                            <a href="tel:+919682574824" className="flex items-center gap-3 hover:text-[#ff004f] transition-all hover:scale-110 font-bold uppercase tracking-widest text-sm"><Phone size={18} /> Call</a>
                        </div>
                        <div className="pt-12 border-t border-white/5">
                            <p className="text-[10px] uppercase font-black opacity-30 tracking-[1em] mb-4">Made with Heart by</p>
                            <h3 className="text-4xl md:text-5xl font-playfair font-black text-white italic">
                                JIMMY <span className="text-[#ff004f] not-italic">( འཇིག་མེད་རྡོ་རྗེ་ )</span>
                            </h3>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
};

export default About;
