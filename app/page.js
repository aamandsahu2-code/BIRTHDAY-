"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import LoaderScreen from "@/components/screens/LoaderScreen"
import IntroScreen from "@/components/screens/IntroScreen"
import CakeScreen from "@/components/screens/CakeScreen"
import PhotosScreen from "@/components/screens/PhotosScreen"
import MessageScreen from "@/components/screens/MessageScreen"

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const screens = [
    <LoaderScreen key="loader" onDone={() => setCurrentScreen(1)} />,
    <IntroScreen key="intro" onNext={() => setCurrentScreen(2)} />,
    <CakeScreen key="cake" onNext={() => setCurrentScreen(3)} />,
    <PhotosScreen key="photos" onNext={() => setCurrentScreen(4)} />,
    <MessageScreen key="message" onNext={() => setCurrentScreen(5)} />,
  ]

  return (
    <main className="min-h-screen overflow-hidden relative">
      {/* Base gradient: top dark purple/navy, middle pink, bottom dark */}
      <div className="fixed inset-0 -z-30 bg-gradient-to-b from-[#050018] via-[#2b0033] to-[#050018]" />

      {/* Soft glow blobs */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute w-64 h-64 bg-pink-500/20 blur-3xl rounded-full top-[-40px] left-[-40px]" />
        <div className="absolute w-72 h-72 bg-fuchsia-500/25 blur-3xl rounded-full bottom-[-60px] right-[-40px]" />
        <div className="absolute w-40 h-40 bg-violet-500/20 blur-3xl rounded-full top-1/3 right-10" />
      </div>

      {/* Stars + floating hearts (subtle, bestie vibe) */}
      <StarsBackground />
      <HeartsBackground />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 md:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className={`w-full ${
              currentScreen === 3 ? "max-w-7xl" : "max-w-3xl md:max-w-4xl"
            }`}
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="fixed bottom-4 right-4 text-sm text-white/40 pointer-events-none z-50 font-light"
      >
        @kd
      </motion.div>
    </main>
  )
}

/* Small twinkling stars */
function StarsBackground() {
  const stars = Array.from({ length: 35 })

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {stars.map((_, i) => {
        const size = Math.random() * 2 + 1 // 1–3px
        const top = Math.random() * 100
        const left = Math.random() * 100
        const delay = Math.random() * 5
        const duration = 2 + Math.random() * 3

        return (
          <span
            key={i}
            className="absolute rounded-full bg-white/70"
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
              animation: `twinkle ${duration}s ease-in-out ${delay}s infinite alternate`,
            }}
          />
        )
      })}
      <style jsx global>{`
        @keyframes twinkle {
          from {
            opacity: 0.15;
            transform: scale(1);
          }
          to {
            opacity: 0.8;
            transform: scale(1.4);
          }
        }
      `}</style>
    </div>
  )
}

/* Floating hearts – light, not too romantic */
function HeartsBackground() {
  const hearts = [
    { left: "10%", delay: "0s", size: 14 },
    { left: "25%", delay: "2s", size: 10 },
    { left: "40%", delay: "4s", size: 12 },
    { left: "55%", delay: "1.5s", size: 16 },
    { left: "70%", delay: "3s", size: 11 },
    { left: "85%", delay: "5s", size: 13 },
  ]

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {hearts.map((h, i) => (
        <div
          key={i}
          className="heart-floating opacity-60"
          style={{
            left: h.left,
            bottom: "-40px",
            animationDelay: h.delay,
            width: h.size,
            height: h.size,
          }}
        />
      ))}

      <style jsx global>{`
        .heart-floating {
          position: absolute;
          transform: rotate(-45deg);
          background: rgba(248, 113, 181, 0.6); /* pink-400 */
          animation: float-heart 10s linear infinite;
        }

        .heart-floating::before,
        .heart-floating::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: inherit;
          border-radius: 50%;
        }

        .heart-floating::before {
          top: -50%;
          left: 0;
        }

        .heart-floating::after {
          left: 50%;
          top: 0;
        }

        @keyframes float-heart {
          0% {
            transform: translateY(0) rotate(-45deg) scale(0.8);
            opacity: 0;
          }
          15% {
            opacity: 0.6;
          }
          50% {
            transform: translateY(-60vh) rotate(-45deg) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh) rotate(-45deg) scale(0.9);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
