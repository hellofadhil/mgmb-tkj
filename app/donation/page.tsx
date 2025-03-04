import HeaderBanner from "@/components/header-banner"
import DonationProgress from "@/components/donation-progress"
import DonationButton from "@/components/donation-button"
import OrganizationInfo from "@/components/organization-info"
import ProgramDescription from "@/components/program-description"
import FundraiserSection from "@/components/fundraiser-section"
import PrayerSupport from "@/components/prayer-support"
import FooterCTA from "@/components/footer-cta"

// Sample data
const donationData = {
  currentAmount: 58270825,
  targetAmount: 697500000,
  daysLeft: 13,
  donorCount: 240,
}

const organizationData = {
  name: "Bazma Pertamina",
  isVerified: true,
}

const prayers = [
  {
    id: 1,
    name: "Orang Baik",
    content: "Semoga amal2 menjadi pintar dan berguna bagi bangsa dan keluarga",
    timeAgo: "7 menit",
  },
  {
    id: 2,
    name: "Agussalim",
    content: "Keberkahan untuk kita semua",
    timeAgo: "2 jam",
  },
  {
    id: 3,
    name: "Orang Baik",
    content: "Semoga bermanfaat",
    timeAgo: "2 jam",
  },
  {
    id: 4,
    name: "Orang Baik",
    content: "Bismillahirrahmanirrahim",
    timeAgo: "4 jam",
  },
  {
    id: 5,
    name: "Muqim Ridoqara",
    content: "Semoga sukses",
    timeAgo: "5 jam",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeaderBanner />

      <div className="container mx-auto py-6">
        <DonationProgress
          currentAmount={donationData.currentAmount}
          targetAmount={donationData.targetAmount}
          daysLeft={donationData.daysLeft}
          donorCount={donationData.donorCount}
        />

        <div className="w-full max-w-3xl mx-auto px-4 mb-8">
          <DonationButton />
        </div>

        <OrganizationInfo name={organizationData.name} isVerified={organizationData.isVerified} />

        <ProgramDescription />

        <FundraiserSection />

        <PrayerSupport prayers={prayers} />
      </div>

      <FooterCTA />
    </main>
  )
}

