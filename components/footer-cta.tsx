import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"
import DonationButton from "./donation-button"

export default function FooterCTA() {
  return (
    <div className="w-full bg-primary/5 mt-10 py-8">
      <div className="w-full max-w-3xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <DonationButton large />

          <Button variant="outline" size="lg" className="w-full md:w-auto">
            <Share2 className="mr-2" size={18} />
            Bagikan
          </Button>
        </div>
      </div>
    </div>
  )
}

