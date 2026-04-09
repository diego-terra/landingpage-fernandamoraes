"use client"

import { motion } from "framer-motion"
import { MessageCircle, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Organic Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 right-0 w-[800px] h-[800px] text-gold/10 -translate-y-1/4 translate-x-1/4"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M200 50C280 50 350 120 350 200C350 280 280 350 200 350C120 350 50 280 50 200C50 120 120 50 200 50Z"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M200 80C260 80 320 140 320 200C320 260 260 320 200 320C140 320 80 260 80 200C80 140 140 80 200 80Z"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M150 100C200 60 280 80 320 150C360 220 340 300 280 340C220 380 140 360 100 290C60 220 100 140 150 100Z"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-[600px] h-[600px] text-gold/10 translate-y-1/4 -translate-x-1/4"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M100 200C100 100 180 50 250 80C320 110 380 200 350 280C320 360 220 380 150 340C80 300 100 300 100 200Z"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="150"
            ry="100"
            stroke="currentColor"
            strokeWidth="0.5"
            transform="rotate(30 200 200)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gold uppercase tracking-[0.3em] text-sm mb-6"
            >
              Prótese Dentária
            </motion.p> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6"
            >
              <div className="flex flex-col items-center lg:items-start">
                <img
                  src="/logo-sized.svg"
                  alt="Fernanda Moraes"
                  className="w-[280px] sm:w-[320px] md:w-[380px] lg:w-[550px] xl:w-[650px] object-contain mx-auto lg:mx-0"
                />
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className=" text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed
              max-w-[650px] mx-auto lg:mx-0 text-center lg:text-left mb-10"
            >
              Estética, precisão e confiança para elevar o nível dos seus casos clínicos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-lg"
                asChild
              >
                <a href="https://wa.me/5535991359681" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-2xl px-8 py-6 text-base font-medium transition-all duration-300"
                asChild
              >
                <a href="#portfolio">Ver trabalhos</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-beige">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-light/30 to-transparent" />
              {/* <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <circle cx="9" cy="10" r="1" fill="currentColor" />
                      <circle cx="15" cy="10" r="1" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground/60 font-serif italic text-lg">
                    Excelência em prótese dentária
                  </p>
                </div>
              </div>*/}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-beige">

                <img
                  src="/001.jpg"
                  alt="Prótese dentária"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-gold-light/30 to-transparent" />

              </div>

            </div>



            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/30 rounded-full" />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold/10 rounded-full" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
