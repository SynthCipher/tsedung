import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Heart, Users, MapPin, GraduationCap, Briefcase, Mail, ArrowRight, Sparkles } from "lucide-react";

const AboutMe = () => {
    return (
        <div className="min-h-screen bg-[#1a0b0d] text-[#f8f1f1] selection:bg-[#ff004f] selection:text-white pt-32 pb-32">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff004f]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Back Button */}
                <Link
                    to="/chapter-3"
                    className="inline-flex items-center gap-3 text-[#ff004f] hover:text-white transition-colors mb-12 group"
                >
                    <Home size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-black uppercase tracking-widest text-sm">Back to Story</span>
                </Link>

                <div className="space-y-20">
                    {/* Header */}
                    <div className="text-center space-y-8">
                        <div className="space-y-4">
                            <p className="text-[#ff004f]/60 text-xs md:text-sm uppercase tracking-[0.8em] font-black italic">Personal Archive</p>
                            <h1 className="text-6xl md:text-8xl font-playfair font-black text-white leading-none tracking-tighter italic">
                                ABOUT <span className="text-[#ff004f] not-italic">ME</span>
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl font-playfair italic text-[#ff004f]/80 max-w-2xl mx-auto leading-relaxed">
                            "My life, my family, and the journey that shaped who I am today..."
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-16">
                        {/* Introduction */}
                        <div className="relative p-1 bg-gradient-to-br from-[#ff004f]/20 to-transparent rounded-[4rem]">
                            <div className="bg-[#1a0b0d] p-12 md:p-16 rounded-[3.9rem] border border-white/5 space-y-8">
                                <div className="flex items-center gap-4 text-[#ff004f]">
                                    <Heart size={32} className="fill-current" />
                                    <h2 className="text-3xl font-playfair font-black italic">Who I Am</h2>
                                </div>
                                <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/70 font-light">
                                    <p className="first-letter:text-5xl first-letter:font-black first-letter:text-[#ff004f] first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                                        I was born on 25th May 2002. My family tells me that my name, Jigmat Dorjey, was given by His Holiness Gyalwang Drukpa while I was still in my mother’s womb. They say I was born healthier than most babies. Whenever I hear that, I feel like my life began with blessings.
                                    </p>
                                    <p>
                                        But life, as I grew up, was never simple.
                                    </p>
                                    <p>
                                        When I was around two or three years old, I fell into a toilet pit. My sister heard my cries and rescued me. Sometimes, in my weakest moments, I blame that incident for my struggles in studies, as if that fall took away something from me. Deep down, I know that may not be true but the thought still lingers.
                                    </p>
                                    <p>
                                        I began my schooling at Government School Kharnakling. I still remember sitting in Class 1, learning the Urdu alphabet. I was a very naughty child. Too naughty. My parents would sometimes send me to Puga School, where my cousin sister was a teacher. I remember the students calling me “Mam Yeshi Nono” and treating me kindly. One day during assembly, I dictated numbers from 1 to 100, and everyone clapped loudly. That applause still echoes in my memory one of the first moments I felt proud of myself.
                                    </p>
                                    <p>
                                        But my mischief often led me into trouble.
                                    </p>
                                    <p>
                                        At Tibetan Children’s Village (TCV) Menlha SOS, I made some serious mistakes during my childhood. I used to steal money and junk food from my grandfather’s tuck shop. At that time, I didn’t fully understand how wrong it was, but deep inside I knew it wasn’t right.
                                    </p>
                                    <p>
                                        Once, I even stole cigarettes and smoked them with my classmates. I was trying to act cool and fit in. Later, one of my classmates complained to the teacher. The school office sent a letter to my home about my behavior.
                                    </p>
                                    <p>
                                        When my father came to pick me up that evening, I could see how angry and disappointed he was. In the school staff room, he beat me harshly while the teachers tried to stop him. I felt scared and ashamed. It was one of the most painful and humiliating moments of my childhood.
                                    </p>
                                    <p>
                                        I was beaten many times when I was young because I was considered the naughtiest child. Looking back now, I realize I made wrong choices, but I was also just a child who didn’t fully understand the consequences of my actions.
                                    </p>
                                    <p className="border-l-2 border-[#ff004f]/20 pl-8 py-2 italic text-white/50 bg-white/5 rounded-r-2xl">
                                        One incident remains carved in my memory. During a wedding, my father warned us not to throw stones at the tent where he was fixing electric wires. We didn’t listen. When he caught me, he became furious. He beat me with an electric wire as we walked home, for nearly 300 meters.
                                    </p>
                                    <p className="border-l-2 border-[#ff004f]/20 pl-8 py-2 italic text-white/50 bg-white/5 rounded-r-2xl">
                                        I can still remember the fear, the pain, and the shame I felt during that long walk. It felt like it would never end. My aunt finally stepped in and stopped him. That moment has stayed with me ever since.
                                    </p>
                                    <p>
                                        After Class 3, I was sent to a Tibetan school in Himachal Pradesh for further studies. The day my father left me there and returned to Ladakh, I saw him cry for the first time. I tried to be strong and held back my tears. But that night, and many nights after, I cried silently into my pillow. Along with two other Ladakhi boys, we would whisper plans about running away back home. Those plans never left the bed.
                                    </p>
                                    <p>
                                        The hostel was strict and harsh. Every night, we had to mop the floors for 30 minutes. If we slowed down, seniors would beat us with belts. Even now, when I think about it, those scenes replay clearly in my mind.
                                    </p>
                                    <p className="font-playfair italic text-[#ff004f]/80 text-2xl py-4">
                                        It was there that my life began to change.
                                        <br /> From that moment, something inside me changed.

                                        I became quieter. More disciplined. More serious.
                                    </p>
                                    <p>
                                        In Class 4 my first year in hostel and apart from the parent and family, I developed a severe infection : folliculitis. It spread across my scalp and body. I didn’t know how to take proper care of myself. Painful bumps covered my head, and even today there is a patch where my hair never fully grew back. The infection spread to my face, underarms, and other parts of my body. I felt ashamed and hid it under a cap and layers of clothing.
                                    </p>
                                    <p>That winter was especially cruel. My clothes were stolen, and I had nothing extra to wear. I owned a single pink bib-and-brace given through donation. When it get dirty , I washed it at night and prayed it would dry by morning so I could wear it again. I suffered silently. I never told anyone how bad it had become.</p>
                                    <p>
                                        Then one day, I think God sent my elder sister to visit me. My hair had grown long under the cap, and when she saw how long and unkempt it was, she became suspicious. She removed my cap and stood frozen in shock. My entire scalp was infected. At that time, I had an infection around my mouth as well, but by the time my sister visited, it had already been cured.
                                    </p>
                                    <p>
                                        She bathed me, and when she saw how badly the infection had spread across my body, she began to cry. I remember her tears more clearly than my own pain. She immediately confronted the hostel authorities. I truly believe she saved my life. If she had not come that day, I don’t know how much worse it could have become.
                                    </p>
                                    <p className="border-l-2 border-[#ff004f]/20 pl-8 py-4 italic text-white/50 bg-white/5 rounded-r-2xl">
                                        Last year, when I shared this story at home, I started shaking while speaking. Even in hial, during a documentary screening about Zanskar students being sent to Himachal Pradesh for better education, I narrated my story. As I spoke, my voice trembled, and I could hardly control myself. The memories are still very alive inside me.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Background */}
                        <div className="relative p-1 bg-gradient-to-br from-purple-900/20 to-transparent rounded-[4rem]">
                            <div className="bg-[#1a0b0d] p-12 md:p-16 rounded-[3.9rem] border border-white/5 space-y-8">
                                <div className="flex items-center gap-4 text-[#ff004f]">
                                    <MapPin size={32} />
                                    <h2 className="text-3xl font-playfair font-black italic">The story of Tantsepa</h2>
                                </div>
                                <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/70 font-light">
                                    <p>

                                    </p>
                                </div>
                            </div>
                        </div>





                    </div>

                    {/* Navigation to Next Chapter */}
                    <div className="flex justify-center pt-24 pb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            {/* Attracting Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#ff004f] to-blue-600 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />

                            <Link
                                to="/2026"
                                className="relative flex items-center gap-6 bg-white text-black px-12 py-8 rounded-[2.5rem] font-black tracking-[0.4em] hover:bg-[#ff004f] hover:text-white transition-all duration-500 shadow-2xl group overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                                    whileHover={{ y: 0 }}
                                />

                                <div className="flex flex-col items-start relative z-10">
                                    <span className="text-[10px] uppercase tracking-[0.6em] opacity-40 mb-1">Next Chapter</span>
                                    <span className="text-2xl md:text-3xl font-playfair italic">The Year 2026</span>
                                </div>

                                <div className="relative z-10 flex items-center justify-center bg-black/5 group-hover:bg-white/20 p-4 rounded-2xl transition-colors">
                                    <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform duration-500" />
                                </div>

                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="absolute -top-4 -right-4 text-[#ff004f]/10 group-hover:text-white/20 transition-colors"
                                >
                                    <Sparkles size={80} />
                                </motion.div>
                            </Link>

                            {/* Attracting Tag */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#ff004f] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl pointer-events-none"
                            >
                                Must Read
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Footer Note */}
                    <div className="text-center pt-20">
                        <p className="text-[10px] font-black opacity-20 uppercase tracking-[1em] italic text-white">
                            * This is my story, still being written...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
