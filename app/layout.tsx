import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "FireLord Arts",
  description: "*Put catchy description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="text-text-primary antialiased">
        <div className="relative min-h-screen">
      
          <div className="fixed inset-0 -z-10">
            
            {/* Background image */}
            <img
              src="/images/background.jpg"
              alt="background"
              className="w-full h-full object-cover"
            />

            {/* Dark base overlay (keeps readability) */}
            <div className="absolute inset-0 bg-black/84" />

            {/* Orange tint (your FireLord tone) */}
            <div className="absolute inset-0 bg-orange-900/20" />

            {/* Radial glow (adds depth/focus) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,120,0,0.18),transparent_70%)]" />

            {/* Noise texture (final detail layer) */}
            <div className="absolute inset-0 opacity-10 bg-[url('/images/noise1.png')] bg-repeat" />

          </div>

          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>

        </div>
      </body>
    </html>
  )
}

      // <body
      //   className={`
      //     min-h-screen bg-fixed bg-center bg-cover bg-[url('/images/background.jpg')]
      //     text-text-primary antialiased
      //   `}
      // >
      //   {/* <div className="min-h-screen"> */}
      //     {children}
      //   {/* </div> */}
      // </body>