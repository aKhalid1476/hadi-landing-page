import Image from 'next/image'

const TEAM = [
  {
    name: 'Shayan Syed',
    role: 'CS @ Ontario Tech',
    focus: 'Techical Co-Founder - MLE',
    bio: 'There are several instances where I have worked with NLP-driven generation and used LLMs to automate different processes, along with extensive experience building Python backends through Waterloo Design Teams and a previous ML internship. As for Shayan, he brings hands-on experience building and testing data and AI-driven systems, with industry exposure to AI automation, entrepreneurial experience running a social media marketing agency, and ongoing studies in an Alimiyyah program that informs a grounded, user-focused approach. More importantly, both of us are committed to making a positive change in the Ummah, with the intention to please Allah and benefit students of knowledge seeking to spend their time gaining understanding of the Deen.',
    image: '/shayanHeadshot.PNG',
  },
  {
    name: 'Abdullah Khalid',
    role: 'SE @ UWaterloo',
    focus: 'Technical Co-Founder - AI Engineer',
    bio: 'This project has brought my benefits to my life. Most importantly, building an application for the benefit of Muslims undoubtedly brings barakah. Allah has made us responsible for being positive contributors to the Ummah. Through training RAG pipelines and developing the end-to-end appication, I strive towards building a beneficial applciation for Muslims. ',
    image: '/abdullahHeadshot.png',
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
                      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-top"
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
