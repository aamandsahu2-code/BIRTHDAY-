// app/layout.js
import "./globals.css"

export const metadata = {
  title: "Happy Birthday",
  description: "Special birthday surprise",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* background layers */}
        <div className="background-flowers" />

        {/* animated butterflies */}
        <div className="butterfly-wrap bw1">
          <div className="butterfly">
            <span className="wing left" />
            <span className="body" />
            <span className="wing right" />
          </div>
        </div>

        <div className="butterfly-wrap bw2">
          <div className="butterfly">
            <span className="wing left" />
            <span className="body" />
            <span className="wing right" />
          </div>
        </div>

        {children}
      </body>
    </html>
  )
}
