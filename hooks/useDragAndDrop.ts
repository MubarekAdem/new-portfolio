"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import type { DragState, CardPosition, CardRect } from "../types"

export function useDragAndDrop(
  cardPositions: CardPosition[],
  setCardPositions: (positions: CardPosition[]) => void,
  isAnimating: boolean,
  setIsAnimating: (animating: boolean) => void,
) {
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    draggedCard: null,
    startPosition: { x: 0, y: 0 },
    currentPosition: { x: 0, y: 0 },
    dragOffset: { x: 0, y: 0 },
  })
  const [dropTarget, setDropTarget] = useState<number | null>(null)
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const containerRef = useRef<HTMLDivElement>(null)

  const animateCardTransitions = (oldPositions: CardPosition[], newPositions: CardPosition[]) => {
    setIsAnimating(true)

    // Get current positions of all cards
    const cardRects: CardRect[] = []
    oldPositions.forEach((pos) => {
      const card = cardRefs.current[pos.id]
      if (card) {
        cardRects.push({
          id: pos.id,
          rect: card.getBoundingClientRect(),
        })
      }
    })

    // Update positions immediately (but invisibly)
    setCardPositions(newPositions)

    // Wait for DOM update, then animate
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Get new positions
        const newCardRects: CardRect[] = []
        newPositions.forEach((pos) => {
          const card = cardRefs.current[pos.id]
          if (card) {
            newCardRects.push({
              id: pos.id,
              rect: card.getBoundingClientRect(),
            })
          }
        })

        // Calculate and apply transforms
        cardRects.forEach((oldCardRect) => {
          const newCardRect = newCardRects.find((rect) => rect.id === oldCardRect.id)
          const card = cardRefs.current[oldCardRect.id]

          if (newCardRect && card) {
            const deltaX = oldCardRect.rect.left - newCardRect.rect.left
            const deltaY = oldCardRect.rect.top - newCardRect.rect.top

            // Only animate if there's actual movement
            if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
              // Set initial position (where it was)
              card.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) rotate(${deltaX * 0.02}deg) scale(1.02)`
              card.style.zIndex = "100"
              card.style.transition = "none"

              // Force reflow
              card.offsetHeight

              // Animate to new position
              card.style.transition = "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
              card.style.transform = "translate3d(0, 0, 0) rotate(0deg) scale(1)"

              // Clean up after animation
              setTimeout(() => {
                card.style.transition = ""
                card.style.zIndex = ""
                if (!isAnimating) return // Prevent cleanup if another animation started
                setIsAnimating(false)
              }, 600)
            } else {
              setIsAnimating(false)
            }
          }
        })
      })
    })
  }

  const handleMouseDown = (e: React.MouseEvent, cardId: string) => {
    if (isAnimating) return

    e.preventDefault()
    const card = cardRefs.current[cardId]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const offsetX = e.clientX - rect.left
    const offsetY = e.clientY - rect.top

    setDragState({
      isDragging: true,
      draggedCard: cardId,
      startPosition: { x: e.clientX, y: e.clientY },
      currentPosition: { x: e.clientX, y: e.clientY },
      dragOffset: { x: offsetX, y: offsetY },
    })

    // Add dragging class for visual feedback
    card.style.zIndex = "1000"
    card.style.transform = "scale(1.05) rotate(3deg)"
    card.style.cursor = "grabbing"
    card.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
    document.body.style.cursor = "grabbing"
  }

  const handleGlobalMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragState.isDragging || !dragState.draggedCard) return

      const card = cardRefs.current[dragState.draggedCard]
      if (!card) return

      const newX = e.clientX - dragState.dragOffset.x
      const newY = e.clientY - dragState.dragOffset.y

      card.style.position = "fixed"
      card.style.left = `${newX}px`
      card.style.top = `${newY}px`
      card.style.pointerEvents = "none"

      // Add some rotation based on movement speed
      const deltaX = e.clientX - dragState.currentPosition.x
      const rotation = Math.max(-15, Math.min(15, deltaX * 0.5))
      card.style.transform = `scale(1.05) rotate(${rotation}deg)`

      setDragState((prev) => ({
        ...prev,
        currentPosition: { x: e.clientX, y: e.clientY },
      }))

      // Check for drop targets by finding grid positions
      const container = containerRef.current
      if (!container) return

      const containerRect = container.getBoundingClientRect()
      const relativeX = e.clientX - containerRect.left
      const relativeY = e.clientY - containerRect.top

      // Simple grid position detection based on mouse position
      const gridCols = 12
      const gridRows = 8
      const cellWidth = containerRect.width / gridCols
      const cellHeight = containerRect.height / gridRows

      const gridCol = Math.floor(relativeX / cellWidth)
      const gridRow = Math.floor(relativeY / cellHeight)

      // Map to our predefined positions (simplified)
      let targetPosition = null
      if (gridCol >= 0 && gridCol < 4 && gridRow >= 0 && gridRow < 3)
        targetPosition = 0 // photo area
      else if (gridCol >= 4 && gridCol < 9 && gridRow >= 0 && gridRow < 2)
        targetPosition = 1 // about area
      else if (gridCol >= 9 && gridCol < 12 && gridRow >= 0 && gridRow < 3)
        targetPosition = 2 // contact area
      else if (gridCol >= 4 && gridCol < 9 && gridRow >= 2 && gridRow < 4)
        targetPosition = 3 // skills area
      else if (gridCol >= 0 && gridCol < 4 && gridRow >= 3 && gridRow < 5)
        targetPosition = 4 // experience area
      else if (gridCol >= 4 && gridCol < 12 && gridRow >= 4 && gridRow < 7)
        targetPosition = 5 // projects area
      else if (gridCol >= 0 && gridCol < 4 && gridRow >= 7 && gridRow < 8)
        targetPosition = 6 // status area
      else if (gridCol >= 4 && gridCol < 8 && gridRow >= 7 && gridRow < 8) targetPosition = 7 // theme area

      setDropTarget(targetPosition)
    },
    [dragState.isDragging, dragState.draggedCard, dragState.dragOffset, dragState.currentPosition],
  )

  const handleGlobalMouseUp = useCallback(() => {
    if (!dragState.isDragging || !dragState.draggedCard) return

    const draggedCard = cardRefs.current[dragState.draggedCard]
    if (!draggedCard) return

    // Reset card styles
    draggedCard.style.position = ""
    draggedCard.style.left = ""
    draggedCard.style.top = ""
    draggedCard.style.zIndex = ""
    draggedCard.style.transform = ""
    draggedCard.style.cursor = ""
    draggedCard.style.pointerEvents = ""
    draggedCard.style.boxShadow = ""
    document.body.style.cursor = ""

    // Handle position change if there's a valid drop target
    if (dropTarget !== null) {
      const oldPositions = [...cardPositions]
      const newPositions = [...cardPositions]
      const draggedIndex = newPositions.findIndex((pos) => pos.id === dragState.draggedCard)
      const targetIndex = newPositions.findIndex((pos) => pos.gridPosition === dropTarget)

      if (draggedIndex !== -1) {
        if (targetIndex !== -1) {
          // Swap positions
          const draggedPosition = newPositions[draggedIndex].gridPosition
          newPositions[draggedIndex].gridPosition = dropTarget!
          newPositions[targetIndex].gridPosition = draggedPosition
        } else {
          // Move to empty position
          newPositions[draggedIndex].gridPosition = dropTarget!
        }

        // Animate the transition
        animateCardTransitions(oldPositions, newPositions)
      }
    }

    setDragState({
      isDragging: false,
      draggedCard: null,
      startPosition: { x: 0, y: 0 },
      currentPosition: { x: 0, y: 0 },
      dragOffset: { x: 0, y: 0 },
    })
    setDropTarget(null)
  }, [dragState.isDragging, dragState.draggedCard, dropTarget, cardPositions])

  return {
    dragState,
    dropTarget,
    cardRefs,
    containerRef,
    handleMouseDown,
    handleGlobalMouseMove,
    handleGlobalMouseUp,
  }
}
