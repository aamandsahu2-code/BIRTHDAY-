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
      {/* New fun gradient background */}
      <div className="fixed inset-0 -z-30 bg-gradient-to-br from-[#0f172a] via-[#1d2240] to-[#020617]" />

      {/* Color blobs */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute w-64 h-64 bg-sky-500/20 blur-3xl rounded-full top-[-60px] left-[-40px]" />
        <div className="absolute w-72 h-72 bg-emerald-400/18 blur-3xl rounded-full bottom-[-80px] right-[-40px]" />
        <div className="absolute w-52 h-52 bg-violet-500/18 blur-3xl rounded-full top-1/3 right-10" />
      </div>

      {/* Floating circles (subtle animated shapes) */}
      <FloatingShapes />

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

/* Floating soft circles (non-romantic, just fun shapes) */
function FloatingShapes() {
  const circles = Array.from({ length: 10 })

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {circles.map((_, i) => {
        const size = 40 + Math.random() * 80
        const left = Math.random() * 100
        const delay = Math.random() * 8
        const duration = 18 + Math.random() * 10

        return (
          <span
            key={i}
            className="absolute rounded-full bg-cyan-400/8 border border-cyan-300/10"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              bottom: "-20vh",
              animation: `float-circle ${duration}s linear ${delay}s infinite`,
            }}
          />
        )
      })}

      <style jsx global>{`
        @keyframes float-circle {
          0% {
            transform: translateY(0) scale(0.9);
            opacity: 0;
          }
          20% {
            opacity: 0.4;
          }
          60% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-110vh) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
