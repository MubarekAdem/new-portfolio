import { Camera, Star } from "lucide-react"
import type { BaseCardProps } from "../../types"
import { Card } from "../ui/Card"

export function PhotoCard(props: BaseCardProps) {
  const { theme } = props

  return (
    <Card {...props} cardId="photo">
      <div
        className={`h-full ${theme.cardBg.primary} rounded-3xl p-4 md:p-6 transition-all duration-300 ease-out border ${theme.border.primary} shadow-lg hover:shadow-xl`}
      >
        <div
          className={`h-full flex flex-col items-center justify-center ${theme.text.primary} relative overflow-hidden`}
        >
          <div
            className={`w-24 h-24 md:w-32 lg:w-40 md:h-32 lg:h-40 rounded-full ${theme.accent} flex items-center justify-center mb-3 md:mb-4 relative z-10 border ${theme.border.primary} animate-float`}
          >
            <Camera className={`w-12 h-12 md:w-14 lg:w-16 md:h-14 lg:h-16 ${theme.text.primary}/90`} />
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 relative z-10 animate-slide-up text-center">
            John Doe
          </h1>
          <p className={`text-sm md:text-lg ${theme.text.muted} relative z-10 animate-slide-up delay-100 text-center`}>
            Full Stack Developer
          </p>
          <div className="flex gap-1 md:gap-2 mt-2 md:mt-4 relative z-10">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 md:w-4 md:h-4 ${theme.text.muted} animate-twinkle`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
