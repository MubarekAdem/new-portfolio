"use client"

import type React from "react"

import { useState } from "react"

export function useCardAnimations() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const handleMouseMove = (
    e: React.MouseEvent,
    cardId: string,
    cardRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>,
    isDragging: boolean,
    isAnimating: boolean,
  ) => {
    if (isDragging || isAnimating) return

    const card = cardRefs.current[cardId]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY

    // Magnetic effect - stronger pull when closer
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    const maxDistance = 200
    const strength = Math.max(0, 1 - distance / maxDistance)

    const magnetX = deltaX * strength * 0.3
    const magnetY = deltaY * strength * 0.3

    card.style.transform = `translate3d(${magnetX}px, ${magnetY}px, 0) rotateX(${-deltaY * 0.05}deg) rotateY(${deltaX * 0.05}deg) scale(${1 + strength * 0.05})`
  }

  const handleMouseLeave = (
    cardId: string,
    cardRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>,
    isDragging: boolean,
    isAnimating: boolean,
  ) => {
    if (isDragging || isAnimating) return

    const card = cardRefs.current[cardId]
    if (!card) return

    card.style.transform = "translate3d(0px, 0px, 0) rotateX(0deg) rotateY(0deg) scale(1)"
    setHoveredCard(null)
  }

  return {
    hoveredCard,
    setHoveredCard,
    handleMouseMove,
    handleMouseLeave,
  }
}
