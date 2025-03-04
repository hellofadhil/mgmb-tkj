import { MoonStar, ChurchIcon as Mosque } from "lucide-react"

export default function HeaderBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-primary islamic-pattern">
      <div className="absolute top-0 left-0 w-full h-2 bg-secondary/50"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-secondary/50"></div>

      {/* Islamic decorative elements */}
      <div className="absolute right-4 top-4 text-secondary/70">
        <MoonStar size={32} />
      </div>
      <div className="absolute left-4 bottom-4 text-secondary/70">
        <Mosque size={32} />
      </div>

      {/* Arabesque patterns on sides */}
      <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-32 w-6">
        <div className="h-full w-full bg-secondary/20 rounded-r-full"></div>
      </div>
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-32 w-6">
        <div className="h-full w-full bg-secondary/20 rounded-l-full"></div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-md">
            <span className="text-secondary">SEBARAN</span>
          </h1>
          <p className="text-white/90 text-sm md:text-base">Program Berbagi Baju Lebaran 2025</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 w-full max-w-3xl text-center">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-2 drop-shadow-md">
            Semangat Berbagi Baju Lebaran untuk Anak Yatim dan Dhuafa
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-4">Mari berbagi kebahagiaan di bulan suci Ramadhan</p>
        </div>
      </div>
    </div>
  )
}

