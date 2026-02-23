import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Calendar, Heart, ArrowLeft, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Year2026 = () => {
    return (
        <div className="min-h-screen bg-[#1a0b0d] text-[#f8f1f1] selection:bg-[#ff004f] selection:text-white pt-20 pb-20 md:pt-32 md:pb-32">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff004f]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Back Button */}
                <Link
                    to="/about-me"
                    className="inline-flex items-center gap-3 text-[#ff004f] hover:text-white transition-colors mb-12 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-black uppercase tracking-widest text-sm">Back to Archive</span>
                </Link>

                <div className="space-y-12 md:space-y-20 text-center">
                    <div className="space-y-6">
                        <p className="text-[#ff004f]/60 text-xs md:text-sm uppercase tracking-[1em] font-black italic">The Next Chapter</p>
                        <h1 className="text-7xl md:text-9xl font-playfair font-black text-white leading-none tracking-tighter italic">
                            2026
                        </h1>
                    </div>

                    <div className="max-w-2xl mx-auto space-y-12 text-left">
                        <div className="p-1 bg-gradient-to-br from-[#ff004f]/20 to-transparent rounded-[3rem]">
                            <div className="bg-[#1a0b0d] p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.9rem] border border-white/5 space-y-8">
                                <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white/70 font-light">
                                    <p className="first-letter:text-5xl first-letter:font-black first-letter:text-[#ff004f] first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                                        On the night of New Year, I made two simple wishes for this year.
                                    </p>
                                    <div className="pl-8 border-l-2 border-[#ff004f]/20 space-y-2 italic text-[#571930]/60">
                                        <p>First, to get a job.</p>
                                        <p>Second, to find parnter.</p>
                                    </div>

                                    <p>
                                        On the very first day of the year, I received a New Year message from someone named Sonam Angmo. I didn’t recognize her from her profile, so I followed her back to see who she was. Even after checking her profile, I couldn’t remember her. Maybe she was a stranger.
                                    </p>
                                    <p>
                                        I was excited. I even showed the message to my friends and asked if anyone knew her.
                                    </p>
                                    <p>
                                        When I asked her, “Who are you?” she replied, “Sonam Angmo.”
                                        It made me laugh because that was already written on her profile. I was expecting a better introduction.
                                    </p>
                                    <p>
                                        Curious, I searched for her online and found her LinkedIn profile. I learned she had studied in Dehradun. By looking at her friends, I guessed she might be from Changthang.
                                    </p>
                                    <p>
                                        Since it was the first time a stranger had followed me, liked my posts, and messaged me, I kept asking her to confirm if I was really the person she meant to send the New Year message to. She said yes, I was the one.
                                    </p>
                                    <p>
                                        Sometimes I wondered if she had messaged me for website or graphic design work. But she told me she had seen me during the Sun and Earth Festival. I searched through all the photos and videos from the festival, but I couldn’t find her anywhere.
                                    </p>
                                    <p>
                                        I even asked my brother in Skidmang if he knew her. He said he didn’t.
                                    </p>
                                    <p>
                                        I didn’t know how to continue the conversation, so once I even gave my phone to my friend to reply. He had more experience, and the conversation flowed better with him. I always wonder how couples talk for hours on chat and calls. My biggest fear about being in a relationship is not knowing how to keep a conversation going. My calls are usually short and straight to the point, only about work or studies.
                                    </p>
                                    <p>
                                        I also have a habit of deleting chats, so I don’t have those memories anymore. When I saw how my friend chatted with her, I noticed he asked about her house, siblings, and many things. I always hesitate because I feel maybe my questions will make her uncomfortable.
                                    </p>
                                    <p>
                                        One day, I didn’t have the courage to ask you myself, so I asked a friend to message you for your Snapchat ID. I didn’t like the way he wrote it, but deep inside, I was happy that I got your Snapchat. </p>
                                    <p className="border-l-2 border-[#ff004f]/20 pl-8 py-4 italic text-[#571930]/60 bg-[#571930]/5 rounded-r-2xl">
                                        I’m very active on Snapchat. I use it like a journal and also as a camera because my phone’s photo processing isn’t very good. I send snaps to myself and save them as a kind of cloud storage for my memories.
                                    </p>

                                    <p className="pt-8">
                                        When she kept messaging me, I always doubted myself.
                                    </p>

                                    <div className="pl-8 border-l-2 border-[#ff004f]/20 space-y-2 italic text-[#571930]/60">
                                        <p>“Why does she message me?”</p>
                                    </div>

                                    <p>
                                        We had never met in person. We had never really talked before.
                                        When I looked at her profile, I thought, <em>She is such a beautiful girl.</em>
                                        And then I looked at myself someone who always doubts himself.
                                    </p>

                                    <p className="italic text-[#ff004f]/60 font-medium">
                                        Before she could ever reject me, I rejected myself in my own mind.
                                    </p>

                                    <p>
                                        But deep inside, I wanted us to be together.
                                    </p>

                                    <p>
                                        The most difficult part for me is conversation.
                                        I feel like I should message her and keep the conversation flowing.
                                        But when I try, my mind goes completely blank.
                                        My fingers freeze on the keypad.
                                        I don’t know what to write next.
                                    </p>

                                    <p>
                                        I remember how naturally I used to talk with girls during HIAL.
                                        It felt easy. Pure. Effortless.
                                        I want that same touch in my conversations now.
                                        But instead, I get stuck overthinking every word.
                                    </p>

                                    <p>
                                        Sometimes, I even dreamed about you. More than once.
                                    </p>

                                    <p>
                                        Now I can’t clearly remember those dreams. Maybe I should have written them down.
                                    </p>

                                    <p>
                                        Slowly, I started developing feelings.
                                        Every time you sent a snap or a message,
                                        my heart felt something
                                        a small happiness, a small excitement.
                                    </p>

                                    <p>
                                        But still, I don’t have the courage to ask much or to message freely.
                                        I think too much before sending anything.
                                    </p>

                                    <p className="pt-8">
                                        Today, Padma Angmo returned from her winter holiday break. When I saw her story with Padma Wangmo, I felt this might be my chance to know more about Sonam Angmo through her.
                                    </p>
                                    <p>
                                        Later, when she came to my room, she gave me a small sachet of sea buckthorn tea. She said it was sent by Sonam Angmo.
                                    </p>
                                    <p className="italic text-[#ff004f] font-medium">
                                        That small packet made me extremely happy. It was such a simple thing, yet it felt very special to me.
                                    </p>
                                    <p>
                                        I wanted to ask more about her. I wanted to casually say, “How is she?” or “Tell me more about her.”
                                    </p>
                                    <p>
                                        But my courage was not strong enough. The words stayed inside me.
                                    </p>
                                    <p>
                                        During our casual conversation, Padma Angmo suddenly said, “She is a very good girl…”
                                    </p>
                                    <p className="pl-8 border-l-2 border-[#ff004f]/20 italic text-white/50">
                                        And then she stopped.
                                    </p>
                                    <p>
                                        After a moment, she continued talking about other normal things.
                                    </p>
                                    <p>
                                        But in that small pause, my heart was hoping she would say more. I was silently wishing she would continue tell me more about her, describe her, give me something to hold onto.
                                    </p>
                                    <p className="border-l-2 border-blue-500/30 pl-8 py-4 italic text-white/40 bg-white/5 rounded-r-2xl text-sm">
                                        Sometimes, the smallest moments feel the biggest.
                                    </p>

                                    <div className="pt-12 space-y-8">
                                        <p>
                                            Today, we were chatting. But at one point, I had nothing left to write.
                                            My mind went completely blank again.
                                        </p>

                                        <div className="pl-8 border-l-2 border-[#ff004f]/20 italic text-white/50">
                                            <p>So I told her honestly,</p>
                                            <p className="text-xl md:text-2xl text-white/70 mt-2">“I don’t know what to say.”</p>
                                        </div>

                                        <p>
                                            Maybe she felt upset. Maybe she felt uncomfortable.
                                        </p>

                                        <p>
                                            She messaged me saying it felt like I was forcing myself to keep the conversation going. Later, she told me to remove her from Snapchat.
                                        </p>

                                        <div className="p-8 bg-[#ff004f]/5 border border-[#ff004f]/20 rounded-[2rem] text-center">
                                            <p className="text-3xl md:text-4xl font-playfair font-black text-[#ff004f] italic">
                                                When she said that, it broke me.
                                            </p>
                                        </div>

                                        <p>
                                            I never felt that she was forcing me. In fact, I was the one forcing myself
                                            forcing myself to think of something to say, forcing myself to not let the conversation die,
                                            because I wanted to keep things going with her.
                                        </p>

                                        <p className="italic text-white/60">
                                            I just don’t understand why my mind goes blank every time.
                                        </p>

                                        <p>
                                            Many times, without realizing it, I may have made her uncomfortable.
                                            That hurts me even more. I never want to hurt anyone. I never wanted to hurt her.
                                            I just wanted her to be in my life.
                                        </p>

                                        <div className="space-y-4 opacity-80">
                                            <p>But every time before I open her chat, I reject myself first.</p>
                                            <div className="pl-8 space-y-2 border-l border-white/10 italic text-sm tracking-widest uppercase">
                                                <p>“You’re not good at this.”</p>
                                                <p>“You’ll say something wrong.”</p>
                                            </div>
                                        </div>

                                        <p>
                                            And still, I try. Fighting with my own thoughts.
                                        </p>

                                        <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/5 space-y-4">
                                            <p className="text-lg uppercase tracking-[0.2em] text-[#ff004f]/60 font-black">Reflections</p>
                                            <div className="space-y-2 text-white/70 italic">
                                                <p>Maybe my silence was not lack of interest.</p>
                                                <p>Maybe it was fear.</p>
                                                <p>Maybe it was overthinking.</p>
                                                <p>Maybe it was my heart wanting something deeply but my mind not knowing how to express it.</p>
                                            </div>
                                            <p className="pt-4 text-2xl font-playfair text-white/90">
                                                And that is what hurts the most.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-12 p-8 bg-gradient-to-r from-[#ff004f]/10 to-transparent border-l-4 border-[#ff004f] rounded-r-3xl italic text-white/80 font-playfair text-2xl">
                                        God, please give me the courage the confidence to send messages like a flowing river, without stopping every second to think what to write next.
                                    </div>
                                    <div className="mt-12 p-8 bg-gradient-to-r from-blue-900/10 to-transparent border-l-4 border-blue-500/30 rounded-r-3xl italic text-white/80 font-playfair text-2xl">
                                        God, please protect this moment and this connection.<br />
                                        If it is meant for me, let it stay.<br />
                                        Let it not slowly disappear<br />
                                        let it grow stronger with time,<br />
                                        like something that is meant to last.
                                    </div>

                                    {/* WhatsApp Connect Section */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="mt-20 p-6 md:p-12 bg-white/5 border border-white/10 rounded-[3rem] text-center space-y-10 relative overflow-hidden group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="space-y-4 relative z-10">
                                            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                                                And if somewhere, in some quiet corner of your heart,<br />
                                                you still want to connect…
                                            </p>
                                            <p className="text-2xl md:text-3xl font-playfair italic text-[#ff004f]">
                                                Message me once on WhatsApp.
                                            </p>
                                          
                                        </div>

                                        <div className="relative z-10">
                                            <a
                                                href="https://wa.me/9682574824"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-4 px-6 py-3 md:px-10 md:py-5 bg-[#25D366] text-white rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 group"
                                            >
                                                <FaWhatsapp size={24} className="group-hover:rotate-12 transition-transform" />
                                                Connect via WhatsApp
                                            </a>
                                        </div>
                                    </motion.div>


                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-8 text-[#ff004f]/40">
                            <Calendar size={32} />
                            <Heart size={32} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Year2026;
