"use client"

import { Instagram, MessageCircle, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Brand */}
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl mb-2">Ateliê Dental Fernanda Moraes</h3>
            <p className="text-primary-foreground/60 text-sm">
              TÉCNICA EM PROTESE DENTÁRIA
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-primary-foreground/20 mb-8" />

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://wa.me/5535991359681"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/fernandamoraes.tpd/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:contato@ateliefernandamoraes.com.br"
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="E-mail"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm">
            <a href="#sobre" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Serviços
            </a>
            <a href="#portfolio" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Portfólio
            </a>
            <a href="#parceiros" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Parceiros
            </a>
            <a href="#contato" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Contato
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-primary-foreground/40 text-xs">
            © {currentYear} Diego Terra. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
