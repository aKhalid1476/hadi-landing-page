import Image from 'next/image'
import WaitlistButton from './WaitlistButton'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <Image src="/hadiLogo.png" alt="Hadi Logo" width={100} height={100} className="rounded-xl" />
          <span className="text-3xl font-bold font-arabic leading-none mt-1">هادي</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a
            href="#"
            className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
          >
            Our Mission
          </a>
          <a
            href="#features"
            className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
          >
            Key Features
          </a>
          <a
            href="#team"
            className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
          >
            Meet the team
          </a>
        </div>

        <div className="flex items-center gap-4">
          <WaitlistButton variant="nav" />
        </div>
      </div>
    </nav>
  )
}
