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
      // yaha apna song file path rakho
      audioRef.current = new Audio("/sounds/birthday-lofi.mp3")
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

    // Normal confetti bursts
    burst()
    setTimeout(burst, 500)
    setTimeout(burst, 900)

    // Sky-shot / fireworks style background
    setTimeout(fireworks, 300)
  }

  const burst = () => {
    confetti({
      particleCount: 160,
      spread: 100,
      origin: { y: 0.6 },
      colors: confettiColors,
    })
  }

  // Fireworks / sky-shot effect using canvas-confetti presets [web:129][web:131]
  const fireworks = () => {
    const duration = 1500
    const animationEnd = Date.now() + duration
    const defaults = {
      startVelocity: 35,
      spread: 360,
      ticks: 60,
      zIndex: 0,
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()
      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 30 * (timeLeft / duration)

      // Left side sky shot
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: Math.random() * 0.2 + 0.1, // 0.1–0.3
          y: Math.random() * 0.3, // top area
        },
        colors: ["#F97316", "#FB7185", "#FACC15", "#A855F7"],
      })

      // Right side sky shot
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: Math.random() * 0.2 + 0.7, // 0.7–0.9
          y: Math.random() * 0.3,
        },
        colors: ["#F97316", "#FB7185", "#FACC15", "#A855F7"],
      })
    }, 200)
  }

  return (
    <div className="px-4 md:px-6 py-10 text-center relative">
      {/* Soft glowing blobs behind cake */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute w-40 h-40 bg-pink-500/20 blur-3xl rounded-full -top-10 left-6" />
        <div className="absolute w-56 h-56 bg-fuchsia-500/25 blur-3xl rounded-full bottom-0 right-4" />
        <div className="absolute w-32 h-32 bg-violet-500/20 blur-3xl rounded-full top-1/3 -left-10" />
      </div>

      {lit && (
        <motion.div
          className="fixed top-40 lg:top-56 left-0 w-full text-center text-[40px] md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 drop-shadow leading-tight px-4"
          style={{ filter: "drop-shadow(0 0 20px rgba(255,105,180,0.4))" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Happy Birthday, Princess Anshika!
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

        {/* Helper text when song playing */}
        {cutDone && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-3 text-sm text-pink-100/80"
          >
            Volume badhao, ab tumhara birthday sky‑shots ke saath chal raha hai 🎆
          </motion.p>
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
