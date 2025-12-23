"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [showCard, setShowCard] = useState(false);

    return (
        <>
        {/* FULL SCREEN BACKGROUND */}
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 z-0"></div>
        
        <div className="px-4 md:px-6 py-10 text-center relative z-10 min-h-screen flex flex-col items-center justify-center">
            
            {/* TITLE */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-12 leading-tight relative z-20"
            >
                A Special Message
            </motion.h2>

            {/* BIDIRECTIONAL FLIP CARD */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1 }}
                className="relative w-[280px] h-[400px] md:w-[340px] md:h-[480px] mx-auto z-20 cursor-pointer"
                style={{ perspective: "2000px" }}
                onClick={() => setShowCard(!showCard)}  // ← TOGGLE ON CLICK
            >
                {/* FRONT: PNG CARD */}
                <motion.div
                    animate={{ 
                        rotateY: showCard ? 180 : 0,
                        opacity: showCard ? 0 : 1 
                    }}
                    transition={{ 
                        duration: 0.8,
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                    }}
                    className="absolute inset-0 cursor-pointer"
                    style={{ transformOrigin: "center", backfaceVisibility: "hidden" }}
                >
                    <img 
                        src="/memories/card.png"
                        alt="Message card" 
                        className="w-full h-full object-contain rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
                    />
                </motion.div>

                {/* BACK: MESSAGE */}
                <motion.div
                    animate={{ 
                        rotateY: showCard ? 0 : -180,
                        opacity: showCard ? 1 : 0 
                    }}
                    transition={{ 
                        duration: 0.8,
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-2xl p-6 md:p-8 text-center flex flex-col justify-center backdrop-blur-sm border-4 border-white/50 cursor-pointer"
                    style={{ transformOrigin: "center", backfaceVisibility: "hidden" }}
                >
                    <p className="text-[#301733] text-sm md:text-base leading-relaxed max-h-[320px] overflow-y-auto pr-2 mb-6">
                       💖 Happy Birthday, Anshika ✨
You are truly one of the most precious gifts in my life 🎁. Talking to you 💬, seeing your smile 😊, and sharing laughter with you are moments I deeply cherish 🤍. Every little moment with you feels special 🌸.
                        <br></br>
                        You’re not just beautiful ✨, but your heart is pure and kind 🤍. Anyone who knows you can’t help but admire you 💞.
                        <br></br>
                        On your special day, I wish all your dreams come true, happiness always finds you, and every moment feels just right 🌷. You deserve all the joy this world has to offer.
Always stay this magical ✨.
                    </p>
                    
                    <div className="flex flex-col space-y-3">
                        <GradientButton 
                            onClick={(e) => {
                                e.stopPropagation();  // Prevent card flip
                                onNext();
                            }} 
                            className="px-8 py-3 text-base"
                        >
                            Done! 🎉
                            <ArrowRight size={18} className="mt-0.5 ml-2" />
                        </GradientButton>
                    </div>
                </motion.div>
            </motion.div>
        </div>
        </>
    )
}
