import { User } from "lucide-react"
import type { BaseCardProps } from "../../types"
import { Card } from "../ui/Card"

export function AboutCard(props: BaseCardProps) {
  const { theme } = props

  return (
    <Card {...props} cardId="about">
      <div
        className={`h-full ${theme.cardBg.primary} rounded-3xl p-4 md:p-6 transition-all duration-300 ease-out border ${theme.border.primary} shadow-lg hover:shadow-xl`}
      >
        <div className={`h-full flex flex-col ${theme.text.primary} relative overflow-hidden`}>
          <User
            className={`w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4 relative z-10 ${theme.text.muted} animate-bounce-subtle`}
          />
          <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 relative z-10 animate-slide-right">About Me</h2>
          <p className={`text-sm md:text-sm leading-relaxed relative z-10 animate-fade-in-up ${theme.text.muted}`}>
            Passionate developer with 5+ years of experience creating digital solutions. I love turning complex problems
            into simple, beautiful designs that make a difference.
          </p>
        </div>
      </div>
    </Card>
  )
}
