"use client"

import type React from "react"
import type { BaseCardProps } from "../../types"

interface CardProps extends BaseCardProps {
  children: React.ReactNode
  cardId: string
  className?: string
}

export function Card({
  children,
  cardId,
  className = "",
  theme,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onClick,
}: CardProps) {
  return (
    <div
      className={`h-full transition-all duration-300 ease-out ${className}`}
      onMouseMove={(e) => onMouseMove(e, cardId)}
      onMouseEnter={() => onMouseEnter(cardId)}
      onMouseLeave={() => onMouseLeave(cardId)}
      onMouseDown={(e) => onMouseDown(e, cardId)}
      onClick={(e) => onClick(cardId, e)}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  )
}
