import { Mail, MapPin, Github, Linkedin } from "lucide-react"
import type { BaseCardProps } from "../../types"
import { Card } from "../ui/Card"

export function ContactCard(props: BaseCardProps) {
  const { theme } = props

  return (
    <Card {...props} cardId="contact">
      <div
        className={`h-full ${theme.cardBg.accent} rounded-3xl p-4 md:p-6 transition-all duration-300 ease-out border ${theme.border.primary} shadow-lg hover:shadow-xl`}
      >
        <div className={`h-full flex flex-col ${theme.text.primary} relative overflow-hidden`}>
          <Mail className="w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4 relative z-10 animate-pulse" />
          <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 relative z-10 animate-slide-left">Contact</h2>
          <div className="space-y-2 md:space-y-3 relative z-10">
            <div className="flex items-center gap-2 md:gap-3 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
              <Mail className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs md:text-sm">john@example.com</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <MapPin className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs md:text-sm">San Francisco, CA</span>
            </div>
            <div className="flex gap-2 md:gap-3 mt-3 md:mt-4 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
              <Github className="w-4 h-4 md:w-5 md:h-5 hover:scale-125 transition-transform cursor-pointer animate-float" />
              <Linkedin className="w-4 h-4 md:w-5 md:h-5 hover:scale-125 transition-transform cursor-pointer animate-float delay-100" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
