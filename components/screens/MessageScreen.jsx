"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import GradientButton from "../GradientButton"
import { ArrowRight, Heart } from "lucide-react"

export default function MessageScreen({ onNext }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#F9A8D4", "#C4B5FD", "#FDE68A"],
    })
  }, [])

  const toggleCard = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="px-4 md:px-6 py-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
      >
        A Special Message
      </motion.h2>

      {/* Card + perspective */}
      <div className="mx-auto relative w-full max-w-3xl flex justify-center">
        <div className="relative w-full max-w-md" style={{ perspective: "1200px" }}>
          <motion.div
            onClick={toggleCard}
            initial={false}
            animate={{
              rotateX: isOpen ? 0 : -65,
              translateY: isOpen ? 0 : 10,
              boxShadow: isOpen
                ? "0 22px 55px rgba(0,0,0,0.35)"
                : "0 18px 40px rgba(0,0,0,0.4)",
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
            {/* Closed/front cover */}
            {!isOpen && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 via-pink-200 to-rose-100"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center gap-2"
                >
                  <Heart className="w-10 h-10 text-rose-600" />
                  <p className="text-sm uppercase tracking-[0.3em] text-rose-700/80">
                    To Anshika
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-rose-800">
                    Tap to open your letter
                  </p>
                </motion.div>
              </motion.div>
            )}

            {/* Inner message (visible when open) */}
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
                Happy Birthday, Princess Anshika! You deserve all the happiness, love, and smiles in the world today
                and always. You have this special way of making everything around you brighter, your smile, your
                kindness, and the way you make people feel truly cared for. I hope your day is filled with laughter,
                surprises, and moments that make your heart happy. You&apos;re truly one of a kind, and I just want you to
                know how special you are, Anshika. Keep being the amazing person you are, spreading joy wherever you go.
                Wishing you endless happiness, success, and all the sweet things life has to offer. 💗
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Done button card ke niche, sirf open hone ke baad */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-8 flex justify-center"
        >
          <GradientButton onClick={onNext}>
            Done! 🎉
            <ArrowRight size={20} className="mt-0.5" />
          </GradientButton>
        </motion.div>
      )}
    </div>
  )
}
