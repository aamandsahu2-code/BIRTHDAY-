import { Kalam } from "next/font/google"
import "./globals.css"

const kalam = Kalam({ subsets: ["latin"], weight: ["300", "400", "700"] })

export const metadata = {
  title: "Happy Birthday Princess!",
  description: "Princess Birthday Surprise 🎂",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${kalam.className} antialiased select-none relative overflow-hidden`}>
        {/* ⭐ STARS */}
        <div className="star-glow" style={{ top: '10%', left: '15%', width: '3px', height: '3px', animationDelay: '0s' }}></div>
        <div className="star-glow" style={{ top: '20%', left: '80%', width: '4px', height: '4px', animationDelay: '1s' }}></div>
        <div className="star-glow" style={{ top: '60%', left: '30%', width: '2px', height: '2px', animationDelay: '2s' }}></div>
        <div className="star-glow" style={{ top: '80%', left: '90%', width: '3px', height: '3px', animationDelay: '3s' }}></div>
        
        {/* 🦋 BUTTERFLIES */}
        <div className="butterfly butterfly1">
          <div className="butterfly-wing top-left"></div>
          <div className="butterfly-wing top-right"></div>
          <div className="butterfly-wing bottom-left"></div>
          <div className="butterfly-wing bottom-right"></div>
        </div>
        <div className="butterfly butterfly2">
          <div className="butterfly-wing top-left"></div>
          <div className="butterfly-wing top-right"></div>
          <div className="butterfly-wing bottom-left"></div>
          <div className="butterfly-wing bottom-right"></div>
        </div>
        <div className="butterfly butterfly3">
          <div className="butterfly-wing top-left"></div>
          <div className="butterfly-wing top-right"></div>
          <div className="butterfly-wing bottom-left"></div>
          <div className="butterfly-wing bottom-right"></div>
        </div>
        
        {/* 💖 HEARTS */}
        <div className="heart-float heart1"></div>
        <div className="heart-float heart2"></div>
        <div className="heart-float heart3"></div>
        <div className="heart-float heart4"></div>
        <div className="heart-float heart5"></div>
        
        {children}
      </body>
    </html>
  )
}
