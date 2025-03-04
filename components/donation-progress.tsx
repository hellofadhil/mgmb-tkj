import { Progress } from "@/components/ui/progress"
import { formatCurrency, calculatePercentage } from "@/lib/utils"
import { CalendarClock } from "lucide-react"

interface DonationProgressProps {
  currentAmount: number
  targetAmount: number
  daysLeft: number
  donorCount: number
}

export default function DonationProgress({ currentAmount, targetAmount, daysLeft, donorCount }: DonationProgressProps) {
  const percentage = calculatePercentage(currentAmount, targetAmount)

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary">{formatCurrency(currentAmount)}</h3>
          <p className="text-sm text-gray-500">terkumpul dari {formatCurrency(targetAmount)}</p>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <CalendarClock size={18} />
          <span className="text-sm font-medium">{daysLeft} hari lagi</span>
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-sm font-medium">{donorCount} Donatur</span>
        </div>
      </div>

      <Progress value={percentage} className="h-3 mb-2" />

      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{percentage}% tercapai</span>
        <span>Target: {formatCurrency(targetAmount)}</span>
      </div>
    </div>
  )
}

