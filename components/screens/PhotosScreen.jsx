"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-cards"
import { Mail } from "lucide-react"
import GradientButton from "../GradientButton"

export default function PhotosScreen({ onNext }) {
  const swiperRef = useRef(null)

  const memories = [
    "/memories/dost1.jpg",
    "/memories/dost2.jpg",
    "/memories/dost3.jpg",
    "/memories/dost4.jpg"
  ]

  return (
    <div className="px-4 md:px-6 py-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-4"
      >
        Memories 💖
      </motion.h2>
      
      <p className="text-sm text-rose-100/90 mb-8">(Swipe the cards)</p>

      <div className="flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            onSwiper={(swiper) => swiperRef.current = swiper}
            className="w-[280px] h-[420px] md:w-[340px] md:h-[460px]"
          >
            {memories.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="h-full w-full rounded-2xl shadow-2xl border-4 border-white/20">
                  <img
                    src={src}
                    alt={`Memory ${index + 1}`}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.5 }}
        className="mt-12 flex justify-center"
      >
        <GradientButton onClick={onNext} className="px-8 py-4 text-lg">
          <Mail size={20} className="mt-0.5 mr-2" /> Special Message 💌
        </GradientButton>
      </motion.div>
    </div>
  )
                                   }
