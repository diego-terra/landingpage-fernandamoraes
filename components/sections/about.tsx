"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-beige">

              {/* IMAGEM */}
              <img
                src="/002.png"
                alt="Prótese dentária"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY (degradê escuro leve) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* TEXTO */}
              <div className="absolute inset-0 flex items-end p-8">
                <div className="w-full">
                  <div className="h-px bg-gold/40 mb-4" />
                  <p className="text-white font-serif italic text-sm">
                    Cada peça é uma obra de arte única
                  </p>
                </div>
              </div>

            </div>

            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-gold/20 rounded-3xl -z-10" />
          </motion.div>
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Sobre o Ateliê
            </p>

            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
              Onde a arte encontra
              <br />
              <span className="italic">a odontologia</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                O Ateliê Dental Fernanda Moraes nasceu da paixão pela perfeição e do compromisso
                inabalável com a excelência. Cada prótese que desenvolvemos é tratada como
                uma peça única, elaborada com a mesma dedicação de um artesão que molda
                uma obra de arte.
              </p>

              <p>
                Nossa filosofia vai além da técnica: acreditamos que um sorriso restaurado
                deve ser indistinguível da natureza, harmonioso com cada característica
                individual do paciente.
              </p>

              <p>
                Com anos de experiência e aprimoramento constante, oferecemos aos
                dentistas parceiros a tranquilidade de contar com um trabalho impecável,
                pontualidade nos prazos e uma comunicação próxima e transparente.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="font-serif text-4xl text-foreground mb-1">11+</p>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="font-serif text-4xl text-foreground mb-1">500+</p>
                <p className="text-sm text-muted-foreground">Casos realizados</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="font-serif text-4xl text-foreground mb-1">50+</p>
                <p className="text-sm text-muted-foreground">Dentistas parceiros</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
