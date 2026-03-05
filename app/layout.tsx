import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Instrument_Serif, Amiri } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-display',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['700'],
  variable: '--font-arabic',
})

export const metadata: Metadata = {
  title: 'Hadi - Islamic Study Tools Reimagined',
  description:
    'Hadi grounds ML/AI pipelines with RAG and hours of training data to ensure students of knowledge continue to learn authentic knowledge from verified sources.',
  openGraph: {
    title: 'Hadi - Islamic Study Tools Reimagined',
    description:
      'AI-powered study tools for Islamic education, grounded in authentic knowledge and scholarly oversight.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${plusJakartaSans.variable} ${instrumentSerif.variable} ${amiri.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased hero-mesh">
        {children}
      </body>
    </html>
  )
}
