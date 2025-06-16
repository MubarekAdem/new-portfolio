"use client"

import type React from "react"
import { useState, useEffect } from "react"
import type { CardPosition } from "./types"
import { cardDefinitions } from "./constants/cardDefinitions"
import { useDragAndDrop } from "./hooks/useDragAndDrop"
import { useCardAnimations } from "./hooks/useCardAnimations"
import { useTheme } from "./contexts/ThemeContext"

// Card Components
import { PhotoCard } from "./components/cards/PhotoCard"
import { AboutCard } from "./components/cards/AboutCard"
import { ContactCard } from "./components/cards/ContactCard"
import { SkillsCard } from "./components/cards/SkillsCard"
import { ExperienceCard } from "./components/cards/ExperienceCard"
import { ProjectsCard } from "./components/cards/ProjectsCard"
import { ThemeCard } from "./components/cards/ThemeCard"
import { StatusCard } from "./components/cards/StatusCard"

// Modal Components
import { ExperienceModal } from "./components/modals/ExperienceModal"
import { ProjectsModal } from "./components/modals/ProjectsModal"

export default function ModernPortfolio() {
  const { theme, cycleTheme } = useTheme()
  const [showExperienceModal, setShowExperienceModal] = useState(false)
  const [showProjectsModal, setShowProjectsModal] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Card positions in grid (0-based index)
  const [cardPositions, setCardPositions] = useState<CardPosition[]>([
    { id: "photo", gridPosition: 0 },
    { id: "about", gridPosition: 1 },
    { id: "contact", gridPosition: 2 },
    { id: "skills", gridPosition: 3 },
    { id: "experience", gridPosition: 4 },
    { id: "projects", gridPosition: 5 },
    { id: "theme", gridPosition: 6 },
    { id: "status", gridPosition: 7 },
  ])

  const { dragState, dropTarget, cardRefs, containerRef, handleMouseDown, handleGlobalMouseMove, handleGlobalMouseUp } =
    useDragAndDrop(cardPositions, setCardPositions, isAnimating, setIsAnimating)

  const { hoveredCard, setHoveredCard, handleMouseMove, handleMouseLeave } = useCardAnimations()

  // Card component mapping
  const cardComponents = {
    photo: PhotoCard,
    about: AboutCard,
    contact: ContactCard,
    skills: SkillsCard,
    experience: ExperienceCard,
    projects: ProjectsCard,
    theme: ThemeCard,
    status: StatusCard,
  }

  const handleCardClick = (cardId: string, e: React.MouseEvent) => {
    // Prevent click if we were dragging
    if (dragState.isDragging) return

    if (cardId === "experience") {
      setShowExperienceModal(true)
    } else if (cardId === "projects") {
      setShowProjectsModal(true)
    } else if (cardId === "theme") {
      cycleTheme()
    }
  }

  const createCardProps = (cardId: string) => ({
    theme,
    onMouseMove: (e: React.MouseEvent) => handleMouseMove(e, cardId, cardRefs, dragState.isDragging, isAnimating),
    onMouseEnter: () => setHoveredCard(cardId),
    onMouseLeave: () => handleMouseLeave(cardId, cardRefs, dragState.isDragging, isAnimating),
    onMouseDown: (e: React.MouseEvent) => handleMouseDown(e, cardId),
    onClick: (e: React.MouseEvent) => handleCardClick(cardId, e),
  })

  // Add global mouse event listeners
  useEffect(() => {
    if (dragState.isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove)
      document.addEventListener("mouseup", handleGlobalMouseUp)

      return () => {
        document.removeEventListener("mousemove", handleGlobalMouseMove)
        document.removeEventListener("mouseup", handleGlobalMouseUp)
      }
    }
  }, [dragState.isDragging, handleGlobalMouseMove, handleGlobalMouseUp])

  // Handle ESC key to close modals
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowExperienceModal(false)
        setShowProjectsModal(false)
      }
    }

    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [])

  // Create sorted array based on current positions
  const sortedCards = cardPositions.sort((a, b) => a.gridPosition - b.gridPosition)

  return (
    <div className={`min-h-screen ${theme.bg} p-2 md:p-4 lg:p-8 overflow-hidden transition-colors duration-500`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-white/3 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-24 md:w-32 h-24 md:h-32 bg-white/10 rounded-full blur-xl animate-bounce delay-500" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        <div className="portfolio-grid">
          {sortedCards.map((cardPos) => {
            const cardDef = cardDefinitions[cardPos.id]
            const CardComponent = cardComponents[cardPos.id as keyof typeof cardComponents]

            return (
              <div
                key={cardPos.id}
                className={`${cardDef.gridClass} group cursor-grab active:cursor-grabbing animate-fade-in portfolio-card ${
                  dropTarget === cardPos.gridPosition ? "ring-2 ring-white/30 ring-offset-2 ring-offset-black" : ""
                } ${isAnimating ? "pointer-events-none" : ""}`}
                style={{ animationDelay: cardDef.animationDelay }}
              >
                <div
                  ref={(el) => (cardRefs.current[cardPos.id] = el)}
                  className={`h-full w-full transition-all duration-300 ease-out ${
                    dragState.draggedCard === cardPos.id ? "opacity-50" : ""
                  }`}
                >
                  <CardComponent {...createCardProps(cardPos.id)} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modals */}
      <ExperienceModal isOpen={showExperienceModal} onClose={() => setShowExperienceModal(false)} />
      <ProjectsModal isOpen={showProjectsModal} onClose={() => setShowProjectsModal(false)} />
    </div>
  )
}
