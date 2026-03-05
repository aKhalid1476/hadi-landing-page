'use client'

import { useState } from 'react'
import WaitlistModal from './WaitlistModal'

interface WaitlistButtonProps {
  variant?: 'primary' | 'nav'
  className?: string
  children?: React.ReactNode
}

export default function WaitlistButton({ variant = 'primary', className, children }: WaitlistButtonProps) {
  const [open, setOpen] = useState(false)

  if (variant === 'nav') {
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className={className ?? 'px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold rounded-full hover:scale-105 transition-all shadow-xl shadow-slate-200 dark:shadow-none'}
        >
          {children ?? 'Join Waitlist'}
        </button>
        <WaitlistModal isOpen={open} onClose={() => setOpen(false)} />
      </>
    )
  }

  return (
    <>
      <div className="relative group">
        <div className="absolute -inset-1 bg-primary blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
        <button
          onClick={() => setOpen(true)}
          className="relative px-8 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-lg font-bold rounded-2xl flex items-center gap-3 transition-transform active:scale-95"
        >
          {children ?? 'Join Waitlist!'}
          <span className="material-icons-round">east</span>
        </button>
        <div className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-green-400 rounded-full" />
      </div>
      <WaitlistModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
