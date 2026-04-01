"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const services = [
   {
    title: "Protocolo",
    description: "Reabilitações completas com excelência em função e estética.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 16h20" />
        <circle cx="10" cy="16" r="3" />
        <circle cx="16" cy="16" r="3" />
        <circle cx="22" cy="16" r="3" />
        <path d="M8 12V8" />
        <path d="M24 12V8" />
      </svg>
    ),
  },
  {
    title: "Prótese Total",
    description: "Reabilitação completa com estética natural, conforto e adaptação funcional para devolver segurança e qualidade de vida ao paciente.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="10" width="20" height="12" rx="2" />
        <path d="M10 10V8a2 2 0 012-2h8a2 2 0 012 2v2" />
        <path d="M16 14v4" />
        <path d="M12 16h8" />
      </svg>
    ),
  },
  {
    title: "Prótese Parcial Removível",
    description: "Roach - Estruturas leves e discretas que garantem retenção eficiente e excelente adaptação, preservando a harmonia do sorriso.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 6v8" />
        <path d="M12 14h8" />
        <rect x="10" y="14" width="12" height="4" rx="1" />
        <path d="M13 18v8l3-2 3 2v-8" />
      </svg>
    ),
  },
  {
    title: "Placa Miorrelaxante",
    description: "Dispositivos personalizados para proteção dentária, alívio muscular e controle dos efeitos do bruxismo com máximo conforto.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="16" cy="16" rx="8" ry="10" />
        <path d="M12 12c2 2 6 2 8 0" />
        <path d="M12 20c2-2 6-2 8 0" />
      </svg>
    ),
  },
  {
    title: "Placa de Clareamento",
    description: "Moldeiras precisas que potencializam o clareamento dental, garantindo encaixe perfeito e distribuição uniforme do gel.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 16h20" />
        <circle cx="10" cy="16" r="3" />
        <circle cx="16" cy="16" r="3" />
        <circle cx="22" cy="16" r="3" />
        <path d="M8 12V8" />
        <path d="M24 12V8" />
      </svg>
    ),
  }
  // {
  //   title: "Planejamento Estético",
  //   description: "Mock-ups e enceramento diagnóstico para visualização prévia do resultado.",
  //   icon: (
  //     <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
  //       <circle cx="16" cy="16" r="10" />
  //       <path d="M16 10v6l4 2" />
  //       <path d="M22 10l2-2" />
  //       <path d="M24 12l2-2" />
  //     </svg>
  //   ),
  // },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicos" className="py-24 md:py-32 bg-background relative">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-48 h-48 bg-beige rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-gold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Nossos Serviços
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6"
          >
            Excelência em cada <span className="italic">detalhe</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Oferecemos uma gama completa de serviços protéticos, todos desenvolvidos 
            com o mais alto padrão de qualidade e atenção aos detalhes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="h-full p-8 rounded-3xl bg-card border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:shadow-gold/5">
                <div className="w-16 h-16 rounded-2xl bg-beige flex items-center justify-center text-foreground mb-6 group-hover:bg-gold/20 transition-colors duration-500">
                  {service.icon}
                </div>
                
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
