"use client"

import { useState } from "react"

function LoaderScreen({ onNext }) {
  return (
    <div className="screen">
      <p className="small-text">Loading magic...</p>
      <h1 className="title">Just a sec ✨</h1>
      <button className="primary-btn" onClick={onNext}>
        Continue
      </button>
    </div>
  )
}

function IntroScreen({ onNext }) {
  return (
    <div className="screen">
      <p className="small-text">Hey my favourite human 🦋</p>
      <h1 className="title">Happy Birthday 🎂</h1>
      <p className="body-text">
        Aaj ka din sirf tumhare liye hai. Ready for a tiny surprise?
      </p>
      <button className="primary-btn" onClick={onNext}>
        Yes, show me
      </button>
    </div>
  )
}

function CakeScreen({ onNext }) {
  return (
    <div className="screen">
      <h1 className="title">Make a wish 🎉</h1>
      <p className="body-text">Dimag me ek wish socho… and then tap below.</p>
      <button className="primary-btn" onClick={onNext}>
        Wish done ✅
      </button>
    </div>
  )
}

function PhotosScreen({ onNext }) {
  return (
    <div className="screen">
      <h1 className="title">Our little world 📸</h1>
      <p className="body-text">
        Sare moments yaha nahi aa sakte, par dil me sab safe hain.
      </p>
      <button className="primary-btn" onClick={onNext}>
        Last surprise
      </button>
    </div>
  )
}

function MessageScreen() {
  return (
    <div className="screen">
      <p className="small-text">From your crazy human 💌</p>
      <h1 className="title">You are my favourite person</h1>
      <p className="body-text">
        Tumhare bina har din thoda adhura lagta hai. Thank you for existing,
        for tolerating me, aur itna saara pyaar dene ke liye. Stay with me,
        always.
      </p>
      <p className="body-text">Happy Birthday, butterfly 🦋🌸</p>
    </div>
  )
}

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const screens = [
    <LoaderScreen key="loader" onNext={() => setCurrentScreen(1)} />,
    <IntroScreen key="intro" onNext={() => setCurrentScreen(2)} />,
    <CakeScreen key="cake" onNext={() => setCurrentScreen(3)} />,
    <PhotosScreen key="photos" onNext={() => setCurrentScreen(4)} />,
    <MessageScreen key="message" />,
  ]

  return (
    <main className="main-wrapper">
      <div className="card">{screens[currentScreen]}</div>
    </main>
  )
}
