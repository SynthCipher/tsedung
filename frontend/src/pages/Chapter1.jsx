import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Music, Calendar, Quote, Heart, ArrowRight, Sparkles, Wind, BookOpen, Moon } from "lucide-react";
import BackMusic from "../assets/audio/BackMusic.mp3";
import MusBackImg from "../assets/images/MusicBack.jpg";
import FirstDayCrop from "../assets/images/FirstDayCrop.jpg";
import InstaFirstDay from "../assets/images/InstaFirstDay .png";
import AadhaarImg from "../assets/images/aadhaar.jpg";

const Chapter1 = () => {
    const audioRef = useRef(null);

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

                {/* Floating "Memories" (Dust Motes) */}
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
                    {/* Cinematic Header */}
                    <div className="text-center space-y-10 relative">
                        <motion.div variants={sectionVariants} className="inline-block relative">
                            <Heart className="text-[#ff004f] fill-current opacity-20 absolute -inset-4 blur-sm animate-pulse" size={80} />
                            <Heart className="text-[#ff004f] fill-current relative" size={80} />
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                variants={sectionVariants}
                                className="text-6xl md:text-9xl font-playfair font-black text-white leading-none tracking-tighter"
                            >
                                JULLAY <span className="text-[#ff004f] italic block md:inline font-light">jigmat</span> LAY
                            </motion.h1>
                            <motion.div
                                variants={sectionVariants}
                                className="flex items-center justify-center gap-4 text-[#ff004f]/60"
                            >
                                <span className="h-[1px] w-12 bg-current" />
                                <p className="text-xs md:text-sm uppercase tracking-[1em] font-black">Memory Archive: Vol I</p>
                                <span className="h-[1px] w-12 bg-current" />
                            </motion.div>
                        </div>

                        <motion.p
                            variants={sectionVariants}
                            className="text-2xl md:text-3xl font-playfair italic text-[#ff004f]/80 max-w-2xl mx-auto leading-relaxed"
                        >
                            "I wish that I never met you..."
                        </motion.p>
                    </div>

                    {/* Music Player Romantic */}
                    <motion.div variants={sectionVariants} className="flex justify-center">
                        <div className="relative group w-full max-w-md aspect-square rounded-[4rem] overflow-hidden shadow-2xl p-1 bg-gradient-to-br from-[#ff004f]/20 to-transparent">
                            <div className="w-full h-full bg-[#1a0b0d] rounded-[3.9rem] overflow-hidden relative">
                                <img src={MusBackImg} alt="Soulful Music" className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-[4s] grayscale" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center space-y-8 bg-gradient-to-t from-[#1a0b0d] via-transparent to-transparent">
                                    <div className="bg-[#ff004f]/20 p-8 rounded-full backdrop-blur-md border border-[#ff004f]/20 group-hover:scale-110 transition-transform duration-500">
                                        <Music size={48} className="text-[#ff004f] animate-pulse" />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-4xl font-black font-playfair text-white italic">The Sound of Absence</h2>
                                        <p className="text-[10px] uppercase font-black tracking-[0.4em] text-[#ff004f]/60">Captured: BackMusic.mp3</p>
                                    </div>
                                    <audio ref={audioRef} src={BackMusic} className="w-full h-10 opacity-30 hover:opacity-100 transition-all duration-500 saturate-150 rotate-3 group-hover:rotate-0" controls autoPlay loop />
                                </div>
                            </div>
                        </div>
                    </motion.div>



                    {/* The Unsent Letter */}
                    <div className="space-y-12 py-20 border-y border-white/5 relative">
                        <motion.div variants={sectionVariants} className="space-y-8 text-xl md:text-2xl font-light leading-relaxed text-white/80">
                            <div>
                                I've been working on this Project for many days and plan to complete it on September 30th, which marks our 2nd anniversary on WhatsApp using this current number. I'll send you this letter on  <span className="relative inline-block mx-2 group">
                                    <span className="text-[#ff004f] font-black border-b border-[#ff004f]/40 cursor-help hover:text-white transition-colors uppercase tracking-widest text-base">October 7th</span>
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-56 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-50 scale-95 group-hover:scale-100 origin-bottom">
                                        <div className="p-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
                                            <img src={InstaFirstDay} className="rounded-xl" alt="Memory" />
                                            <p className="mt-2 text-[10px] text-center text-white/60 uppercase tracking-widest">Our Instagram Beginning</p>
                                        </div>
                                    </div>
                                </span>
                                which marks our 3rd anniversary on Instagram instead of your 21st birthday since that's the day we started chatting, and I understand you'll be busy on your special day. HaHa lo suum zerna zche zerna lo wo bhut tsartok. Duspo gazuk ga buth pata khorang cha merak.
                            </div>

                            <div className="bg-white/5 p-12 rounded-[3.5rem] space-y-8 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 text-[#ff004f]/10 group-hover:rotate-12 transition-transform duration-1000">
                                    <Wind size={60} />
                                </div>
                                <div>
                                    I remember last year's mistake—wishing you on the wrong date because of your
                                    <span className="relative inline-block mx-2 group/aadhaar">
                                        <span className="text-[#ff004f] font-black border-b border-[#ff004f]/40 cursor-help hover:text-white transition-colors uppercase tracking-widest text-base">Aadhaar Card</span>
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-56 opacity-0 group-hover/aadhaar:opacity-100 transition-all duration-700 pointer-events-none z-50 scale-95 group-hover/aadhaar:scale-100 origin-bottom">
                                            <div className="p-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
                                                {/* <img src={AadhaarImg} className="rounded-xl" alt="Aadhaar" /> */}
                                            </div>
                                        </div>
                                    </span>.
                                    At that time, it was an extremely embarrassing
                                    moment for me. From that moment, I pledged to
                                    myself that I would wish you first on this
                                    birthday,
                                </div>
                                <p className="italic opacity-60">
                                    I also remember my birthday when you were
                                    the only one who wished me. I'm happy that
                                    at least one person remembered me on my
                                    birthday, whether it was just for formality
                                    🙏😅 or genuinely 🙏🥰. Thank you for that day.
                                    That small message made my day ( in chat 😅🤣
                                    I'm saying #%@£%#@£ ).

                                </p>
                            </div>

                            <p>
                                Since childhood, birthday celebrations were a rarity to ___ , an experience that fellow hostellers can empathize with and understand,
                                and I didn't even know my own birthdate until class 9th(During 10th board exam registration i discovered).
                                I used to despise my birthday, but I had a fondness for other birthdays,
                                particularly those of day scholar students, where we would often receive candies and chocolates
                                Just like those one-rupee candies that brought so much joy during my hostel days, you bring happiness to my life now.     </p>
                        </motion.div>

                        {/* Birthday Wish Card */}
                        <motion.div variants={sectionVariants} className="relative p-1 bg-gradient-to-t from-[#ff004f]/30 to-transparent rounded-[4rem]">
                            <div className="bg-[#1a0b0d] p-16 rounded-[3.9rem] text-center space-y-8 relative overflow-hidden">
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#ff004f]/10 blur-[80px] rounded-full" />
                                <Sparkles className="mx-auto text-[#ff004f] animate-pulse" size={48} />
                                <h3 className="text-4xl font-playfair italic text-white leading-relaxed">
                                    "Happy Birthday to a truly beautiful soul, both inside and out."
                                </h3>
                                <p className="text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
                                    Happy Birthday to a truly beautiful soul,
                                    both inside and out! 🎉 Your outer beauty
                                    is captivating, but it's your inner kindness,
                                    warmth, and generosity that truly shine. 🌟
                                    May your day be as radiant as your heart, and
                                    may your inner beauty continue light up the
                                    lives of those around you. 🎂💖 Here's to
                                    celebrating the remarkable person you are,
                                    both in appearance and in the goodness that
                                    fills your spirit. 🥳🎈 Wishing you a year
                                    ahead filled with love, laughter, and
                                    endless blessings. 🌼🎁🌟.
                                </p>
                                <p className="text-[10px] text-[#ff004f]/40 uppercase tracking-[0.4em] pt-4"> Ezuk ChatGPT zerduk when I give the command
                                    about your birthday wishes. </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* The Journey */}
                    <div className="space-y-20 py-20">
                        <motion.div variants={sectionVariants} className="space-y-10">
                            <div className="flex items-center gap-6">
                                <div className="h-[1px] flex-1 bg-white/10" />
                                <span className="text-[#ff004f] font-black uppercase tracking-[0.5em] text-xs underline decoration-2 underline-offset-8">The Awakening</span>
                                <div className="h-[1px] flex-1 bg-white/10" />
                            </div>

                            <div className="text-xl md:text-2xl font-light leading-relaxed text-white/90 space-y-10">
                                <div>
                                    You entered my life on
                                    <span className="relative inline-block mx-2 group/may9">
                                        <span className="text-[#ff004f] font-black border-b border-[#ff004f]/40 cursor-help hover:text-white transition-colors tracking-widest uppercase text-base">May 9, 2019</span>
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-64 opacity-0 group-hover/may9:opacity-100 transition-all duration-700 pointer-events-none z-50 scale-95 group-hover/may9:scale-100 origin-bottom">
                                            <img src={FirstDayCrop} className="rounded-2xl border-2 border-white/20 shadow-2xl shadow-pink-900/40" alt="May 9" />
                                        </div>
                                    </span>
                                    Time goes on, and we completed our 11th and 12th
                                    grades through offline and online modes. Now we are
                                    in our 3rd year. I don't have many memories of
                                    offline school with you, but I have many from online ,
                                    the time I spent with you. I used to like you from
                                    school. I'm still confused about words like like,
                                    love, and crush. Same as earlier, time goes on,
                                    as time and tide wait for none. With time, we
                                    share our day, feelings 🤔, and meet frequently
                                    through WhatsApp. And like this,
                                </div>
                                <p className="relative pl-12">
                                    <Quote className="absolute left-0 top-0 text-[#ff004f]/20" size={40} />
                                    I got addicted
                                    to you. The more time I spend with you, the more
                                    addicted I become. This is more captivating than drugs(Which I have never tried),
                                    which consume my time and space in my mind, but I
                                    enjoy every second and there is no regret. While I'm chatting with you, my
                                    face is always in smile mode; I don't know why.
                                </p>
                                <div className="p-12 bg-white/5 rounded-[3rem] italic text-white/70 border border-white/5">
                                    During this summer holiday, one day I'm with family,
                                    and I'm chatting in front of them. I had said earlier
                                    that my face is always in smile mode when I chat
                                    with you. At that moment, they observed me and
                                    asked what happened to me, why I am so happy
                                    and smiling. My reply: nothing 😁, just a video.
                                    That moment made me realize I'm really enjoying
                                    pure happiness.
                                </div>
                                <div className="flex justify-center gap-3 py-6">
                                    {[...Array(9)].map((_, i) => (
                                        <Heart key={i} size={14} className={`text-[#ff004f] ${i % 2 === 0 ? 'animate-pulse' : 'opacity-30'}`} fill="currentColor" />
                                    ))}
                                </div>
                                <p>
                                    About dating 🤣, I am happy that we are for the moment(darung yakin chamerakga nga.ngay mazak chos tay
                                    yindo samadho) ,
                                    and at that time, I didn't have any feelings towards you.
                                    But after some days, I don't know why, somewhere I started
                                    getting emotional thinking about that, and tears welled up
                                    in my eyes. As time goes on, I think about you more and more,
                                    and there's a moment when I get totally frustrated.
                                    But when I receive a message, I enter smile mode and
                                    am happy for a couple of days. It's more like fake
                                    than true but 💯% true.I try to find out if I'm in love
                                    or it's just infatuation.        </p>
                                <p className="text-center text-[#ff004f] font-playfair italic text-3xl pt-6">"I am still on this journey."</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* The Dream Journal */}
                    <motion.div variants={sectionVariants} className="space-y-20 relative">
                        <div className="flex items-center gap-6">
                            <BookOpen className="text-[#ff004f]/40" size={32} />
                            <h2 className="text-4xl md:text-5xl font-playfair font-black text-white tracking-tight">The Dream Journal</h2>
                            <div className="h-[1px] flex-1 bg-white/10" />
                        </div>

                        <div className="grid gap-12">
                            {/* Intro Paragraph */}
                            <motion.div
                                variants={sectionVariants}
                                className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-8 text-[#ff004f]/5 group-hover:rotate-12 transition-transform duration-1000">
                                    <Moon size={100} />
                                </div>
                                <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80 relative z-10">
                                    One word of yours that rings in my ears and mind every
                                    time is the way you call me <span className="text-[#ff004f] font-black italic">"jimmy"</span>.
                                    I'm learning the craft of words so that I can pen down my emotions in
                                    the easiest way. I started writing a journal when you
                                    came into my dream on <span className="text-white font-medium border-b border-[#ff004f]/40">August 1st</span> for the first time.
                                    From that day, every feeling I have, I write down. When I look back, it's mostly about you.
                                </p>
                            </motion.div>

                            {/* Dream Entry 1 */}
                            <motion.div
                                variants={sectionVariants}
                                className="relative pl-8 md:pl-12 border-l-2 border-[#ff004f]/20 space-y-6"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#ff004f] shadow-[0_0_15px_rgba(255,0,79,0.5)]" />
                                <div className="space-y-2">
                                    <span className="text-xs uppercase tracking-[0.4em] text-[#ff004f] font-black">August 1, 2023</span>
                                    <h3 className="text-2xl md:text-3xl font-playfair italic text-white">"First Time in My Dream"</h3>
                                </div>
                                <p className="text-lg md:text-xl font-light leading-relaxed text-white/70">
                                    Today, for the first time in my life,
                                    jigmat appeared in my dream alongside her sister,
                                    Yangdol, for a brief moment. It seemed like we were
                                    at a gathering, and you were on the verge of entering
                                    the function. There was a considerable distance between
                                    us. With all my heart, I shouted your name, but behind me,
                                    Yangdol urged me to move forward. As a result, my eye contact
                                    with you shifted, and you also vanished from my dream.
                                </p>
                            </motion.div>

                            {/* Dream Entry 2 */}
                            <motion.div
                                variants={sectionVariants}
                                className="bg-gradient-to-br from-white/5 to-transparent p-10 md:p-14 rounded-[4rem] border border-white/5 space-y-8 relative group"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="space-y-1">
                                        <span className="text-xs uppercase tracking-[0.4em] text-[#ff004f]/60 font-black">17-09-2023</span>
                                        <h3 className="text-xl md:text-2xl font-playfair text-white flex items-center gap-3">
                                            YANG CHIG FROM <span className="text-2xl font-serif">བུ་ཚའི་སྙིང་གཏམ་</span>
                                        </h3>
                                    </div>
                                    <div className="px-4 py-2 bg-[#ff004f]/10 rounded-full border border-[#ff004f]/20">
                                        <span className="text-[10px] text-[#ff004f] uppercase tracking-widest font-black">Magic Moment</span>
                                    </div>
                                </div>

                                <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-white/80">
                                    <p>
                                        Yesterday, I had a conversation with jigmat for one hour and a couple of minutes.
                                        It's like magic; the stress I have, the pain I'm suffering, everything is gone.
                                        It's magical. It was our second video call of a duration of more than 1 hour.
                                        Earlier, I loved chatting more than calling or video, but now I'm really enjoying the call.
                                        Thank God I have someone I can trust 🤔😁 and share my feelings with,
                                        just like I'm sharing with you(whatsapp myself). I enjoyed every moment with jigmat.
                                        As time goes on, my feelings toward her are growing stronger.
                                        I hope our relationship will get stronger, but if not, goes like as it is.
                                        When I talk and chat with jigmat, for a couple of days, my mood is on the next level—pure happiness.
                                        As I told jigmat yesterday about going to bed at 8:30 during Saturday,
                                        the actual reason is that I'm just waiting for jigmat's message so that I can chat continuously without disturbance 😂.
                                    </p>

                                    <div className="p-8 bg-white/5 rounded-3xl border-l-4 border-[#ff004f] italic text-white/60">
                                        <p>
                                            When I feel lonely and stressed, I write, keeping jigmat's face in mind and the conversations we've had earlier.
                                            It makes me feel like jigmat is with me. Also, the best thing during lonely times is reading our chat.
                                            It gives me courage and inner peace.
                                        </p>
                                    </div>

                                    <p>
                                        Thanks, jigmat. You make me the happiest person on Earth for a while.
                                        I feel joy when I see your face, hear your voice, and read the messages you type.
                                        When I feel depressed, all I do is think about you, and it puts me in a good state.
                                    </p>
                                </div>

                                <div className="absolute bottom-6 right-10 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                                    <Heart size={24} className="text-[#ff004f] fill-current" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* The Final Poem */}
                    <motion.div variants={sectionVariants} className="relative pt-12 group">
                        <div className="absolute inset-0 bg-[#ff004f] rounded-[5rem] blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000" />
                        <div className="relative bg-white/5 backdrop-blur-3xl p-16 md:p-24 rounded-[5rem] border border-white/10 text-center space-y-12">
                            <Quote className="mx-auto text-[#ff004f]/40" size={60} />
                            <p className="text-xl md:text-2xl font-playfair italic leading-[1.4] text-white">
                                My heart beats around the clock for you,<br />
                                My eyes long to gaze upon your beauty,<br />
                                My ears crave the melody of your voice,<br />
                                My nose yearns for the fragrance of your essence,<br />
                                My tongue wrestles to express my feelings,<br />
                                My entire being desires to be with you... <span className="text-[#ff004f]">forever</span>.
                            </p>


                            <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 ">
                                — Written collectively during the silence of a classroom.
                            </p>
                        </div>
                    </motion.div>

                    {/* Farewell Reflection */}
                    <motion.div variants={sectionVariants} className="space-y-16 pt-12 border-t border-white/5">
                        <div className="max-w-2xl mx-auto space-y-10 text-center">
                            <motion.div variants={sectionVariants} className="space-y-6 text-xl md:text-2xl font-light leading-relaxed text-white/70 italic">
                                <p>
                                    I've wanted to share this with you for many sessions,
                                    but I lacked the courage to do so. Now, I'm finally feeling
                                    lighter.
                                </p>
                                <p>
                                    When I sought a review from my friend, they asked, <span className="text-white font-medium">"Is it a love letter?"</span>
                                </p>
                                <p className="text-lg md:text-xl not-italic text-white/60">
                                    This is not a proposal, nor an attempt to seek sympathy.
                                    It's just my feelings
                                    toward you and the memories we share.
                                </p>
                            </motion.div>

                            {/* Birthday Wish Highlight */}
                            <motion.div
                                variants={sectionVariants}
                                className="relative p-10 bg-[#ff004f]/5 rounded-[3rem] border border-[#ff004f]/10 group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-[#ff004f]/5 to-transparent rounded-[3rem] -z-10" />
                                <Heart className="mx-auto text-[#ff004f] mb-6 opacity-40 group-hover:scale-110 transition-transform" size={40} />
                                <h4 className="text-2xl md:text-3xl font-playfair italic text-white leading-relaxed">
                                    "On the occasion of your birthday, my wish is for you to have a bright career and a healthy life."
                                </h4>
                            </motion.div>

                            {/* The Final Message / Offer of Support */}
                            <motion.div
                                variants={sectionVariants}
                                className="pt-10 space-y-8"
                            >
                                <div className="p-10  md:p-14 bg-white/5 backdrop-blur-2xl rounded-[4rem] border border-white/10 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff004f]/40 to-transparent" />
                                    <p className="text-2xl md:text-3xl font-playfair italic text-white/90 leading-relaxed">
                                        "If you ever feel lonely and have no one to share your feelings with, remember me, jigmat. I'm just one message or call away."
                                    </p>
                                </div>

                                <div className="flex flex-wrap justify-center gap-12 text-[#ff004f]/60 font-black uppercase tracking-widest text-[10px] pt-10">
                                    <a href="http://wa.me/+919682574824" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-transparent hover:border-white">WhatsApp</a>
                                    <span>•</span>
                                    <a href="tel:+919682574824" className="hover:text-white transition-colors border-b border-transparent hover:border-white">Voice Call</a>
                                    <span>•</span>
                                    <span className="text-white/20 italic">Memory Vol. I complete</span>
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
                                        to="/chapter-2"
                                        className="relative flex items-center gap-6 bg-white text-black px-12 py-8 rounded-[2.5rem] font-black tracking-[0.4em] hover:bg-[#ff004f] hover:text-white transition-all duration-500 shadow-2xl group overflow-hidden"
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                                            whileHover={{ y: 0 }}
                                        />

                                        <div className="flex flex-col items-start relative z-10 text-left">
                                            <span className="text-[10px] uppercase tracking-[0.6em] opacity-40 mb-1 text-black group-hover:text-white transition-colors">Vol: II Prepping</span>
                                            <span className="text-2xl md:text-3xl font-playfair italic underline decoration-[#ff004f]/20 underline-offset-8">Continue to Chapter II</span>
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

                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#ff004f] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl pointer-events-none"
                                    >
                                        Read Next
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Chapter1;
