'use client'

export default function Hero() {
  return (
    <section className="relative h-[95vh] flex items-center justify-center">
      
      {/* Background Image */}
      <img
        src="/images/aloha.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-[50%_41%]"
      />

      {/* Dark + Fire Gradient Overlay */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-orange-900/32" />

      {/* Content */}
      <div className="relative text-center px-4 max-w-2xl">
        
        {/* <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Forged by Hand.
          <br />
          Inspired by Flame.
        </h1> 
        
        <p className="text-white/80 mb-8 text-lg">
          Unique artwork blending natural materials with bold design.
        </p> */}
        {/* <div className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"> */}

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            Designed, Carved,
            <br />
            Textured by Hand.
          </h1>

          <p className="text-white/85 mb-8 text-xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
            New & unique pieces always in the making.
          </p>
          
        {/* </div> */}

        <div className="h-70" />

        <div className="flex justify-center gap-4">
          <a
            href="#gallery"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-full font-semibold transition"
          >
            View Gallery
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-white/30 hover:border-white rounded-full transition"
          >
            Contact
          </a>
        </div>

      </div>
    </section>
  )
}