"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-lg shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo apenas escrita*/}
            {/* <a href="#" className="font-serif text-xl md:text-2xl text-foreground">
              Fernanda Moraes <span className="italic">FM</span>
            </a> */}
            
            {/*Logo SVG*/}
            <a href="#">
              <img 
                src="/logo-name.svg" 
                alt="Ateliê Fernanda Moraes" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>

            

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-6"
                asChild
              >
                <a href="https://wa.me/5535991359681?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-background shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-12">
                  <span className="font-serif text-xl text-foreground">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center text-foreground"
                    aria-label="Fechar menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-serif text-2xl text-foreground hover:text-gold transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-12">
                  <Button
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl py-6"
                    asChild
                  >
                    <a 
                      href="https://wa.me/5535991359681?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Falar no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
