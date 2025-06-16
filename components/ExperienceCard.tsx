import { Briefcase, ChevronRight } from "lucide-react"
import type { BaseCardProps } from "../../types"
import { Card } from "../ui/Card"

export function ExperienceCard(props: BaseCardProps) {
  const { theme } = props

  return (
    <Card {...props} cardId="experience">
      <div
        className={`h-full ${theme.cardBg.primary} rounded-3xl p-4 md:p-6 transition-all duration-300 ease-out border ${theme.border.primary} shadow-lg hover:shadow-xl group cursor-pointer`}
      >
        <div className={`h-full flex flex-col ${theme.text.primary} relative overflow-hidden`}>
          <div className="flex items-center justify-between mb-3 md:mb-4 relative z-10">
            <Briefcase className="w-6 h-6 md:w-8 md:h-8 animate-bounce-subtle" />
            <div className="flex items-center gap-1 md:gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
              <span className="text-xs font-medium">Expand Detail</span>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 relative z-10 animate-slide-up">Experience</h2>
          <div className="space-y-2 md:space-y-3 relative z-10">
            <div className="animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
              <p className="font-semibold text-sm">Senior Developer</p>
              <p className={`text-xs ${theme.text.muted}`}>TechCorp • 2021-Present</p>
            </div>
            <div className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <p className="font-semibold text-sm">Full Stack Dev</p>
              <p className={`text-xs ${theme.text.muted}`}>StartupXYZ • 2019-2021</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
