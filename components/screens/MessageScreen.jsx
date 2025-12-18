"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import GradientButton from "../GradientButton"
import { ArrowRight, Heart } from "lucide-react"

export default function MessageScreen({ onNext }) {
  const [isOpen, setIsOpen] = useState(false)
  const flipRef = useRef(null)

  useEffect(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#F9A8D4", "#C4B5FD", "#FDE68A"],
    })
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      flipRef.current = new Audio("/sounds/page-flip.mp3")
      if (flipRef.current) flipRef.current.volume = 0.35
    }
  }, [])

  const toggleCard = () => {
    if (!isOpen && flipRef.current) {
      try {
        flipRef.current.currentTime = 0
        flipRef.current.play()
      } catch (e) {
        console.warn("Flip sound blocked", e)
      }
    }
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="px-4 md:px-6 py-10 text-center relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
      >
        A Special Message
      </motion.h2>

      <div className="mx-auto relative w-full max-w-3xl flex justify-center">
        <div className="relative w-full max-w-md" style={{ perspective: "1200px" }}>
          <motion.div
            onClick={toggleCard}
            initial={false}
            animate={{
              rotateX: isOpen ? 0 : -25,
              translateY: isOpen ? 0 : 4,
              boxShadow: isOpen
                ? "0 22px 55px rgba(0,0,0,0.35)"
                : "0 18px 40px rgba(0,0,0,0.35)",
            }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 16,
            }}
            className="relative mx-auto cursor-pointer select-none bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-2xl overflow-hidden"
            style={{
              transformOrigin: "top center",
            }}
          >
            {!isOpen && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 via-pink-200 to-rose-100"
              >
                <motion.div
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-2"
                >
                  <Heart className="w-10 h-10 text-rose-600" />
                  <p className="text-sm uppercase tracking-[0.3em] text-rose-700/80">
                    For someone very special
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-rose-800">
                    Tap to open your letter
                  </p>
                </motion.div>
              </motion.div>
            )}

            <motion.div
              className="relative z-10 px-5 py-6 md:px-7 md:py-7 text-left"
              style={{
                minHeight: "260px",
              }}
            >
              <motion.p
                initial={false}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 12,
                }}
                transition={{ duration: 0.4, delay: isOpen ? 0.15 : 0 }}
                className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[260px] pr-1"
              >
                Happy Birthday! Tu un logon me se hai jinke saath baith ke time ka pata hi nahi chalta. Random
                baatein ho, overthinking ho ya sirf memes share karna ho, tere saath sab kuch thoda हल्का, thoda
                better feel hota hai.  
                <br />
                <br />
                Thanks for being exactly the way you are – real, comfortable aur bilkul filter ke bina. Aise hi
                apne sapne chase karta reh, mistakes se seekhta reh, aur jitni bhi achhi cheezein life me possible
                hain, sab tere paas aaye.  
                <br />
                <br />
                Aaj ke din bas itna yaad rakh: tu important hai, tu matter karta hai, aur tujh jaisa dost milna
                सच me lucky part hai. Happy birthday once again, aur haan, abhi ek last chhota sa gift aur baaki hai. ✨
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-8 flex justify-center"
        >
          <GradientButton onClick={onNext}>
            Last gift for you 🎁
            <ArrowRight size={20} className="mt-0.5" />
          </GradientButton>
        </motion.div>
      )}
    </div>
  )
}
