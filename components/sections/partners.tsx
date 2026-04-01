"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, Clock, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Qualidade Premium",
    description: "Materiais de primeira linha e técnicas avançadas para resultados excepcionais.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Prazos Confiáveis",
    description: "Compromisso rigoroso com datas de entrega para sua tranquilidade.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Garantia de Satisfação",
    description: "Ajustes sem custo adicional até a aprovação final do trabalho.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Comunicação Direta",
    description: "Acesso direto para discussão de casos e acompanhamento.",
  },
]

const steps = [
  {
    number: "01",
    title: "Contato Inicial",
    description: "Entre em contato para conhecer nosso trabalho e alinhar expectativas.",
  },
  {
    number: "02",
    title: "Envio do Caso",
    description: "Envie modelos, fotos e informações detalhadas do planejamento.",
  },
  {
    number: "03",
    title: "Execução",
    description: "Desenvolvemos o trabalho com excelência e comunicação constante.",
  },
  {
    number: "04",
    title: "Entrega",
    description: "Receba o trabalho finalizado dentro do prazo acordado.",
  },
]

export function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="parceiros" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-beige rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-gold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Para Dentistas
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6"
          >
            Seja um <span className="italic">parceiro</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Junte-se aos dentistas que confiam no Ateliê Fernanda Moraes para 
            elevar o padrão de suas reabilitações protéticas.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-4">
                {benefit.icon}
              </div>
              <h4 className="font-serif text-xl text-foreground mb-2">{benefit.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card rounded-3xl p-8 md:p-12 border border-border"
        >
          <h3 className="font-serif text-3xl text-foreground text-center mb-12">
            Como funciona
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-border" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-background border-2 border-gold/30 flex items-center justify-center mb-4">
                    <span className="font-serif text-xl text-gold">{step.number}</span>
                  </div>
                  <h4 className="font-medium text-foreground mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl px-10 py-6 text-base font-medium transition-all duration-300 hover:shadow-lg"
              asChild
            >
              <a href="https://wa.me/5535991359681" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Entrar em contato
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
