import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Megaphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function FundraiserSection() {
  return (
    <Card className="w-full max-w-3xl mx-auto mt-8">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 relative w-20 h-20">
            <Image
              src="https://bazma.org/wp-content/uploads/2025/02/cropped-Logo.png"
              alt="Fundraiser icon"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          <h3 className="text-lg font-semibold mb-2">Fundraiser</h3>
          <p className="text-gray-600 mb-4">Mari jadi Fundraiser dan berikan manfaat bagi program ini</p>

          <Button variant="outline" className="flex items-center gap-2">
            <Megaphone size={16} />
            Jadi Fundraiser
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

