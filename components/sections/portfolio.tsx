"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Protocolo Completo",
    category: "Protocolo",
    image: "/portfolio/caso-01.jpg",
    before: true,

  },
  {
    id: 2,
    title: "Prótese Total",
    category: "Superior/Inferior",
    image: "/portfolio/caso-02.jpg",
    before: true,
  },
  {
    id: 3,
    title: "Prótese Parcial Removível",
    category: "Roach",
    image: "/portfolio/caso-03.jpg",
    before: false,
  },
  {
    id: 4,
    title: "Placa Miorrelaxante",
    category: "Placa de Bruxismo",
    image: "/portfolio/caso-04.jpg",
    before: true,
  },
  {
    id: 5,
    title: "Placa de Clareamento",
    category: "Moldeira",
    image: "/portfolio/caso-05.jpg",
    before: true,
  },
  // {
  //   id: 6,
  //   title: "Mock-up Digital",
  //   category: "Planejamento",
  //   before: false,
  // },
]

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? portfolioItems.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === portfolioItems.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-card relative">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <div ref={ref} className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-gold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Portfólio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6"
          >
            Nossos <span className="italic">trabalhos</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Uma seleção de casos que demonstram nosso compromisso com a excelência
            e a transformação de sorrisos.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-beige">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Placeholder content */}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gold/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                </div>

                {/* Before/After Badge */}
                {/* {item.before && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground">
                    Antes / Depois
                  </div>
                )} */}

                {/* Hover content */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <p className="text-white/70 text-sm mb-1">{item.category}</p>
                    <h4 className="text-white font-serif text-xl">{item.title}</h4>
                  </div>
                </div>

                {/* Zoom effect indicator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-beige mb-6">
              <img
                src={portfolioItems[selectedImage].image}
                alt={portfolioItems[selectedImage].title}
                className="w-full h-full object-cover"
              />

              {/* <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gold/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                  <p className="text-foreground/40 font-serif italic">
                    Imagem do caso
                  </p>
                </div>
              </div> */}

            </div>
            <div className="text-center">
              <p className="text-white/60 text-sm mb-2">{portfolioItems[selectedImage].category}</p>
              <h4 className="text-white font-serif text-2xl">{portfolioItems[selectedImage].title}</h4>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}
