import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface Prayer {
  id: number
  name: string
  content: string
  timeAgo: string
}

interface PrayerSupportProps {
  prayers: Prayer[]
}

export default function PrayerSupport({ prayers }: PrayerSupportProps) {
  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Doa-doa orang baik ({prayers.length})</h3>
      </div>

      <div className="space-y-4">
        {prayers.map((prayer) => (
          <Card key={prayer.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{prayer.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{prayer.content}</p>
                </div>
                <span className="text-xs text-gray-500">{prayer.timeAgo} yang lalu</span>
              </div>

              <div className="mt-3">
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 hover:bg-primary/5">
                  <Heart size={14} className="mr-1" />
                  Aamiin kan doa ini
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-4 text-center">
        <Button variant="outline" className="w-full">
          Lihat Semua
        </Button>
      </div>
    </div>
  )
}

