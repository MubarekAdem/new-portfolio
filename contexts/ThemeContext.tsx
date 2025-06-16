"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Theme, ThemeConfig } from "../types"
import { themes } from "../constants/themes"

interface ThemeContextType {
  currentTheme: Theme
  theme: ThemeConfig
  setTheme: (theme: Theme) => void
  cycleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark")

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme)
    }
  }, [])

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("portfolio-theme", currentTheme)
  }, [currentTheme])

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme)
  }

  const cycleTheme = () => {
    const themeKeys = Object.keys(themes) as Theme[]
    const currentIndex = themeKeys.indexOf(currentTheme)
    const nextIndex = (currentIndex + 1) % themeKeys.length
    setCurrentTheme(themeKeys[nextIndex])
  }

  const value = {
    currentTheme,
    theme: themes[currentTheme],
    setTheme,
    cycleTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
