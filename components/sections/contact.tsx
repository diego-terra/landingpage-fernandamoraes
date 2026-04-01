"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contato" className="py-24 md:py-32 bg-card relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-gold uppercase tracking-[0.3em] text-sm mb-4"
            >
              Contato
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6"
            >
              Vamos <span className="italic">conversar</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground max-w-xl mx-auto leading-relaxed"
            >
              Estamos prontos para atender você e transformar seus casos clínicos 
              em sorrisos perfeitos.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* WhatsApp Card - Primary */}
            <div className="md:col-span-2 p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl mb-2">WhatsApp</h3>
                  <p className="text-primary-foreground/70">
                    Nossa forma preferida de comunicação.<br />
                    Resposta rápida e atendimento personalizado.
                  </p>
                </div>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-foreground hover:bg-white/90 rounded-2xl px-8 py-6 text-base font-medium whitespace-nowrap"
                  asChild
                >
                  <a href="https://wa.me/5535991359681" target="_blank" rel="noopener noreferrer">
                    Iniciar conversa
                  </a>
                </Button>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="p-8 rounded-3xl bg-background border border-border hover:border-gold/30 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-beige flex items-center justify-center mb-4">
                <Instagram className="w-7 h-7 text-foreground" />
              </div>
              <h4 className="font-serif text-xl text-foreground mb-2">Instagram</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Acompanhe nossos trabalhos e novidades.
              </p>
              <a 
                href="https://www.instagram.com/fernandamoraes.tpd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 font-medium text-sm transition-colors"
              >
              @fernandamoraes.tpd
              </a>
            </div>

            {/* Email Card */}
            <div className="p-8 rounded-3xl bg-background border border-border hover:border-gold/30 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-beige flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-foreground" />
              </div>
              <h4 className="font-serif text-xl text-foreground mb-2">E-mail</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Para assuntos formais e documentação.
              </p>
              <a 
                href="mailto:contato@ateliefernandamoraes.com.br"
                className="text-gold hover:text-gold/80 font-medium text-sm transition-colors"
              >
                contato@ateliefernandamoraes.com.br
              </a>
            </div>
          </motion.div>

          {/* Location hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-2 mt-12 text-muted-foreground"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Campo Belo, Minas Gerais</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
