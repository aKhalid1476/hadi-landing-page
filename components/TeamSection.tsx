import Image from 'next/image'

const TEAM = [
  {
    name: 'Shayan Syed',
    role: 'Program: CS @ OnTech',
    bio: 'Shayan is deeply passionate about bridging the gap between modern technology and Islamic education. He focuses on creating intuitive user experiences that make complex learning accessible to everyone.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBw79jPcFSCTi5tTb5ADU-nmomJ9A0Fx7ETbI60nGmPT8KoNwy5KRMIQQDCMn7dShhOsmhPJeTNqRb_tuZUPO8PSAiDss9wuWb2nsF8_CjYqgVLQ3kFSkCqmQwe05t8f4_RjaUKtpwk2HpY706NiJuZVvitrUT5lZr7hO-JZo7Ke-vgWDKRMkML0H0MvJe6tzfXR3Qg6B6x6nW44vovhYTCCYHquIhNa894KrCBsr99paIaAIKoTZfvsTleYsuSDRjR3gjY9Aa_fR75',
  },
  {
    name: 'Abdullah Khalid',
    role: 'SE @ UWaterloo',
    bio: 'With extensive expertise in software engineering, Abdullah leads the development of our secure AI pipelines. He ensures that our RAG-based systems maintain the highest standards of technical excellence and data integrity.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDi7q5_dWo_q2e28TOUBKmmkxaKZD1Z_vuNMNyGqg4KeRCXXqi1PVftxvr29rOuu9mrOuNf8of_-08TGgz47KdQZf1LjS2r7xX4LNprgjVUIuP9s8IvLJsFff4fLXK229odL-4HMPvJwB7TVpsqQOFOcF3m692mBXOYIROmocwqPwzXQUGfqp3S_JDw-QlxRzNDQA-b9896XJtbHk3BeiKQAJQ-FNSlES0RYnxW1_y58-kBxyyblLzd8Icxu2u7Ix1DJVmUPbvrC7_L',
  },
]

export default function TeamSection() {
  return (
    <section
      id="team"
      className="bg-slate-50 dark:bg-slate-900/50 py-24 lg:py-32 border-y border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
            Meet the team
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full opacity-30" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            The builders behind the platform, dedicated to empowering students of knowledge with
            cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="group bg-white dark:bg-slate-900 p-8 rounded-[32px] shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-lg"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary font-bold text-sm tracking-wide uppercase">
                    {member.role}
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
