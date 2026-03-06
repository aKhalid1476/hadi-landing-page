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
          className={className ?? 'group relative px-5 py-2 text-sm font-semibold rounded-lg overflow-hidden transition-all duration-200 bg-emerald-500 text-white shadow-sm shadow-emerald-500/30 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-500/40 active:scale-[0.98]'}
        >
          <span className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
          <span className="relative flex items-center gap-1.5">
            {children ?? 'Get Early Access'}
            <span className="material-icons-round text-sm transition-transform duration-200 group-hover:translate-x-0.5">east</span>
          </span>
        </button>
        <WaitlistModal isOpen={open} onClose={() => setOpen(false)} />
      </>
    )
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative px-7 py-3.5 bg-gradient-to-b from-emerald-500 to-emerald-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-px active:translate-y-0 active:shadow-md transition-all duration-200 flex items-center gap-2.5 overflow-hidden"
      >
        {/* Inner shine */}
        <span className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
        {/* Bottom edge highlight */}
        <span className="absolute inset-x-0 bottom-0 h-px bg-black/20 pointer-events-none" />
        <span className="relative">{children ?? 'Join the Waitlist'}</span>
        <span className="relative material-icons-round text-[18px] transition-transform duration-200 group-hover:translate-x-0.5">east</span>
      </button>
      <WaitlistModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
