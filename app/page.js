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
      {/* Gradient background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-[#050018] via-[#2b0033] to-[#050018]" />

      {/* Soft glow blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute w-64 h-64 bg-pink-500/20 blur-3xl rounded-full top-[-40px] left-[-40px]" />
        <div className="absolute w-72 h-72 bg-fuchsia-500/25 blur-3xl rounded-full bottom-[-60px] right-[-40px]" />
        <div className="absolute w-40 h-40 bg-violet-500/20 blur-3xl rounded-full top-1/3 right-10" />
      </div>

      {/* Tiny stars layer */}
      <StarsBackground />

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

/**
 * Small twinkling stars in background
 */
function StarsBackground() {
  const stars = Array.from({ length: 40 })

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
