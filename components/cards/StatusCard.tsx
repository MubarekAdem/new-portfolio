import { Calendar } from "lucide-react"
import type { BaseCardProps } from "../../types"
import { Card } from "../ui/Card"

export function StatusCard(props: BaseCardProps) {
  const { theme } = props

  return (
    <Card {...props} cardId="status">
      <div
        className={`h-full ${theme.cardBg.secondary} rounded-3xl p-3 md:p-4 transition-all duration-300 ease-out border ${theme.border.secondary} shadow-lg hover:shadow-xl`}
      >
        <div className={`h-full flex items-center justify-between ${theme.text.secondary} relative overflow-hidden`}>
          <div className="flex items-center gap-2 md:gap-3 relative z-10">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-ping" />
            <span className="font-semibold text-sm md:text-base animate-slide-in-left">Available for work</span>
          </div>
          <Calendar className="w-5 h-5 md:w-6 md:h-6 relative z-10 animate-bounce-subtle" />
        </div>
      </div>
    </Card>
  )
}
