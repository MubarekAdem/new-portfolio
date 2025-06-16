import type React from "react"
export interface MousePosition {
  x: number
  y: number
}

export interface CardPosition {
  id: string
  gridPosition: number
}

export interface DragState {
  isDragging: boolean
  draggedCard: string | null
  startPosition: { x: number; y: number }
  currentPosition: { x: number; y: number }
  dragOffset: { x: number; y: number }
}

export interface CardRect {
  id: string
  rect: DOMRect
}

export type Theme = "dark" | "light" | "ocean" | "sunset"

export interface ThemeConfig {
  name: string
  bg: string
  cardBg: {
    primary: string
    secondary: string
    accent: string
  }
  text: {
    primary: string
    secondary: string
    muted: string
    mutedSecondary: string
  }
  border: {
    primary: string
    secondary: string
  }
  accent: string
  icon: string
}

export interface CardDefinition {
  gridClass: string
  animationDelay: string
}

export interface BaseCardProps {
  theme: ThemeConfig
  onMouseMove: (e: React.MouseEvent, cardId: string) => void
  onMouseEnter: (cardId: string) => void
  onMouseLeave: (cardId: string) => void
  onMouseDown: (e: React.MouseEvent, cardId: string) => void
  onClick: (cardId: string, e: React.MouseEvent) => void
}
