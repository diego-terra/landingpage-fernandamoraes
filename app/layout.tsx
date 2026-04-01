import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});



export const metadata: Metadata = {
  title: 'Fernanda Moraes Ateliê Dental | Prótese Dentária',
  description: 'Estética, precisão e confiança para elevar o nível dos seus casos clínicos. Prótese dentária artesanal com excelência e atenção aos detalhes.',
  keywords: ['prótese dentária', 'facetas', 'lentes de contato dental', 'protocolo', 'implante dentário', 'estética dental'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f3ef',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${inter.variable} ${cormorant.variable}  font-sans antialiased`}>
        
        {/* LOGO DE FUNDO (marca d’água) */}
          {/* <div className="fixed inset-0 -z-10 flex items-center justify-center pointer-events-none">
            <img 
              src="/logo-bg.png" 
              alt="Background Logo"
              className="w-[700px] opacity-80 object-contain"
            />
          </div> */}
       
        {children}
        <Analytics />
      </body>
    </html>
  )
}
