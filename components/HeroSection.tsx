import Image from 'next/image'
import WaitlistButton from './WaitlistButton'

const AVATAR_URLS = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDG5SdPFeA2E36eRoK35wCkWCMUtufAnhbZ2cZTxvFgAwOMf0Ebk3rDLhbIastVbrqzTt5U6i4o_Z54hewEd3Ty6-PYfbOL3NEFDkVl2yh-Es_LbhsdU2Q9fVDwkdl2OY4CLbTT3DV5hBAFDDkvx64LvnKIBB3CzNA2Uk7cnQDt7YVinonq8BOTwqfq7hdhc4eSr7KvA0_01bEAsB-eL2WYeFWtsOx9UwDqVsEOKyFJ87smce9zkYAy17o2t4lTYZlxUK5Rn36GjSga',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCRt9D1GoEbxu_EVHvdtBqkfwPF6z6rjMcKGSvx4BHoDgKqcsMdk3s5XuYDMSYwihD6BlnbkE2yUfjuuS-77lph1eszlfuIwvgEgcDIEzJtGTJ49DPZq38PqzqoyI2-RLg6a_6t3JqAJfOrwRfg-pjxpiVkLqnrioXoiszL90adxEXygRE4oj9F6nUgaeu7dsgF62VuGfdCWn4PiaqivP0wFjlJvYM-N54ykji1UdKBwBJTfAMnBIUj3dAUfgkUGnTJgC7p8J8uc9Mc',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBy2KbZM1YxetIU9uznkjNT_5O0C1ylZ0G_WVghldeXJ1S72YWEY7x2iCUJL7iNyj2Yz3q_9Vjt_YCoAD-NbNDxN04RSKsb3FKZDxF0eJ32oYKLGZeGaMkQt_4kVANIKt3icWkTuDgqFlRTve-NsDPA4ldLPUyHq6jbjrMzupROpu0UX7SEsHD4zno6G2nlj7dJaR0YLyFWj-btns7FuefCGIggZ9rN9QvNu7nJTWFfyx_m_0tnogBCHVAM4AYVWbCCt-3gy7GcvS4w',
]

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
            <span className="material-icons-round text-sm">verified</span>
            <span className="text-xs font-bold uppercase tracking-wider">
              Authentic Knowledge Guaranteed
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
            Islamic study tools{' '}
            <span className="text-primary italic font-serif font-normal">reimagined</span>{' '}
            with AI
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Hadi is designed to guide students in their pursuit of authentic Islamic knowledge, providing reliable resources and tools that support learning with confidence and accuracy
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
            <WaitlistButton />
          </div>

          
        </div>

        {/* Right column — product demo video */}
        <div className="relative">
          <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl">
            <video
              src="/hadiDemo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-400/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
