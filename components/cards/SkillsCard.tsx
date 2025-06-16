import { Code } from "lucide-react"
import type { BaseCardProps } from "../../types"
import { Card } from "../ui/Card"

export function SkillsCard(props: BaseCardProps) {
  const { theme } = props

  const skills = ["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"]

  return (
    <Card {...props} cardId="skills">
      <div
        className={`h-full ${theme.cardBg.primary} rounded-3xl p-4 md:p-6 transition-all duration-300 ease-out border ${theme.border.primary} shadow-lg hover:shadow-xl`}
      >
        <div className={`h-full flex flex-col ${theme.text.primary} relative overflow-hidden`}>
          <Code className={`w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4 relative z-10 ${theme.text.muted} animate-spin-slow`} />
          <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 relative z-10 animate-slide-down">Skills</h2>
          <div className="flex flex-wrap gap-1.5 md:gap-2 relative z-10">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={`px-2 py-1 md:px-3 md:py-1 ${theme.text.primary === "text-white" || theme.text.primary === "text-slate-100" || theme.text.primary === "text-orange-100" ? "bg-white/20 hover:bg-white/30" : "bg-gray-900/20 hover:bg-gray-900/30"} rounded-full text-xs font-medium transition-all duration-300 animate-fade-in-scale`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
