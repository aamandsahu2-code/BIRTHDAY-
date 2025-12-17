"use client"

import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { Gift } from "lucide-react"
import StaggerText from "../StaggerText"

export default function IntroScreen({ onNext }) {
  return (
    <div className="py-10 md:py-14 text-center">
      <div className="flex flex-col items-center gap-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs md:text-sm text-pink-100/80 tracking-[0.25em] uppercase"
        >
          For my favourite person, Anshika 💗
        </motion.p>

        <img
          src="/gifs/intro.gif"
          alt="Cute birthday animation topper"
          className="w-[140px] md:w-[180px] object-cover"
        />

        <div>
          <h1
            className="text-pretty text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 drop-shadow leading-tight"
            style={{ filter: "drop-shadow(0 0 20px rgba(255,105,180,0.4))" }}
          >
            <StaggerText text="A Princess named Anshika was born 19 years ago!" />
          </h1>
          <p className="mt-4 text-xl text-pink-200">
            Yes, Anshika, it&apos;s YOU! A little surprise awaits...
          </p>
        </div>

        <div className="mt-8">
          <GradientButton onClick={() => onNext?.()}>
            <Gift size={20} />
            Start the surprise
          </GradientButton>
        </div>
      </div>
    </div>
  )
}
