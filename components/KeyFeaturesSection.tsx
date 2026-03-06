'use client'

import { motion } from 'framer-motion'

const FEATURES = [
  {
    number: '01',
    title: 'AI Generated Flashcards',
    description:
      'By using RAG, we ensure that flashcards are AI-generated are grounded and only produce info for the textbooks and scholarly works that we provide.',
    icon: 'style',
  },
  {
    number: '02',
    title: "Qur'an Recitation Corrector",
    description:
      "Our ML model is being trained on thousands of hours worth of Qur'an recitations from Qurrāʾ, making the model able to correctly catch any errors in your recitation.",
    icon: 'mic',
  },
]

export default function KeyFeaturesSection() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
      {/* Label */}
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
          <span className="text-xs font-bold uppercase tracking-wider">Key Features</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Built for serious learners
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl font-medium">
          Tools grounded in authentic scholarship, designed to accelerate your journey in Islamic knowledge.
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            {/* Background number */}
            <span className="absolute top-4 right-6 text-7xl font-extrabold text-slate-100 dark:text-slate-800 select-none leading-none">
              {feature.number}
            </span>

            <div className="relative space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="material-icons-round text-primary text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* More to come */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="rounded-3xl border border-dashed border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 p-8 flex flex-col items-center justify-center text-center gap-3"
      >
        <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center">
          <span className="material-icons-round text-slate-400 text-2xl">more_horiz</span>
        </div>
        <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">More to come</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
          We are continuously expanding the platform. Join the waitlist to be the first to know when new features launch.
        </p>
      </motion.div>
    </section>
  )
}
