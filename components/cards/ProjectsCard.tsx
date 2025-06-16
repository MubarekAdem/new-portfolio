import { Award, ArrowUpRight } from "lucide-react"
import type { BaseCardProps } from "../../types"
import { Card } from "../ui/Card"

export function ProjectsCard(props: BaseCardProps) {
  const { theme } = props

  return (
    <Card {...props} cardId="projects">
      <div
        className={`h-full ${theme.cardBg.primary} rounded-3xl p-4 md:p-6 transition-all duration-300 ease-out border ${theme.border.primary} shadow-lg hover:shadow-xl group cursor-pointer`}
      >
        <div className={`h-full flex flex-col ${theme.text.primary} relative overflow-hidden`}>
          <div className="flex items-center justify-between mb-3 md:mb-4 relative z-10">
            <div className="flex items-center gap-2 md:gap-3">
              <Award className="w-6 h-6 md:w-8 md:h-8 animate-rotate-slow" />
              <h2 className="text-lg md:text-xl font-bold animate-slide-right">Featured Projects</h2>
            </div>
            <div className="flex items-center gap-1 md:gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
              <span className="text-xs md:text-sm font-medium">View all</span>
              <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 flex-1 relative z-10">
            <div
              className={`${theme.accent} rounded-2xl p-3 md:p-4 transition-all duration-300 border ${theme.border.primary} animate-slide-in-bottom`}
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base">E-Commerce Platform</h3>
              <p className={`text-xs md:text-sm ${theme.text.muted} mb-2 md:mb-3`}>
                Full-stack web application with React & Node.js
              </p>
              <div className="flex gap-1 md:gap-2">
                <span
                  className={`px-2 py-1 ${theme.text.primary === "text-white" || theme.text.primary === "text-slate-100" || theme.text.primary === "text-orange-100" ? "bg-white/20" : "bg-gray-900/20"} rounded text-xs animate-fade-in-scale`}
                >
                  React
                </span>
                <span
                  className={`px-2 py-1 ${theme.text.primary === "text-white" || theme.text.primary === "text-slate-100" || theme.text.primary === "text-orange-100" ? "bg-white/20" : "bg-gray-900/20"} rounded text-xs animate-fade-in-scale delay-100`}
                >
                  Node.js
                </span>
              </div>
            </div>
            <div
              className={`${theme.accent} rounded-2xl p-3 md:p-4 transition-all duration-300 border ${theme.border.primary} animate-slide-in-bottom`}
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Mobile App</h3>
              <p className={`text-xs md:text-sm ${theme.text.muted} mb-2 md:mb-3`}>Cross-platform mobile application</p>
              <div className="flex gap-1 md:gap-2">
                <span
                  className={`px-2 py-1 ${theme.text.primary === "text-white" || theme.text.primary === "text-slate-100" || theme.text.primary === "text-orange-100" ? "bg-white/20" : "bg-gray-900/20"} rounded text-xs animate-fade-in-scale`}
                >
                  React Native
                </span>
                <span
                  className={`px-2 py-1 ${theme.text.primary === "text-white" || theme.text.primary === "text-slate-100" || theme.text.primary === "text-orange-100" ? "bg-white/20" : "bg-gray-900/20"} rounded text-xs animate-fade-in-scale delay-100`}
                >
                  Firebase
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
