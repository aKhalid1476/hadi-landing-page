import WaitlistButton from './WaitlistButton'

const PILLARS = [
  {
    icon: 'verified',
    title: 'Preserving Authenticity',
    description:
      'We ensure all AI insights are cross-referenced with verified classical texts and scholarly consensus.',
  },
  {
    icon: 'public',
    title: 'Global Access',
    description:
      'Breaking geographical and financial barriers to bring world-class Islamic tools to every home.',
  },
]

export default function MissionSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
            <span className="text-xs font-bold uppercase tracking-wider">Our Purpose</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
            Our Mission
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Empowering students of knowledge through AI, ensuring access to authentic Islamic
            education while grounding technology in traditional scholarship. We are committed to
            making sacred knowledge accessible, reliable, and engaging for the next generation of
            Muslims.
          </p>

          <div className="space-y-6">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <span className="material-icons-round text-xl">{pillar.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">{pillar.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <WaitlistButton>
            Join the Movement
          </WaitlistButton>
        </div>

        {/* Right column — illustration */}
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-tr from-emerald-50 via-teal-100 to-slate-100 dark:from-emerald-900/20 dark:via-teal-800/10 dark:to-slate-800/40 flex items-center justify-center overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800">
            {/* Decorative dot grid */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #10B981 1px, transparent 0)',
                backgroundSize: '28px 28px',
              }}
            />

            {/* Central illustration placeholder */}
            <div className="relative flex flex-col items-center gap-6 p-8">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-icons-round text-primary text-5xl">menu_book</span>
              </div>
              <div className="space-y-3 w-full max-w-xs">
                <div className="h-2.5 bg-primary/20 rounded-full w-3/4 mx-auto" />
                <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full w-full" />
                <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full w-5/6 mx-auto" />
              </div>
              <div className="flex gap-3">
                <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl text-xs font-bold text-primary">
                  Sahih Bukhari
                </div>
                <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-500">
                  Quran
                </div>
                <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-500">
                  Fiqh
                </div>
              </div>
            </div>

            {/* Glow blobs */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal-400/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
