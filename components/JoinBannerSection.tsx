import WaitlistButton from './WaitlistButton'

export default function JoinBannerSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-emerald-400 to-teal-500 px-8 py-20 text-center shadow-2xl shadow-primary/20">
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Glow blobs */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <div className="relative space-y-6 max-w-2xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Join us on our journey
          </h2>
          <p className="text-emerald-50 text-lg leading-relaxed">
            Be a part of the future of Islamic education. Help us build the tools that empower
            the next generation of seekers.
          </p>
          <div className="flex justify-center pt-2">
            <WaitlistButton variant="nav" className="group relative px-7 py-3.5 bg-white text-slate-900 text-base font-semibold rounded-xl shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/25 hover:-translate-y-px active:translate-y-0 transition-all duration-200 flex items-center gap-2.5 overflow-hidden">
              Get Early Access
            </WaitlistButton>
          </div>
        </div>
      </div>
    </section>
  )
}
