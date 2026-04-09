"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5535991359681?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </motion.a>
  )
}
