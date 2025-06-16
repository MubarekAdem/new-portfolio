"use client"
import type { BaseCardProps } from "../../types"
import { Card } from "../ui/Card"
import { useTheme } from "../../contexts/ThemeContext"
import { themes } from "../../constants/themes"

export function ThemeCard(props: BaseCardProps) {
  const { theme } = props
  const { currentTheme } = useTheme()

  return (
    <Card {...props} cardId="theme">
      <div
        className={`h-full ${theme.cardBg.accent} rounded-3xl p-3 md:p-4 transition-all duration-300 ease-out border ${theme.border.primary} shadow-lg hover:shadow-xl group cursor-pointer`}
      >
        <div className="h-full flex items-center justify-between relative overflow-hidden">
          <div className="flex items-center gap-2 md:gap-3 relative z-10">
            <div className="text-2xl animate-bounce-subtle">{theme.icon}</div>
            <div>
              <span className={`font-semibold text-sm md:text-base ${theme.text.primary} animate-slide-in-left`}>
                {theme.name} Mode
              </span>
              <p className={`text-xs ${theme.text.muted}`}>Click to change</p>
            </div>
          </div>
          <div className="flex gap-1 relative z-10">
            {Object.entries(themes).map(([key, t]) => (
              <div
                key={key}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                  currentTheme === key ? "border-white scale-125" : "border-white/30 hover:border-white/60"
                }`}
                style={{
                  background:
                    key === "dark" ? "#374151" : key === "light" ? "#f9fafb" : key === "ocean" ? "#475569" : "#ea580c",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
