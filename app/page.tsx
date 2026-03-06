import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import CredibilitySection from '@/components/CredibilitySection'
import MissionSection from '@/components/MissionSection'
import KeyFeaturesSection from '@/components/KeyFeaturesSection'
import CoreValuesSection from '@/components/CoreValuesSection'
import JoinBannerSection from '@/components/JoinBannerSection'
import TeamSection from '@/components/TeamSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CredibilitySection />
        <MissionSection />
        <KeyFeaturesSection />
        <CoreValuesSection />
        <JoinBannerSection />
        <TeamSection />
      </main>

      {/* Floating chat button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
          <span className="material-icons-round">forum</span>
        </button>
      </div>
    </>
  )
}
