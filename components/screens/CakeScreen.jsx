"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import GradientButton from "../GradientButton"
import { ArrowRight, Flame, Scissors } from "lucide-react"

const confettiColors = ["#FF3CAC", "#F687B3", "#D8B4FE", "#C084FC", "#F472B6"]

export default function CakeScreen({ onNext }) {
  const [lit, setLit] = useState(false)
  const [cutDone, setCutDone] = useState(false)
  const audioRef = useRef(null)

  // Birthday song audio load
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/sounds/happy-birthday.mp3")
    }
  }, [])

  const lightCandle = () => {
    if (lit) return
    setLit(true)
  }

  const cutCake = async () => {
    if (cutDone) return
    setCutDone(true)

    // Play birthday song
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0
        await audioRef.current.play()
      }
    } catch (e) {
      console.warn("Audio play blocked by browser", e)
    }

    // Confetti bursts
    burst()
    setTimeout(burst, 500)
    setTimeout(burst, 900)
  }

  const burst = () => {
    confetti({
      particleCount: 160,
      spread: 100,
      origin: { y: 0.6 },
      colors: confettiColors,
    })
  }

  return (
    <div className="px-4 md:px-6 py-10 text-center relative">
      {lit && (
        <motion.div
          className="fixed top-40 lg:top-56 left-0 w-full text-center text-[40px] md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 drop-shadow leading-tight px-4"
          style={{ filter: "drop-shadow(0 0 20px rgba(255,105,180,0.4))" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Happy Birthday, Princess!
        </motion.div>
      )}

      <div className="relative flex flex-col items-center gap-8 mt-52">
        <div className="relative mb-6">
          <Cake lit={lit} />
        </div>

        {/* 1. Candle button */}
        {!lit && (
          <GradientButton onClick={lightCandle}>
            <Flame size={20} />
            Light the Candle
          </GradientButton>
        )}

        {/* 2. Cut the Cake (after candle lit) */}
        {lit && !cutDone && (
          <GradientButton onClick={cutCake} className="mt-2">
            <Scissors size={20} />
            Cut the Cake
          </GradientButton>
        )}

        {/* 3. Next button (after cut) */}
        {cutDone && (
          <GradientButton
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current.currentTime = 0
              }
              onNext()
            }}
            className="mt-2"
          >
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
          {lit && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0.2, y: 10 }}
              animate={{ opacity: 1, scaleY: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="flame"
            />
          )}
        </div>
      </div>
    </div>
  )
}
