export default function CredibilitySection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="pt-12 border-t border-slate-100 dark:border-slate-800">
        <p className="text-center text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-10">
          Under strict guidance and overview by scholars of Ahl as-Sunnah
        </p>
        <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">mosque</span>
            <span className="font-bold text-xl tracking-tight text-slate-700 dark:text-slate-300">
              Islamic Centre of Oshawa
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">mosque</span>
            <span className="font-bold text-xl tracking-tight text-slate-700 dark:text-slate-300">
              Al-Arqam Islamic Centre
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
