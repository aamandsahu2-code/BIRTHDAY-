"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight, Flame } from "lucide-react"

export default function CakeScreen({ onNext }) {
  const [lit, setLit] = useState(false)

  const lightCandle = () => {
    if (lit) return
    setLit(true)
    // Direct Next after 1 second - NO CONFETTI! ✅
    setTimeout(() => onNext(), 1000)
  }

  return (
    <div className="px-4 md:px-6 py-10 text-center relative">
      {lit && (
        <motion.div 
          className="fixed top-50 lg:top-60 left-0 w-full text-center text-[40px] md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 drop-shadow leading-tight px-4"
          style={{ filter: "drop-shadow(0 0 20px rgba(255,105,180,0.4))" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          Happy Birthday, Princess! {/* ✅ CHANGED */}
        </motion.div>
      )}

      <div className="relative flex flex-col items-center gap-8 mt-52">
        <div className="relative mb-6">
          <Cake lit={lit} />
        </div>
        
        {/* Direct button switch */}
        {!lit ? (
          <GradientButton onClick={lightCandle}>
            <Flame size={20} />
            Light the Candle
          </GradientButton>
        ) : (
          <GradientButton onClick={onNext}>
            Next
            <ArrowRight size={20} className="mt-0.5" />
          </GradientButton>
        )}
      </div>
    </div>
  )
}

function Cake({ lit }) {
  return (
    <div className="flex flex-col items-center">
      <div className="cake">
        <div className="plate"></div>
        <div className="layer layer-bottom"></div>
        <div className="layer layer-middle"></div>
        <div className="layer layer-top"></div>
        <div className="icing"></div>
        <div className="drip drip1"></div>
        <div className="drip drip2"></div>
        <div className="drip drip3"></div>
        <div className="candle">
          {lit && <motion.div
            initial={{ opacity: 0, scaleY: 0.2, y: 10 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1.0],
            }}
            className="flame"
          />}
        </div>
      </div>
    </div>
  )
}
