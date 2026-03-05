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
            Hadi grounds ML/AI pipelines with RAG and hours of training data to ensure students
            of knowledge continue to learn authentic knowledge from verified sources.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
            <WaitlistButton />
          </div>

          <div className="flex items-center gap-8 pt-8">
            <div className="flex -space-x-3">
              {AVATAR_URLS.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="User"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 bg-slate-100 object-cover"
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 bg-primary flex items-center justify-center text-[10px] font-bold text-white">
                +2k
              </div>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-500 font-medium">
              Joined the waitlist this week
            </p>
          </div>
        </div>

        {/* Right column — product visualization */}
        <div className="relative group">
          <div className="aspect-square w-full rounded-3xl bg-gradient-to-tr from-orange-200 via-rose-300 to-indigo-300 dark:from-emerald-900/40 dark:via-teal-800/20 dark:to-slate-900 p-8 flex items-center justify-center relative overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
            />
            <div className="w-full max-w-md bg-white/95 dark:bg-slate-900/95 p-10 rounded-3xl shadow-2xl border border-white/50 dark:border-slate-800 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
              <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Sources</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group/item">
                  <div className="w-10 h-10 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover/item:text-primary transition-colors">
                    <span className="material-icons-round">add</span>
                  </div>
                  <span className="text-slate-600 dark:text-slate-400 font-semibold">Add source</span>
                </div>
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <span className="material-icons-round">menu_book</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">
                      Sahih al-Bukhari
                    </div>
                    <div className="text-xs text-slate-500">Vol 1. PDF • 1.2MB</div>
                  </div>
                </div>
              </div>
            </div>

            <button className="absolute bottom-10 left-10 w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-all">
              <span className="material-icons-round">pause</span>
            </button>
          </div>

          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-400/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
