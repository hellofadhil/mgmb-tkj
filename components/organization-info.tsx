import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface OrganizationInfoProps {
  name: string
  isVerified: boolean
}

export default function OrganizationInfo({ name, isVerified }: OrganizationInfoProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-4">Penggalang Dana</h3>

        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gray-200">
            <Image
              src="https://w1.pngwing.com/pngs/745/129/png-transparent-graphic-logo-line-pertamina-text-area-thumbnail.png"
              alt="Organization logo"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-medium">{name}</h4>
              {isVerified && (
                <div className="flex items-center text-xs text-primary gap-1">
                  <CheckCircle size={14} />
                  <span>Verified Organization</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

