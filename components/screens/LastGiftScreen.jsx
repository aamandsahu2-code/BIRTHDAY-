"use client"

import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { CheckCircle2 } from "lucide-react"

export default function LastGiftScreen({ onNext }) {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-4 py-10">
      {/* Flower + grass background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/last-gift-bg.jpg')" }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Center glass card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-md w-full mx-auto rounded-3xl bg-white/12 backdrop-blur-2xl border border-white/25 shadow-[0_20px_60px_rgba(0,0,0,0.55)] px-6 py-7 md:px-8 md:py-8 text-center text-slate-50"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4 border-2 border-white/70 overflow-hidden shadow-lg"
        >
          <img
            src="/images/bestie.jpg"
            alt="Best friend"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold mb-3"
        >
          Last little gift for you 🌼
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sm md:text-base text-slate-100/90 leading-relaxed"
        >
          Bas itna hi tha, ek chhota sa corner internet pe jo sirf tere liye bana hai.
          Jab bhi mood kharab ho ya thoda sa extra smile chahiye ho, is page ko yaad kar lena.
          Happy Birthday, and thanks for being in my life. 💐
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 flex justify-center"
        >
          <GradientButton onClick={onNext}>
            That&apos;s all, thank you
            <CheckCircle2 size={20} className="mt-0.5" />
          </GradientButton>
        </motion.div>
      </motion.div>
    </div>
  )
}
