'use client'

export default function Gallery() {
  const items = [
    { id: 1, src: '/images/IMG_5696.jpg', title: 'Piece 1' },
    { id: 2, src: '/images/IMG_4258.jpg', title: 'Piece 2' },
    { id: 3, src: '/images/IMG_4826.jpg', title: 'Piece 3' },
    { id: 4, src: '/images/IMG_4942.jpg', title: 'Piece 4' },
    { id: 5, src: '/images/IMG_5611.jpg', title: 'Piece 5' },
    { id: 6, src: '/images/IMG_4657.jpg', title: 'Piece 6' },
    { id: 7, src: '/images/IMG_6304.jpg', title: 'Piece 7' },
    { id: 8, src: '/images/IMG_6326.jpg', title: 'Piece 8' },
    { id: 9, src: '/images/IMG_4649.jpg', title: 'Piece 9' },
    { id: 10, src: '/images/IMG_4807.jpg', title: 'Piece 10' },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-16">
        Gallery
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, i) => {
          const isOffset = i % 2 === 1

        //   return (
        //     <div
        //       key={item.id}
        //       className={`
        //         relative group overflow-hidden rounded-2xl 
        //         ${i === 0 ? 'md:col-span-2' : ''}
        //       `}
        //     >
        //       <img
        //         src={item.src}
        //         alt={item.title}
        //         className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110"
        //       />

        //       {/* Overlay */}
        //       <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        //         <p className="text-white text-lg">{item.title}</p>
        //       </div>
        //     </div>
        //   )
        // })}

        return (
            <div
              key={item.id}
              className={`
                relative group
                ${isOffset ? 'md:translate-y-1' : ''}
                ${i === 0 ? 'md:col-span-2' : ''}
                transition-transform duration-300
              `}
              style={{
                transform: isOffset
                  ? 'rotate(1deg)'
                  : 'rotate(-1deg)',
              }}
            >
              <div className={`
                h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition
              `}>
                
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className={`
                    w-full h-full object-cover
                    transition-transform duration-500 group-hover:scale-105
                  `}
                />

                {/* Fire tone overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent opacity-70 pointer-events-none" /> */}

                {/* Hover title */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  {/* <p className="text-lg font-semibold tracking-wide">
                    {item.title}
                  </p> */}
                </div>

              </div>
            </div>
          )
        })}


      </div>
    </section>
  )
}