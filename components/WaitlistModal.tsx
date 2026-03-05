'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

type FormState = 'idle' | 'submitting' | 'success' | 'duplicate' | 'error'

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setEmail('')
      setFormState('idle')
      setErrorMessage('')
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (formState === 'submitting') return
    setFormState('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()

      if (res.ok) {
        setFormState('success')
      } else if (data.error === 'already_registered') {
        setFormState('duplicate')
      } else {
        setFormState('error')
        setErrorMessage(data.message ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setFormState('error')
      setErrorMessage('Network error. Please try again.')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Join the waitlist"
        >
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 p-8 w-full max-w-md"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <span className="material-icons-round text-lg">close</span>
            </button>

            <div className="mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <span className="material-icons-round text-primary text-2xl">auto_awesome</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1">
                Join the Waitlist
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Be among the first to access Hadi when we launch.
              </p>
            </div>

            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-4"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-icons-round text-primary text-3xl">check_circle</span>
                </div>
                <p className="font-bold text-slate-900 dark:text-white text-lg mb-1">
                  {"You're on the list!"}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {"We'll notify you as soon as Hadi is ready."}
                </p>
              </motion.div>
            ) : formState === 'duplicate' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-4"
              >
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-icons-round text-amber-500 text-3xl">info</span>
                </div>
                <p className="font-bold text-slate-900 dark:text-white text-lg mb-1">
                  Already registered!
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  This email is already on the waitlist. {"We'll"} be in touch soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Email address
                  </label>
                  <input
                    ref={inputRef}
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm"
                  />
                </div>

                {formState === 'error' && (
                  <p className="text-sm text-red-500">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full px-6 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:scale-100 flex items-center justify-center gap-2"
                >
                  {formState === 'submitting' ? (
                    <>
                      <span className="material-icons-round animate-spin text-base">refresh</span>
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Waitlist
                      <span className="material-icons-round text-base">east</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
