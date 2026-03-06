import Image from 'next/image'

const TEAM = [
  {
    name: 'Shayan Syed',
    role: 'CS @ Ontario Tech',
    focus: 'Product & UX',
    bio: 'Shayan is deeply passionate about bridging the gap between modern technology and Islamic education. He focuses on creating intuitive user experiences that make complex learning accessible to everyone.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBw79jPcFSCTi5tTb5ADU-nmomJ9A0Fx7ETbI60nGmPT8KoNwy5KRMIQQDCMn7dShhOsmhPJeTNqRb_tuZUPO8PSAiDss9wuWb2nsF8_CjYqgVLQ3kFSkCqmQwe05t8f4_RjaUKtpwk2HpY706NiJuZVvitrUT5lZr7hO-JZo7Ke-vgWDKRMkML0H0MvJe6tzfXR3Qg6B6x6nW44vovhYTCCYHquIhNa894KrCBsr99paIaAIKoTZfvsTleYsuSDRjR3gjY9Aa_fR75',
  },
  {
    name: 'Abdullah Khalid',
    role: 'SE @ UWaterloo',
    focus: 'Engineering & AI',
    bio: 'With extensive expertise in software engineering, Abdullah leads the development of our secure AI pipelines. He ensures that our RAG-based systems maintain the highest standards of technical excellence and data integrity.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDi7q5_dWo_q2e28TOUBKmmkxaKZD1Z_vuNMNyGqg4KeRCXXqi1PVftxvr29rOuu9mrOuNf8of_-08TGgz47KdQZf1LjS2r7xX4LNprgjVUIuP9s8IvLJsFff4fLXK229odL-4HMPvJwB7TVpsqQOFOcF3m692mBXOYIROmocwqPwzXQUGfqp3S_JDw-QlxRzNDQA-b9896XJtbHk3BeiKQAJQ-FNSlES0RYnxW1_y58-kBxyyblLzd8Icxu2u7Ix1DJVmUPbvrC7_L',
  },
]

export default function TeamSection() {
  return (
    <section
      id="team"
      className="bg-white dark:bg-slate-950 py-24 lg:py-32"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            The people
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Meet the team
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs text-sm leading-relaxed">
              Two builders on a mission to make sacred knowledge more accessible.
            </p>
          </div>
          <div className="mt-6 h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {TEAM.map((member, idx) => (
            <div
              key={member.name}
              className="group relative bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col sm:flex-row items-start gap-0">
                {/* Photo column */}
                <div className="relative sm:w-56 lg:w-64 shrink-0 p-8 pb-0 sm:pb-8 flex sm:flex-col items-start gap-6">
                  {/* Index number */}
                  <span className="absolute top-6 right-6 sm:top-8 sm:right-8 text-[10rem] font-black text-slate-100 dark:text-slate-800 leading-none select-none pointer-events-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <div className="relative z-10">
                    {/* Glow ring */}
                    <div className="absolute -inset-1.5 bg-gradient-to-br from-primary/30 to-emerald-400/10 rounded-full blur-md group-hover:from-primary/50 transition-all duration-500" />
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary/60 to-emerald-300/40" />
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                    />
                  </div>

                  {/* Focus badge */}
                  <div className="relative z-10 mt-auto">
                    <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {member.focus}
                    </span>
                  </div>
                </div>

                {/* Content column */}
                <div className="flex-1 p-8 pt-6 sm:pt-8 sm:pl-0 sm:border-l border-slate-100 dark:border-slate-800">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">
                      {member.role}
                    </p>
                  </div>

                  {/* Quote mark */}
                  <div className="text-primary/20 text-6xl font-serif leading-none mb-1 select-none">
                    &ldquo;
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
