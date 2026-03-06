const VALUES = [
  {
    icon: 'shield',
    title: 'Authenticity',
    description:
      'Every AI response is grounded in classical Islamic texts and reviewed by a council of trusted scholars.',
  },
  {
    icon: 'language',
    title: 'Accessibility',
    description:
      'Removing financial and language barriers to ensure every student can access high-quality educational resources.',
  },
  {
    icon: 'lightbulb',
    title: 'Innovation',
    description:
      'Utilizing cutting-edge AI to enhance traditional learning without compromising our foundational principles.',
  },
]

export default function CoreValuesSection() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900/50 py-24 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
            Our Core Values
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full opacity-30" />
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto">
            Rooting innovation in tradition to serve the global Ummah with integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="group bg-white dark:bg-slate-900 p-8 rounded-[32px] shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="material-icons-round text-2xl">{value.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
